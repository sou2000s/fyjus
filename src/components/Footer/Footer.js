import React from "react";
import {AiFillYoutube} from "react-icons/ai"
import {BsFacebook ,BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#474440] h-96 flex justify-center p-24  text-white">
      <div>
      <p>All rights@fyjus.com</p>
      <p>Contact: fyjus@gmail.com</p>
      <p>About</p>
      <p>Terms And Condition</p>
      </div>
      <div className="ml-9 ">
          <h1>Social link</h1>
         <AiFillYoutube/>
         <BsFacebook className="mt-5"/>
         <BsInstagram className="mt-5"/>
      </div>
    </div>
  );
};

export default Footer;
