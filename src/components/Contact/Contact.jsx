import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

function Contact({ contact: { id } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2 className={css.title}>
          <FaUser className={css.icon} size="14" /> {contact.name}
        </h2>
        <p className={css.phone}>
          <FaPhone className={css.icon} size="14" />
          {contact.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
