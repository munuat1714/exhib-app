import FavoriteButton from './FavoriteButton.jsx'

function ExhibitionPreviewCard({
  exhibition,
  onSelect,
  isFavorite,
  onToggleFavorite,
  animationIndex = 0,
}) {
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
    <article
      className="exhibition-card"
      style={{ '--card-index': Math.min(animationIndex, 8) }}
    >
      <FavoriteButton
        exhibitionId={exhibition.id}
        exhibitionTitle={exhibition.title}
        isFavorite={isFavorite}
        onToggle={onToggleFavorite}
      />
      <button
        className="exhibition-card__link"
        type="button"
        onClick={onSelect}
        aria-label={`${exhibition.title} 상세 보기`}
      >
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
      </button>
    </article>
  )
}

export default ExhibitionPreviewCard
