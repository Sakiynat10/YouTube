import { Fragment, useEffect, useState } from "react";
import "./index.scss";
import request from "../../service/request";
import ContentCard from "../../card/ContentCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [contents , setContents] = useState(null);
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    const getContents = async () => {
      const params = {query: 'water'}
      try{
        setLoading(true);
        const {data} = await request('trending/' , {params});
        // console.log(data.videos);
        let items = data.videos
        // console.log(items);

        setContents(items);
      }catch{
        console.log("error");
      }finally{
        setLoading(false);
      }
    }
    getContents();
  } , [])
  console.log(contents);
  return (
    <Fragment>
        <div id="home">
            <div className="container">
                <div className="contents">
                  {contents?.map((content) => <div  key={content.id}>< ContentCard {...content}/></div>)}
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default HomePage;