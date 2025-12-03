import React from "react";
import {
    FaFolderPlus, FaEnvelope, FaShareAlt, FaArchive, FaHistory, FaCheck, FaFileSignature, FaDownload, FaPrint, FaCopy,
    FaArrowsAlt, FaCertificate, FaTimesCircle, FaUpload, FaEllipsisV, FaUser, FaPencilAlt, FaUserPlus, FaAngleDown,
    FaRegStickyNote, FaStar, FaRegStar, FaPlusCircle, FaCalendarAlt, FaTelegramPlane, FaPlus, FaRegBell, FaFileAlt, FaChevronLeft, FaEye
} from "react-icons/fa";
import { FaEllipsis, FaMessage, FaScissors, FaTrashCan, FaUserGroup, FaGear, FaLifeRing, FaListCheck } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiSolidPencil, BiComment, BiSave } from "react-icons/bi";


const AllButton = ({ icon: Icon, size = 40, width = "130px", height = "34px", color = "primary", className = "", label,
    asIconOnly = false, outline = true, to, ...props }) => {
    if (asIconOnly) { return Icon ? <Icon {...props} className={className} /> : null }

    const btnClass = outline ? `btn btn-outline-${color}` : `btn btn-${color}`;

    const content = (
        <div className="d-flex justify-content-between align-items-center">
            {Icon && <span className="d-flex align-items-center" style={{ marginBottom: "2px", marginRight: "6px" }}><Icon /></span>}
            {label && <span className="d-flex align-items-center">{label}</span>}

        </div>
    )

    const styles = { height: height || `${size}px`, width: width || (label ? "auto" : `${size}px`), padding: label ? "0 12px" : undefined, gap: "6px" };

    if (to) {
        return (
            <Link to={to} className={`${btnClass} d-flex align-items-center justify-content-center ${className}`} style={styles} {...props} >
                {content}
            </Link>
        );
    }

    // Otherwise, render a normal <button>
    return (
        <button className={`${btnClass} d-flex align-items-center justify-content-center ${className}`} style={styles} {...props} >
            {content}
        </button>
    );
};

export const EmailButton = (props) => <AllButton icon={FaEnvelope} {...props} />;
export const AddFolderButton = (props) => <AllButton icon={FaFolderPlus} {...props} />;
export const ShareButton = (props) => <AllButton icon={FaShareAlt} {...props} />;
export const ArchiveButton = (props) => <AllButton icon={FaArchive} {...props} />;
export const HistoryButton = (props) => <AllButton icon={FaHistory} {...props} />;
export const CheckButton = (props) => <AllButton icon={FaCheck} {...props} />;
export const FileSignatureButton = (props) => <AllButton icon={FaFileSignature} {...props} />;
export const DownloadButton = (props) => <AllButton icon={FaDownload} {...props} />;
export const PrintButton = (props) => <AllButton icon={FaPrint} {...props} />;
export const CopyButton = (props) => <AllButton icon={FaCopy} {...props} />;
export const MovetButton = (props) => <AllButton icon={FaArrowsAlt} {...props} />;
export const CertificateButton = (props) => <AllButton icon={FaCertificate} {...props} />;
export const CancelButton = (props) => <AllButton icon={FaTimesCircle} {...props} />;
export const UploadButton = (props) => <AllButton icon={FaUpload} {...props} />;
export const EllipsisVButton = (props) => <AllButton icon={FaEllipsisV} {...props} />;
export const UserButton = (props) => <AllButton icon={FaUser} {...props} />;
export const PencilButton = (props) => <AllButton icon={FaPencilAlt} {...props} />;
export const UserPlusButton = (props) => <AllButton icon={FaUserPlus} {...props} />;
export const DownButton = (props) => <AllButton icon={FaAngleDown} {...props} />;
export const RegStickyNoteButton = (props) => <AllButton icon={FaRegStickyNote} {...props} />;
export const StarButton = (props) => <AllButton icon={FaStar} {...props} />;
export const RegStarButton = (props) => <AllButton icon={FaRegStar} {...props} />;
export const AddPlusCircleButton = (props) => <AllButton icon={FaPlusCircle} {...props} />;
export const CalendarButton = (props) => <AllButton icon={FaCalendarAlt} {...props} />;
export const SideDotsButton = (props) => <AllButton icon={FaEllipsis} {...props} />;
export const MessageButton = (props) => <AllButton icon={FaMessage} {...props} />;
export const ScissorsButton = (props) => <AllButton icon={FaScissors} {...props} />;
export const FaTelegramButton = (props) => <AllButton icon={FaTelegramPlane} {...props} />;
export const FaPlusButton = (props) => <AllButton icon={FaPlus} {...props} />;
export const FaTrashCanButton = (props) => <AllButton icon={FaTrashCan} {...props} />;
export const NotificationButton = (props) => <AllButton icon={FaRegBell} {...props} />;
export const SolidInboxButton = (props) => <AllButton icon={BiSolidInbox} {...props} />;
export const FaFileAltButton = (props) => <AllButton icon={FaFileAlt} {...props} />;
export const FaUserGroupButton = (props) => <AllButton icon={FaUserGroup} {...props} />;
export const SettingButton = (props) => <AllButton icon={FaGear} {...props} />;
export const HelpButton = (props) => <AllButton icon={FaLifeRing} {...props} />;
export const ListCheckButton = (props) => <AllButton icon={FaListCheck} {...props} />;
export const BackButton = (props) => <AllButton icon={FaChevronLeft} {...props} />;
export const EyeButton = (props) => <AllButton icon={FaEye} {...props} />;
export const EditButton = (props) => <AllButton icon={BiSolidPencil} {...props} />;
export const CommentButton = (props) => <AllButton icon={BiComment} {...props} />;
export const SaveButton = (props) => <AllButton icon={BiSave} {...props} />;

export default AllButton;