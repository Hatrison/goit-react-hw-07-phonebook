import React from 'react';
import { List, Text } from './ContactList.styled';
import DeleteButton from 'components/DeleteButton';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <DeleteButton onDelete={onDelete} id={contact.id} />
        </li>
      ))}
    </List>
  );
};

export default ContactList;
