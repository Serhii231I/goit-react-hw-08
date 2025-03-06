import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/slice";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import HomePage from "./HomePage/HomePage";
import AppBar from "./AppBar/AppBar";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector(selectLoading);

  const error = useSelector(selectError);
  const isLoggedin = useSelector(selectIsLoggedIn);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoggedin ? (
        <div>
          <AppBar />
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          {loading && <p>Loading...</p>}
          {error && <p>Error:{error}</p>}
          <ContactList onDelete={handleDelete} />
        </div>
      ) : (
        <>
          <AppBar />
        </>
      )}
    </>
  );
};

export default ContactsPage;
