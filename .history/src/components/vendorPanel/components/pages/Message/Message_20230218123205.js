/** @format */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const MSG = () => {
  const [modalShow, setModalShow] = React.useState(false);


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel controlId="floatingTextarea2" label="Notification">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
        />
      </FloatingLabel>
         

            <Button
              variant="outline-success"
              onClick={() => {
                props.onHide();
                toast.success(
                 "Notification Addded"
                );
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Notification
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Notification
          </Button>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Notification</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  blandit enim eu massa consectetur, at convallis metus lacinia.
                  Nullam hendrerit elit eu sem feugiat, vel dictum ante semper.
                  Donec euismod, justo at porttitor facilisis, metus velit
                  auctor velit, quis accumsan enim arcu eu eros. Sed sit amet
                  sem eu sapien rutrum fr
                </td>
                <td>12/02/2023</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <AiFillDelete
                      color="red"
                      cursor={"pointer"}
                      onClick={() =>
                        toast.success("Notification Deleted Successfully")
                      }
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(MSG);
