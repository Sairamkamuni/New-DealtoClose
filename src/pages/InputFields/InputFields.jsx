import React from "react";
import Select from "react-select"
import CreatableSelect from 'react-select/creatable';
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

export const InputField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input
                type={type}
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value || ""}
                onChange={onChange}
            />
        </div>
    );
};

export const SelectField = ({ label, name, options, value, onChange, isClearable = true, placeholder }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <Select
                name={name}
                isClearable={isClearable}
                className="basic-single"
                classNamePrefix="select"
                options={options}
                value={options.find((opt) => opt.value === value?.value) || null}
                onChange={(selectedOption) => onChange(selectedOption, { name })}
                placeholder={placeholder}
            />
        </div>
    );
};

export const DatePickerField = ({ label, name, value, onChange, placeholder = "MM, DD, YYYY" }) => {
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
            />
        </div>
    );
};
