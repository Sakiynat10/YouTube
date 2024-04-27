import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import request from "../../service/request";

const VideoPage = () => {
  const {videoId} = useParams();
  console.log(videoId);
  const [data , setData]  = useState(null);
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    const getContent = async () => {
      try{
        setLoading(true);
        const res = await request(`/video/details/${videoId}`);
        console.log(res);
        // let items = data.videos
        // console.log(items);

        // setContents(items);
      }catch{
        console.log("error");
      }finally{
        setLoading(false);
      }
    }
    getContent();
  } , [videoId])
  return (
    <div className="container">
      <div className="container">
        <h1>VedioPage</h1>
      </div>
    </div>
  )
}

export default VideoPage