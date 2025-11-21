import React from "react";
import Select from "react-select";

export let DashboardTaskTableColumns = (callback = {}, TaskAssignedTo = [], TaskStatus = []) => [
    { dataField: "task_name", text: "Task Name" },
    {
        dataField: "assigned_to", text: "Assigned To",
        formatter: (cell, row) => {
            const selectedValue = TaskAssignedTo.find(opt => opt.label === row.assigned_to) || null;

            return (
                <Select value={selectedValue} onChange={(selectedOption) => callback?.handleAssignedAgent?.(row.id, "assigned_to", selectedOption?.label)}
                    options={TaskAssignedTo} placeholder="Select Agent" menuPortalTarget={document.body} menuPosition="fixed"
                />
            );
        },
        headerStyle: { width: "250px" },
    },

    { dataField: "date_of_action", text: "Date of Action" },
    { dataField: "deal_name", text: "Deal Name" },

    {
        dataField: "status", text: "Status",
        formatter: (cell, row) => {
            const selectedValue = TaskStatus.find(opt => opt.label === row.status) || null;
            return (
                <Select value={selectedValue} onChange={(selectedOption) => callback?.handleTask?.(row.id, "status", selectedOption?.label)}
                    options={TaskStatus} placeholder="Select Status" menuPortalTarget={document.body} menuPosition="fixed"
                />
            );
        },
        headerStyle: { width: "150px" },
    },

    { dataField: "client_type", text: "Client Type" },
    { dataField: "type", text: "Type" },
    { dataField: "checklist_type", text: "Checklist Type" },
    { dataField: "closing_date", text: "Closing Date" },
];


export let DashboardDealTableColumns = () => [
    { dataField: "property_address", text: "Property Address" },
    { dataField: "closing_date", text: "Closing Date" },
    { dataField: "client_name", text: "Client Name" },
    { dataField: "sale_price", text: "Sale Price" },
    { dataField: "type", text: "Type" },
    { dataField: "status", text: "Status" },
    { dataField: "deal_owner", text: "Deal Owner" },
];

export let DashboardPreDealTableColumns = () => [
    { dataField: "property_address", text: "Property Address", },
    { dataField: "client_name", text: "Client Name" },
    { dataField: "type", text: "Type" },
    { dataField: "status", text: "Status" },
    { dataField: "closing_date", text: "Closing / Expiry" },
    { dataField: "deal_owner", text: "Deal Owner" },
];

export let DashboardClosingsTableColumns = () => [
    { dataField: "property_address", text: "Property Address" },
    { dataField: "closing_date", text: "Closing / Expiry" },
    { dataField: "client_name", text: "Client Name" },
    { dataField: "type", text: "Type" },
    { dataField: "deal_owner", text: "Deal Owner" },
];