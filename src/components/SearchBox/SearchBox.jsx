import { useDispatch, useSelector } from "react-redux";
import s from "../SearchBox/SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    dispatch(changeFilter(inputValue));
  };
  return (
    <div className={s.searchContainer}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          className={s.searchInput}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
export default SearchBox;
