const locations = ['서울', '부산', '인천', '대구', '대전']

function LocationSelector({ selectedLocation, onSelect }) {
  return (
    <div className="selector-scroll" role="group" aria-label="지역 선택">
      {locations.map((location) => (
        <button
          className={`filter-chip${selectedLocation === location ? ' is-active' : ''}`}
          type="button"
          key={location}
          aria-pressed={selectedLocation === location}
          onClick={() => onSelect(location)}
        >
          {location}
        </button>
      ))}
    </div>
  )
}

export default LocationSelector
