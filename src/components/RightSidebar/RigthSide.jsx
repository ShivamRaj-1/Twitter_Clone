import React from 'react';
import Right from './RightSide.module.css';
import RightLast from './RightLast';
import SearchBar from './SearchBar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import WhoToFollow from './WhoToFollow';
import Heading from './Heading';

export default function RigthSide() {
  const data = [
    {
      Trending: "Trending In India",
      name: "#Virat Kohli",
      Tweets: "9,565 tweets"
    },
    {
      Trending: "Bsuiness and finance Trending",
      name: "#InvestigateAGIgreenpac",
      Tweets: "2,014 Tweets"
    },
    {
      Trending: "Entertainment -Trending",
      name: "#SSMB28",
      Tweets: "16.9K Tweets"
    },
    {
      Trending: "Trending In India",
      name: "#delhimetro",
      Tweets: "1,667 Tweets"
    }
  ];

  return (

    <div className={Right.start}>
      <div>
        <SearchBar />
        <section className={Right.firstComp}>
          <div className={Right.firstcontainer}>
            <Heading />
          </div>
          <div className={Right.datapart}>
            {data.map((wid, ind) => (
              <div key={ind}>
                <ul>
                  <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span>{wid.Trending}</span><p><MoreHorizIcon /></p></li>
                  <li>{wid.name}</li>
                  <li>{wid.Tweets}</li> 
                </ul>
              </div>
            ))}
          </div>
          <div className={Right.btnPart}>
            <button> Show more</button>
          </div>
        </section>
        <div>
          <WhoToFollow />
        </div>
       <div>
          <RightLast />
        </div> 
      </div>
    </div>
  );
}
