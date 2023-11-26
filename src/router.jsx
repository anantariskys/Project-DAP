import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import AboutUs from "./pages/aboutUs";
import Auth from "./pages/authPage";
import Payment from "./pages/payment";
import RoadmapDetail from "./pages/RoadmapDetail";
import KodeEditor from "./pages/KodeEditor";
import MiniTes from "./pages/MiniTes";
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
    {
      path: "/payment",
      element: <Payment/>,
    },
    {
      path: "/roadMap",
      element: <RoadmapDetail/>,
    },
    {
      path: "/kodeEditor",
      element: <KodeEditor/>,
    },
    {
      path: "/miniTest",
      element: <MiniTes/>,
    },
  ]);

export default router;