import "./App.css";
import NavInshorts from "./components/NavInshorts.jsx";
import NewsContent from "./components/NewsContent";
import { useState,useEffect } from "react";
import apikey from "./data/config";
import axios from "axios";
import Footer from "./components/Footer";
function App() {
  const [categories, setCategories] = useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults] = useState();
  const [loadmore,setloadmore] = useState(20);
  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      const news = await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(newsArray);
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults,categories,loadmore])
  

  return (
    <div className="App">
      <NavInshorts setCategories={setCategories}/>
      <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setloadmore={setloadmore}/>
      <Footer />
    </div>
  );
}

export default App;
