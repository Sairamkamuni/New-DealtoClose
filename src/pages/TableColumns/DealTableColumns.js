import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Input } from "reactstrap";
import { CalendarButton, SideDotsButton } from "pages/utils/allButton";
import { OptionsDropdown, OptionsDropdownNew } from "pages/utils/filterDropdown";
import { taskDropdownOption } from "AllDummyData/DealsDummyData";

export let DealTableColumns = (callback = {}) => [
    {
        dataField: "property_address",
        text: "Property Address",
        formatter: (cell, row) => (
            <Link to={`/deals-details`} className="text-primary">
                {cell || "N/A"}
            </Link>
        ),
    },
    { dataField: "client_name", text: "Client Name" },
    { dataField: "type", text: "Type" },
    { dataField: "sub_type", text: "Sub-Type" },
    { dataField: "source", text: "Source" },
    { dataField: "tags", text: "Tags" },
    { dataField: "creation_date", text: "Creation Date" },
    { dataField: "created_by", text: "Created By" },
    {
        dataField: "actions",
        text: "",
        isDummyField: true,
        formatter: (cell, row) => (
            <Link
                to="#"
                className="btn btn-primary btn-sm edit"
                onClick={(e) => {
                    e.preventDefault();
                    callback?.edit?.(row);
                }}
                title="Edit"
            >
                <i className="fas fa-pencil-alt" />
            </Link>
        ),
    },
];

