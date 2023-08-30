import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import KumbakonamImg1 from "../../../assets/Gallery/kodaikanal1.jpeg";
import KumbakonamImg2 from "../../../assets/Gallery/kumbakonam2.jpeg";
import KumbakonamImg3 from "../../../assets/Gallery/kumbakonam3.jpeg";

function KumbakonamVisit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ marginTop: "145px", marginBottom: "100px" }}
      className=" ms-5"
    >
      <h3>06. Kumbakonam</h3>
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
                  More About Best Time To Travel To Kumbakonam
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={KumbakonamImg1}
                      alt=""
                    />
                    <p>
                      Dawn<br></br> Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={KumbakonamImg2}
                      alt=""
                    />
                    <p>
                      Steemit<br></br>Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={KumbakonamImg3}
                      alt=""
                    />
                    <p>
                      Holydham<br></br> Source
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
            Located in the tropical area and the Deccan region of the country,
            Kumbakonam has the typical tropical climate, with pleasant winters
            and hot and dry summers. The monsoons are accompanied with moderate
            rains and erratic shower spells, thus making the time one of the
            suitable time to pay a visit. The summers are hot and largely
            uncomfortable for one to visit the place.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            Kumbakonam has a typical tropical climate. Regions around the
            Cauvery Delta are rather hot, but Kumbakonam has moderate weather
            throughout the year and summers are said to be far better than in
            hot coastal cities like Chennai. All said, there are numerous places
            to visit in Kumbakonam and it were better you choose the most ideal
            time for a visit. The monsoons are accompanied with moderate rains
            and erratic shower spells, thus making the time one of the suitable
            time to pay a visit.
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
              kumbakonam
            </h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h6 className="fw-bolder ">
              Kumbakonam in Winter (October - February)
            </h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              The winters in Kumbakonam are pleasantly cold, with light sweaters
              helping you to survive the cold. The temperature ranges from 15 to
              25 degrees Celcius, and the diurnal range of temperature isn't
              more than a maximum of 10 degrees Celcius. This season is most
              preferred by tourists to visit Kumbakonam, as exploring the city
              in this weather becomes comfortable and the temperature is
              pleasing most of the time during winter months.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">Kumbakonam in Monsoon (June-August)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              The monsoon is associated with frequent and untimely shower spells
              in the region. The temperature drops down considerably after the
              scorching summers and the place witness a waste stretch of
              greenery as the rains give life to the flora of the region. The
              rains can though be problematic at times and can interfere with
              your exploration plans, but overall this season can also be
              preferred by tourists to pay a visit to Kumbakonam.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder ">Kumbakonam in Summer (March-May)</h6>
            <p
              style={{ textIndent: "3rem", textAlign: "justify" }}
              className="mt-3"
            >
              Summers in the Deccan region of the country is undeniable hot, and
              the scorching sun might be an unpleasant experience. The summers
              are usually arid and heated up, and the temperature goes up to 40
              degrees Celcius during the day. The season is majorly avoided by
              tourists to plan a visit to Kumbakonam because of the overall
              weather conditions.
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default KumbakonamVisit;