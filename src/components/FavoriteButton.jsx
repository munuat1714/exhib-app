function FavoriteButton({ exhibitionId, exhibitionTitle, isFavorite, onToggle, variant = 'card' }) {
  const actionLabel = isFavorite ? '즐겨찾기에서 제거' : '즐겨찾기에 추가'

  return (
    <button
      className={`favorite-button favorite-button--${variant}${isFavorite ? ' is-favorite' : ''}`}
      type="button"
      aria-label={`${exhibitionTitle} ${actionLabel}`}
      aria-pressed={isFavorite}
      onClick={() => onToggle(exhibitionId)}
    >
      <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
    </button>
  )
}

export default FavoriteButton
