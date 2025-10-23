import React from "react";
import { Link } from "react-router-dom";

const TrackingLink = ({ trackingNumber, sts = '' }) => (
    <a href={`/status/${trackingNumber}`} target="_blank" rel="noreferrer">{trackingNumber} </a>
);

export let ShipmentColumns = (handleEdit) => {
    return [
        {
            dataField: 'actions',
            text: "",
            isDummyField: true,
            formatter: (cell, row) => <>
                <Link to="#" className="btn btn-outline-secondary btn-sm edit" onClick={() => handleEdit(row.id)} title="Track or status" ><i className={`fas fa-map-signs`} /></Link>
            </>
        }, {
            dataField: 'id',
            text: '#'
        }, {
            dataField: 'vs_tracking_number',
            text: 'Tracking Number',
            formatter: (cell, row) => {
                return <TrackingLink trackingNumber={row.vs_tracking_number}/>;
            }
        }, {
            dataField: 'Courier Patner',
            text: 'Courier Patner',
            formatter: (cell, row) => {
                return `${row.courier_partner.name}`;
            }
        }, {
            dataField: 'live_tracking_number',
            text: 'Live Tracking Number'
        }, {
            dataField: 'receivername',
            text: 'Reciver Name'
        }, {
            dataField: 'receiverphone',
            text: 'Reciver Phone'
        }, {
            dataField: 'sendername',
            text: 'Sender Name'
        }, {
            dataField: 'senderphone',
            text: 'Sender Phone'
        }, {
            dataField: 'receiveraddress',
            text: 'To',
            formatter: (cell, row) => {
                return row.receiveraddress + ", " + row.receivercity + ", " + row.receiverstate + ", " + row.receivercountry + ", " + row.receiverpincode;
            }
        }, {
            dataField: 'senderaddress',
            text: 'From',
            formatter: (cell, row) => {
                return row.senderaddress + ", " + row.sendercity + ", " + row.senderstate + ", " + row.sendercountry + ", " + row.senderpincode;
            }
        }
    ];
}

export let RoleColumns = [
    {
        dataField: 'role_id',
        text: '#'
    }, {
        dataField: 'name',
        text: 'role'
    }, {
        dataField: 'description',
        text: 'Description'
    // }, {
    //     dataField: 'actions',
    //     text: "",
    //     isDummyField: true,
    //     formatter: (cell, row) => <>
    //         <Link to="#" className="btn btn-outline-secondary btn-sm edit" onClick={() => handleEdit(row.id)} title="Edit" ><i className={`fas fa-pencil-alt`} /></Link>
    //         {" "}
    //         <Link to="#" className={`btn btn-${row.status == 0 ? "danger" : "success"} btn-sm edit`} onClick={() => handleRemove(row.id, row.status == 1 ? 0 : 1, row.code)} title={row.status == 0 ? 'delete' : 'restore'} ><i className={`fas fas fa-trash-alt`} /></Link>
    //     </>
    }
];

export let BranchColumns = [
    {
        dataField: 'branch_id',
        text: '#'
    }, {
        dataField: 'email',
        text: 'Email'
    }, {
        dataField: 'contact_no',
        text: 'Phone'
    }, {
        dataField: 'whatsp_app',
        text: 'Whatsapp no'
    }, {
        dataField: 'city',
        text: 'City'
    // }, {
    //     dataField: 'actions',
    //     text: "",
    //     isDummyField: true,
    //     formatter: (cell, row) => <>
    //         <Link to="#" className="btn btn-outline-secondary btn-sm edit" onClick={() => handleEdit(row.id)} title="Edit" ><i className={`fas fa-pencil-alt`} /></Link>
    //         {" "}
    //         <Link to="#" className={`btn btn-${row.status == 0 ? "danger" : "success"} btn-sm edit`} onClick={() => handleRemove(row.id, row.status == 1 ? 0 : 1, row.code)} title={row.status == 0 ? 'delete' : 'restore'} ><i className={`fas fas fa-trash-alt`} /></Link>
    //     </>
    }
];

export let EmployeeColumns = [
    {
        dataField: 'id',
        text: '#'
    }, {
        dataField: 'name',
        text: 'Employee Name'
    }, {
        dataField: 'contact_no',
        text: 'Phone Number'
    }, {
        dataField: 'whatsp_app',
        text: 'Whatsapp Number'

    // }, {
    //     dataField: 'code',
    //     text: 'Code'
    // }, {
    //     dataField: 'actions',
    //     text: "",
    //     isDummyField: true,
    //     formatter: (cell, row) => <>
    //         <Link to="#" className="btn btn-outline-secondary btn-sm edit" onClick={() => handleEdit(row.id)} title="Edit" ><i className={`fas fa-pencil-alt`} /></Link>
    //         {" "}
    //         <Link to="#" className={`btn btn-${row.status == 0 ? "danger" : "success"} btn-sm edit`} onClick={() => handleRemove(row.id, row.status == 1 ? 0 : 1, row.code)} title={row.status == 0 ? 'delete' : 'restore'} ><i className={`fas fas fa-trash-alt`} /></Link>
    //     </>
    }
];

export let CorierRateColumns = [
    {
        dataField: 'id',
        text: '#'
    }, {
        dataField: 'title',
        text: 'Service Name'
    }, {
        dataField: 'courier',
        text: 'Courier Patner Name'
    }, {
        dataField: 'pincode',
        text: 'Pincode'
    }
];

export let ZoneColumns = [
    {
        dataField: 'id',
        text: '#'
    }, {
        dataField: 'title',
        text: 'Zone Name'
    }
];

export let MisReportsColumns = [
    {
        dataField: 'id',
        text: '#',
        formatter: (cell, row, rowIndex, formatExtraData) => {
            const pageSize = 10; // Adjust this based on your table's page size
            return rowIndex + 1;
        }
    }, {
        dataField: 'vs_tracking_number',
        text: 'Tracking Number',
        formatter: (cell, row) => {
            return <TrackingLink trackingNumber={row.vs_tracking_number} />;
        }
    }, {
        dataField: 'mostRecentStatus',
        text: 'Status'
    }, {
        dataField: 'shipment_date',
        text: 'Shipment Date',
        formatter: (cell, row) => {
            return row.shipment_date ? new Date(row.shipment_date).toLocaleDateString() : "";
        }
    }, {
        dataField: 'sendername',
        text: 'Sender Name'
    }, {
        dataField: 'senderphone',
        text: 'Senderphone'
    }, {
        dataField: 'receiverpincode',
        text: 'Receiver Pincode'
    }, {
        dataField: 'receivercity',
        text: 'Receiver City'
    // }, {
    //     dataField: 'actions',
    //     text: "",
    //     isDummyField: true,
    //     formatter: (cell, row) => <>
    //         <Link to="#" className="btn btn-outline-secondary btn-sm edit" onClick={() => handleEdit(row.id)} title="Edit" ><i className={`fas fa-pencil-alt`} /></Link>
    //         {" "}
    //         <Link to="#" className={`btn btn-${row.status == 0 ? "danger" : "success"} btn-sm edit`} onClick={() => handleRemove(row.id, row.status == 1 ? 0 : 1, row.code)} title={row.status == 0 ? 'delete' : 'restore'} ><i className={`fas fas fa-trash-alt`} /></Link>
    //     </>
    }
];