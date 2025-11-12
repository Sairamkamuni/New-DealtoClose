import React, { useState } from "react";
import { Card, Collapse, Row, Col } from "reactstrap";
import AllButton, { AddPlusCircleButton } from "pages/utils/allButton";
import classnames from "classnames"

const Tasks = () => {
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
                        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }} >Tasks </h2>
                    </div>

                    <div className="d-flex gap-2 me-3">
                        <AddPlusCircleButton label="Add Form" onClick={(e) => { console.log("Button 1 Clicked") }} />
                    </div>
                </div>

                <Collapse isOpen={openFolders} className="accordion-collapse">
                    <div className="p-3">
                        <Row>
                            <Col>
                                <textarea rows="4" className="form-control" placeholder="Write your note here..." />
                                <AllButton label="Add Task" outline={false} onClick={() => console.log("Button Clicked")} className="mt-3" />
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        </Card>
    );
};

export default Tasks;
