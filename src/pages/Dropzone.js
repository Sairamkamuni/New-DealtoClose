import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import "../assets/custom.css"

const Dropzone = ({ callback }) => {
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
        style={{ border: "1px solid #949494", borderRadius: "5px", minHeight: "50px", width: "190px", cursor: "pointer", transition: "all 0.3s ease-in-out", background: "#fafafa", }}
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

export default Dropzone;
