import React from "react";
import { Link } from "react-router-dom";
import { EyeButton } from "pages/utils/allButton";
import Select from "react-select";
import { EllipsisVDropdown } from "pages/utils/filterDropdown";
import { DocumentsAction } from "AllDummyData/UserProfileDummyData";

export let UserTemplateTableColumns = () => [
    { dataField: "template_title", text: "Template Title" },
    { dataField: "template_for", text: "Template For" },
    { dataField: "template_stage", text: "Template Stage" },
    { dataField: "date_added", text: "Date Added" },
    {
        dataField: "actions", text: "Actions", isDummyField: true,
        formatter: (cell, row) => <EyeButton label="View / Edit" to="templates/1" title="View And Edit" />
    },
];

export const CustomUserTemplatesTableColumns = (callback = {}, UserActionRelativeTo = [], UserTimings = [], UserAgents = []) => [
    {
        dataField: "name", text: "Name",
        formatter: (cell, row) => (
            <input type="text" className="form-control" value={row.name}
                onChange={(e) => callback?.handleInput?.(row.id, "name", e.target.value)}
            />
        ),
    },
    {
        dataField: "active_relative_to", text: "Action Relative To",
        formatter: (cell, row) => {
            const selectedValue = UserActionRelativeTo.find(opt => opt.value === row.active_relative_to) || null;
            return (
                <Select value={selectedValue} onChange={(selectedOption) =>
                    callback?.handleUserAction?.(row.id, "active_relative_to", selectedOption?.value)}
                    options={UserActionRelativeTo} placeholder="Select Action" menuPortalTarget={document.body} menuPosition="fixed"
                />
            );
        },
    },
    {
        dataField: "timing", text: "Timing",
        formatter: (cell, row) => {
            const selectedValue = UserTimings.find(opt => opt.value === row.timing) || null;
            return (
                <Select value={selectedValue} onChange={(selectedOption) =>
                    callback?.handleUserAction?.(row.id, "timing", selectedOption?.value)}
                    options={UserTimings} placeholder="Select Timing" menuPortalTarget={document.body} menuPosition="fixed"
                />
            );
        },
    },
    {
        dataField: "days", text: "Days",
        formatter: (cell, row) => (
            <input type="number" className="form-control" value={row.days}
                onChange={(e) => callback?.handleInput?.(row.id, "days", e.target.value)}
            />
        ),
        headerStyle: { width: "100px" },
    },
    {
        dataField: "assigned_to", text: "Assigned To",
        formatter: (cell, row) => {
            const selectedValue = UserAgents.find(opt => opt.value === row.assigned_to) || null;

            return (
                <Select value={selectedValue} onChange={(selectedOption) =>
                    callback?.handleUserAction?.(row.id, "assigned_to", selectedOption?.value)}
                    options={UserAgents} placeholder="Select Agent" menuPortalTarget={document.body} menuPosition="fixed"
                />
            );
        },
    },
    {
        dataField: "actions", text: "", isDummyField: true,
        formatter: (cell, row) => (
            <Link to="#" className="btn btn-primary btn-sm edit" onClick={(e) => { e.preventDefault(); callback?.edit?.(row); }} title="Edit">
                <i className="fas fa-pencil-alt" />
            </Link>
        ),
    }
];

export let UserDocumentsTableColumns = (callback = {}, selectedActions, setSelectedActions) => [
    {
        dataField: "document_name",
        text: "Document Name",
        formatter: (cell, row) => (
            <div>
                <div style={{ color: "#243d78", fontWeight: 500, display: "inline-block", borderBottom: "2px solid transparent", transition: "border-color 0.2s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#000"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; }}>
                    {row.document_name}
                </div>

                <div style={{ fontSize: "13px", color: "#8c8c8c" }}>
                    Updated {row.document_date} {"  |  "}
                    Uploaded by {row.document_uploaded_by}
                </div>
            </div >
        ),
    },
    {
        dataField: "actions", text: "Actions", isDummyField: true,
        formatter: (cell, row) => (
            <div style={{ textAlign: "right" }}>
                <EllipsisVDropdown dropdownFilterOptions={DocumentsAction} width="140px" height="36px"
                    selectedOption={selectedActions[row.id]}
                    setSelectedOption={(value) => setSelectedActions(prev => ({ ...prev, [row.id]: value }))}
                />
            </div>
        ),
    },
];

export let UserTeamTableColumns = (callback = {},) => [
    { dataField: "name", text: "Name" },
    { dataField: "phone", text: "Phone" },
    { dataField: "email", text: "Email" },
    { dataField: "title", text: "Title" },
    { dataField: "type", text: "Type" },
    {
        dataField: "actions", text: "", isDummyField: true,
        formatter: (cell, row) => (
            <Link to="#" className="btn btn-primary btn-sm edit" onClick={(e) => { e.preventDefault(); callback?.edit?.(row); }} title="Edit">
                <i className="fas fa-pencil-alt" />
            </Link>
        ),
    }
];


