import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Wordle from "../pages/Wordle";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "wordle",
        element: <Wordle/>
      },
    ]
  }
]);

export default router;