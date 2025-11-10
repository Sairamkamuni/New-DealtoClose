import React, { useState } from "react";
import { Row, Col } from "reactstrap";

const PhoneNumber = () => {
    const [phones, setPhones] = useState(["123-456-7890", "098-765-4321"]);
    const [newPhone, setNewPhone] = useState("");
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editingPhone, setEditingPhone] = useState(null);

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, "");
        const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (!match) return value;
        return [match[1], match[2], match[3]].filter(Boolean).join("-");
    };

    const handleAddPhone = () => {
        if (newPhone.trim()) {
            const formatted = formatPhoneNumber(newPhone.trim());
            const updated = [...phones, formatted];
            setPhones(updated);
            console.log("📞 Phone added:", formatted);
            setNewPhone("");
            setShowPhoneInput(false);
        }
    };

    const handleSelectPhone = (index) => {
        if (editMode) {
            setEditingPhone(index);
            setNewPhone(phones[index]);
            console.log("✏️ Selected for editing:", phones[index]);
        }
    };

    const handleSavePhone = () => {
        if (!newPhone.trim()) return;
        const formatted = formatPhoneNumber(newPhone.trim());
        const updated = [...phones];
        updated[editingPhone] = formatted;
        setPhones(updated);
        console.log("✅ Phone updated:", formatted);
        setEditingPhone(null);
        setNewPhone("");
    };

    return (
        <Row>
            <Col>
                {/* Header */}
                <Row className="d-flex justify-content-between align-items-center">
                    <Col>
                        <h6 className="mb-0 fw-bolder d-flex align-items-center">
                            Phone Numbers
                        </h6>
                    </Col>
                    <Col xs="auto">
                        <div className="d-flex align-items-center gap-1">
                            <button className={`btn btn-sm btn-${editMode ? "danger" : "secondary"}`}
                                onClick={() => {
                                    setEditMode(!editMode);
                                    console.log(editMode ? "❌ Exited edit mode" : "✏️ Entered edit mode");
                                }}  >
                                <i className={`fas ${editMode ? "fa-times" : "fa-pencil-alt"}`} />
                            </button>
                            <button
                                className={`btn btn-sm btn-${showPhoneInput ? "danger" : "primary"}`}
                                onClick={() => setShowPhoneInput(!showPhoneInput)}
                            >
                                <i className={`fas ${showPhoneInput ? "fa-times" : "fa-plus-circle"}`} />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/* Display phones */}
                {phones.map((phone, index) => (
                    <div
                        key={index}
                        className={`d-flex align-items-center justify-content-between mt-2 ${editMode && editingPhone !== index ? "border border-warning" : ""
                            }`}
                        onClick={() => handleSelectPhone(index)}
                        style={{
                            cursor: editMode ? "pointer" : "default",
                            transition: "all 0.2s ease",
                        }}
                    >
                        {editingPhone === index ? (
                            <div className="d-flex align-items-center gap-2 flex-grow-1" onClick={(e) => e.stopPropagation()} >
                                <input
                                    type="text"
                                    className="form-control"
                                    value={newPhone}
                                    onChange={(e) => setNewPhone(formatPhoneNumber(e.target.value))}
                                    autoFocus
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSavePhone();
                                    }}
                                >
                                    <i className="fas fa-check" />
                                </button>
                            </div>
                        ) : (
                            <p className="mb-0 flex-grow">
                                <i className="fas fa-phone-alt me-2" /> {phone}
                            </p>
                        )}
                    </div>
                ))}

                {/* Add new phone */}
                {showPhoneInput && (
                    <div className="d-flex align-items-center gap-2 mt-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter phone number"
                            value={newPhone}
                            onChange={(e) => setNewPhone(formatPhoneNumber(e.target.value))}
                        />
                        <button className="btn btn-success btn-sm" onClick={handleAddPhone}>
                            <i className="fas fa-check" />
                        </button>
                    </div>
                )}
            </Col>
        </Row>
    );
};

export default PhoneNumber;
