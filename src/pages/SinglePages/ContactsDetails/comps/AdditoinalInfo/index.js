import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";

const AdditionalInfo = () => {
    const [info, setInfo] = useState({ agent: "Alice Smith", source: "Zillow.com", dob: "1990-06-15", home_anni: "2022-04-10", });
    const [editMode, setEditMode] = useState(false);
    const [editingField, setEditingField] = useState(null);

    const handleFieldClick = (field) => {
        if (editMode) setEditingField(field);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = () => {
        // Do nothing on blur to allow save button usage
    };

    const handleSave = (field) => {
        console.log(`✅ Saved ${field}:`, info[field]);
        setEditingField(null);
    };

    const hasText = (text) => text && text.trim().length > 0;

    const formatDateWithSuffix = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();
        const suffix =
            day % 10 === 1 && day !== 11
                ? "st"
                : day % 10 === 2 && day !== 12
                    ? "nd"
                    : day % 10 === 3 && day !== 13
                        ? "rd"
                        : "th";
        return `${month} ${day}${suffix}, ${year}`;
    };

    return (
        <Card className="shadow-sm" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>
                <h5 className="fw-bolder text-center mb-0">Additional Information</h5>

                {/* Agent */}
                <div className={`mb-2 py-1 position-relative ${editMode && hasText(info.agent) ? "border-bottom border-secondary" : ""}`}
                    onClick={() => handleFieldClick("agent")} style={{ cursor: editMode ? "pointer" : "default" }} >
                    <i className="fas fa-user-alt me-2" />
                    {editingField === "agent" ? (
                        <>
                            <input type="text" name="agent" value={info.agent} onChange={handleChange} onBlur={handleBlur} autoFocus
                                className="border-0 border-bottom border-dark bg-transparent from-control w-75"
                            />
                            <button className={`btn btn-sm btn-${editMode ? "success" : ""} ms-4`}
                                style={{ width: "26px", height: "26px", borderRadius: "50%" }}
                                onClick={(e) => { e.stopPropagation(); handleSave("agent"); }}
                            >
                                <i className={`fas ${editMode ? "fas fa-check" : "fa-times"}`} />
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{info.agent || <span className="text-muted">No Agents</span>}</span>
                            <button className="btn btn-sm btn-secondary edit-icon position-absolute end-0"
                                style={{ opacity: 0, transition: "opacity 0.2s ease", borderRadius: "50%", width: "26px", height: "26px", padding: 0 }}
                                onClick={(e) => { e.stopPropagation(); setEditMode("agent"); }}
                            >
                                <i className="fas fa-pencil-alt" />
                            </button>
                        </>
                    )}
                </div>

                {/* DOB */}
                <div
                    className={`mb-2 py-1 ${editMode && hasText(info.dob) ? "border-bottom border-warning" : ""}`}
                    onClick={() => handleFieldClick("dob")}
                    style={{ cursor: editMode ? "pointer" : "default" }}
                >
                    <i className="fas fa-birthday-cake me-2" />
                    {editingField === "dob" ? (
                        <>
                            <input
                                type="date"
                                name="dob"
                                value={info.dob}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus
                                className="border-0 border-bottom border-dark bg-transparent w-75"
                            />
                            <button
                                className="btn btn-success btn-sm ms-4"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSave("dob");
                                }}
                            >
                                <i className="fas fa-check" />
                            </button>
                        </>
                    ) : hasText(info.dob) ? (
                        <span>{formatDateWithSuffix(info.dob)}</span>
                    ) : (
                        <span className="text-muted">No date of birth</span>
                    )}
                </div>

            </CardBody>
            <style>
                {`
                    .mb-2:hover .edit-icon {
                        opacity: 1 !important;
                    }
                `}
            </style>
        </Card>
    );
};

export default AdditionalInfo;
