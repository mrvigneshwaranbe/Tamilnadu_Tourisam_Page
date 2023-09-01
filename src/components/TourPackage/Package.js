import React from 'react';
import './Packages.css';
// import img1 from "./Gallery/Bus Tourism.png";
import Chennai from "./ChennaiPackage"
import Hogenakkal from "./HogenakkalPackage";
import Kanyakumari from "./KanyakumariPackage";
import Kodaikanal from "./KodaikanalPackage";
import Kumbakonam from "./KumbakonamPackage";
import Madurai from "./MaduraiPackage";
import Ooty from "./OotyPackage";
import Rameshwaram from "./RameswaramPackage";
import Theni from "./TheniPackage";
import Yarcaud from "./YercaudPackage";
export default function Package(){
    const remoteURL="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/1-1658836440_e22b34e778a0d0cc8f59.webp";
    return (
    <div className="container">
    <section className="section-1">
        <h1>Welcome to TamilNadu Tour Packages Section!</h1>            
        <p style={{textAlign:"center",marginTop:"20px" }} >A potpourri of vibrant cultures, exotic destinations and enduring memories; welcome to one of <br/> the heartlands of human civilization.</p>
        <div className="row"style={{marginTop:"20px" }}>
            <div className="col-3"><img style={{width:"300px",height:"300px"}} src={remoteURL} alt="" /></div>
            <div className="col-8" style={{lineHeight:"30px" }}>The Transport Division at present has a fleet of 12 coaches, of which Three are Volvo and Six are AC coaches and Three are Non-AC coaches. TTDC is offering a wide range of package tours covering the entire Southern States.
            <p className='mt-2' >Every coach allows passengers to travel with comfort, safety and hygiene while adhering to COVID-19 safety protocols. </p>
            <div className="list">
                <ul>
                    <li>Transport Facilites</li>
                    <li>Hotel Facilities</li>
                    <li>Fun Activities</li>
                    <li>Guidence</li>
                </ul>
            </div>
            </div>  
            <div className='display-6'style={{textAlign:"center",marginTop:"30px" }} >MORE ABOUT PACKAGES</div>
            <div className="sub-bar">
            <div className="row ms-5  ">
                <div className='col-2 card ' ><a href="#Chennai">Chennai</a></div>
                <div className='col-2 card ' ><a href="#Hogenakkal">Hokenakkal</a></div>
                <div className='col-2 card ' ><a href="#Theni">Theni</a></div>
                <div className='col-2 card ' ><a href="#Kanyakumari">Kanyakumari</a></div>
                <div className='col-2 card ' ><a href="#Kodaikanal">Kodaikanal</a></div>
                <div className='col-2 card ' ><a href="#Kumbakonam">Kumbakonam</a></div>
                <div className='col-2 card ' ><a href="#Madurai">Madurai</a></div>
                <div className='col-2 card ' ><a href="#Yarcaud">Yarcaud</a></div>
                <div className='col-2 card ' ><a href="#Ooty">Ooty</a></div>
                <div className='col-2 card '><a href="#Rameswaram">Rameswaram</a></div>
            </div>
        </div>
        </div>

    </section>
    <Chennai />
    <Kodaikanal></Kodaikanal>
    <Madurai></Madurai>
    <Kumbakonam></Kumbakonam>
    <Theni></Theni>
    <Rameshwaram></Rameshwaram>
    <Ooty></Ooty>
    <Kanyakumari></Kanyakumari>
    <Yarcaud></Yarcaud>
    <Hogenakkal></Hogenakkal> 
</div>
  )
}
