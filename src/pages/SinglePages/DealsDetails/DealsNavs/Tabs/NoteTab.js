import React from "react";
import { Row, Col, Card } from "reactstrap";
import AllButton from "pages/utils/allButton";
import { noteText1, noteText2, noteAgentUser, noteDate, noteTime } from "AllDummyData/DealsDummyData";



const NoteTab = () => {

    return (
        <Row>
            <Col>
                <Card className="p-3">
                    <div className="mb-3">
                        <textarea rows="4" className="form-control" placeholder="Write your note here..." />
                        <AllButton outline={false} className="mt-3 mb-2" label="Add Note" width="110px" onClick={() => console.log("Button clicked")} />
                    </div>

                    {/* Notes List */}
                    <div className="p-2 rounded mb-3" style={{ border: "1px solid #c0c8d1ff" }} >
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
                </Card>
            </Col>
        </Row>
    );
};

export default NoteTab;
