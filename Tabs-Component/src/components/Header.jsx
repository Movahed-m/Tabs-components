import NavAndMain from "./NavAndMain";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.header_container}>
        <h1 className={styles.header_title}>Tabs Component with React</h1>
        <NavAndMain />
      </div>
    </header>
  );
}

export default Header;
