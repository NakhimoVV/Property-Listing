import './Select.scss'
import getIdFromLabel from '@/shared/lib/getIdFromlabel.ts'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

type SelectProps = {
  label: string
  isLabelHidden: boolean
  id: string
  value: string
  options: Array<{ value: string; isSelected?: boolean }>
  onChange: (value: string) => void
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
  const [highlightedIndex, setHighlightedIndex] = useState<number>(
    options.findIndex((o) => o.value === value),
  )
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  }

  const selectedOption =
    options.find(({ isSelected }) => isSelected) ?? options[0]

  // // Закрытие по клику вне компонента
  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(e.target as Node) &&
  //       !buttonRef.current?.contains(e.target as Node)
  //     ) {
  //       setIsOpen(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => document.removeEventListener('mousedown', handleClickOutside)
  // }, [])
  //
  // // Клавиатурная навигация
  // const handleKeyDown = (e: React.KeyboardEvent) => {
  //   if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
  //     setIsOpen(true)
  //     return
  //   }
  //
  //   switch (e.key) {
  //     case 'ArrowDown':
  //       setHighlightedIndex((prev) => (prev + 1) % options.length)
  //       break
  //     case 'ArrowUp':
  //       setHighlightedIndex(
  //         (prev) => (prev - 1 + options.length) % options.length,
  //       )
  //       break
  //     case 'Enter':
  //     case ' ':
  //       if (isOpen) {
  //         onChange(options[highlightedIndex].value)
  //         setIsOpen(false)
  //       } else {
  //         setIsOpen(true)
  //       }
  //       break
  //     case 'Escape':
  //       setIsOpen(false)
  //       break
  //   }
  // }

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
        tabIndex={-1} // чтобы убрать этот элемент из списка фокусируемых
        defaultValue={selectedOption.value}
      >
        <option value="">{label}</option>
        {options.map(({ value }, index) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
      <div className="select__body">
        <div
          className="select__button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          tabIndex={0} // Чтобы появилась возможность фокуса
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {selectedOption.value}
        </div>
        <div
          className="select__dropdown"
          id={IDs.dropdown}
          role="listbox"
          aria-labelledby={IDs.label}
          data-js-select-dropdown=""
        >
          {options.map((option, index) => {
            const { value, isSelected = false } = option

            return (
              <div
                className={clsx('select__option', {
                  'is-selected': isSelected,
                  'is-current': isSelected, // состояние фокусировки с клавиатуры
                })}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                data-js-select-option=""
                key={index}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Select
