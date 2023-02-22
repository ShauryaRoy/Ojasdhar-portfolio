import React from "react";
import "./About.css";
import Navbarhead from'./Navbar'

import "../Images/marliese-streefland-2l0CWTpcChI-unsplash.jpg";
function About() {
  return (
    <>
    <Navbarhead/>
      <div className="background">
    
        <div className="main">
          <img
            className="about_head"
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="haha"
            srcset=""
          />
          <h2 className="main_name">OJAS DHAR</h2>

          <p className="main_text">I am Ojas Dhar. As an engineer in the making,<br/> I have profound interest in the field of building <br/>things, whether it is related to electronics or <br/>mechanical designs, I am keen towards it all. I<br/> have been tinkering and making things since <br/>high school, but I am still far from becoming the  <br/>person I strive to be, and I will not stop working<br/> until I reach my goals.</p>
        </div>
      </div>
    </>
  );
}

export default About;
