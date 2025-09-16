import './Badge.scss'
import clsx from 'clsx'

type BadgeProps = {
  className?: string
  label: string
}

const Badge = (props: BadgeProps) => {
  const { className, label } = props

  return (
    <div className={clsx('badge', className)}>
      <span className="badge__label">{label}</span>
    </div>
  )
}

export default Badge
