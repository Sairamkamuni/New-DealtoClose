import React from "react";
import { Row, Col } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const Dates = ({ formType, formData, setFormData }) => {

    const handleDateChange = (selectedDates, name) => {
        setFormData(prev => ({
            ...prev,
            [name]: selectedDates[0] || ""
        }));
    };

    return (
        <div id="section-5">
            <div className="d-block mt-2">
                <h3 className="modal-title fw-bold mb-1">Date&apos;s</h3>
            </div>

            <Row className="mt-2">

                {/* First Date Field */}
                <Col>
                    <div className="mb-2">
                        <label>Acceptance Date</label>

                        <Flatpickr
                            className="form-control d-block"
                            name="acceptance_date"
                            value={formData[formData.acceptance_date] || ""}
                            options={{
                                altInput: true,
                                time_24hr: false,
                                altFormat: "F j, Y",
                            }}
                            onChange={(dates) => handleDateChange(dates)}
                            placeholder="MM, DD, YYYY"
                        />
                    </div>
                </Col>

                {/* Second Date Field */}
                <Col>
                    <div className="mb-2">
                        <label>Closing Date</label>

                        <Flatpickr
                            className="form-control d-block"
                            name="closing_date"
                            value={formData[formData.closing_date] || ""}
                            options={{
                                altInput: true,
                                time_24hr: false,
                                altFormat: "F j, Y",
                            }}
                            onChange={(dates) => handleDateChange(dates)}
                            placeholder="MM, DD, YYYY"
                        />
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Dates;


// import React from "react";
// import { Row, Col } from "reactstrap";
// import "flatpickr/dist/themes/material_blue.css";
// import Flatpickr from "react-flatpickr";

// const Dates = ({ formType, formData, setFormData }) => {

//     const handleDateChange = (selectedDates, field) => {
//         setFormData(prev => ({
//             ...prev,
//             [field]: selectedDates[0] || ""
//         }));
//     };

//     const isBuyer = formType === "Buyer";

//     const label1 = isBuyer ? "Listing Date" : "Acceptance Date";
//     const label2 = isBuyer ? "Expiry Date" : "Closing Date";

//     const field1 = isBuyer ? "listing_date" : "acceptance_date";
//     const field2 = isBuyer ? "expiry_date" : "closing_date";

//     return (
//         <div id="section-5">
//             <div className="d-block mt-2">
//                 <h3 className="modal-title fw-bold mb-1">Date&apos;s</h3>
//             </div>

//             <Row className="mt-2">

//                 {/* First Date Field */}
//                 <Col>
//                     <div className="mb-2">
//                         <label>{label1}</label>

//                         <Flatpickr
//                             className="form-control d-block"
//                             name={field1}
//                             value={formData[field1] || ""}
//                             options={{
//                                 altInput: true,
//                                 time_24hr: false,
//                                 altFormat: "F j, Y",
//                             }}
//                             onChange={(dates) => handleDateChange(dates, field1)}
//                             placeholder="MM, DD, YYYY"
//                         />
//                     </div>
//                 </Col>

//                 {/* Second Date Field */}
//                 <Col>
//                     <div className="mb-2">
//                         <label>{label2}</label>

//                         <Flatpickr
//                             className="form-control d-block"
//                             name={field2}
//                             value={formData[field2] || ""}
//                             options={{
//                                 altInput: true,
//                                 time_24hr: false,
//                                 altFormat: "F j, Y",
//                             }}
//                             onChange={(dates) => handleDateChange(dates, field2)}
//                             placeholder="MM, DD, YYYY"
//                         />
//                     </div>
//                 </Col>

//             </Row>
//         </div>
//     );
// };

// export default Dates;
