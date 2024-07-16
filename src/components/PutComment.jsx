import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function PutComment( {comment, loadComments} ) {
    console.log(comment._id)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValue, setFormValue] = useState({
        rate: "",
        comment: "",
        elementId: comment.elementId
    })

    const handleChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value })
    }

    const handlePutComment = async () => {
        console.log('prima della fetch')

        await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NTI4ZjJiNWMyMDAwMTUyNzFmYzAiLCJpYXQiOjE3MjAyNzU1OTksImV4cCI6MTcyMTQ4NTE5OX0.1l2L_C5IfmeqdcCMQv4lPw5mDqwTeOs2uBpdvhJseAs"
            },
            method: "PUT",
            body: JSON.stringify(formValue)
        })

        await alert('recensione modificata')

        loadComments()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Modifica commento
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica commento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select aria-label="Default select example" name="rate" onChange={handleChange}>
                            <option>Rate</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" rows={3} name="comment" onChange={handleChange}/>
                        </Form.Group>
                        <Button variant="primary" onClick={handlePutComment}>
                            Modifica
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PutComment;