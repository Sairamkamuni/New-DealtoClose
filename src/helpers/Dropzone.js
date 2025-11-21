import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "./css.css"
import { PencilButton } from 'pages/utils/allButton';
import Select from "react-select";

export const Dropzone = ({ callback }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // Upload function to send files to server
  useEffect(() => {
    const cb = async () => {
      const formData = [];
      acceptedFiles.forEach(file => {
        formData.push(file);
      });
      callback(formData);
    }
    cb();
  }, [acceptedFiles]);

  const filesTable = () => (
    acceptedFiles.length > 0 && (
      <div className="file-list">
        {acceptedFiles.map((file, index) => (
          <div key={index} className="d-flex justify-content- align-items-start  rounded">
            <span className="text-truncate me-2">{file.path}</span>
            {/* <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span> */}
          </div>
        ))}
      </div>
    )
  );

  return (
    <>
      <div
        {...getRootProps()}
        className="dropzone d-flex mt-4 align-items-center justify-content-center text-center"
        style={{
          border: "1px solid #949494", borderRadius: "5px", minHeight: "50px", width: "190px", cursor: "pointer",
          transition: "all 0.3s ease-in-out", background: "#fafafa",
        }}
      >
        <input {...getInputProps()} />
        <div className="d-flex align-items-center text-secondary camera-icon" style={{ fontSize: "14px", gap: "8px" }}>
          <i className="fa fa-regular fa-camera fs-3 text-muted" style={{ transition: "transform 0.3s ease-in-out" }} />
          <p className="m-0">Change Picture</p>
        </div>
      </div>

      <br />
      {acceptedFiles.length > 0 && (
        <>
          {filesTable()}
        </>
      )}
    </>
  );
};


export const BigDropzone = ({ callback }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [files, setFiles] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    setFiles(
      acceptedFiles.map(file => ({
        originalFile: file,
        name: file.path,
        size: file.size,
      }))
    );
  }, [acceptedFiles]);

  useEffect(() => {
    callback(files);
  }, [files]);

  // Save edited name
  const handleNameChange = (index) => {
    const newFiles = [...files];
    newFiles[index].name = editedName;
    setFiles(newFiles);
    setEditingIndex(null);
  };

  const filesTable = () => (
    <>
      <Select name="file_name" isClearable classNamePrefix="select" placeholder="Select a File Name..." />
      <table className="table table-borderless align-middle mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={file.originalFile.path + index}>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    className="w-100 form-control"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    onBlur={() => handleNameChange(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleNameChange(index);
                    }}
                    autoFocus
                  />
                ) : (
                  file.name
                )}
              </td>
              <td> <PencilButton width="36px" borderless={true} onClick={() => { setEditingIndex(index); setEditedName(file.name) }} /> </td>
              <td>{(file.size / (1024 * 1024)).toFixed(2)} MB</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  return (
    <>
      <div
        {...getRootProps()}
        style={{
          borderRadius: "12px",
          minHeight: "80px",
          border: "1px dotted black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          padding: "20px",
        }}
      >
        <input {...getInputProps()} />
        <div style={{ color: "#555", fontSize: "14px" }}>
          <i
            className="fas fa-upload fa-2x"
            style={{
              color: "#949494ff",
              marginBottom: "8px",
              display: "block",
              transition: "transform 0.3s ease-in-out",
            }}
          />
          <p style={{ margin: 0 }}>
            Drag & Drop or{" "}
            <span
              style={{
                color: "#000000",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Click
            </span>{" "}
            to Select Files
          </p>
        </div>
      </div>

      <br />
      {files.length > 0 && filesTable()}
    </>
  );
};



