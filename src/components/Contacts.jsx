import React from "react";
import "../App.css";
import {AiOutlineMail,AiFillLinkedin,AiOutlineInstagram} from "react-icons/ai"
import {FaMapMarkerAlt} from "react-icons/fa"
import {BsFillTelephoneFill,BsBrowserEdge,BsGithub} from "react-icons/bs";

const Contacts = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",padding:"10px 0px",backgroundColor:"#80808017"}}>
      <div style={{display:"flex",flexDirection:"column", gap:"5px"}}>
        <div style={{display:"flex",lineHeight:"10px",justifyContent:"center",alignItems:"center",gap:10,height:"20px"}}>
          <AiOutlineMail style={{fontSize:"20px"}}/>
          <p>sukhvindrasingh8670@gmail.com</p>
        </div>
        <div style={{display:"flex",lineHeight:"10px",justifyContent:"center",alignItems:"center",gap:10,height:"20px"}}>
          <FaMapMarkerAlt style={{fontSize:"20px"}}/>
          <p>Gurgaon, India</p>
        </div>
        <div style={{display:"flex",gap:10,height:"20px",alignItems:"center"}}>
          <AiFillLinkedin style={{fontSize:"20px"}}/>
          <a href="https://www.linkedin.com/in/sukhvindra-singh-42b3b3219/">
            LinkedIn
          </a>
        </div>
        <div style={{display:"flex",gap:10,height:"20px",alignItems:"center"}}>
          <AiOutlineInstagram style={{fontSize:"20px"}}/>
          <a href="https://www.instagram.com/coder0208">Instagran</a>
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column", justifyContent: "center"}}>
        <div style={{display:"flex",gap:10,lineHeight:"25px",alignItems:"center"}}>
          <BsFillTelephoneFill style={{fontSize:"20px"}}/>
          <span>9643315148</span>
        </div>
        <div style={{display:"flex",gap:10,lineHeight:"25px",alignItems:"center"}}>
          <BsBrowserEdge style={{fontSize:"20px"}}/>
          <a href="https://codewithsukhii.me">Portfolio</a>
        </div>
        <div style={{display:"flex",gap:10,lineHeight:"25px",alignItems:"center"}}>
          <BsGithub style={{fontSize:"20px"}}/>
          <a href="https://github.com/sukhvindra9643">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
