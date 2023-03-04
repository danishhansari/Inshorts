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
  const [newsResults,setNewsResults] = useState()
  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apikey}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(newsArray);
  useEffect(() => {
    newsApi()
  }, [newsResults,categories])
  

  return (
    <div className="App">
      <NavInshorts setCategories={setCategories}/>
      <NewsContent />
      <Footer />
    </div>
  );
}

export default App;
