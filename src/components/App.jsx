import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Header, SectionHeader } from './App.styled';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Header>Phonebook</Header>
      <ContactForm />

      <SectionHeader>Contacts</SectionHeader>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};
