import React from "react";
import { FiltersProps } from "../../types/UserTypes";
import styles from "../../styles/Table.module.css";

const Filters: React.FC<FiltersProps> = ({ filter, handleFilterChange }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filterInput}>
        <input
          type="text"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
          placeholder="Filter by name"
        />
      </div>
      <div className={styles.filterInput}>
        <input
          type="text"
          name="username"
          value={filter.username}
          onChange={handleFilterChange}
          placeholder="Filter by username"
        />
      </div>
      <div className={styles.filterInput}>
        <input
          type="text"
          name="email"
          value={filter.email}
          onChange={handleFilterChange}
          placeholder="Filter by email"
        />
      </div>
      <div className={styles.filterInput}>
        <input
          type="text"
          name="phone"
          value={filter.phone}
          onChange={handleFilterChange}
          placeholder="Filter by phone"
        />
      </div>
    </div>
  );
};

export default Filters;