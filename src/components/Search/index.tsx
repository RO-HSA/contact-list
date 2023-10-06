import { useDispatch } from "react-redux"

import { SearchBar } from "./styles"
import { changeTerm } from "../../store/reducers/filter"

const Search = () => {
  const dispatch = useDispatch()

  return (
    <SearchBar type="text" placeholder="Pesquisa" onChange={(event) => dispatch(changeTerm(event.target.value))}/>
  )
}

export default Search
