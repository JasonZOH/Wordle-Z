import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWordRandomData } from "./redux/wordSlicer";
import { Outlet } from "react-router-dom";


function App() {
  const dispatch = useDispatch();
  const fetchWordRandomData = async()=>{
    try{
      const response = await axios.get('/api?words=1&length=5');
      dispatch(setWordRandomData(response.data[0]));
    }catch(error){
      console.log("error", error);
    };
  }

  useEffect(() => {
    fetchWordRandomData();
  }, []);
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default App
