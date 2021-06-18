import React from 'react';
import {InputGroup,FormControl, Form, Button} from "react-bootstrap";

function Filiar() {
    return (
        
    <div className="filiar">
        <div className="container" >
        <br></br><br></br><br></br>
        <h2 className="formulario-cadastro">Formulário de Cadastro</h2>
       

        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>

        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
            https://example.com/users/
            </InputGroup.Text>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
      
         <Button type="submit">Submit</Button>
        </div>
    </div>
    );
}

export default Filiar;
