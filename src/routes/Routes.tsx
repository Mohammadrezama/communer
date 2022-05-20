import { Home, Users } from "pages";

export const routes = [
  {
    path: "",
    element: <Home />,
    private: false,
  },
  {
    path: "/users",
    element: <Users />,
    private: false,
  },
];
