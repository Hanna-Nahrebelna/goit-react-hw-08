import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>
        Contact manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>
        Hello! We are happy to welcome you to our contact storage app. We hope this app will help you store your important contacts and access them whenever you need them. 
        If you have any questions or suggestions regarding the application, please contact our manager. 
      </p>
    </div>
  );
}
