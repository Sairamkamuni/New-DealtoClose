import React, { useState, useEffect } from "react";
import Select from "react-select"
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { FaPlusButton } from "pages/utils/allButton";
import "../../assets/custom.css";

export const InputField = ({ label, type = "text", rows, name, value, onChange, placeholder, showDollar = false, width = false, readOnly = false, dollarStop = "73%" }) => {
    return (
        <div className="position-relative">
            {label && <label className="form-label">{label}</label>}
            {showDollar && (
                <span className="position-absolute" style={{ top: dollarStop, left: "12px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px", }} >
                    $
                </span>
            )}
            {type === "textarea" ? (
                <textarea
                    name={name}
                    rows={rows || 3}
                    className="form-control"
                    placeholder={placeholder}
                    value={value || ""}
                    onChange={onChange}
                    readOnly={readOnly}
                    style={{ paddingLeft: showDollar ? "30px" : undefined, cursor: readOnly ? "pointer" : "text" }}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    className={`form-control ${width ? "fixed-width" : ""}`}
                    placeholder={placeholder}
                    value={value || ""}
                    onChange={onChange}
                    readOnly={readOnly}
                    style={{ paddingLeft: showDollar ? "30px" : undefined, cursor: readOnly ? "pointer" : "text" }}
                />
            )}
        </div>
    );
};

export const ToggleField = ({
    value,
    onChange,
    leftValue = "percentage",
    rightValue = "fixed",
    leftLabel = "%",
    rightLabel = "$",
    activeColor = "#243e79",
    height = "36px",
}) => {
    const commonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 14px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: 600,
        width: "50%",
    };

    return (
        <div
            className="d-flex align-items-center"
            style={{
                border: "1px solid #dad1e0",
                height,
                borderRadius: "8px",
                padding: "0",
            }}
        >
            <div
                onClick={() => onChange(leftValue)}
                style={{
                    ...commonStyle,
                    background: value === leftValue ? activeColor : "transparent",
                    color: value === leftValue ? "white" : "#231f20",
                }}
            >
                {leftLabel}
            </div>

            <div
                onClick={() => onChange(rightValue)}
                style={{
                    ...commonStyle,
                    background: value === rightValue ? activeColor : "transparent",
                    color: value === rightValue ? "white" : "#231f20",
                    marginLeft: "4px",
                }}
            >
                {rightLabel}
            </div>
        </div>
    );
};

export const SelectField = ({ id, label, name, options, value, onChange, readOnly = false, isMulti = false, isClearable = true, placeholder }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <Select
                id={id}
                name={name}
                isClearable={isClearable}
                className="basic-single"
                classNamePrefix="select"
                options={options}
                isMulti={isMulti}
                readOnly={readOnly}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{ cursor: readOnly ? "pointer" : "text" }}
            />
        </div>
    );
};

export const AsyncSelectField = ({ label, name, optionsList = [], placeholder = "Select...", isMulti = false, value, onChange, isClearable = true, readOnly = false, defaultOptions = true }) => {

    const [inputValue, setInputValue] = useState("");

    const loadOptions = (inputValue, callback) => {
        const filtered = optionsList.filter((opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase()));
        callback(filtered);
    };

    const CustomMenuList = (props) => {
        const filtered = optionsList.filter((opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase()));

        return (
            <components.MenuList {...props}> {props.children}
                {filtered.length === 0 && inputValue.trim() !== "" && (
                    <FaPlusButton label={`Add "${inputValue}"`} width="100%" outline={false}
                        onClick={(e) => { e.stopPropagation(); console.log("User wants to create:", inputValue); }} className="mt-2"
                    />
                )}
            </components.MenuList>
        );
    };

    return (
        <div>
            {label && <label>{label}</label>}

            <AsyncSelect
                name={name}
                defaultOptions={defaultOptions}
                loadOptions={loadOptions}
                isClearable={isClearable}
                placeholder={placeholder}
                readOnly={readOnly}
                isMulti={isMulti}
                value={value}
                onChange={onChange}
                onInputChange={(val) => setInputValue(val)}
                components={{ MenuList: CustomMenuList }}
                style={{ cursor: readOnly ? "pointer" : "text" }}
            />
        </div>
    );
};

export const DatePickerField = ({ label, name, value, onChange, placeholder = "MM, DD, YYYY", readOnly = false, }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <Flatpickr
                name={name}
                className="form-control d-block"
                options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }}
                value={value}
                onChange={(dates) => onChange(dates, name)}
                placeholder={placeholder}
                readOnly={readOnly}
                style={{ cursor: readOnly ? "pointer" : "text" }}
            />
        </div>
    );
};