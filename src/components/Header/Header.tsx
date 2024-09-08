import React from "react";
import TableLogo from "../../images/TableLogo.jpg";
import styles from "../../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={TableLogo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>User Management</h1>
      </div>
    </nav>
  );
};

export default Header;