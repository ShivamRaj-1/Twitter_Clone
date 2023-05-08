import React, { useState } from 'react';
import Who from './WhoToFollow.module.css'
function WhoToFollow() {
  const [users, setUsers] = useState([
    {
      image: "https://pbs.twimg.com/profile_images/1559375475557818368/ub-ZdXDD_400x400.jpg",
      name: 'Chennai  King', username: 'ChennaiIpl', following: false
    },
    {
      image: " https://pbs.twimg.com/profile_images/1585268468336558081/LmSiX43V_400x400.jpg",
      name: 'Mr.Yogi', username: 'yogi', following: false
    },
    {
      image: "https://www.indiaonlinepages.com/sports/gifs/sachin-tendulkar.jpg", name: 'Sachin Tendulakr'
      , username: 'sachin_rt', following: false
    },
  ]);
  const toggleFollowing = (username) => {
    // Create a new array with the updated follow status for the specified user
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return { ...user, following: !user.following };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  return (
    <div className={Who.Startdiv}>
      <div className={Who.FirstConatiner}>
        <h2>Who to follow</h2>
      </div>
      <div className={Who.userDataPart}>
        {users.map((user) => {
          return (
            <div>
              <ul>
                <li>
                  <img src={user.image} alt={`${user.username}`} width="20%" />
                  <span>
                    <div className={Who.name}>{user.name}</div>
                    <div>@{user.username}</div>
                  </span>
                  <button onClick={()=> toggleFollowing(user.username)}>
                    {user.following ? "Unfollow" : "Follow"}
                  </button>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
      <button className={Who.Middlebtn}>Show more</button>
    </div>
  );
}
export default WhoToFollow;
