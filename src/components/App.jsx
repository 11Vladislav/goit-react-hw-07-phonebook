import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ContactForm} from './ContactForm/ContactForm';
import {Filter} from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';
import { Box } from './Box/Box.styled';


export const App = () => {
  return (
    <Box px="40%">
    <Box textAlign="center" colors={p => p.theme.colors.black} as="h1">
      Phonebook
    </Box>
    <ContactForm />
    <Box textAlign="center" colors={p => p.theme.colors.black} as="h2">
      Contacts
    </Box>
    <Filter />
    <ContactList />
    <ToastContainer />
  </Box>
  );
};

export default App;