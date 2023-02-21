import React from "react";
import "./Card.css"
function Cards() {
  return (
    <>
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="java">pussy</h2>
              <p class="java">
              I have worked in The Atal tinkering labs, a facility provided to me by my school through the help of NITI Ayog for 4 years and have gained most of my basic skills in the early stages of my engineering journey from there. Apart from the technical opportunities, the Atal labs also framed my interests towards the fields of STEM.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>01</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="python">pussy</h2>
              <p class="python">
              As a former summer intern at Cyran AI solutions, an IIT-Delhi startup, I built various projects showcasing the uses of the BUDDHI DIY AI kit in vision sensing and recognition, voice commands, and much more. I got to polish my skills further with this internship and gained immense experience.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>02</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="cSharp">pussy</h2>
              <p class="cSharp">
              Recently, having joined a special team of my university, TEAM MOVIS of VIT-Chennai, I took part in various STEM-engagement sessions and am looking forward to many projects and competitions that may come my way.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>03</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
