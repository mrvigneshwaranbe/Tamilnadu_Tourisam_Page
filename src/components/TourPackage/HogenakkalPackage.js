import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import Chennai from './Gallery/Chennai.jpg';
import Kanyakumari from './Gallery/Kanyakumari.jpg';
import Kodaikanal from './Gallery//kodaikanal1.jpg';
import Kumbakonam from './Gallery/Kumbakonam.webp';
import Madurai from './Gallery/madurai.jpg';
import Ooty from './Gallery/Ooty.jpg';
import Rameshwaram from './Gallery/rameshwaram.jpg';
import Theni from './Gallery/Theni.jpeg';
import Yarcaud from './Gallery/yarcaud.jpeg';
export default function HogenakkalPackage(){
  return (
    <div className="container" id="Hogenakkal" >
      {/* <h2 style={{textAlign:"center",marginTop:"100px" }} >Our Packages</h2> */}
      <h3>10.Hogenakkal To All Districts</h3>
      <div className="col card "></div>
      <div style={{ display: 'block', width: "100%", padding: "30px",marginTop:"10px" }}>
      <Carousel>
        <Carousel.Item interval={3000}>
            <div className="row"style={{marginTop:"20px"}}>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Chennai}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Chennai</p>
              <div>
                <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Chennai</h5>
                <h6>4 Days/3 Night </h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/> 
                <h2>Rs.10,000 /-</h2>
              </div>
              <h5> Time: 7 Hr 38 Min (345km)</h5>
              <div className="card-body row">
                <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
                <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
                <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
                <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
              </div>
              <div className="row p-3  ">
                <div className="col btn btn-outline-info fs-3  ">Book Now</div>
              </div>
            </div>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Kanyakumari}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Kanyakumari</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Kanyakumari</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.10,000 /-</h2>
              </div>
              <h5> Time: 9 Hr 8 Min (552km)</h5>
              <div className="card-body row">
                <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
                <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
                <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
                <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
              </div>
              <div className="row p-3  ">
                <div className="col btn btn-outline-info fs-3">Book Now</div>
              </div>
            </div>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Kodaikanal}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Kodaikanal</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Kodaikanal</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.8,000 /-</h2>
              </div>
              <h5> Time: 7 Hr 6 Min (353km)</h5>
              <div className="card-body row">
                <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
                <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
                <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
                <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
              </div>
              <div className="row p-3  ">
                <div className="col btn btn-outline-info fs-3  ">Book Now</div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="row"style={{marginTop:"30px"}}>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Kumbakonam}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Kumbakonam</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Kumbakonam</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.5,000 /-</h2>
              </div>
              <h5> Time: 6 Hr 1 Min (295km)</h5>
              <div className="card-body row">
                <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
                <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
                <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
                <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
              </div>
              <div className="row p-3  ">
                <div className="col btn btn-outline-info fs-3  ">Book Now</div>
              </div>
            </div>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Madurai}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Madurai</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Madurai</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.7,000 /-</h2>
              </div>
              <h5> Time: 7 Hr 38 Min (345km)</h5>
              <div className="card-body row">
                <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
                <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
                <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
                <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
              </div>
              <div className="row p-3  ">
                <div className="col btn btn-outline-info fs-3  ">Book Now</div>
              </div>
            </div>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Ooty}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Ooty</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Ooty</h5>
                <h6>4 Days/3 Night</h6>
                <h2>Rs.15,000 /-</h2>
              </div>
              <h5> Time: 6 Hr 19 Min (253km)</h5>
              <div className="card-body row">
                <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
                <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
                <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
                <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
              </div>
              <div className="row p-3  ">
                <div className="col btn btn-outline-info fs-3  ">Book Now</div>
              </div>
            </div>
          </div> 
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="row"style={{marginTop:"30px"}}> 
          <div className="col card"style={{margin:"30px"}}>
            <img src={Rameshwaram}alt="" style={{width:"100%",height:"70%"}} />
            <p style={{textAlign:"center"}} >Rameshwaram</p>
            <div>
            <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Rameshwaram</h5>
              <h6>4 Days/3 Night</h6>
              <h2>Rs.9,000 /-</h2>
            </div>
            <h5> Time: 8 Hr 30 Min (463km)</h5>
            <div className="card-body row">
              <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
              <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
              <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
              <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
            </div>
            <div className="row p-3  ">
              <div className="col btn btn-outline-info fs-3  ">Book Now</div>
            </div>
          </div>
          <div className="col card"style={{margin:"30px"}}>
            <img src={Theni}alt="" style={{width:"100%",height:"70%"}} />
            <p style={{textAlign:"center"}} >Theni</p>
            <div>
            <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Theni</h5>
              <h6>4 Days/3 Night</h6>
              <h2>Rs.5,999 /-</h2>
            </div>
            <h5> Time: 5 Hr 37 Min (333km)</h5>
            <div className="card-body row">
              <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
              <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
              <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
              <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
            </div>
            <div className="row p-3  ">
              <div className="col btn btn-outline-info fs-3  ">Book Now</div>
            </div>
          </div>
          <div className="col card"style={{margin:"30px"}}>
            <img src={Yarcaud}alt="" style={{width:"100%",height:"70%"}} />
            <p style={{textAlign:"center"}} >Yarcaud</p>
            <div>
            <h5><FontAwesomeIcon icon={faLocationDot} /> Hogenakkal-Yarcaud</h5>
              <h6>4 Days/3 Night</h6>
              <h2>Rs.2,599 /-</h2>
            </div>
            <h5>Time: 2 Hr 36 Min (118km)</h5>
            <div className="card-body row">
              <div className="col"><FontAwesomeIcon icon={faUtensils} /><br /> Food</div>
              <div className="col"><FontAwesomeIcon icon={faHotel} /><br /> Hotel</div>
              <div className="col"><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</div>          
              <div className="col"><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</div>          
            </div>
            <div className="row p-3  ">
              <div className="col btn btn-outline-info fs-3  ">Book Now</div>
            </div>
          </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  )
}
