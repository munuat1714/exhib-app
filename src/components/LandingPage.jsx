function LandingPage({ onStart }) {
  return (
    <main className="landing-page">
      <section className="landing-card" aria-labelledby="landing-title">
        <div className="gallery-mark" aria-hidden="true">
          <span className="gallery-mark__frame gallery-mark__frame--back" />
          <span className="gallery-mark__frame gallery-mark__frame--front" />
        </div>

        <div className="landing-card__content">
          <p className="landing-card__eyebrow">나만의 전시 가이드</p>
          <h1 id="landing-title">Exhibition Finder</h1>
          <p className="landing-card__description">
            가까운 곳에서 열리는 특별한 전시를 발견하고,
            <br />
            취향에 맞는 문화생활을 시작해 보세요.
          </p>
        </div>

        <button className="primary-button" type="button" onClick={onStart}>
          전시 둘러보기
          <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  )
}

export default LandingPage
