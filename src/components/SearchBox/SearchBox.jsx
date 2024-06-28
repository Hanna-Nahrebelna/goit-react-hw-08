import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setFilter } from "../../redux/filters/slice";
import css from './SearchBox.module.css'

export default function SearchBox () {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const getFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setFilter(name));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchTitle}>Finde contacts by name</p>
      <input
        value={filter.name}
        onChange={getFilter}
        id="searchBox"
        type="text"
        className={css.searchInput}
        placeholder="Search for..."
      >
      </input>        
    </div>
  );
}
