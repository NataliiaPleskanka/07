import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <div>
        <label className={css.label}>Find contacts by name</label>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search contact..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
