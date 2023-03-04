import React from 'react'

const Newscard = ({ newsItem,newsResults }) => {
    return (
    <div className='newsCard'>
        <img src={newsItem.urlToImage ? newsItem.urlToImage : "https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg"} alt={newsItem.title} />
        <div className="newsText">
        <div>
        <span className="title">{newsItem.title}</span>
        </div>
        </div>
    </div>
  )
}
export default Newscard