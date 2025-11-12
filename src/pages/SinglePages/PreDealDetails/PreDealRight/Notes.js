import React, { useState } from "react";
import { Card, Collapse, Row, Col } from "reactstrap";
import AllButton from "pages/utils/allButton";
import classnames from "classnames"
import { noteText1, noteText2, noteAgentUser, noteDate, noteTime } from "AllDummyData/PreDealDummyData";

const Notes = () => {
    const [openFolders, setOpenFolders] = useState(true);

    const newToggleFolder = () => {
        setOpenFolders(!openFolders)
    }
    return (
        <Card className="accordion" id="accordion">
            <div className="accordion-item">
                <div className={classnames("accordion-button accordion-header", { collapsed: !openFolders })} onClick={newToggleFolder}
                    style={{ cursor: "pointer" }}>
                    <div className="w-100 me-3 d-flex justify-content-between align-items-center">
                        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }} >Notes </h2>
                    </div>
                </div>

                <Collapse isOpen={openFolders} className="accordion-collapse">
                    <div className="p-3">
                        <Row>
                            <Col>
                                <textarea rows="4" className="form-control" placeholder="Write your note here..." />
                                <AllButton label="Add Note" outline={false} onClick={() => console.log("Button Clicked")} className="mt-3" />

                                <div className="p-2 rounded mt-3 mb-3" style={{ border: "1px solid #c0c8d1ff" }} >
                                    <p className="mb-2 ms-4"> {noteText1}</p>
                                    <div className="d-flex justify-content-between px-4">
                                        <p className="mb-0 text-start text-primary fw-medium"> {noteAgentUser} </p>
                                        <p className="mb-0 text-end">{noteDate}, {noteTime}</p>
                                    </div>
                                </div>

                                <div className="p-2 rounded" style={{ border: "1px solid #c0c8d1ff", }} >
                                    <p className="mb-2 ms-4">{noteText2} </p>
                                    <div className="d-flex justify-content-between px-4">
                                        <p className="mb-0 text-start text-primary fw-medium"> {noteAgentUser} </p>
                                        <p className="mb-0 text-end">{noteDate}, {noteTime}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        </Card>
    );
};

export default Notes;
