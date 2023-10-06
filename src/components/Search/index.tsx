import { useDispatch, useSelector } from "react-redux"

import { SearchBar } from "./styles"
import { RootReducer } from "../../store"
import { changeTerm } from "../../store/reducers/filter"

const Search = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <SearchBar type="text" placeholder="Pesquisa" onChange={(event) => dispatch(changeTerm(event.target.value))}/>
  )
}

export default Search
