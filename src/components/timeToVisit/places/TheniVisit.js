import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import theniImg1 from "../../../assets/Gallery/theni1.jpeg";
import theniImg2 from "../../../assets/Gallery/theni2.jpeg";
import theniImg3 from "../../../assets/Gallery/theni3.jpeg";

function TheniVisit() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: "140px", marginBottom: "150px" }}>
      <div className="d-flex justify-content-evenly ">
        <div style={{ width: "629px", marginRight: "0px" }}>
          <h3 className="mt-5">09. Theni</h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            In order to spend your vacation in the lap of nature in south India,
            no place would be better than the town of Cardamom - Theni. The best
            season to visit Theni is winter when the weather remains all
            pleasant and favourable for tourism. On the other hand, summer
            remains hot and monsoon receives a heavy rainfall which makes the
            two seasons not suitable for touring.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            Theni is known for having a salubrious climate throughout the year.
            The average temperature ranges between 15 degrees Celsius to 40
            degrees Celsius. The best months to visit are from the month of
            December to February since the weather is pleasant and allows you to
            indulge in a number of outdoor activities.
          </p>
        </div>

        <div style={{ marginLeft: "0px", marginTop: "60px" }}>
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
                  More About Best Time To Travel To Theni
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={theniImg1}
                      alt=""
                    />
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={theniImg2}
                      alt=""
                    />
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={theniImg3}
                      alt=""
                    />
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
      <section>
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="mt-3  text-center ">
              <h4>Best Time To visit In Theni</h4>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <h6 className="fw-bolder ">Theni in Summer</h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                The summer season in Theni starts from the month of March and
                continues till May. The months are generally hot and not
                favourable to visit Theni. Temperature during these months
                ranges between 24°C and 42°C.
              </p>
            </div>
            <div className="mt-5">
              <h6 className="fw-bolder ">Theni in Winter</h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                Monsoon in Theni strikes in the month of June and lasts until
                September. The town experiences a heavy rainfall during this
                time that fills the town with zest. Despite being at peak of its
                beauty, the town of Theni is not best to visit during monsoon.
              </p>
            </div>

            <div className="mt-5">
              {" "}
              <h6 className="fw-bolder ">Theni in Monsoon</h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                December marks the beginning of winter season in Theni which
                ends in the month of February. The temperature during these
                months varies from 22°C to 32°C, and thus, the town witnesses a
                pleasant weather and make the season best to visit Theni.
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </div>
  );
}

export default TheniVisit;