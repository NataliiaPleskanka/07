import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, ...contact }) => (
        <li key={contact.id}>
          <Contact contactData={{ contact, id }} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
