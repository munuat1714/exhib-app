import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ExhibitionPreviewCard from '../components/ExhibitionPreviewCard.jsx'
import Header from '../components/Header.jsx'
import LocationSelector from '../components/LocationSelector.jsx'
import PriceFilter from '../components/PriceFilter.jsx'
import SearchBar from '../components/SearchBar.jsx'
import exhibitions from '../data/exhibitions.json'

function Home() {
  const navigate = useNavigate()
  const [selectedLocation, setSelectedLocation] = useState('전체')
  const [selectedPrice, setSelectedPrice] = useState('전체')
  const [searchQuery, setSearchQuery] = useState('')
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase()
  const filteredExhibitions = exhibitions.filter(
    (exhibition) => {
      const matchesLocation =
        selectedLocation === '전체' || exhibition.city === selectedLocation
      const matchesPrice =
        selectedPrice === '전체' || exhibition.priceType === selectedPrice
      const matchesSearch = exhibition.title
        .toLocaleLowerCase()
        .includes(normalizedQuery)

      return matchesLocation && matchesPrice && matchesSearch
    },
  )

  return (
    <div className="home-shell">
      <Header />
      <main className="home-content">
        <section className="welcome" aria-labelledby="welcome-title">
          <p>반가워요!</p>
          <h1 id="welcome-title">오늘은 어떤 전시를<br />만나볼까요?</h1>
        </section>

        <section className="search-section" aria-label="전시 검색">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
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
              <p aria-live="polite">총 {filteredExhibitions.length}개의 전시</p>
              <h2 id="popular-title">지금 인기 있는 전시</h2>
            </div>
            <button type="button">전체보기</button>
          </div>
          <div className="exhibition-list">
            {filteredExhibitions.length > 0 ? (
              filteredExhibitions.map((exhibition) => (
                <ExhibitionPreviewCard
                  key={exhibition.id}
                  exhibition={exhibition}
                  onSelect={() => navigate(`/exhibitions/${exhibition.id}`)}
                />
              ))
            ) : (
              <div className="empty-state" role="status">
                <span aria-hidden="true">⌕</span>
                <h3>일치하는 전시가 없어요</h3>
                <p>검색어나 선택한 필터를 다시 확인해 주세요.</p>
              </div>
            )}
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
