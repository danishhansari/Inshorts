import "./Newscard.css";
const Newscard = ({ newsItem, newsResults }) => {

    const fullDate = new Date(newsItem.publishedAt)
    let date = fullDate.toString().split(" ")
    const hour = parseInt(date[4].substring(0,2));
    const time = hour>12?true:false;

  return (
    <div className="newsCard">
      <img
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg"
        }
        alt={newsItem.title}
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <span
            className="author"
            style={{ color: "steelblue", fontWeight: "700", cursor: "pointer" }}
          >
            <a href={newsItem.url} target="_blank">
              <b> short </b>
              by{" "}
              <span className="muted-text">
                {newsItem.author ? newsItem.author : "unknown"} /
              </span>
            </a>
          </span>
        </div>
        <div className="lowerNewsText">
        <div className="description">{newsItem.description}</div>
        <span className="readmore">
            read more at <b>"{newsItem.source.name}"</b>
        </span>
        </div>
      </div>
    </div>
  );
};
export default Newscard;
