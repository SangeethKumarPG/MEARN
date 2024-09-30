import React, { useState } from "react";
import editIcon from "../assets/edit-icon.svg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import uploadIcon from '../assets/upload-icon.svg'

function EditProject({project}) {
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title:project.title,
    language:project.language,
    github:project.github,
    website:project.website,
    overview:project.overview,
    projectImage:project.projectImage

  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <img src={editIcon} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="projectImg">
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="projectImg"
                />
                <img src={uploadIcon} className="w-100" />
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="title"
                value={projectDetails?.title}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Languages Used"
                value={projectDetails?.language}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="GitHub Link"
                value={projectDetails?.github}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Website Link"
                value={projectDetails?.website}
              />
              <textarea
                placeholder="project overview"
                className="form-control mb-2"
                rows={4}
                value={projectDetails?.overview}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Update Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProject;
