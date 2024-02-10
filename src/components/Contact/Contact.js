import { ContactItem, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <ContactItem>
      {name}: {number}{' '}
      <DeleteBtn onClick={() => onDelete(id)}>Delete</DeleteBtn>
    </ContactItem>
  );
};
