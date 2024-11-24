import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Wordle from "./pages/Wordle";
import { setWordRandomData } from "./redux/wordSlicer";


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
      <Wordle />
    </main>
  )
}

export default App
