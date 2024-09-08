import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../features/store";
import { setFilter } from "../../features/user/userSlice";
import Filters from "./Filters";
import UserTableContent from "./UserTableContent";
import styles from "../../styles/Table.module.css";

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, filter, status } = useSelector(
    (state: RootState) => state.users,
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ ...filter, [name]: value }));
  };

  if (status === "loading") {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingText}>Loading...</div>
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error loading users.</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <Filters filter={filter} handleFilterChange={handleFilterChange} />
      <UserTableContent filteredUsers={filteredUsers} />
    </div>
  );
};

export default UserTable;