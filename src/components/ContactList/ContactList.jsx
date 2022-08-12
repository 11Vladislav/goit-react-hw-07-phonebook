import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts?.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ul>
      {isLoading && <Loader />}
      {contacts &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}


