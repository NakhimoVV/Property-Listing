import './Switch.scss'

type SwitchProps = {
  title?: string
  value: boolean
}

const Switch = (props: SwitchProps) => {
  const { title, value } = props

  return (
    <label className="switch-wrapper">
      <div className="switch">
        <input
          className="switch__input"
          type="checkbox"
          role="switch"
          aria-checked="true"
          aria-label="Show superhost"
          checked={value}
        />
        <span className="switch__circle"></span>
      </div>
      {title && <span>{title}</span>}
    </label>
  )
}

export default Switch
