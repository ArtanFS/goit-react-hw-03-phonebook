import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(el => (
        <ContactListItem
          key={el.id}
          contacts={el}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
};

export default ContactList;
