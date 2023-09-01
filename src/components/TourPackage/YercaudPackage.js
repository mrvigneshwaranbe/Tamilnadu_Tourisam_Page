import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import Chennai from './Gallery/Chennai.jpg';
import Theni from './Gallery/Theni.jpeg';
import Kanyakumar from './Gallery/Kanyakumari.jpg';
import Hogenakkal from './Gallery/hoggenkal-1.jpg';
import Kumbakonam from './Gallery/Kumbakonam.webp';
import Ooty from './Gallery/Ooty.jpg';
import Rameshwaram from './Gallery/rameshwaram.jpg';
import Kodaikanal from './Gallery/kodaikanal1.jpg';
import Madurai from './Gallery/madurai.jpg';
export default function YercaudPackage() {
  return (
    <div className="container" id="Yarcaud" >
      {/* <h2 style={{textAlign:"center",marginTop:"100px" }} >Our Packages</h2> */}
      <h3>09.Yarcaud To All Districts</h3>
      <div className="col card "></div>
      <div style={{ display: 'block', width: "100%", padding: "30px",marginTop:"10px" }}>
      <Carousel>
        <Carousel.Item interval={3000}>
            <div className="row"style={{marginTop:"20px"}}>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Chennai}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Chennai</p>
              <div>
                <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Chennai</h5>
                <h6>4 Days/3 Night </h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/> 
                <h2>Rs.8,000 /-</h2>
              </div>
              <h5> Time: 7 Hr 13 Min (366km)</h5>
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
              <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Theni</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.5,000 /-</h2>
              </div>
              <h5> Time: 5 Hr 05 Min (271km)</h5>
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
              <img src={Hogenakkal}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Hogenakkal</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Hogenakkal</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.3,599 /-</h2>
              </div>
              <h5> Time: 2 Hr 56 Min (118km)</h5>
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
              <img src={Kanyakumar}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Kanyakumari</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Kanyakumari</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.8,999 /-</h2>
              </div>
              <h5> Time: 7 Hr 56 Min (409km)</h5>
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
              <img src={Kumbakonam}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Kumbakonam</p>
              <div>
              <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Kumbakonam</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.5,000 /-</h2>
              </div>
              <h5> Time: 3 Hr 42 Min (219km)</h5>
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
              <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Ooty</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.20,000 /-</h2>
              </div>
              <h5> Time: 6 Hr 04 Min (244km)</h5>
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
            <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Rameshwaram</h5>
              <h6>4 Days/3 Night</h6>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
              <h2>Rs.16,000 /-</h2>
            </div>
            <h5> Time: 7 Hr 48 Min (433km)</h5>
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
            <img src={Kodaikanal}alt="" style={{width:"100%",height:"70%"}} />
            <p style={{textAlign:"center"}} >Kodaikanal</p>
            <div>
            <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Kodaikanal</h5>
              <h6>4 Days/3 Night</h6>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
              <h2>Rs.6,000 /-</h2>
            </div>
            <h5> Time: 6 Hr 00 Min (292km)</h5>
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
            <h5><FontAwesomeIcon icon={faLocationDot} /> Yarcaud-Madurai</h5>
              <h6>4 Days/3 Night</h6>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
              <h2>Rs.5,000 /-</h2>
            </div>
            <h5>Time: 4 Hr 48 Min (262km)</h5>
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
