import React, { useState } from "react";
import { Table, Input, Dropdown, DropdownToggle, DropdownMenu, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Filter } from "react-feather";
import "../assets/scss/custom.scss"

const MyTable = ({ columns, data }) => {
    const [filters, setFilters] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Toggle dropdown for each column
    const toggleDropdown = (key) =>
        setDropdownOpen(dropdownOpen === key ? null : key);

    // Handle filtering logic
    const handleFilterChange = (columnKey, value) => {
        const current = filters[columnKey] || [];
        const updated = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
        setFilters({ ...filters, [columnKey]: updated });
    };

    // Filtered data
    const filteredData = data.filter((item) =>
        Object.keys(filters).every((key) => {
            const values = filters[key];
            if (!values || values.length === 0) return true;
            return values.includes(item[key]);
        })
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Handle select all
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(paginatedData.map((_, idx) => idx));
        } else {
            setSelectedRows([]);
        }
    };

    // Handle single checkbox
    const handleRowSelect = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    // Handle pagination
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="mt-3 table-responsive">
            <Table className="my-table table table-hover mb-0">
                <thead>
                    <tr>
                        <th style={{ cursor: "pointer", }} className="table-header-hover" >
                            <Input type="checkbox" checked={selectedRows.length === paginatedData.length && paginatedData.length > 0} onChange={handleSelectAll} />
                        </th>

                        {columns.map((col) => (
                            <th key={col.key} style={{ cursor: "pointer", position: "relative" }} className="table-header-hover" >
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>{col.label}</span>

                                    {col.filterable && (
                                        <div className="ms-5" style={{ position: "absolute", right: "10px" }} >
                                            <Dropdown isOpen={dropdownOpen === col.key} toggle={() => toggleDropdown(col.key)} className="d-inline-block" container="body" >
                                                <DropdownToggle color="link" className="p-0">
                                                    <Filter size={15} />
                                                </DropdownToggle>

                                                <DropdownMenu style={{ width: "250px", padding: "10px", zIndex: 9999 }} className="p-2" >
                                                    <Input type="text" placeholder={`Filter ${col.label.toLowerCase()}...`} bsSize="sm" className="mb-2" />
                                                    <div style={{ maxHeight: "200px", overflowY: "auto", }} >
                                                        {col.filterOptions?.map((opt, idx) => (
                                                            <div key={idx} className="form-check mb-1">
                                                                <Input type="checkbox" id={`${col.key}-${idx}`}
                                                                    checked={filters[col.key]?.includes(opt) || false}
                                                                    onChange={() => handleFilterChange(col.key, opt)}
                                                                />
                                                                <label htmlFor={`${col.key}-${idx}`} className="form-check-label ms-1" > {opt} </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="text-center mt-2">
                                                        <button className="btn btn-primary" role="button" onClick={() => toggleDropdown(col.key)} > Select </button>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {paginatedData.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <Input type="checkbox" checked={selectedRows.includes(index)} onChange={() => handleRowSelect(index)} />
                            </td>

                            {columns.map((col) => (
                                <td key={col.key}>
                                    {col.key === "tags" ? (
                                        <span className="badge bg-light text-purple border border-purple mt-2">
                                            {item[col.key]}
                                        </span>
                                    ) : (
                                        item[col.key]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination Section */}
            <div className="d-flex justify-content-end mt-3">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={currentPage === 1}>
                        <PaginationLink
                            href="#"
                            previous
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <i className="mdi mdi-chevron-left" />
                        </PaginationLink>
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <PaginationItem
                            key={pageIndex}
                            active={pageIndex + 1 === currentPage}
                        >
                            <PaginationLink
                                href="#"
                                onClick={() => handlePageChange(pageIndex + 1)}
                            >
                                {pageIndex + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem disabled={currentPage === totalPages}>
                        <PaginationLink
                            href="#"
                            next
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <i className="mdi mdi-chevron-right" />
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    );
};

export default MyTable;
