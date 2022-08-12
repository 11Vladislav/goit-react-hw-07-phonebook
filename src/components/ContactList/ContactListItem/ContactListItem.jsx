import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { ContactListItemContainer, Button, ContactItem, Contact } from './ContactListItem.styled';

export const ContactListItem = ({id, name, number}) => {
    const [deleteContact, result] = useDeleteContactMutation();

    return (
        <ContactListItemContainer>
            <ContactItem>
                <Contact>
                    <p>{name}: {number}</p>
                </Contact>
            <Button onClick={() => deleteContact(id)}>
                {result.data ? 'Deleting' : ''}
                Delete</Button>  
            </ContactItem>  
        </ContactListItemContainer>
    )
}

 ContactListItem.propTypes = {
    contacts: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };