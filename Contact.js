import React, { useState } from "react";
import './Contact.css'

function Contact(){

  const [Time, setTime] = useState();
          const toggle = ()=> {
          setTime("The Full Stack Java Developer Job Guarantee Program is an intense Bootcamp that offers a complete suite of software development skills. Get job-ready with HIRIST and HackerEarth. Complete the course to get a guaranteed job with an average pay of 6.7 LPA.")
          }

  const [name,setname]=useState();
  const [number,setnumber]=useState();
  const [email,setemail]=useState();
  const [message,setmessage]=useState();
  
 
  const handlename=(e)=>{
    setname(e.target.value)
  }
  const handlenumber=(e)=>{
    setnumber(e.target.value)
  }
  const handleemail=(e)=>{
    setemail(e.target.value)
  }
  const handlemessage=(e)=>{
    setmessage(e.target.value)
  }
  const handleSubmit=(e)=>{
    if(number.length>10){
      alert('error...!')
    }
  else{
    alert('form successfully submitted')
  }
  }
  
return(
  <div className="child"> 
  <div className="child1">
  <h3>Full Stack Developer Training & Placements</h3>
<p>To be an effective full-stack developer, you should acquire and continue upgrading your knowledge of applicable programming language skills. Consider taking courses in relevant languages—like Python, HTML, CSS, and Javascript.To be an effective full-stack developer, you should acquire and continue upgrading your
knowledge of applicable programming language skills. Consider taking courses in relevant languages—like Python, HTML, CSS, and Javascript.</p>
  <h1>{Time}</h1>
  <button onClick={toggle}>learn more</button>
</div>
<div className="form">
<h3>Fill & Get upto 25% OFF in Courese Fees</h3>
<form onSubmit={handleSubmit}><br />
       <lable>name:</lable>
       <input value={name} required onChange={handlename} /><br /><br></br>
       <lable>number:</lable>
       <input value={number} required onChange={handlenumber} /><br /><br></br>
       <lable>email:</lable>
       <input value={email} required onChange={handleemail} /><br /><br></br>
       <lable>message:</lable>
       <input value={message} required onChange={handlemessage} /><br /><br></br>
       <input type="submit" value='I am Intrested, Tell me more..' />
      </form>
      
  </div>
</div>
) 
}
export default Contact;
