import React, { useState } from "react";
import ActionButtons from "../ActionButtons";
import FolderCard from "./FolderCard";

const FolderList = ({ folders, selectedDocs, setSelectedDocs }) => {
    const [openFolders, setOpenFolders] = useState(false);

    const toggleFolder = (index) => {
        setOpenFolders((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const handleFolderCheckbox = (folderIndex, documents) => {
        setSelectedDocs((prev) => {
            const newSelected = { ...prev };
            const allChecked = documents.every((_, i) => prev[`${folderIndex}-${i}`]);

            documents.forEach((_, i) => {
                newSelected[`${folderIndex}-${i}`] = !allChecked;
            });

            return newSelected;
        });
    };

    const handleDocCheckbox = (folderIndex, docIndex) => {
        setSelectedDocs((prev) => ({
            ...prev,
            [`${folderIndex}-${docIndex}`]: !prev[`${folderIndex}-${docIndex}`],
        }));
    };

    return (
        <div>
            {folders.map((folder, index) => {
                const hasSelectedDocs = folder.documents.some((_, i) => selectedDocs[`${index}-${i}`]);

                return (
                    <div key={index} className="mt-3">
                        {hasSelectedDocs && <ActionButtons />}

                        <FolderCard
                            folder={folder}
                            index={index}
                            isOpen={openFolders[index] ?? true}
                            toggleFolder={toggleFolder}
                            selectedDocs={selectedDocs}
                            handleFolderCheckbox={handleFolderCheckbox}
                            handleDocCheckbox={handleDocCheckbox}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default FolderList;
