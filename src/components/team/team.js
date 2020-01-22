import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import './team.css'

class team extends React.Component {
    render(){
    return (
  
<div>

    
<div class="topnav">
                    <a href="/"><font color="black">Home</font></a>
                    <a href="/p"><font color="black">Product</font></a>
                    <a   href="/contact"><font color="black">Contact</font></a>
                    <a  class="active" href="/team"><font color="black">Team Members</font></a>
                </div>
    <center><p1><b><font color="red">Team Memebers</font></b></p1></center>
   <div class="row">
    <div class="column">
    <div class="card" width="400px">
      <img class="ff"src="./anamikadi.JPG" alt="Jane" />
      <div class="container">
        <h2>Anamika Chatterjee</h2>
        <p class="title">Data Warehousing</p>
       <p> Team Leader</p>
        <p>anamika_chatterjee@in.ibm.com</p>
        <p><center><button class="button3" ><a href="https://w3.ibm.com/bluepages/profile.html?uid=000GRQ744" target="_blank"><b>Bluepage</b></a></button></center></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" width="400px">
      <img class="ff"src="./sayantan.png" alt="Jane" />
      <div class="container">
        <h2>Sayantan Roy</h2>
        <p class="title">Senior System Engineer</p>
        <p> Team Captain</p>
        <p>sayaroy3@in.ibm.com</p>
        <p><center><button class="button3" ><a href="https://w3.ibm.com/bluepages/profile.html?uid=00902V744" target="_blank">Bluepage</a></button></center></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" width="400px">
      <img class="ff"src="./Amit.jpeg" alt="Jane" />
      <div class="container">
        <h2>Amit Singh</h2>
        <p class="title">Application Developer - RPA</p>
       
        <p>amits121@in.ibm.com</p>
        <p><center><button class="button3" ><a href="https://w3.ibm.com/bluepages/profile.html?uid=000GRQ744" target="_blank">Bluepage</a></button></center></p>
      </div>
    </div>
  </div><br/>
  
 
  
  <div class="column">
    <div class="card" width="400px">
      <img class="ff"src="./hara.png" alt="Jane" />
      <div class="container">
        <h2>Hara Jena</h2>
        <p class="title">Application Developer - RPA</p>
       
        <p>harajena@in.ibm.com</p>
        <p><center><button class="button3" ><a href="https://w3.ibm.com/bluepages/profile.html?uid=09574J744" target="_blank">Bluepage</a></button></center></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" width="400px">
      <img class="ff"src="./siri.jpeg" alt="Jane" />
      <div class="container">
        <h2>Siri Chandana</h2>
        <p class="title">Application Developer - Devops</p>
       
        <p>snandan1@in.ibm.com</p>
        <p><center><button class="button3" ><a href="https://w3.ibm.com/bluepages/profile.html?uid=0004O8744" target="_blank">Bluepage</a></button></center></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" width="400px">
      <img class="ff"src="./abhipsa.jpeg" alt="Jane" />
      <div class="container">
        <h2>Abhipsa chakraborty</h2>
        <p class="title">Application Developer - Cognos</p>
       
        <p>abhipc94@in.ibm.com</p>
        <p><center><button class="button3" ><a href="https://w3.ibm.com/bluepages/profile.html?uid=0644F8744" target="_blank">Bluepage</a></button></center></p>
      </div>
    </div>
  </div>
</div>
</div>

    );
}
}
export default team;
