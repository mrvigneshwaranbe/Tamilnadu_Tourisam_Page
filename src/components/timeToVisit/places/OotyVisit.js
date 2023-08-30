import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ootyImg1 from "../../../assets/Gallery/ooty1.jpeg";
import ootyImg2 from "../../../assets/Gallery/ooty2.jpeg";
import ootyImg3 from "../../../assets/Gallery/ooty3.jpeg";

function OotyVisit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ marginTop: "145px", marginBottom: "100px" }}
      className=" ms-5"
    >
      <h3>04. Ooty</h3>
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
                  More About Best Time To Travel To Ooty
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={ootyImg1}
                      alt=""
                    />
                    <p>
                      Mountain <br></br>Railway<br></br> Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={ootyImg2}
                      alt=""
                    />
                    <p>
                      Ooty <br></br>Lake<br></br>Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={ootyImg3}
                      alt=""
                    />
                    <p>
                      Trekking<br></br>Ooty<br></br> Source
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
            The best time to visit Ooty is throughout the year as the weather is
            pleasant and great for sightseeing. The temperature usually ranges
            from 5-15 degrees throughout the year with colder nights. However,
            the peak season is from October to June when the weather is pleasant
            and you can get involved in outdoor activities. Ooty can be visited
            during monsoons (if you don't mind the rain) when the freshly washed
            surroundings give Ooty an ethereal charm. The annual Tea and Tourism
            Festival attracts crowds in huge numbers to visit the place and have
            a great time in this wonderful place.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            The poised and elegant 'Queen of Hill Stations' welcomes you to the
            kingdom in the clouds. Individuals travel far and wide to partake in
            the awe-inspiring wonders of one of India's most beloved hill
            stations - Ootacamund or Ooty. Here, history and culture form a
            sweet medley, while nature sings to its own symphony. Colonial
            churches, Hindu temples, tribal museums and libraries brand the
            plains with stories.
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
              Ooty
            </h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h6 className="fw-bolder ">Ooty in Summer (March - June)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              Ooty experiences an average temperature that ranges between 23
              degree Celsius and 31 degree Celsius, which is perfect for you to
              explore the sheer beauty of this place in full swing.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">Ooty in Winter (October - March)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              With temperatures that stay below 15 degree Celsius, winters in
              Ooty are perfect to have a gala time. Each year, during January or
              February, Department of Tourism in Tamil Nadu hosts The Tea and
              Tourism Festival for three days. A vast range of tea leaves are
              displayed, and rows of tea stalls are put up for tasting and
              buying a wide variety of tea. In addition to this, these three
              days are packed with cultural shows and performances, which
              reverberate with the heritage of the Nilgiris.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">Ooty in Monsoon (July-September)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              People who love rainfall and green grass beds laid over mountains
              can pack their bags and head straight to Ooty during the monsoon
              months, which lasts between June and September. Even though you
              are unlikely to experience the bright, warm sunshine, you will
              have a great time nevertheless.
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OotyVisit;