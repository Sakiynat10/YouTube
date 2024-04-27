import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ContentCard = ({
  thumbnails,
  title,
  number_of_views,
  author,
  published_time,
  video_length,
  video_id
}) => {
  return (
    <div  className="content-card">
      <div className="card">
        <LazyLoadImage src={thumbnails[0].url} alt={title} />
        <span>{video_length}</span>
      </div>
      <div className="card-info">
        <div className="info-top">
          <Link to={`/video/${video_id}`}>{title}</Link>
          <p>
            {author} <FaCircleCheck />
          </p>
        </div>
        <div className="info-bottom">
          <p> {number_of_views} Views</p>
          <p>{published_time}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
