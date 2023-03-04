import React from 'react'
import Container from '@mui/material/Container';
import play from './assets/playstore.png';
import app from './assets/appstore.png';
import './newsContent.css';
const NewsContent = () => {
  return (
    <Container maxWidth="md" style={{marginTop:"2em"}}>
      <div className="content">
        <div className="downloadMessage">
          <span className='downloadText'>
            For the best experience use <span className='bold'>inshorts</span> app on your smartphone
          </span>
          <div className="img">
          <img src={play} height="70px" />
          <img src={app} height="60px" />
          </div>
        </div>
      </div>
  </Container>
  )
}

export default NewsContent