import React from "react";
import { Row, Col, Progress } from "reactstrap";
import { Link } from "react-router-dom";

const milestones = [
    { label: "Effective Date", date: "Jun 20, 2025", done: true },
    { label: "1st Initial Deposit", date: "Jun 20, 2025", done: true },
    { label: "Loan & Association Apply", date: "Jun 25, 2025", done: true },
    { label: "Inspection Due", date: "Jun 29, 2025", done: false },
    { label: "Loan Commitment", date: "Jul 15, 2025", done: false },
    { label: "Closing Date", date: "Jul 20, 2025", done: false },
];

const DealsHeader = () => {

    const progressPercent = (milestones.filter((m) => m.done).length / milestones.length) * 100;

    return (
        <>
            <Row className="mb-3">
                <Col md={3}>
                    <Link to="/deals" className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }} >
                        <i className="bx bx-chevron-left" style={{ fontSize: "24px" }}></i>
                        <h5 className="mb-0" style={{ borderBottom: "2px solid transparent", transition: "border-color 0.2s ease" }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "2px solid #000")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "2px solid transparent")}
                        >
                            Back
                        </h5>
                    </Link>
                </Col>

                <Col md={9}>
                    <div className="d-flex flex-wrap gap-2 " >
                        <i className="bx bx-home-alt" style={{ fontSize: "20px" }}></i>
                        <h5 className="mb-0">
                            2650 SW 76th Ave #101, Miami, FL 33155, USA
                        </h5>
                        <h5 className="mb-0 text-muted">|</h5>
                        <i className="fas fa-user-alt" style={{ fontSize: "20px" }}></i>
                        <h5 className="mb-0">
                            Client 1 First, Last Name & Client 2 First, Last Name
                        </h5>
                    </div>

                </Col>
            </Row>

            <div className="p-3" style={{ backgroundColor: "#f2f8fd" }}>
                <div className="position-relative" style={{ height: "40px" }}>
                    <Progress value={progressPercent} style={{ height: "4px", backgroundColor: "#d4d9de", position: "absolute", top: "18px", width: "100%" }}
                        color="info" />
                    {milestones.map((m, i) => (
                        <div key={i} className="text-center position-absolute"
                            style={{ left: `${(i / (milestones.length - 1)) * 100}%`, transform: "translateX(-50%)", top: 0 }}
                        >
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: m.done ? "#22b8a1" : "#ccc", margin: "0 auto" }}></div>
                            <div style={{ fontSize: "0.8rem", marginTop: "8px", color: "#6a1b9a", }} >
                                {m.label}
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "#555" }}>{m.date}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <Row>
                <Col>
                    <div>
                        <Progress className="my-2" value="25" > 25% </Progress>
                        <Progress className="my-2" value={50} > 1/2 </Progress>
                        <Progress className="my-2" value={75} > You‘re almost there! </Progress>
                        <Progress className="my-2" color="success" value="100" > You did it! </Progress>
                        <Progress className="my-2" multi style={{ height: "18px" }}>
                            <Progress bar value="15" > Meh </Progress>
                            <Progress bar color="success" value="30" > Wow! </Progress>
                            <Progress bar color="info" value="25" > Cool </Progress>
                            <Progress bar color="warning" value="20" > 20% </Progress>
                            <Progress bar color="danger" value="25" > !! </Progress>
                        </Progress>
                    </div>
                </Col>
            </Row> */}

        </>
    )
}

export default DealsHeader;