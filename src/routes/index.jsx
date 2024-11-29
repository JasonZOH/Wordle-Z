import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Wordle from "../pages/Wordle";
import Home from "../pages/Home";
import TicTacToe from "../pages/TicTacToe";

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
      {
        path: "tictactoe",
        element: <TicTacToe/>
      },
    ]
  }
]);

export default router;