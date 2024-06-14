import css from "./UserMenu.module.css";

export default function UserMenu() {  
  return (
    <div className={css.wrapper}>
      <button type="button">Logout</button>
    </div>
  );
}
