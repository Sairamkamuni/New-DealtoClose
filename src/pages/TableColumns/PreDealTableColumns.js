import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/custom.scss"
import { PreDealClient, PreDealType, PreDealSubType, PreDealSource, PreDealTags, PreDealCreatedBy } from "AllDummyData/PreDealDummyData";

export const PreDealTableColumns = (callback) => [
    { dataField: "property_address", text: "Property Address", formatter: (cell) => (<Link to="/pre-deals-details" className="text-primary">{cell || "N/A"}</Link>) },
    { dataField: "client_name", text: "Client Name", filterable: true, filterOptions: PreDealClient },
    { dataField: "type", text: "Type", filterable: true, filterOptions: PreDealType },
    { dataField: "sub_type", text: "Sub-Type", filterable: true, filterOptions: PreDealSubType },
    { dataField: "source", text: "Source", filterable: true, filterOptions: PreDealSource },
    { dataField: "tags", text: "Tags", filterable: true, filterOptions: PreDealTags },
    { dataField: "creation_date", text: "Creation Date" },
    { dataField: "created_by", text: "Created By", filterable: true, filterOptions: PreDealCreatedBy },
    {
        dataField: "actions",
        text: "",
        isDummyField: true,
        formatter: (_, row) => (
            <Link
                to="#"
                className="btn btn-primary btn-sm edit"
                onClick={(e) => {
                    callback?.edit?.(row);
                }}
                title="Edit"
            >
                <i className="fas fa-pencil-alt" />
            </Link>
        ),
    },
];
