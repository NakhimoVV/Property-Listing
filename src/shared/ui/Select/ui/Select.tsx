import './Select.scss'
import getIdFromLabel from '@/shared/lib/getIdFromlabel.ts'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

type SelectProps = {
  label: string
  isLabelHidden?: boolean
  id?: string
  value?: number
  options: Array<{ label: string; value: number }>
  onChange: (value: number | undefined) => void
}

const Select = (props: SelectProps) => {
  const {
    label,
    id = getIdFromLabel(label),
    isLabelHidden = true,
    options,
    value,
    onChange,
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  }

  const selectedOption = options.find((option) => option.value === value)

  // Закрытие по клику вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Обработка клавиатуры
  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
      case ' ':
      case 'Enter':
        event.preventDefault()
        setIsOpen(true)
        break
      case 'Escape':
        setIsOpen(false)
        break
      case 'Tab':
        setIsOpen(false)
        break
    }
  }

  const handleDropdownKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setHighlightedIndex((prev) => {
          const nextIndex = prev + 1
          return nextIndex >= options.length ? 0 : nextIndex
        })
        break
      case 'ArrowUp':
        event.preventDefault()
        setHighlightedIndex((prev) => {
          const nextIndex = prev - 1
          return nextIndex < 0 ? options.length - 1 : nextIndex
        })
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          onChange(options[highlightedIndex].value)
          setIsOpen(false)
        }
        break
      case 'Escape':
        event.preventDefault()
        setIsOpen(false)
        break
      case 'Tab':
        setIsOpen(false)
        break
      case 'Home':
        event.preventDefault()
        setHighlightedIndex(0)
        break
      case 'End':
        event.preventDefault()
        setHighlightedIndex(options.length - 1)
        break
    }
  }

  // Фокус на выбранный элемент при открытии
  useEffect(() => {
    if (!isOpen) {
      setHighlightedIndex(-1)
    } else if (value !== undefined) {
      const selectedIndex = options.findIndex(
        (option) => option.value === value,
      )
      if (selectedIndex !== -1) {
        setHighlightedIndex(selectedIndex)
      }
    }
  }, [isOpen, value, options])

  return (
    <div className="select">
      <label
        className={clsx('select__label', {
          'visually-hidden': isLabelHidden,
        })}
        id={IDs.label}
        htmlFor={IDs.originalControl}
      >
        {label}
      </label>
      <select
        className="select__original-control"
        id={IDs.originalControl}
        aria-hidden="true"
        tabIndex={-1}
        value={value ?? ''}
        onChange={(event) => {
          const targetValue = event.target.value
            ? Number(event.target.value)
            : undefined
          onChange(targetValue)
        }}
      >
        <option value="">{label}</option>
        {options.map(({ label, value }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </select>
      <div className="select__body">
        <button
          className={clsx('select__button', {
            'is-open': isOpen,
          })}
          type="button"
          ref={buttonRef}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          tabIndex={0}
          onClick={() => setIsOpen((prevState) => !prevState)}
          onKeyDown={handleButtonKeyDown}
        >
          {selectedOption ? selectedOption.label : label}
        </button>

        {isOpen && (
          <div
            className={clsx('select__dropdown', {
              'is-open': isOpen,
            })}
            ref={dropdownRef}
            id={IDs.dropdown}
            role="listbox"
            aria-labelledby={IDs.label}
            onKeyDown={handleDropdownKeyDown}
            tabIndex={-1}
          >
            {value && (
              <div
                className="select__option"
                onClick={() => {
                  onChange(undefined)
                  setIsOpen(false)
                }}
              >
                Сlear selection
              </div>
            )}
            {options.map((option) => {
              const isSelected = value === option.value

              return (
                <div
                  className={clsx('select__option', {
                    'is-selected': isSelected,
                    'is-current': isSelected,
                  })}
                  id={`${id}-option-${option.value}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  key={option.label}
                >
                  {option.label}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Select
