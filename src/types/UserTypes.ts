export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserFilter {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserState {
  users: User[];
  filteredUsers: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filter: UserFilter;
}

export interface FiltersProps {
    filter: UserFilter;
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UserTableContentProps {
    filteredUsers: User[];
}