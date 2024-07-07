import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function AddComment({ asin }) {
    const [formValue, setFormValue] = useState({
        rate: "",
        comment: "",
        elementId: asin
    })

    const handleChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value })
    }

    const handleSaveComment = async () => {
        await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NTI4ZjJiNWMyMDAwMTUyNzFmYzAiLCJpYXQiOjE3MjAyNzU1OTksImV4cCI6MTcyMTQ4NTE5OX0.1l2L_C5IfmeqdcCMQv4lPw5mDqwTeOs2uBpdvhJseAs"
            },
            method: "POST",
            body: JSON.stringify(formValue)
        })
    }

    return (
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
                <Form.Control type="text" rows={3} name="comment" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleSaveComment}>
                Submit
            </Button>
        </Form>
    )
}



export default AddComment;