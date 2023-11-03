import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/authPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

export default router;