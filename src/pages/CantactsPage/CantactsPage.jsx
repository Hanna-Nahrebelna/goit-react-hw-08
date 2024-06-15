import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./CantactsPage.module.css";

export default function ContactPage() {
  return (
    <div className={css.containerContacts}>
      <PageTitle>Your contacts</PageTitle>      
    </div>
  );
}