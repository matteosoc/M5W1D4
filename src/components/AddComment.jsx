import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function AddComment({ asin, loadComments }) {


    const initialFormState = {
        rate: "",
        comment: "",
        elementId: asin
    }

    const [formValue, setFormValue] = useState(initialFormState)


    const handleChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value })
    }

    const handleSaveComment = async () => {

        await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlkMTdhMzQxNzAwOTAwMTUwZDA0MDUiLCJpYXQiOjE3MjE1NzEyMzUsImV4cCI6MTcyMjc4MDgzNX0.ZKoAxeQutdOygJdYoQol5Z_mz5iGS465ln_TI3CM9q0"
            },
            method: "POST",
            body: JSON.stringify(formValue)
        })

        // carica commenti
        loadComments()
        //pulisce il form
        setFormValue(initialFormState)
    }

    return (
        <Form className='pb-3'>
            <h4>Aggiungi recensione</h4>
            <Form.Select placeholder='rate' aria-label="rate" name="rate" onChange={handleChange} value={formValue.rate}>
                <option>Rate</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text" rows={3} name="comment" onChange={handleChange} value={formValue.comment} />
            </Form.Group>
            <Button variant="primary"  onClick={handleSaveComment}>
                Invia
            </Button>
        </Form>
    )
}



export default AddComment;