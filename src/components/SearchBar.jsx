function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="전시 제목을 검색해 보세요"
        aria-label="전시 제목 검색"
      />
      {value && (
        <button type="button" onClick={() => onChange('')} aria-label="검색어 지우기">
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBar
