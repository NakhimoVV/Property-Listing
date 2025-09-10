import './FilterPanel.scss'

type FilterPanelProps = {}

const FilterPanel = (props: FilterPanelProps) => {
  const {} = props

  return <section className="filter-panel">
    <div className="filter-panel__inner container">
      <div className="filter-panel__body">
        <ul className="filter-panel__checkboxes">
          <li>All Stays</li>
          <li>Norway</li>
          <li>Finland</li>
          <li>Sweden</li>
          <li>Switzerland</li>
        </ul>
        <div className="filter-panel__actions">
          Superhost
          Property type
        </div>
      </div>
    </div>
  </section>
}

export default FilterPanel
