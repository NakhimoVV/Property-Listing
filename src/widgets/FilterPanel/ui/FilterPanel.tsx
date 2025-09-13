import './FilterPanel.scss'
import Switch from '@/shared/ui/Switch'
import { useHousesStore } from '@/entities/house/model/store.ts'
import CheckboxList from '@/shared/ui/CheckboxList'
import locationList from '@/entities/house/model/locationList.ts'

const FilterPanel = () => {
  const { filter, setFilter } = useHousesStore()

  const handleToggleLocation = (loc: string) => {
    const newLocations = filter.locations.includes(loc)
      ? filter.locations.filter((l) => l !== loc)
      : [...filter.locations, loc]

    setFilter({ locations: newLocations })
  }

  return (
    <section className="filter-panel">
      <div className="filter-panel__inner container">
        <div className="filter-panel__body">
          <div className="filter-panel__checkboxes">
            <button aria-pressed="true">All Stays</button>
            <CheckboxList
              legend="Choose locations"
              list={locationList}
              selected={filter.locations}
              onToggle={handleToggleLocation}
            />
          </div>
          <div className="filter-panel__actions">
            <div className="filter-panel__switch">
              <Switch
                title="Superhost"
                value={filter.superhost}
                onChange={(isChecked) => setFilter({ superhost: isChecked })}
              />
            </div>
            <div className="filter-panel__select">Property type</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilterPanel
