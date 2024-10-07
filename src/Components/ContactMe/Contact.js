
import { Footer } from "../Footer";
import axios from 'axios';
import {message} from 'antd';
import {useNavigate} from 'react-router-dom';
import linkedin from '../../assets/linkedin.png';
import leetcode from '../../assets/leetcode.png';
import github from '../../assets/github.png';
import "./Contact.css";
import { useState } from "react";

export const Contact = () => { 
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [clientMessage , setClientMessage] = useState('');
  const sendData = async() =>{
    
   const values = {name,email,phone,clientMessage};
     
       try {
        const res = await axios.post('https://mern-portfolio-backend-ehb7.onrender.com/api/user',values);
        if(res.data.success){
            message.success(res.data.message);
            navigate('/');
        }
        else{
          message.error(res.data.message);
        }
       } catch (error) {
         console.log(error);
         
       }
  };
    
    return(
        <>
     {/* <div className="heading1">
        <p>Get In Touch</p>
        <h2>Linkedin Profile</h2>
    </div> */}
    <div className="form-container">
    <p>Get In Touch</p>
    <div className="heading1">
      
        <h2>Linkedin Profile</h2>
    </div>
      <div className="linkedin">
      <a href="https://www.linkedin.com/in/%F0%9D%99%91%F0%9D%99%9E%F0%9D%99%A8%F0%9D%99%9D%F0%9D%99%96%F0%9D%99%A1-%F0%9D%98%BF%F0%9D%99%9D%F0%9D%99%A4%F0%9D%99%A3%F0%9D%99%9A-34419a289/">
        <img src={linkedin} cla></img>
        </a>
      </div>

      <div className="heading1">
        <h2>Leetcode Profile</h2>
    </div>
      <div className="linkedin">
       <a href="https://leetcode.com/u/vishaldhone/">
       <img src={leetcode}></img>
       </a>
      </div>

      <div className="heading1">
        <h2>Github Profile</h2>
    </div>
      <div className="linkedin">
       <a href="https://github.com/vishalpatil321">
       <img src={github}></img>
       </a>
      </div>
    

      
      
      <div className="heading1">
        <h2>Contact Me</h2>
    </div>
       <form layout="vertical" className="form-container" onSubmit={(e) => {e.preventDefault()}}>
          <label>Name</label>
            <input type='text' value={name} name="name" placeholder='Enter your name' onChange={(e) => {setName(e.target.value)}}/>
          <label>Email</label>
            <input type='email' value={email} name="email" placeholder='Enter your email' onChange={(e) => {setEmail(e.target.value)}}/>
          <label>Phone</label>
            <input type='text' value={phone} name="phone" placeholder='Enter your phone' onChange={(e) => {setPhone(e.target.value)}}/>
          <label>Message</label>
            <textarea type='text' value={clientMessage} name="message" placeholder='Enter your message' onChange={(e) => {setClientMessage(e.target.value)}}/>
          <button className="submit" type="submit" onClick={sendData}> Submit</button>
       </form>
    </div>
    <hr/>
    <Footer/>
    </>   
    );

};