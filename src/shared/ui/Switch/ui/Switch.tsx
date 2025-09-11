import './Switch.scss'

type SwitchProps = {}

const Switch = (props: SwitchProps) => {
  const {} = props

  return (<label className="switch">
    <input
      type="checkbox"
      role="switch"
      aria-checked="true"
      aria-label="Show superhost"
    />
      <span className="slider"></span>
  </label>)
}

export default Switch
