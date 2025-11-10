import React, { useState } from "react";

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
                <div key={index} className="p-3 rounded mb-3" style={{ border: "1px solid #c0c8d1ff" }}>
                    {item.isEditing ? (
                        <>
                            <textarea
                                className="form-control mb-2"
                                rows={2}
                                value={item.tempNote}
                                onChange={(e) => handleChange(index, e.target.value)}
                            />
                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => handleSave(index)}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleCancel(index)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h5 className="fw-bold mb-2 text-dark">
                                <i className="far fa-comment-alt me-2"></i>
                                {item.note}
                            </h5>
                            <p className="text-muted mb-0 ms-4 text-dark">
                                {item.date}
                                <i
                                    className="fas fa-pencil-alt ms-3"
                                    onClick={() => handleEditToggle(index)}
                                    style={{ cursor: "pointer" }}
                                ></i>
                            </p>
                        </>
                    )}
                </div>
            ))}

            <div className="p-3 rounded" style={{ border: "1px solid #c0c8d1ff", }} >
                <h5 className="fw-bold mb-1 text-dark"> <i className="far fa-envelope-open me-2"></i> Welcome to our service! </h5>
                <p className="text-muted mb-0 ms-4 text-dark">
                    <span className="me-2">From:</span>support@example.com |
                    <span className="me-2"> To:</span>alice@example.com
                </p>
                <p className="mb-0 ms-4 text-dark" > Dear Alice, thank you for signing up... </p>
                <p className="text-muted mb-0 ms-4 text-dark"> Aug 6, 2025, 5:40 AM </p>
            </div>
        </>

    );
};

export default AllTab;
