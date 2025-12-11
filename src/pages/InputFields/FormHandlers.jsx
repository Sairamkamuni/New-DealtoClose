import { useState } from "react";
import { showSuccessAlert } from "pages/utils/Alerts/alertMessages";
import { post, put, get, del } from "helpers/api_helper"

export const FormHandlers = ({ apiUrl, toggle, entity }) => {
    const [formData, setFormData] = useState({ type: "", });
    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [collapseOpen, setCollapseOpen] = useState(null);

    // --- Collapse Handler ---
    const collapseToggle = (index) => {
        setCollapseOpen(prev => (prev === index ? null : index));
    };

    // --- Handle normal text input ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- Handle Select components ---
    const handleSelectChange = (selectedOption, field) => {
        const name = field.name;
        const value = selectedOption?.label || null;

        setFormData({ ...formData, [name]: value, });
    };

    // --- Handle Date components ---
    const handleDateChange = (selectedDates, name) => {
        setFormData(prev => ({
            ...prev,
            [name]: selectedDates[0] || null  // store Date object
        }));
    };

    // --- Handle Contact components ---
    const handleContactChange = (contacts) => {
        setFormData(prev => ({ ...prev, contacts }));
    };

    // --- To enable edit mode ---
    const startEditing = (data, id) => {
        setEditMode(true);
        setEditingId(id);
        setFormData(data);
    };

    // --- Submit logic ---
    const handleSubmit = async () => {
        console.log("Submitting formData:", formData);

        // const url = editMode ? `${apiUrl}/${editingId}` : apiUrl;
        // const method = editMode ? "PUT" : "POST";
        // const { success, body } = await method(url, formData);
        // console.log("API method:", method);

        // const { success, body } = await (editMode ? put(url, formData) : post(apiUrl, formData));
        const success = true;

        if (success) {
            showSuccessAlert(`${entity} ${editMode ? "updated" : "created"} successfully`);

            // Reset form
            setFormData({});
            setEditMode(false);
            setEditingId(null);
            toggle();
        }
    };

    const handleFilesData = (files) => {
        setFormData(p => ({ ...p, files: files }));
    }

    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return {
        formData,
        setFormData,
        editMode,
        setEditMode,
        handleChange,
        handleSelectChange,
        handleDateChange,
        handleContactChange,
        handleSubmit,
        startEditing,
        handleFilesData,
        handleRadioChange,
        collapseToggle,
        collapseOpen,
    };
};
