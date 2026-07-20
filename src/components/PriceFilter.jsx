const priceTypes = ['전체', '무료', '유료']

function PriceFilter({ selectedPrice, onSelect }) {
  return (
    <div className="segmented-control" role="group" aria-label="가격 유형 선택">
      {priceTypes.map((priceType) => (
        <button
          className={selectedPrice === priceType ? 'is-active' : ''}
          type="button"
          key={priceType}
          aria-pressed={selectedPrice === priceType}
          onClick={() => onSelect(priceType)}
        >
          {priceType}
        </button>
      ))}
    </div>
  )
}

export default PriceFilter
