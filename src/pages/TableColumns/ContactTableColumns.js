import React from "react";
import { Link } from "react-router-dom";
import { contactTypes, statusTypes, sourceTypes } from "AllDummyData/ContacsDummyData";
import "../../assets/scss/custom.scss"

export let ContactTableColumns = (callback = {}) => [
    { dataField: "contact_name", text: "Name", formatter: (cell, row) => (<Link to="/contact-details" className="text-primary link-style" onClick={() => callback?.edit?.(row)} > {cell} </Link>), filterable: false },
    { dataField: "phone", text: "Phone Number", filterable: false },
    { dataField: "email", text: "Email Address", filterable: false },
    { dataField: "type", text: "Type", filterable: true, filterOptions: contactTypes },
    { dataField: "title", text: "Title", filterable: false },
    { dataField: "status", text: "Status", filterable: true, filterOptions: statusTypes },
    { dataField: "source", text: "Source", filterable: true, filterOptions: sourceTypes },
    { dataField: "tags", text: "Tags", filterable: false },
    { dataField: "agent", text: "Agent", filterable: false },
    {
        dataField: "actions", text: "", isDummyField: true,
        formatter: (cell, row) => (<Link to="#" className="btn btn-primary btn-sm edit" onClick={() => callback?.edit?.(row)} title="Edit" > <i className="fas fa-pencil-alt" /> </Link>), filterable: false,
    },
];
