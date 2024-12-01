import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWordRandomData } from "./redux/wordSlicer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default App
