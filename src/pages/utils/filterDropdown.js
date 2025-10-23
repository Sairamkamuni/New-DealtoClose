import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { CheckButton, EllipsisVButton } from "./allButton";

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
        <div className="d-flex align-items-center justify-content-end gap-2">
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
