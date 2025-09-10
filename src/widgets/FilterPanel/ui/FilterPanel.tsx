import './FilterPanel.scss'

type FilterPanelProps = {}
// TODO: возможно следует переместить куда-то по FSD
const FilterPanel = (props: FilterPanelProps) => {
  const {} = props

  return (
    <section className="filter-panel">
      <div className="filter-panel__inner container">
        <div className="filter-panel__body">
          <div className="filter-panel__checkboxes">
            <button aria-pressed="true">All Stays</button>
            <button>Norway</button>
            <button>Finland</button>
            <button>Sweden</button>
            <button>Switzerland</button>
          </div>
          <div className="filter-panel__actions">
            <div className="filter-panel__switch">Superhost</div>
            <div className="filter-panel__select">Property type</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilterPanel
