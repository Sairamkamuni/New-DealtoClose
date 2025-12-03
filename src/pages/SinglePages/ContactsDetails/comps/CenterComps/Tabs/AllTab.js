import React, { useState } from "react";
import { InputField } from "pages/InputFields/InputFields";
import AllButton from "pages/utils/allButton";
import { Row, Col } from "reactstrap";

const AllTab = ({ initialData }) => {
    const [notes, setNotes] = useState(
        initialData.map((item) => ({
            ...item,
            isEditing: false,
            tempNote: item.note,
        }))
    );

    const handleEditToggle = (index) => {
        const updated = [...notes];
        updated[index].isEditing = true;
        setNotes(updated);
    };

    const handleChange = (index, value) => {
        const updated = [...notes];
        updated[index].tempNote = value;
        setNotes(updated);
    };

    const handleSave = (index) => {
        const updated = [...notes];
        updated[index].note = updated[index].tempNote;
        updated[index].isEditing = false;
        console.log("Saved Note:", updated[index]);
        setNotes(updated);
    };

    const handleCancel = (index) => {
        const updated = [...notes];
        updated[index].tempNote = updated[index].note;
        updated[index].isEditing = false;
        console.log("Cancelled Edit:", updated[index]);
        setNotes(updated);
    };

    return (
        <>
            {notes.map((item, index) => (
                <div key={index} className="p-3 mt-3" style={{ border: "1px solid #dad1e0", borderRadius: "5px", backgroundColor: "#f9f7fa" }} >
                    {item.isEditing ? (
                        <>
                            <InputField name="history_notes" rows="3" type="textarea" value={item.tempNote} onChange={(e) => handleChange(index, e.target.value)} />
                            <div className="d-flex gap-3 mt-2" >
                                <AllButton label="Save" width="60px" outline={false} onClick={() => handleSave(index)} />
                                <AllButton color="danger" label="Cancel" width="80px" outline={false} onClick={() => handleCancel(index)} />

                            </div>
                        </>
                    ) : (
                        <Row >
                            <Col md="12" className="d-flex">
                                <i className="bx bx-comment me-2" style={{ fontSize: "18px", marginTop: "3px" }} />
                                <p className="mb-2" style={{ fontSize: "14px", color: "black" }}>
                                    {item.note}
                                </p>
                            </Col>
                            <Col md="12" className="d-flex">
                                <div className="d-flex" style={{ marginLeft: "4px" }} >
                                    <p className="text-muted mb-0 ms-4 text-muted">
                                        {item.date}
                                    </p>
                                    <i className="bx bx-pencil ms-2" onClick={() => handleEditToggle(index)} style={{ cursor: "pointer", fontSize: "18px" }} />
                                </div>
                            </Col>
                        </Row>
                    )}
                </div >
            ))}


            <div className="mt-3 p-3" style={{ border: "1px solid #dad1e0", borderRadius: "5px", backgroundColor: "#f9f7fa" }} >
                <Row>
                    <Col md="12" className="d-flex">
                        <i className="far fa-envelope-open me-2" style={{ fontSize: "18px" }} />
                        <p className="mb-2 fw-bold" style={{ fontSize: "14px" }} > Welcome to our service!</p>
                    </Col>
                    <Col md="12" className="mb-0 ms-4">
                        <div className="d-flex">
                            <p className="me-2">From: </p>
                            <p>support@example.com | </p>
                            <p className="ms-2 me-2"> To: </p>
                            <p>support@example.com</p>
                        </div>
                        <div className="mb-3" style={{ marginTop: "-8px", marginLeft: "-22px" }}>
                            <p className="mb-1 ms-4 fw-bold"> Dear Alice, thank you for signing up... </p>
                            <p className="text-muted mb-0 ms-4 text-dark"> Aug 6, 2025, 5:40 AM </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    );
};

export default AllTab;
