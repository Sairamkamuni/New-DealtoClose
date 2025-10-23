import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter, multiSelectFilter } from "react-bootstrap-table2-filter";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";
import { FaFilter } from "react-icons/fa";

const selectOptions = {
    0: "Good",
    1: "Bad",
    2: "Unknown",
};

const products = [
    { id: 1, name: "iPhone", quality: 0 },
    { id: 2, name: "Samsung", quality: 1 },
    { id: 3, name: "OnePlus", quality: 2 },
];

// ✅ Reusable header with filter dropdown
const HeaderWithFilter = ({ column, filterElement }) => (
    <div className="d-flex align-items-center gap-1">
        <span>{column.text}</span>
        <UncontrolledDropdown>
            <DropdownToggle
                tag="span"
                style={{ cursor: "pointer", color: "#243d78" }}
            >
                <FaFilter />
            </DropdownToggle>
            <DropdownMenu className="p-2">{filterElement}</DropdownMenu>
        </UncontrolledDropdown>
    </div>
);

const columns = [
    {
        dataField: "id",
        text: "Product ID",
        sort: true,
        filter: textFilter({ placeholder: "Filter ID" }),
        headerFormatter: (column, colIndex, { filterElement }) => (
            <HeaderWithFilter column={column} filterElement={filterElement} />
        ),
    },
    {
        dataField: "name",
        text: "Product Name",
        filter: textFilter({ placeholder: "Filter name" }),
        headerFormatter: (column, colIndex, { filterElement }) => (
            <HeaderWithFilter column={column} filterElement={filterElement} />
        ),
    },
    {
        dataField: "quality",
        text: "Product Quality",
        formatter: (cell) => selectOptions[cell],
        filter: multiSelectFilter({
            options: selectOptions,
            placeholder: "Select Quality",
        }),
        headerFormatter: (column, colIndex, { filterElement }) => (
            <HeaderWithFilter column={column} filterElement={filterElement} />
        ),
    },
    {
        dataField: "qualitys",
        text: "Product Quality",
        formatter: (cell) => selectOptions[cell],
        filter: multiSelectFilter({
            options: selectOptions,
            placeholder: "Select Quality",
        }),
        headerFormatter: (column, colIndex, { filterElement }) => (
            <HeaderWithFilter column={column} filterElement={filterElement} />
        ),
    },
    {
        dataField: "newqualitys",
        text: "Product Quality",
        formatter: (cell) => selectOptions[cell],
        filter: multiSelectFilter({
            options: selectOptions,
            placeholder: "Select Quality",
        }),
        headerFormatter: (column, colIndex, { filterElement }) => (
            <HeaderWithFilter column={column} filterElement={filterElement} />
        ),
    },
];

const MyTable = () => {
    return (
        <div className="mt-4">
            <BootstrapTable
                keyField="id"
                data={products}
                columns={columns}
                filter={filterFactory()}
                bootstrap4
                bordered={false}
                striped
                hover
                condensed
            />
        </div>
    );
};

export default MyTable;
