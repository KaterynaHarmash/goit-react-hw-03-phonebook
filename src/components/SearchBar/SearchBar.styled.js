import styled from 'styled-components';
export const SearcbarContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const SearchbarLabel = styled.label`
  color: #8597a3;
  position: absolute;
  top: 1.5rem;
  transition: 0.25s ease;
`;
export const SearchbarInput = styled.input`
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #cfcfcf;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
  &:empty + label {
    top: 1.5rem;
  }
  &:focus,
  &:not([value='']):valid {
    outline: 0;
    border-bottom-color: #6658d3;
    & + label {
      color: #6658d3;
      transform: translateY(-1.5rem);
    }
  }
`;
