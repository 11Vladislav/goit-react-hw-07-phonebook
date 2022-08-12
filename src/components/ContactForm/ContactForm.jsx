import { useGetContactsQuery, useAddContactMutation} from 'redux/contactsApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {StyledForm, Input, Label, Button} from './ContactForm.styled';

export const ContactForm = () => {
  const { data: contacts} = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !number) {
      toast.error('Please fill in all fields');
      return;
    }
    const contact = contacts.find(contact => contact.name === name);
    if (contact) {
      toast.error('Contact already exists');
      return;
    }
     await addContact({
      name, number,
    });
    setName('');
    setNumber('');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input type="text" name="name" value={name} onChange={handleChange} />
      <Label>Number</Label>
      <Input type="text" name="number" value={number} onChange={handleChange} />
        <Button type="submit">Add contact</Button> 
    </StyledForm>
  );
}

 ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
 }
