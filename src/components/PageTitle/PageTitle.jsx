import css from "./PageTitle.module.css";

export default function PageTitle({className, children }) {
  return <h1 className={className}>{children}</h1>;
}
