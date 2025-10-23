import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Card, Media } from "reactstrap"
import { EmailButton } from "pages/utils/allButton";
import EmailCompose from "pages/AllModals/EmailCompose";

//Import images
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"

const EmailSideBar = props => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Card className="email-leftbar">
        <EmailButton label="Compose Email" color="danger" outline={false} width={200} onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} />
        <div className="mail-list mt-4">
          <Link to="email" className="active">
            <i className="mdi mdi-email-outline me-2"></i> Inbox{" "}
            <span className="ml-1 float-end">(18)</span>
          </Link>
          <Link to="#" filter="SHOW_COMPLETED">
            <i className="mdi mdi-star-outline me-2"></i>Starred
          </Link>
          <Link to="#">
            <i className="mdi mdi-diamond-stone me-2"></i>Important
          </Link>
          <Link to="#">
            <i className="mdi mdi-file-outline me-2"></i>Draft
          </Link>
          <Link to="#">
            <i className="mdi mdi-email-check-outline me-2"></i>Sent Mail
          </Link>
          <Link to="#">
            <i className="mdi mdi-trash-can-outline me-2"></i>Trash
          </Link>
        </div>

        <h6 className="mt-4">Labels</h6>

        <div className="mail-list mt-1">
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-info float-end"></span>
            Theme Support
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>
            Freelance
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>
            Social
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>
            Friends
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-success float-end"></span>
            Family
          </Link>
        </div>

        <h6 className="mt-4">Chat</h6>

        <div className="mt-2">
          <Link to="#" className="media">
            <img className="d-flex me-3 rounded-circle" src={avatar2} alt="skote" height="36" />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">Scott Median</p>
              <p className="text-muted">Hello</p>
            </Media>
          </Link>

          <Link to="#" className="media">
            <img className="d-flex me-3 rounded-circle" src={avatar3} alt="skote" height="36" />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">Julian Rosa</p>
              <p className="text-muted">What about our next..</p>
            </Media>
          </Link>

          <Link to="#" className="media">
            <img className="d-flex me-3 rounded-circle" src={avatar4} alt="skote" height="36" />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">David Medina</p>
              <p className="text-muted">Yeah everything is fine</p>
            </Media>
          </Link>

          <Link to="#" className="media">
            <img className="d-flex me-3 rounded-circle" src={avatar6} alt="skote" height="36" />
            <Media className="chat-user-box" body>
              <p className="user-title m-0">Jay Baker</p>
              <p className="text-muted">Wow that&apos;s great</p>
            </Media>
          </Link>
        </div>
      </Card>

      <EmailCompose isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
    </React.Fragment>
  )
}

export default EmailSideBar
