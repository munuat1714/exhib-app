function ExhibitionPreviewCard({ exhibition }) {
  return (
    <article className="exhibition-card">
      <div className={`exhibition-card__art exhibition-card__art--${exhibition.theme}`}>
        <span>{exhibition.category}</span>
      </div>
      <div className="exhibition-card__body">
        <div className="exhibition-card__meta">
          <span className={`price-badge${exhibition.priceType === '무료' ? ' is-free' : ''}`}>
            {exhibition.priceType}
          </span>
          <span>{exhibition.city}</span>
        </div>
        <h3>{exhibition.title}</h3>
        <p>{exhibition.museum}</p>
        <p className="exhibition-card__date">{exhibition.date}</p>
      </div>
    </article>
  )
}

export default ExhibitionPreviewCard
