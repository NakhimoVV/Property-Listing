import './CheckboxList.scss'
import getIdFromLabel from '@/shared/lib/getIdFromlabel.ts'

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
      {list.map((item) => {
        const titleId = getIdFromLabel(item)

        return (
          <label
            className="checkbox-list__label-item"
            htmlFor={titleId}
            key={item}
          >
            <input
              className="checkbox-list__input-item"
              type="checkbox"
              id={titleId}
              checked={selected.includes(item)}
              onChange={() => onToggle(item)}
            />
            <span>{item}</span>
          </label>
        )
      })}
    </fieldset>
  )
}

export default CheckboxList
