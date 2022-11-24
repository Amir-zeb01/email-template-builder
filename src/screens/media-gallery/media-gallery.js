import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Alert, OverlayTrigger, Popover } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import { IconButton, MyButton } from "../../components";

const _types = ["JPG", "PNG", "GIF"];

export default function MediaGallery() {
    const [gallery, setGallery] = useState([]);
    const [file, setFile] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleChange = (_file) => {
        setFile(_file);
        let arr = gallery;
        for (let i = 0; i < _file.length; i++) {
            let blob = URL.createObjectURL(_file[i]);
            arr.push(blob);
        }
        setGallery(arr);
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                Saved to Clipboard
            </Popover.Body>
        </Popover>
    );

    return (
        <Container fluid className="pt-4 pb-4">
            <Row>
                <Col xs={12}>
                    <div id="gjs" className="d-none" />
                    <h4 className="display-6">
                        Media
                    </h4>
                    <div class="d-flex justify-content-center mt-4">
                        <FileUploader
                            name="file"
                            types={_types}
                            multiple={true}
                            handleChange={handleChange} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-flex gap-3 flex-wrap mt-5 justify-content-center">
                        {gallery.length ?
                            gallery.map((_v, _i) => (
                                <div className="card p-2" key={_i}>
                                    <div className="d-flex justify-content-center mb-2 py-3">
                                        <div className="d-flex align-items-center overflow-hidden justify-content-center" style={{ width: "100px", height: '100px' }}>
                                            <img src={_v} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="d-flex gap-1 align-items-center justify-content-center">
                                        <OverlayTrigger trigger="click" rootClose={true} placement="top" overlay={popover}>
                                            <Button className="btn-light" onClick={() => { navigator.clipboard.writeText(_v) }}>
                                                <small>Copy Url</small>
                                            </Button>
                                        </OverlayTrigger>
                                        <a href={_v} target="_blank">
                                            <IconButton icon={faEye} />
                                        </a>
                                        <IconButton icon={faTrash} color='danger' onClick={() => setShow(true)} />
                                    </div>
                                </div>
                            ))
                            : null}
                    </div>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} centered>
                <div className="text-end">
                    <Button variant="light" onClick={handleClose} className='rounded-circle' children='&times;' />
                </div>
                <Modal.Body>
                    <p className="fs-5 text-center">Are you sure!</p>
                    <div className="d-flex justify-content-center align-items-center gap-2 px-2 pb-2">
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            Yes
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}