import React, { useState } from "react";
import { Row, Col } from "reactstrap";

const EmailAddress = () => {
    const [emails, setEmails] = useState(["SairamKmuni@gmail.com", "RajKamuni@gmail.com"]);
    const [newEmail, setNewEmail] = useState("");
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddEmail = () => {
        if (newEmail.trim()) {
            const updated = [...emails, newEmail.trim()];
            setEmails(updated);
            console.log("📧 Email added:", newEmail);
            setNewEmail("");
            setShowEmailInput(false);
        }
    };

    const handleEditEmail = (index) => {
        setEditingIndex(index);
        setNewEmail(emails[index]);
        console.log("✏️ Editing email:", emails[index]);
    };

    const handleSaveEmail = () => {
        if (!newEmail.trim()) return;
        const updated = [...emails];
        updated[editingIndex] = newEmail.trim();
        setEmails(updated);
        console.log("✅ Email updated:", newEmail);
        setEditingIndex(null);
        setNewEmail("");
    };

    return (
        <Row className="mt-3">
            <Col>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 fw-bolder">Email Address</h6>
                    <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => setEditMode(!editMode)} >
                            <i className="fas fa-pencil-alt" />
                        </button>
                        <button className="btn btn-sm btn-outline-primary" onClick={() => setShowEmailInput(true)}>
                            <i className="fas fa-plus-circle" />
                        </button>
                    </div>
                </div>

                {emails.map((email, index) => (
                    <div
                        key={index}
                        className="d-flex align-items-center justify-content-between mt-2"
                    >
                        {editingIndex === index ? (
                            <div className="d-flex align-items-center gap-2 flex-grow-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    autoFocus
                                />
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={handleSaveEmail}
                                >
                                    <i className="fas fa-check" />
                                </button>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => {
                                        setEditingIndex(null);
                                        setNewEmail("");
                                    }}
                                >
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="mb-0 flex-grow-1">
                                    <i className="fas fa-envelope me-2" /> {email}
                                </p>
                                {editMode && (
                                    <button
                                        className="btn btn-sm btn-outline-success"
                                        onClick={() => handleEditEmail(index)}
                                    >
                                        <i className="fas fa-pencil-alt" />
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                ))}

                {/* Add new email input */}
                {showEmailInput && (
                    <div className="d-flex align-items-center gap-2 mt-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email address"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <button className="btn btn-success btn-sm" onClick={handleAddEmail} >
                            <i className="fas fa-check" />
                        </button>
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                                setShowEmailInput(false);
                                setNewEmail("");
                            }}
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                )}
            </Col>
        </Row>
    );
};

export default EmailAddress;
