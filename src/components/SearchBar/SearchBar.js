import {
  SearchbarInput,
  SearchbarLabel,
  SearcbarContainer,
} from './SearchBar.styled';

export const SearchBar = ({ filter, onUpdateFilter }) => {
  return (
    <SearcbarContainer>
      <SearchbarInput
        type="text"
        value={filter}
        onChange={evt => onUpdateFilter(evt.target.value)}
      />
      <SearchbarLabel>Find contacts by name</SearchbarLabel>
    </SearcbarContainer>
  );
};
