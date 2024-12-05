import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/page";
import ProfilePage from "./pages/profile/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

export { router };
