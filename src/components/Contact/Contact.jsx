import PropTypes from "prop-types";
import s from "../Contact/Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={s.contactListItem}>
      <div className={s.contactInfo}>
        <span className={s.icon}>
          <FaUserTie />
        </span>

        <p className={s.contactListText}>{name}</p>
        <span className={s.icon}>
          <BsFillTelephoneFill />
        </span>
        <p className={s.contactListText}>{number}</p>
      </div>
      <button type="button" className={s.contactListBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
