import React, { useState } from "react";
import { Card, CardBody, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { CheckButton, EllipsisVButton, DownButton } from "./allButton";

export const FilterDropdown = ({ dropdownFilterOptions, selectedOption, setSelectedOption, width, height, size = 34, }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prev) => !prev);

    return (
        <div className="d-flex align-items-center justify-content-end gap-2">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="custom-dropdown">
                <DropdownToggle caret style={{
                    height: height || `${size}px`, width: width || `${size}px`, textAlign: "center", backgroundColor: "#243e79",
                    border: "1px solid #243e79", color: "#243e79"
                }} >
                    {dropdownFilterOptions?.find((opt) => opt.value === selectedOption)?.label}
                </DropdownToggle>

                <DropdownMenu style={{ textAlign: "center" }}>
                    {dropdownFilterOptions?.map((opt) => (
                        <DropdownItem key={opt.value} onClick={() => setSelectedOption(opt.value)}
                            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", transition: "all 0.2s ease", }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#243e79";
                                e.target.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "";
                                e.target.style.color = "";
                            }}
                        >
                            {selectedOption === opt.value && <CheckButton asIconOnly />}
                            {opt.label}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export const EllipsisVDropdown = ({ dropdownFilterOptions, selectedOption, setSelectedOption }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prev) => !prev);

    return (
        <div className="d-flex align-items-center gap-2">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="custom-dropdown">
                <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}                >
                    <EllipsisVButton width="30px" />
                </DropdownToggle>

                <DropdownMenu direction="left" style={{ textAlign: "center" }}>
                    {dropdownFilterOptions.map((opt) => (
                        <DropdownItem key={opt.value} onClick={() => setSelectedOption(opt.value)}
                            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", transition: "all 0.2s ease" }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#243e79";
                                e.target.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "";
                                e.target.style.color = "";
                            }}
                        >
                            {selectedOption === opt.value && <CheckButton asIconOnly />}
                            {opt.label}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export const AdvancedSearchDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filters, setFilters] = useState({ from: "", to: "", subject: "", hasWord: "" });

    const toggle = () => setDropdownOpen((prev) => !prev);

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleClear = () => {
        setFilters({ from: "", to: "", subject: "", hasWord: "" });
    };

    const handleSearch = () => {
        console.log("Search filters:", filters);
        setDropdownOpen(false);
    };

    return (
        <div className="d-flex">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="">
                <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
                    <DownButton width="38px" />
                </DropdownToggle>
                <div className="dropdownPosition">
                    <DropdownMenu direction="end" className="mt-1 p-0" >
                        <Card style={{ width: "320px" }} >
                            <CardBody>
                                <h6 className="fw-bold text-black">Advanced Search</h6>
                                <p className="mb-3" > Filter emails by specific criteria. </p>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label>From</label>
                                            <input type="text" name="from" className="form-control" value={filters.from} onChange={handleChange} placeholder="Enter sender" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label>To</label>
                                            <input type="text" name="to" className="form-control" value={filters.to} onChange={handleChange} placeholder="Enter recipient" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label>Subject</label>
                                            <input type="text" name="subject" className="form-control" value={filters.subject} onChange={handleChange} placeholder="Enter subject" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label>Has Word</label>
                                            <input type="text" name="hasWord" className="form-control" value={filters.hasWord} onChange={handleChange} placeholder="Enter keyword" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <button className="btn btn-danger" role="button" onClick={handleClear}>Clear</button>
                                            <button className="btn btn-primary" role="button" onClick={handleSearch}>Search</button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </DropdownMenu>
                </div>
            </Dropdown>
        </div>
    );
};