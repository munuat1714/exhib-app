import { useNavigate, useParams } from 'react-router-dom'
import FavoriteButton from '../components/FavoriteButton.jsx'
import exhibitions from '../data/exhibitions.json'
import useFavorites from '../hooks/useFavorites.js'

const categoryThemes = {
  회화: 'violet',
  사진: 'indigo',
  조각: 'stone',
  미디어아트: 'neon',
  디자인: 'amber',
}

const formatDate = (date) =>
  new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`))

function ExhibitionDetail() {
  const navigate = useNavigate()
  const { exhibitionId } = useParams()
  const { isFavorite, toggleFavorite } = useFavorites()
  const exhibition = exhibitions.find((item) => item.id === Number(exhibitionId))

  if (!exhibition) {
    return (
      <main className="detail-shell detail-not-found">
        <span aria-hidden="true">⌕</span>
        <h1>전시를 찾을 수 없어요</h1>
        <p>요청한 전시 정보가 존재하지 않습니다.</p>
        <button className="primary-button" type="button" onClick={() => navigate('/home')}>
          홈으로 돌아가기
        </button>
      </main>
    )
  }

  const priceLabel = exhibition.priceType === '무료'
    ? '무료 관람'
    : `${exhibition.price.toLocaleString('ko-KR')}원`

  return (
    <div className="detail-shell">
      <header className="detail-header">
        <button type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">←</button>
        <span>전시 상세</span>
        <FavoriteButton
          exhibitionId={exhibition.id}
          exhibitionTitle={exhibition.title}
          isFavorite={isFavorite(exhibition.id)}
          onToggle={toggleFavorite}
          variant="detail"
        />
      </header>

      <main>
        <div
          className={`detail-art exhibition-card__art--${categoryThemes[exhibition.category]}`}
          role="img"
          aria-label={`${exhibition.title} 전시 이미지`}
        >
          <div className="detail-art__frame"><span>{exhibition.category}</span></div>
        </div>

        <article className="detail-content">
          <div className="detail-badges">
            <span className={`price-badge${exhibition.priceType === '무료' ? ' is-free' : ''}`}>
              {exhibition.priceType}
            </span>
            <span>{exhibition.category}</span>
          </div>
          <h1>{exhibition.title}</h1>
          <p className="detail-content__description">{exhibition.description}</p>

          <dl className="detail-info">
            <div><dt>장소</dt><dd>{exhibition.museum}</dd></div>
            <div><dt>지역</dt><dd>{exhibition.city}</dd></div>
            <div><dt>기간</dt><dd>{formatDate(exhibition.startDate)} —<br />{formatDate(exhibition.endDate)}</dd></div>
            <div><dt>관람료</dt><dd>{priceLabel}</dd></div>
          </dl>
        </article>
      </main>
    </div>
  )
}

export default ExhibitionDetail
