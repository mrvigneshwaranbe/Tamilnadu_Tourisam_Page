import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import YercaudImg1 from "../../../assets/Gallery/yercaud1.jpeg";
import YercaudImg2 from "../../../assets/Gallery/yercaud2.jpeg";
import YercaudImg3 from "../../../assets/Gallery/yercaud3.jpeg";

function YercaudVisit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ marginTop: "145px", marginBottom: "100px" }}
      className=" ms-5"
    >
      <h3>08. Yercaud</h3>
      <div className="d-flex justify-content-evenly ">
        <div style={{ marginTop: "10px" }}>
          <div
            className="modal show"
            style={{
              display: "block",
              position: "initial",
            }}
          >
            <Modal.Dialog style={{ width: "600px" }} className="ms-0">
              <Modal.Header closeButton>
                <Modal.Title className=" text-center me-3 fw-bolder">
                  More About Best Time To Travel To Yercaud
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={YercaudImg1}
                      alt=""
                    />
                    <p>
                      Easemytrip<br></br> Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={YercaudImg2}
                      alt=""
                    />
                    <p>
                      Oyorooms<br></br>Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={YercaudImg3}
                      alt=""
                    />
                    <p>
                      Hiveminer <br></br> Source
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
        <div style={{ width: "629px" }}>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            October to June is the best time to visit Yercaud because the
            weather is dry and cool. However, Yercaud offers breathtaking views
            and a tranquil ambience throughout the year. During the month of
            May, a seven-day Summer Festival is conducted which includes flower
            shows, dog shows, boating races and village fairs. Monsoons (July-
            September) could be avoided as rains might hamper your sightseeing
            plans, but the rains make this place extra beautiful and you might
            not want to miss that either.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            Yercaud celebrates seasonal festivals that are in tune with the
            changing climatic conditions and showcase the nativity and culture
            of the hill town. If you are planning a weekend getaway or a long
            vacation, choose the best of the seasons so you can enjoy your trip
            to the finest. The best period to visit Yercaud is from October to
            June, when the weather is at its best.
          </p>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-3 ms-5 text-center ">
            <h4>
              Best Time To visit In <br />
              Yercaud
            </h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h6 className="fw-bolder ">Yercaud in Summer (March - June)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              With temperatures that hardly move out of the range between 24
              degree Celsius and 28 degree Celsius, Yercaud experiences mild
              summers during March to June. The best places to visit during this
              season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm,
              and Lady?s Seat. Apart from these attractions, one particular
              festival which allures tourists from every nook of the world is
              the Yercaud Summer Festival. Held in May, it is an annual festival
              which keeps everyone on their toes until its arrival. Usually
              taking place for five days, the enrapturing summer event is as
              grand as it gets! From sophisticated folk dances to bewitching
              musical concerts, from captivating cultural competitions to horse
              riding tournaments, this event is a treasure trove of a
              smorgasbord of wonderful activities.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">
              Yercaud in Winter (November - February)
            </h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              Yercaud experiences a delightful climate from October to February.
              The average temperature which stays between a pleasant 10 degree
              Celsius and 15 degree Celsius is ideal for leisurely nature walks
              as well as adventure activities. Do not miss out on the Bear?s
              Cave, Pagoda Point, Shevaroy Temple, and Anna Park, if you plan to
              visit this beautiful place during winter.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">Yercaud in Monsoon (July-September)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              Yercaud experiences a hot and humid monsoon with temperatures that
              range between 20 degree Celsius and 25 degree Celsius from June to
              September. At this time, the coffee plantations look ethereal
              after being washed by the rain. The Botanical Garden, Raja
              Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of
              the places you should visit during this time.
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default YercaudVisit;