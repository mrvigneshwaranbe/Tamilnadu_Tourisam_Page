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
import Yarcaud from './Gallery/yarcaud.jpeg';
export default function MaduraiPackage(){
  return (
    <div className="container" id="Madurai" >
      {/* <h2 style={{textAlign:"center",marginTop:"100px" }} >Our Packages</h2> */}
      <h3>03.Madurai To All Districts</h3>
      <div className="col card "></div>
      <div style={{ display: 'block', width: "100%", padding: "30px",marginTop:"10px" }}>
      <Carousel>
        <Carousel.Item interval={3000}>
            <div className="row"style={{marginTop:"20px"}}>
            <div className="col card"style={{margin:"30px"}}>
              <img src={Chennai}alt="" style={{width:"100%",height:"70%"}} />
              <p style={{textAlign:"center"}} >Chennai</p>
              <div>
                <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Chennai</h5>
                <h6>4 Days/3 Night </h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/> 
                <h2>Rs.10,000 /-</h2>
              </div>
              <h5> Time: 9 Hr 16 Min (456km)</h5>
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
              <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Theni</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.3,000 /-</h2>
              </div>
              <h5> Time: 1 Hr 48 Min (76km)</h5>
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
              <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Hogenakkal</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.7,000 /-</h2>
              </div>
              <h5> Time: 5 Hr 47 Min (322km)</h5>
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
              <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Kanyakumari</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.2,500 /-</h2>
              </div>
              <h5> Time: 3 Hr 40 Min (509km)</h5>
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
              <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Kumbakonam</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.4,000 /-</h2>
              </div>
              <h5> Time: 3 Hr 45 Min (243km)</h5>
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
              <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Ooty</h5>
                <h6>4 Days/3 Night</h6>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                <h2>Rs.20,000 /-</h2>
              </div>
              <h5> Time: 6 Hr 27 Min (278km)</h5>
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
            <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Rameshwaram</h5>
              <h6>4 Days/3 Night</h6>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
              <h2>Rs.3,500 /-</h2>
            </div>
            <h5> Time: 2 Hr 55 Min (173km)</h5>
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
            <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Kodaikanal</h5>
              <h6>4 Days/3 Night</h6>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
              <h2>Rs.10,000 /-</h2>
            </div>
            <h5> Time: 2 Hr 05 Min (116km)</h5>
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
            <h5><FontAwesomeIcon icon={faLocationDot} /> Madurai-Yarcaud</h5>
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
