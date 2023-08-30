import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import KaniyakumariImg1 from "../../../assets/Gallery/kanyakumari1 (1).jpeg";
import KaniyakumariImg2 from "../../../assets/Gallery/kanyakumari1 (2).jpeg";
import KaniyakumariImg3 from "../../../assets/Gallery/kanyakumari1 (3).jpeg";

function KanyakumariVisit() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: "140px", marginBottom: "100px" }}>
      <div className="d-flex justify-content-evenly ">
        <div style={{ width: "629px", marginRight: "0px" }}>
          <h3 className="mt-5">05. Kaniyakumari</h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            The months from October until February are considered the best time
            to visit Kanyakumari, as the weather remains calm and pleasant.
            Although this coastal region is a bit humid, this is the best time
            to try out some adventurous water sports, going on sightseeing and
            outings, undertaking beach activities and savouring the spectacular
            sunset views. With the beginning of winters in November, Kanyakumari
            also hosts many festivals during this month, for instance the Cape
            Festival.
          </p>
          <p style={{ textIndent: "18rem", textAlign: "justify" }}>
            Kanyakumari is the southernmost tip of India. As Kanyakumari is
            close to the seas, the expanse experiences a tropical coastal
            climate. There are not many variations in the seasons, as there is
            an overall humidity and seasonal rain during the year.
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
                  More About Best Time To Travel To Kaniyakumari
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={KaniyakumariImg1}
                      alt=""
                    />
                    <p>
                      Landscape <br></br>Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={KaniyakumariImg2}
                      alt=""
                    />
                    <p>
                      Sea<br></br> Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: "80%" }}
                      height={"160px"}
                      src={KaniyakumariImg3}
                      alt=""
                    />
                    <p>
                      Coast<br></br> Source
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
      <section>
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="mt-3  text-center ">
              <h4>Best Time To visit In Kaniyakumari</h4>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <h6 className="fw-bolder ">
                Kanyakumari in Winters (October to March)
              </h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                Winters in Kanyakumari are the best time for sightseeing and
                travelling around the place. Attractions such as Vavathurai,
                Chitharal Hill Temple and Thiruvalluvar Statue are popular among
                the tourists. November is a very favourable month for visiting
                Kanyakumari as the weather is pleasant with clear skies and less
                humidity. Temperatures vary from 15 degree celcius to 35 degree
                celcius. It is also the perfect time for indulging in beach
                activities like sunbathing, swimming and surfing. December to
                February are the peak seasons; hence the tourism sector gets
                maximum revenue during this time.
              </p>
            </div>
            <div className="mt-5">
              <h6 className="fw-bolder ">
                Kanyakumari in Summers (April to June)
              </h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                Kanyakumari experiences moderate weather during summers, with
                temperatures ranging from 22 degrees to 35 degrees Celcius.
                During this period the weather is humid; however, the climatic
                conditions are apt for visiting the various attractions of the
                place including Vivekananda Rock, Vattakottai Fort and Gandhi
                Museum. Apart from this, the various beach activities are open
                throughout summer, so tourists can indulge in outdoor visits,
                sea bathing and surfing. Although early summers are an ideal
                time to visit Kanyakumari, the month of April gets considerably
                hot which is why this month is not preferred for travel.
                However, the place gets vacant with less crowd and cheaper
                accomodation - a perfect time for budget travellers
              </p>
            </div>

            <div className="mt-5">
              {" "}
              <h6 className="fw-bolder ">
                Kanyakumari in Monsoons (July to September)
              </h6>
              <p
                style={{ textIndent: "3rem", textAlign: "justify" }}
                className="mt-3"
              >
                Monsoons in Kanyakumari starts in June which helps in
                tremendously lowering the temperature. However, the level of
                humidity keeps rising making it difficult to travel around. If
                you're a pluviophile, then the month of August is best
                recommended as the atmosphere is pleasant with a slight drizzle
                that enhances the beauty of this coast. Apart from its humidity,
                this is a good time to visit during monsoons. The frequent
                showers put a hold on sightseeing which affects the footfall in
                Kanyakumari in September, however, the Cape Festival takes place
                in October, and by this time tourists from around India visit
                Kanyakumari.
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </div>
  );
}

export default KanyakumariVisit;