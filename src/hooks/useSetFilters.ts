import { searchFiltersState } from '@/atoms/pokemon-state'
import { IFilter } from '@/interfaces/pokemon'
import { useSetRecoilState } from 'recoil'

export const useSetFilters = () => {
  const setFilters = useSetRecoilState(searchFiltersState)
  return ({ favoritesOnly, searchParams }: IFilter) => {
    setFilters((prev) => ({
      ...prev,
      favoritesOnly: favoritesOnly ? true : false,
      searchParams: searchParams,
    }))
  }
}
