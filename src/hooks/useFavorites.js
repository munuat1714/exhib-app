import { useState } from 'react'

export const FAVORITES_STORAGE_KEY = 'exhibition-favorites'

const readFavorites = () => {
  try {
    const storedFavorites = JSON.parse(
      localStorage.getItem(FAVORITES_STORAGE_KEY) ?? '[]',
    )

    return Array.isArray(storedFavorites)
      ? [...new Set(storedFavorites.filter(Number.isInteger))]
      : []
  } catch {
    return []
  }
}

function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState(readFavorites)

  const toggleFavorite = (exhibitionId) => {
    setFavoriteIds((currentIds) => {
      const nextIds = currentIds.includes(exhibitionId)
        ? currentIds.filter((id) => id !== exhibitionId)
        : [...currentIds, exhibitionId]

      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(nextIds))
      } catch {
        // 저장 공간을 사용할 수 없어도 현재 화면의 토글 동작은 유지한다.
      }

      return nextIds
    })
  }

  return {
    favoriteIds,
    isFavorite: (exhibitionId) => favoriteIds.includes(exhibitionId),
    toggleFavorite,
  }
}

export default useFavorites
