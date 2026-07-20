function ExhibitionPreviewCard({ exhibition }) {
  const categoryTheme = {
    회화: 'violet',
    사진: 'indigo',
    조각: 'stone',
    미디어아트: 'neon',
    디자인: 'amber',
  }

  const formatDate = (date) => {
    const [, month, day] = date.split('-')
    return `${Number(month)}. ${Number(day)}`
  }

  return (
    <article className="exhibition-card">
      <div
        className={`exhibition-card__art exhibition-card__art--${categoryTheme[exhibition.category]}`}
        role="img"
        aria-label={`${exhibition.title} 전시 이미지`}
      >
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
        <p className="exhibition-card__date">
          {formatDate(exhibition.startDate)} — {formatDate(exhibition.endDate)}
        </p>
      </div>
    </article>
  )
}

export default ExhibitionPreviewCard
