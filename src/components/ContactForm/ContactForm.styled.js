import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(153, 153, 153, 0.25);
  padding: 40px 30px;
  gap: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
`;
export const Label = styled.label`
  color: #8597a3;
  position: absolute;
  top: 1.5rem;
  transition: 0.25s ease;
`;
export const Input = styled(Field)`
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #6658d3;
    & + label {
      color: #6658d3;
      transform: translateY(-1.5rem);
    }
  }
`;
export const Button = styled.button`
  font-size: 16px;
  padding: 15px;
  width: 100%;
  font-weight: 500;
  background-color: #6658d3;
  border-radius: 6px;
  color: #fff;
  border: 0;
  margin-top: 20px;
  transition: background-color 0.5s ease-out;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #493cb4;
  }
`;
export const Error = styled(ErrorMessage)`
  color: #cc0033;
  font-size: 11px;
  font-weight: bold;
`;
