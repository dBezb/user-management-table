import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchUsers } from "../../features/user/userSlice";
import Header from "../Header/Header";
import UserTable from "../Table/UserTable";
import Footer from "../Footer/Footer";
import styles from "../../styles/App.module.css";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.app}>
        <Header />
        <UserTable />
      </div>
      <Footer />
    </div>
  );
};

export default App;