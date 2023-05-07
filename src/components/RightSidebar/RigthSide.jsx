import React, { useState } from 'react';
import Right from './RightSide.module.css';
import RightLast from './RightLast/RightLast';
import SearchBar from './SearchBar/SearchBar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import WhoToFollow from './WhoToFollow/WhoToFollow';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

export default function RightSide() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notInterested, setNotInterested] = useState([]);
  const[dataIndex,setDataindex]=useState(4)

  const data = [
    {
      id: 1,
      Trending: "Trending In India",
      name: "#Virat Kohli",
      Tweets: "9,565 tweets"
    },
    {
      id: 2,
      Trending: "Trending in Business",
      name: "#InvestigateAGIgreenpac",
      Tweets: "2,014 Tweets"
    },
    {
      id: 3,
      Trending: "Entertainment -Trending",
      name: "#SSMB28",
      Tweets: "16.9K Tweets"
    },
    {
      id: 4,
      Trending: "Trending In India",
      name: "#delhimetro",
      Tweets: "1,667 Tweets"
    },
    {
      id: 5,
      Trending: "Trending in Tech",
      name: "#functionUp ",
      Tweets: "1,2323Tweets"
    },
    {
      id: 6,
      Trending: "Trending In india",
      name: "#Ipl",
      Tweets: "1.2m Tweets"
    },
    {
      id: 7,
      Trending: "Trending Bihar",
      name: "#trendingbihar",
      Tweets: "5,667 Tweets"
    },
    {
      id: 8,
      Trending: "Trending In India",
      name: "#delhimetro",
      Tweets: "1,667 Tweets"
    },
    {
      id: 9,
      Trending: "Trending In India",
      name: "#BJP",
      Tweets: "74.5m Tweets"
    },
    {
      id: 10,
      Trending: "Trending In India",
      name: "#Eletcion",
      Tweets: "1,667 Tweets"
    }
  ];

  function handleClick(event, id){
    setAnchorEl(event.currentTarget);
    setNotInterested([...notInterested, id]);
  };
  const open =Boolean(anchorEl);
  const filteredData = data.filter((item) => !notInterested.includes(item.id));

  function handleclose(){
    setAnchorEl(null);
    setNotInterested([]);
  }
  return (
    <div className={Right.start}>
      <div>
        <SearchBar />
        <section className={Right.firstComp}>
          <div className={Right.firstcontainer}>
            <h2>What's Happening</h2>
          </div>
          <div className={Right.datapart}>
            {filteredData.filter((item,id)=>id<dataIndex).map((wid, ind) => (
              <div key={ind}>
                <ul>
                  <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{wid.Trending}</span>
                    <p>
                      <MoreHorizIcon onClick={(event) => handleClick(event, wid.id)} />
                      <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleclose}
                      >
                        <Button onClick={() => setNotInterested([...notInterested, wid.id])}>Not interested</Button>
                      </Popover>
                    </p>
                  </li>
                  <li>{wid.name}</li>
                  <li>{wid.Tweets}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className={Right.btnPart}>
            <button onClick={()=>setDataindex(dataIndex+4)}>Show more</button>
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
