import './FilterPanel.scss'
import Switch from '@/shared/ui/Switch'
import { useHousesStore } from '@/entities/house/model/store.ts'
import CheckboxList from '@/shared/ui/CheckboxList'
import locationList from '@/entities/house/model/locationList.ts'

const FilterPanel = () => {
  const { filter, setFilter, resetFilter } = useHousesStore()

  const handleToggleLocation = (location: string) => {
    const newLocations = filter.locations.includes(location)
      ? filter.locations.filter((item) => item !== location)
      : [...filter.locations, location]

    setFilter({ locations: newLocations })
  }

  return (
    <section className="filter-panel">
      <div className="filter-panel__inner container">
        <div className="filter-panel__body">
          <div className="filter-panel__checkboxes">
            <button aria-pressed="true" onClick={() => resetFilter()}>
              All Stays
            </button>
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
