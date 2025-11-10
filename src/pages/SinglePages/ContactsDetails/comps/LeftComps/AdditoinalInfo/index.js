import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";

const AdditionalInfo = () => {
    const [info, setInfo] = useState({ agent: "Alice Smith", source: "Zillow.com", dob: "1990-06-15", home_anni: "2022-04-10", });
    const [editMode, setEditMode] = useState(false);
    const [editingField, setEditingField] = useState(null);
    const [tags, setTags] = useState(["VIP"]);
    const [newTag, setNewTag] = useState("");
    const [showTagInput, setShowTagInput] = useState(false);
    const [family, setFamily] = useState(["Robert Smith (Spouse)"]);
    const [newFamily, setNewFamily] = useState("");
    const [showFamilyInput, setShowFamilyInput] = useState(false);

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
                <div className={`mb-2 py-1 mt-3 position-relative`} style={{ cursor: "pointer" }}>
                    <i className="fas fa-user-tie me-2" />
                    <span>{info.agent}</span>
                </div>

                <div className={`mb-2 py-1 position-relative`} style={{ cursor: "pointer" }}>
                    <i className="fas fa-globe me-2" />
                    <span>{info.source}</span>
                </div>

                <div className={`mb-2 py-1 position-relative`} style={{ cursor: "pointer" }}>
                    <i className="fas fa-birthday-cake me-2" />
                    <span>{info.dob}</span>
                </div>

                <div className={`mb-2 py-1 position-relative`} style={{ cursor: "pointer" }}>
                    <i className="fas fa-calendar me-2" />
                    <span>{info.home_anni}</span>
                </div>


                {/* DOB */}
                {/* <div
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
                </div> */}

                <div className="mt-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 fw-semibold">Tags</h6>
                        <button
                            className="btn btn-add-sm"
                            onClick={() => setShowTagInput(!showTagInput)}
                        >
                            <i className="fas fa-plus-circle me-1" /> Add
                        </button>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge rounded-pill bg-light text-dark px-3 py-2 d-flex align-items-center"
                            >
                                {tag}
                                <i
                                    className="fas fa-times ms-2 text-danger"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        console.log("Tag removed:", tag);
                                        setTags(tags.filter((_, i) => i !== index));
                                    }}
                                ></i>
                            </span>
                        ))}
                    </div>

                    {showTagInput && (
                        <div className="d-flex align-items-center gap-2 mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter tag"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                            />
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => {
                                    if (newTag.trim() !== "") {
                                        setTags([...tags, newTag.trim()]);
                                        console.log("Tag added:", newTag.trim());
                                        setNewTag("");
                                        setShowTagInput(false);
                                    }
                                }}
                            >
                                <i className="fas fa-check" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                    <h6 className="mb-0 fw-semibold">Family Members</h6>
                    <button
                        className="btn btn-add-sm"
                        onClick={() => setShowFamilyInput(!showFamilyInput)}
                    >
                        <i className="fas fa-plus-circle me-1" /> Add
                    </button>
                </div>

                <div className="mt-2">
                    {family.map((member, index) => (
                        <p key={index} className="mb-1">
                            <i className="fas fa-user-friends me-2" /> {member}
                            <i
                                className="fas fa-times text-danger ms-2"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    console.log("Family member removed:", member);
                                    setFamily(family.filter((_, i) => i !== index));
                                }}
                            ></i>
                        </p>
                    ))}
                </div>

                {showFamilyInput && (
                    <div className="d-flex align-items-center gap-2 mt-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter family member"
                            value={newFamily}
                            onChange={(e) => setNewFamily(e.target.value)}
                        />
                        <button
                            className="btn btn-success btn-sm"
                            onClick={() => {
                                if (newFamily.trim() !== "") {
                                    setFamily([...family, newFamily.trim()]);
                                    console.log("Family member added:", newFamily.trim());
                                    setNewFamily("");
                                    setShowFamilyInput(false);
                                }
                            }}
                        >
                            <i className="fas fa-check" />
                        </button>
                    </div>
                )}
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
