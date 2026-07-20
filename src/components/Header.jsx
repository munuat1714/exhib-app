function Header() {
  return (
    <header className="app-header">
      <div className="app-header__brand" aria-label="Exhibition Finder 홈">
        <span className="app-header__logo" aria-hidden="true">E</span>
        <span>Exhibition Finder</span>
      </div>
      <button className="icon-button" type="button" aria-label="알림 확인">
        <span aria-hidden="true">♢</span>
      </button>
    </header>
  )
}

export default Header
