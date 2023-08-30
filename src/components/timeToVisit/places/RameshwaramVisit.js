import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ramesImg1 from "../../../assets/Gallery/rameshwaram1.jpeg";
import ramesImg2 from "../../../assets/Gallery/rameshwaram2.jpeg";
import ramesImg3 from "../../../assets/Gallery/rameshwaram3.jpeg";

function RameshwaramVisit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ marginTop: "145px", marginBottom: "100px" }}
      className=" ms-5"
    >
      <h3>02. Rameshwaram</h3>
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
                  More About Best Time To Travel To Rameshwaram
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={ramesImg1}
                      alt=""
                    />
                    <p>
                      Railway <br></br>Bridge<br></br> Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={ramesImg2}
                      alt=""
                    />
                    <p>
                      Lighthouse <br></br>Pilgrims
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={ramesImg3}
                      alt=""
                    />
                    <p>
                      Pilgrims <br></br>Temple<br></br> Source
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
            The best time to visit Rameshwaram is from October to April.
            However, as far as the weather goes, Rameshwaram experiences
            tropical climate which means the though the seasons greatly vary,
            the temperatures may not. This makes Rameshwaram a destination which
            can be visited all year round. Winters (November to February) are
            cool and temperature comes down to 17 degrees Celcius. This is the
            most pleasant season for sightseeing and visiting neighbourhoods.
            The Monsoons (July to September) are humid with average rainfalls,
            but, the scenic view of the coastal region during these months is
            enjoyable.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            Dotted with temples along the seashore and located on a beautiful
            island, rumour has it that this is where Lord Rama built the bridge
            across the ocean to reach Sri Lanka. One of the holiest places in
            the country, pilgrims flocks to this town to pay their respects and
            worship Lord Shiva. With a tropical climate throughout the year,
            this hamlet can pretty much be visited at any time.
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
          <Offcanvas.Title className="mt-3 text-center ">
            <h4>Best Time To visit In Rameshwaram</h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h6 className="fw-bolder ">
              Rameshwaram in Winter (December- February)
            </h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              Winters in Rameshwaram, which last from October all the way to
              March, is said to be the peak season for visiting Rameshwaram if
              you are visiting the place as a tourist and not a pilgrim. The
              temperature during these months drops considerably than the other
              two seasons, with it ranging from 20 degree Celsius to 30 degree
              Celsius. The town is also blessed with chilly winds which make the
              atmosphere even more amicable. This season, therefore, makes for
              the best time for tourists to take part in a plethora of outdoor
              activities and enjoy their stay. During December, Rameshwaram also
              hosts the festival of Arudhra Darshanam which is essentially a
              festival that celebrates an aspect of Lord Shiva. This is said to
              be one of the most celebrated festivals amongst all the ones
              celebrated in Rameshwaram.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">
              Rameshwaram in Monsoon (July - October)
            </h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              The monsoons in Rameshwaram experience temperatures ranging from
              28 degree Celsius to 35 degree Celsius. These temperatures are
              similar to those during the summers, as is the climate except the
              small relief of humidity received due to short but effective
              downpours. Though monsoons are humid, August-October offers a good
              climate to explore Rameswaram as temperatures drop down during
              this time
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">Rameshwaram in Summer(March - June)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              The summers in Rameshwaram last from April to July and the average
              temperatures during this time range from 27 degree Celsius to 40
              degree Celsius. Summers are also called the pilgrim season in
              Rameshwaram, meaning the town may be exceptionally crowded with
              chances of various processions and chants throughout the area. The
              climate in the summers stays hot, as is usual for most Tamil Nadu
              towns, with the afternoons Being exceptionally sunny. However, the
              rest of the day is said to clear up, and the heat may not bother
              you as much
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default RameshwaramVisit;