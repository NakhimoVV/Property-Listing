import './CheckboxList.scss'

type CheckboxListProps<T extends string> = {
  legend: string
  list: readonly T[]
  selected: readonly T[]
  onToggle: (value: T) => void
}

const CheckboxList = <T extends string>(props: CheckboxListProps<T>) => {
  const { legend, list, selected, onToggle } = props

  return (
    <fieldset className="checkbox-list">
      <legend className="checkbox-list__legend visually-hidden">
        {legend}
      </legend>
      {list.map((item) => (
        <label className="checkbox-list__label-item" key={item}>
          <input
            className="checkbox-list__input-item"
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => onToggle(item)}
          />
          <span>{item}</span>
        </label>
      ))}
    </fieldset>
  )
}

export default CheckboxList
