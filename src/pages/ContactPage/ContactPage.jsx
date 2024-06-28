import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBar/SearchBar";
import css from "./ContactsPage.module.css";

export default function ContactPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={css.containerContacts}>
      <PageTitle>Your contacts</PageTitle>
       <ContactForm />
      <SearchBox />
      <div>{loading && "Wait for a response...."}</div>
      <ContactList />
    </div>
  );
}