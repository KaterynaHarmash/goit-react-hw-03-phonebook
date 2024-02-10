import { ContactsListStyled } from './ContactList.styled';
import { Contact } from '../Contact/Contact';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ContactsListStyled>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ContactsListStyled>
  );
};
