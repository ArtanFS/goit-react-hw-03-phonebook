import { ListItem } from './ContactListItem.styled';

const ContactListItem = ({ contacts, deleteContact }) => {
  return (
    <ListItem>
      <div>
        <p>
          {contacts.name}: {contacts.number}
        </p>
        <button onClick={() => deleteContact(contacts.id)}>Delete</button>
      </div>
    </ListItem>
  );
};

export default ContactListItem;
