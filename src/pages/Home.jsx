import { useState } from 'react'
import ExhibitionPreviewCard from '../components/ExhibitionPreviewCard.jsx'
import Header from '../components/Header.jsx'
import LocationSelector from '../components/LocationSelector.jsx'
import PriceFilter from '../components/PriceFilter.jsx'

const featuredExhibitions = [
  {
    id: 1,
    title: '빛으로 그린 인상주의',
    city: '서울',
    museum: '서울시립미술관',
    priceType: '무료',
    date: '7. 18 — 9. 28',
    category: 'PAINTING',
    theme: 'violet',
  },
  {
    id: 2,
    title: '모던 아트 컬렉션',
    city: '서울',
    museum: '그라운드 갤러리',
    priceType: '유료',
    date: '7. 05 — 10. 12',
    category: 'MODERN',
    theme: 'indigo',
  },
]

function Home() {
  const [selectedLocation, setSelectedLocation] = useState('서울')
  const [selectedPrice, setSelectedPrice] = useState('전체')

  return (
    <div className="home-shell">
      <Header />
      <main className="home-content">
        <section className="welcome" aria-labelledby="welcome-title">
          <p>반가워요!</p>
          <h1 id="welcome-title">오늘은 어떤 전시를<br />만나볼까요?</h1>
        </section>

        <section className="home-section" aria-labelledby="location-title">
          <div className="section-heading">
            <h2 id="location-title">어디에서 찾을까요?</h2>
          </div>
          <LocationSelector
            selectedLocation={selectedLocation}
            onSelect={setSelectedLocation}
          />
        </section>

        <section className="home-section" aria-labelledby="price-title">
          <div className="section-heading">
            <h2 id="price-title">관람료</h2>
          </div>
          <PriceFilter selectedPrice={selectedPrice} onSelect={setSelectedPrice} />
        </section>

        <section className="home-section" aria-labelledby="popular-title">
          <div className="section-heading section-heading--row">
            <div>
              <p>CURATED FOR YOU</p>
              <h2 id="popular-title">지금 인기 있는 전시</h2>
            </div>
            <button type="button">전체보기</button>
          </div>
          <div className="exhibition-list">
            {featuredExhibitions.map((exhibition) => (
              <ExhibitionPreviewCard key={exhibition.id} exhibition={exhibition} />
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-navigation" aria-label="주요 메뉴">
        <button className="is-active" type="button"><span aria-hidden="true">⌂</span>홈</button>
        <button type="button"><span aria-hidden="true">⌕</span>찾기</button>
        <button type="button"><span aria-hidden="true">♡</span>저장</button>
        <button type="button"><span aria-hidden="true">○</span>마이</button>
      </nav>
    </div>
  )
}

export default Home
