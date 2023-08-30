import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import maduraiImg1 from "../../../assets/Gallery/madurai1.jpeg";
import maduraiImg2 from "../../../assets/Gallery/madurai2.jpeg";
import maduraiImg3 from "../../../assets/Gallery/madurai3.jpeg";

function MaduraiVisit() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: "140px", marginBottom: "100px" }}>
      <div className="d-flex justify-content-evenly ">
        <div style={{ width: "629px", marginRight: "0px" }}>
          <h3 className="mt-5">07. Madurai</h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            October to March is the best time to visit Madurai. With a hot and
            dry climate for most of the year, Madurai is best visited during the
            winter season. The town is known for its ancient temples and other
            architectural and religious masterpieces and receives a generous
            crowd of people throughout the year. Madurai is the most fascinating
            and welcoming during the months between October and March which
            coincides with its winter season.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            Madurai is one of the oldest culturally vibrant cities of India. Its
            historical places and temples have a steady flow of tourists from
            all around the world.
          </p>
        </div>

        <div style={{ marginLeft: "0px", marginTop: "30px" }}>
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
                  More About Best Time To Travel To Madurai
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={maduraiImg1}
                      alt=""
                    />
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={maduraiImg2}
                      alt=""
                    />
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={maduraiImg3}
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
              <h4>Best Time To visit In Madurai</h4>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <h6 className="fw-bolder ">
                Madurai in Winter (December-February)
              </h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                Many locals look forward to the winter season in Madurai due to
                the relief it brings from the summers. The season lasts from
                December to February. The temperature during the winter months
                ranges from 20 degree Celsius to 29 degree Celsius. The season
                is characterised by moderately cool temperatures which make
                travelling around the city a pleasant experience for all
                individuals. Pongal, a widely celebrated festival is regarded as
                extremely special in Madurai. The festival lasts for three days
                and comprises of praying for a good harvest by locals and
                farmers alike. Other religious festivals are also celebrated
                with great vigour. However, hotel prices may climb up as this is
                the peak tourist season.
              </p>
            </div>
            <div className="mt-5">
              <h6 className="fw-bolder ">Madurai in Monsoon (June-August)</h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                Monsoon season in Madurai lasts from June to August. Although
                the monsoon season continues for a smaller amount of time, the
                south-west monsoon winds bring in a large amount of rainfall
                which is extremely heavy. This rainfall also makes the weather
                gloomy but still makes the city beautiful as the nature around
                Madurai mainly benefits from this rain. This is the perfect time
                to visit Madurai for people who love greenery and the lush
                natural surroundings.
              </p>
            </div>

            <div className="mt-5">
              {" "}
              <h6 className="fw-bolder ">Madurai in Summer (March-July)</h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                The summer season in Madurai lasts from March to May. The
                temperatures during this season range from 24 degree Celsius to
                34 degree Celsius. This means that the weather in Madurai during
                these months is uncharacteristically hot. It is also really dry
                which makes the heat more noticeable and discourages travellers
                to visit. The summer season is, therefore, an offseason for
                Madurai, and the crowds are comparatively less as well.
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </div>
  );
}

export default MaduraiVisit;