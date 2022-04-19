import React, {useEffect, useState} from 'react';
import {Form, Row, Col} from "react-bootstrap";
import axios from "axios";
import Button from 'react-bootstrap/Button';


export default function Meme() {
    return (
        <div>
            <Form>
                <Row className="form">
                    <Col>
                        <Form.Control />
                    </Col>
                    <Col>
                        <Form.Control />
                    </Col>
                </Row>
            </Form>

            <div className="d-grid gap-2 meme-button">
                <Button variant="flat" size="lg">
                    Get a new meme image \^-^/
                </Button>
            </div>
        </div>
    )
}
