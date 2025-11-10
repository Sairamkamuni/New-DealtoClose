import React from "react";
import { Row, Col } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

const Dates = ({ formType, setFormType }) => {
    return (
        <div id="section-5">
            <div className="d-block mt-2">
                <h3 className="modal-title fw-bold mb-1">Date&apos;s</h3>
            </div>
            <Row className="mt-2">
                <Col>
                    <div className="mb-2">
                        <label>Acceptance Date</label>
                        <Flatpickr
                            className="form-control d-block"
                            options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                            placeholder="MM, DD, YYYY"
                        />
                    </div>
                </Col>
                <Col>
                    <div className="mb-2">
                        <label>Closing Date</label>
                        <Flatpickr
                            className="form-control d-block"
                            options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                            placeholder="MM, DD, YYYY"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Dates;
