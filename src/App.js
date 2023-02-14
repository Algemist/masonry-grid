import './styles/App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Masonry from "./components/Masonry";
import axios from "axios";
import {URL} from "./configApi";

function App() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(URL)
        setData(response.data);
        setIsLoading(false);
    }

  return (
    <div className="App">
        <Header />
        { isLoading ?
            (
                <div style={{textAlign: "center", fontSize: 20}}>...loading</div>
            ) : (
            <Masonry items={data}/>
            )}
    </div>
  );
}

export default App;
