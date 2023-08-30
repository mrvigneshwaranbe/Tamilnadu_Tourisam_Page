import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import cardImg1 from "../../../assets/Gallery/chennai1.jpeg";
import cardImg2 from "../../../assets/Gallery/chennai2.jpeg";
import cardImg3 from "../../../assets/Gallery/chennai3.jpeg";

function ChennaiVisit() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div style={{ marginTop: "150px" }} className="text-center ">
        <h2>TAMILNADU TOURISM</h2>
        <h6 className="fw-bolder mt-3 ">Best Time To Visit</h6>
      </div>

      <div className="d-flex justify-content-evenly ">
        <div style={{ width: "629px", marginRight: "0px" }}>
          <h3 className="mt-5">01. Chennai</h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            October to February during the winters and the pre-monsoons season
            is the best time to visit Chennai. This time of the year is
            considered as the best time to explore the metropolitan city as
            summers are scorching and monsoons bring torrential downpours and
            cyclones. Its geographical location on the beautiful coastline
            mostly keeps the city's weather hot and humid.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            Chennai is one of the cities that has successfully blended the
            modern, traditional and sides with ease. The city welcomes everyone
            who wants to seek a soulful and spiritual connection but also those
            who love shopping for sarees and enjoy good food. There is no
            conundrum in Chennai when you visit. It's all about the moment,
            whether you decide to take a stroll down Marina Beach.
          </p>
        </div>

        <div style={{ marginLeft: "0px", marginTop: "10px" }}>
          <div
            className="modal show"
            style={{
              display: "block",
              position: "relative",
            }}
          >
            <Modal.Dialog style={{ width: "600px" }} className="me-0  ">
              <Modal.Header closeButton>
                <Modal.Title className=" text-center me-3 fw-bolder">
                  More About Best Time To Travel To Chennai
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={cardImg1}
                      alt=""
                    />
                    <p>
                      Chennai,<br></br>India<br></br> Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={cardImg2}
                      alt=""
                    />
                    <p>
                      Chennai,<br></br>Kathipara <br></br>Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={cardImg3}
                      alt=""
                    />
                    <p>
                      Chennai <br></br>Beach<br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-3 text-center ">
            <h4>Best Time To visit In Chennai</h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h6 className="fw-bolder ">
              Chennai in Winters (November- February)
            </h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              Winters, the best time to visit Chennai, begin in November and
              last till February. Even the transitional month of October is
              quite good for exploring the city. The weather is quite pleasant
              with the maximum temperature hovering around 30°C and the minimum
              around 22°C. Its proximity to the coastline also results in
              occasional rains, but it will not be something that will hamper
              travel plans to a great extent. Kapaleeshwarar temple, Goverment
              Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli
              Silks, Kalakshetra Foundation, Vivekananda House etc. are some of
              the attractions that can be seen when in Chennai. The season is
              also famous for the array of festivals organised in the city like
              the Dance and Music Festival in December, Travel & Tourism Fair
              and Pongal in January and the Natyanjali Dance Festival held in
              February/ March. These events are traditional and important
              celebrations of Chennai and its culture and must not be missed
              when there.
            </p>
          </div>
          <div>
            <h6 className="fw-bolder ">Chennai in Summers (March - June) </h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              March marks the onset of the summer season in Chennai. It lasts
              till June and visiting the city during this time is not for the
              faint- hearted, some say. The days are blazing hot with the
              temperatures soaring as high as 39°C and the nights are equally
              warm with the minimum hovering around 27°C. Exploring the
              cityscape during this time of the year is an extremely exhausting
              affair and is, therefore, not advised to tourists.
            </p>
          </div>

          <div>
            <h6 className="fw-bolder ">Chennai in Monsoons (July-September)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              Chennai is susceptible to heavy downpours and cyclones between the
              months of July and September. These months mark the monsoon season
              in the region and is considered off-season as tourism does not
              really thrive here. The extreme rainfalls and strong winds could
              prove to be a hindrance to sightseeing and, therefore, the monsoon
              season is not recommended to tourists. The hotel tariffs, however,
              drop drastically during the season, making it a decent option for
              budget travellers. In case one has to visit Chennai, they may want
              to plan a trip at the onset of the season when the showers are
              moderate and allow travelling through the city.
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ChennaiVisit;