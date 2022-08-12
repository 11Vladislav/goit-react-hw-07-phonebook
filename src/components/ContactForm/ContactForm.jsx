import { useGetContactsQuery, useAddContactMutation} from 'redux/contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {StyledForm, Input, Label, Button} from './ContactForm.styled';

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const {data: contacts} = useGetContactsQuery();
    
  const handleSubmitForm = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const newContact = { name, number};
    const resetForm = () => e.target.reset();

    if(contacts.find (contact => contact.name === name)) {
      toast.error('Contact already exists.');
      resetForm();
      return;
    } 
    addContact({newContact});
    toast.success('Contact added.');
    resetForm();
    }

    return (
           
                 <StyledForm>
                <Label htmlFor="name">Name
                     <Input type="text" name="name" placeholder="Name" onSubmit={handleSubmitForm} />
                    </Label>
                 <Label htmlFor="number">Number
                     <Input type="text" name="number" placeholder="Number" onSubmit={handleSubmitForm} />
                    </Label>  
                     <Button type="submit">Add contact</Button>
                 </StyledForm>
             )   
             }

export default ContactForm;

 ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
 }
