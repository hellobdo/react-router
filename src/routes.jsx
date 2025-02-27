import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />
  },
  {
    path: "profile/:name",
    element: <Profile />,
    errorElement: <ErrorPage />
  },
];

export default routes;