export let DealTaskTableColumns = (callback = {}, DocumentAgentUser = [], DocumentStatus = []) => [
    {
        dataField: "checkbox", text: "", isDummyField: true,
        formatter: (cell, row) => (<Input type="checkbox" checked={row.status === "Completed"}
            onChange={() => callback?.handleCheckboxChange?.(row.id)} />),
        headerStyle: { width: "50px" },
    },
    {
        dataField: "task", text: "Task",
        formatter: (cell, row) => (
            <span style={{ textDecoration: row.status === "Completed" ? "line-through" : "none", color: "#000000ff", }} >
                {row.task}
            </span>
        ),
        headerStyle: { width: "500px" },
    },
    {
        dataField: "due_date", text: "Due Date",
        formatter: (cell, row) => {
            const isOverdue = new Date(row.due_date) < new Date() && row.status !== "Completed";
            const formattedDate = new Date(row.due_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", });
            return (
                <span className="d-flex align-items-center" style={{ color: row.status === "Completed" ? "#000000ff" : isOverdue ? "red" : "black" }}>
                    <CalendarButton asIconOnly className={`me-2 mb-1 ${row.status === "Completed" ? "text-muted" : isOverdue ? "text-danger" : "text-dark"}`} />
                    {formattedDate}
                </span>
            );
        },
    },
    {
        dataField: "assigned_to", text: "Assigned To",
        formatter: (cell, row) => {
            const isCompleted = row.status === "Completed";
            return (
                <Select value={row.assigned_to ? { label: row.assigned_to, value: row.assigned_to } : null}
                    onChange={(selectedOption) => callback?.handleAssignedChange?.(row.id, selectedOption?.value)}
                    options={DocumentAgentUser.map((user) => ({ label: user, value: user }))}
                    isDisabled={isCompleted}
                    styles={{
                        control: (provided, state) => ({
                            ...provided, backgroundColor: isCompleted ? "#f8f9fa" : "white",
                            borderColor: state.isFocused ? "#80bdff" : "#ced4da",
                            boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(0,123,255,.25)" : "none",
                            minHeight: "32px", height: "32px",
                        }),
                        singleValue: (provided) => ({ ...provided, color: isCompleted ? "#6c757d" : "#000", }),
                        indicatorsContainer: (provided) => ({ ...provided, height: "30px" }),
                        dropdownIndicator: (provided) => ({ ...provided, padding: "2px", }),
                        valueContainer: (provided) => ({ ...provided, padding: "0 8px", }),
                        menu: (provided) => ({ ...provided, zIndex: 9999, }),
                    }}
                />
            );
        },
    },
    {
        dataField: "status",
        text: "Status",
        formatter: (cell, row) => {
            const isCompleted = row.status === "Completed";
            return (
                <Select value={row.status ? { label: row.status, value: row.status } : null}
                    onChange={(selectedOption) => callback?.handleStatusChange?.(row.id, selectedOption?.value)}
                    options={DocumentStatus.map((status) => ({ label: status, value: status }))}
                    isDisabled={isCompleted}
                    styles={{
                        control: (provided, state) => ({
                            ...provided, backgroundColor: isCompleted ? "#f8f9fa" : "white",
                            borderColor: state.isFocused ? "#80bdff" : "#ced4da",
                            boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(0,123,255,.25)" : "none",
                            minHeight: "32px", height: "32px",
                        }),
                        singleValue: (provided) => ({ ...provided, color: isCompleted ? "#6c757d" : "#000", }),
                        indicatorsContainer: (provided) => ({ ...provided, height: "30px" }),
                        dropdownIndicator: (provided) => ({ ...provided, padding: "2px", }),
                        valueContainer: (provided) => ({ ...provided, padding: "0 8px", }),
                        menu: (provided) => ({ ...provided, zIndex: 9999, }),
                    }}
                />

            );
        },
    },
    {
        dataField: "actions", text: "", isDummyField: true,
        formatter: (cell, row) => (
            <OptionsDropdownNew options={taskDropdownOption} />
        ),
        headerStyle: { width: "60px" },
    },
];

export let DealDockTableColumns = (callback = {}) => [
    { dataField: "checkbox", text: "", isDummyField: true, headerStyle: { width: "40px" } },
    { dataField: "title", text: "File Name", },
    { dataField: "added_by", text: "Added By", },
    { dataField: "date", text: "Date", },
    { dataField: "time", text: "Time", },
    { dataField: "sing_status", text: "Signature Status", },
    {
        dataField: "actions", text: "", isDummyField: true,
        formatter: (cell, row) => (
            <Link to="#" className="btn btn-primary btn-sm edit" onClick={(e) => { e.preventDefault(); callback?.edit?.(row); }} title="Edit" >
                <i className="fas fa-pencil-alt" />
            </Link>
        ),
    },
];

export let DealContactTableColumns = (callback = {}) => [
    { dataField: "name", text: "Full Name", },
    { dataField: "role", text: "Role", },
    { dataField: "company", text: "Company", },
    { dataField: "phone", text: "Phone", },
    { dataField: "email", text: "Email", },
    {
        dataField: "actions", text: "", isDummyField: true,
        formatter: (cell, row) => (
            <Link to="#" className="btn btn-primary btn-sm edit" onClick={(e) => { e.preventDefault(); callback?.edit?.(row); }} title="Edit" >
                <i className="fas fa-pencil-alt" />
            </Link>
        ),
    },
];

export let DealComplianceColumns = (callback = {}, ComplianceComments = []) => [
    {
        dataField: "", text: "View Doc", isDummyField: true,
        formatter: (cell, row) => (
            <button className="btn btn-primary" role="button">View</button>
        ),
        headerStyle: { width: "100px" },
    },
    { dataField: "sr_no", text: "Sr. No.", headerStyle: { width: "100px" }, },
    { dataField: "checklist_name", text: "Property Address", headerStyle: { width: "400px" }, },
    {
        dataField: "comments",
        text: "Comments",
        formatter: (cell, row) => {
            return (
                <Select value={row.comments ? { label: row.comments, value: row.comments } : null}
                    onChange={(selectedOption) => callback?.handleCommentsChange?.(row.id, selectedOption?.value)}
                    options={ComplianceComments.map((comments) => ({ label: comments, value: comments }))}
                    styles={{
                        control: (provided, state) => ({
                            ...provided, backgroundColor: "white", borderColor: state.isFocused ? "#80bdff" : "#ced4da",
                            boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(0,123,255,.25)" : "none",
                            minHeight: "32px", height: "32px",
                        }),
                        valueContainer: (provided) => ({ ...provided, padding: "0 8px", }),
                        singleValue: (provided) => ({ ...provided, color: "#817979ff", }),
                        indicatorsContainer: (provided) => ({ ...provided, height: "30px", }),
                        dropdownIndicator: (provided) => ({ ...provided, padding: "2px", }),
                        menu: (provided) => ({ ...provided, zIndex: 9999, }),
                    }}
                />
            );
        },
        headerStyle: { width: "650px" },
    },
    {
        dataField: "", text: "Attach", isDummyField: true,
        formatter: (cell, row) => (
            <button className="btn btn-primary" role="button">Upload</button>
        ),
        headerStyle: { width: "100px" },
    },
    {
        dataField: "actions", text: "Actions", isDummyField: true,
        formatter: (cell, row) => (
            <Link to="#" className="btn btn-primary btn-sm edit" onClick={(e) => { e.preventDefault(); callback?.edit?.(row); }} title="Edit" >
                <i className="fas fa-pencil-alt" />
            </Link>
        ),
    },
];