import React from "react";
import { Row, Col, Collapse } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { Link } from "react-router-dom";
import { dealsPartyList } from "AllDummyData/DealsDummyData";

const Parties = ({ editMode, setEditMode, collapseToggle, collapseOpen }) => {
    return (
        <Row>
            <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                <h5 className="fw-bolder mb-0 text-primary">Parties</h5>
                <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                    title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
            </div>
            {dealsPartyList.map((item, index) => (
                <Col md="6" key={index}>
                    <div className="list-unstyled categories-list mt-1 p-2 mb-2"
                        style={{ border: "1px solid #dcdcdc", borderRadius: "6px" }}>
                        <div className="custom-accordion">
                            <Link className="text-body fw-bold py-1 d-flex align-items-center" to="#" onClick={() => collapseToggle(index)} >
                                <div className="d-flex flex-column ms-2 mb-2">
                                    <p className="font-size-15 fw-bolder mb-0">{item.title}</p>
                                    <p className="font-size-12 fw-bolder mb-0 mt-2">{item.name}</p>
                                </div>

                                <i className={collapseOpen === index ? "mdi mdi-chevron-up accor-down-icon ms-auto"
                                    : "mdi mdi-chevron-down accor-down-icon ms-auto"} style={{ fontSize: "22px" }} />
                            </Link>
                            <Collapse isOpen={collapseOpen === index}>
                                <div className="card border-0 shadow-none ms-2 mb-0">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            {item.company && <p className="fw-bold">{item.company}</p>}
                                            <p>{item.phone}</p>
                                            <p>{item.email}</p>
                                        </li>
                                    </ul>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </Col>
            ))}
            <div className="d-flex justify-content-end mt-3">
                <AllButton label="Approve" outline={false} />
            </div>
        </Row>
    )
};

export default Parties;