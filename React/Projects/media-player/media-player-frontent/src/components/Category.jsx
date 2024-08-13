import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState();

  const addCategory = ()=>{
    console.log(categoryName);
    handleClose();
  }
  return (
    <>
      <button className="btn btn-warning" onClick={handleShow}>Add new category</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title>
            Add Category &nbsp; <i class="fa-solid fa-list"></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontWeight: "700" }}>Please fill the form</p>
          <Form className="border border-dark p-3 rounded">
            <Form.Group className="mb-3" controlId="formGroupVideoId">
              <Form.Control type="text" placeholder="Enter Category Name" 
              onChange={(e)=>setCategoryName(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
