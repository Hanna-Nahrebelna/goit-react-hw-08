import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle className={css.titleHomePage}>
        Contact manager welcome page{" "}
        <span role="img" aria-label="Greeting icon" className={css.span}>
          💁‍♀️
        </span>
      </PageTitle>
      <p className={css.text}>
        Hello! 
      </p>
      <p className={css.text}>
        We are happy to welcome you to our contact storage app. We hope this app will help you store your important contacts and access them whenever you need them.
      </p>
      <p className={css.text}>
        If you have any questions or suggestions regarding the application, please contact our manager. 
      </p>
    </div>
  );
}
