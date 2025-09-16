import './Switch.scss'
import getIdFromTitle from '@/shared/lib/getIdFromTitle.ts'

type SwitchProps = {
  title?: string
  value: boolean
  onChange?: (value: boolean) => void
}

const Switch = (props: SwitchProps) => {
  const { title, value, onChange } = props
  const labelId = title ? getIdFromTitle(title) : 'checkbox-title'

  return (
    <label className="switch-wrapper" htmlFor={labelId}>
      <div className="switch">
        <input
          className="switch__input"
          type="checkbox"
          id={labelId}
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
