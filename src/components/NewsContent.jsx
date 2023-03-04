import React from 'react'
import Container from '@mui/material/Container';
import play from './assets/playstore.png';
import app from './assets/appstore.png';
import './newsContent.css';
import Newscard from "../components/Newscard/Newscard"
const NewsContent = ({newsArray,newsResults}) => {
  return (
    <Container maxWidth="lg" style={{marginTop:"2em"}}>
      <div className="content">
        <div className="downloadMessage">
          <span className='downloadText'>
            For the best experience use <span className='bold'>inshorts</span> app on your smartphone
          </span>
          <div className="img" style={{userSelect:"none"}}>
          <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source=inshorts%20mobile"><img src={play} height="70px" /></a>
          <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527"><img src={app} height="60px" /></a>
          </div>
        </div>
        {newsArray.map((newsItem) => (
        <Newscard newsItem={newsItem} key={newsItem.title} />
        ))}
      </div>
  </Container>
  )
}
export default NewsContent;