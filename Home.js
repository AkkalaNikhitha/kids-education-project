import React, { useState } from "react";

import './Home.css'
function Home() {

  const [Time, setTime] = useState();
          const toggle = ()=> {
          setTime("Education is a gradual process which brings positive changes in the human life and behavior. We can also define education as a process of acquiring knowledge through study or imparting the knowledge by way of instructions or some other practical procedure.")
          }
  return(
    <div className="main-head">
      <div className="inside">
      <h3>Kids Learning Center</h3>
      <h2>New Approach to Kids Education</h2>
      <p>Make education possible for every child. Join hands with an NGO and serve the poor. Donate for education and help
       children attain age-appropriate learning. Make education possible for every child. Join hands with an NGO and serve
       the poor. Donate for education and help children attain ageappropriate learning.</p>
       <h1>{Time}</h1>
      <button onClick={toggle}>learn more</button>
      </div>
      <div className="round">
    <img src="http://assets.chinamoneynetwork.com/wp-content/uploads/20190904110804/online-education-4-696x464.png" width="300px" height="250px"/>
     </div>
      </div>
       )
}
export default Home;
