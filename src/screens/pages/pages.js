import React, { useState } from "react";

import { Container, Row, Col,Spinner } from "react-bootstrap";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { IconButton, MyButton } from "../../components";
import CreatePage from "./create-page";
import { useNavigate } from "react-router-dom";

export default function Pages() {
    const [showFrom, setShowForm] = useState(false);
    const [record, setRecord] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();

    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setIsLoading(true);
        let data = localStorage.getItem('projects');
        if (data) setRecord(JSON.parse(data));
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    const deletePage = (id) => {
        setIsLoading(true);
        let data = JSON.parse(localStorage.getItem('projects'));
        if (data.length === 1) {
            localStorage.clear();
            setRecord([]);
        } else {
            let newArr = data.filter(x => x.id !== id);
            setRecord(newArr);
            localStorage.setItem('projects', JSON.stringify(newArr));
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    return (
        <Container fluid className="pt-4 pb-4">
            <Row>
                <Col xs={12}>
                    <h4 className="display-6">Pages</h4>
                    <div className="text-end mb-4 mt-4">
                        <MyButton
                            onClick={() => setShowForm(!showFrom)}
                            color='dark'
                            label={showFrom ? 'cancel' : 'Create Page'} />
                    </div>
                    {showFrom &&
                        <CreatePage
                            afterSubmit={() => {
                                getData();
                                setShowForm(false);
                            }}
                        />
                    }
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="bg-dark text-light">ID</td>
                                    <td className="bg-dark text-light">Name</td>
                                    <td className="bg-dark text-light">Slug</td>
                                    <td align="center" className="bg-dark text-light">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ?
                                    <tr>
                                        <td colSpan='4' className="text-center">
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </td>
                                    </tr>
                                    :
                                    !record.length ?
                                        <tr>
                                            <td colSpan='4' className="text-center text-muted">
                                                Create your first page!
                                            </td>
                                        </tr>
                                        :
                                        record.map((_v, _i) => (
                                            <tr key={_i}>
                                                <td>{_v.id}</td>
                                                <td>{_v.label}</td>
                                                <td>{_v.slug}</td>
                                                <td>
                                                    <div className="d-flex gap-2 align-items-center justify-content-center">
                                                        <IconButton onClick={() => navigate(`/page-builder/${_v.id}`,{id:_v.id})} title='Edit' color='dark' icon={faPen} rounded />
                                                        <IconButton title='View' onClick={() => {return navigate(`/pages${_v.slug}-${_i}`),{id:_v.id}}} color='dark' icon={faEye} rounded />
                                                        <IconButton title='Delete' onClick={() => deletePage(_v.id)} icon={faTrash} color='danger' rounded />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}