import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserTableContentProps } from "../../types/UserTypes";
import styles from "../../styles/Table.module.css";

const UserTableContent: React.FC<UserTableContentProps> = ({
  filteredUsers,
}) => {
  return (
    <AnimatePresence>
      {filteredUsers.length === 0 ? (
        <motion.div
          className={styles.noResults}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          No results found
        </motion.div>
      ) : (
        <motion.table
          className={styles.table}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {filteredUsers.map((user) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={styles.row}
                >
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Username">{user.username}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Phone">{user.phone}</td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </motion.table>
      )}
    </AnimatePresence>
  );
};

export default UserTableContent;