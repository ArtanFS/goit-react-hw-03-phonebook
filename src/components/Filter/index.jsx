import { FilterWrapper } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterWrapper>
      <label htmlFor="inputFindName">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        id="inputFindName"
        value={filter}
        onChange={onChange}
      />
    </FilterWrapper>
  );
};

export default Filter;
