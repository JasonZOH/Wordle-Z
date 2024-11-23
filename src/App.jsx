import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Wordle from "./components/Wordle";
import { setWordRandomData } from "./redux/wordSlicer";


function App() {
  const dispatch = useDispatch();
  const fetchWordRandomData = async()=>{
    try{
      const response = await axios.get('/api?words=1&length=5');
      dispatch(setWordRandomData(response.data));
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
