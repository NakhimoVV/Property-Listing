import './Switch.scss'

type SwitchProps = {
  title?: string
  value: boolean
  onChange?: (value: boolean) => void
}

const Switch = (props: SwitchProps) => {
  const { title, value, onChange } = props

  return (
    <label className="switch-wrapper">
      <div className="switch">
        <input
          className="switch__input"
          type="checkbox"
          role="switch"
          aria-checked={value}
          aria-label={`Toggle switch ${title}`}
          checked={value}
          onChange={(event) => onChange?.(event.target.checked)}
        />
        <span className="switch__circle"></span>
      </div>
      {title && <span className="switch__title">{title}</span>}
    </label>
  )
}

export default Switch
