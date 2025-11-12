import React from "react";
import { Link } from "react-router-dom";

export let DealTableColumns = (callback = {}) => [
    { dataField: "property_address", text: "Property Address", formatter: (cell, row) => (<Link to={`/deals-details`} className="text-primary"> {cell || "N/A"} </Link>) },
    { dataField: 'client_name', text: 'Client Name' },
    { dataField: 'type', text: 'Type' },
    { dataField: 'sub_type', text: 'Sub-Type' },
    { dataField: 'source', text: 'Source' },
    { dataField: 'tags', text: 'Tags' },
    { dataField: 'creation_date', text: 'Creation Date' },
    { dataField: 'created_by', text: 'Created By' },
    {
        dataField: 'actions',
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
        )
    }
];
