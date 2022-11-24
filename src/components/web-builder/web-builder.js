import React from "react";

import { Spinner } from "react-bootstrap";

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './builder.css';
import basicBlock from 'grapesjs-blocks-basic';
import gWebpage from 'grapesjs-preset-webpage';
import gjsForms from 'grapesjs-plugin-forms';
import gNavbar from 'grapesjs-navbar';

import { Link, useParams } from "react-router-dom";

export default function WebBuilder() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = React.useState(false);
    var _projects;
    var _atIndex;

    React.useEffect(() => {
        _projects = JSON.parse(localStorage.getItem('projects'));
        _atIndex = _projects.findIndex(x => x.id === id);
        setIsLoading(true);
        loadGrapes();
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const loadComponents = (editor) => {
        editor.Panels.addPanel({
            id: 'save-file-actions',
            el: '.gjs-pn-devices-c',
            buttons: [
                {
                    id: 'alert-button',
                    className: 'btn-alert-button',
                    label: 'Save',
                    command(editor) { saveState(editor); }
                }
            ],
        });
    }

    const saveState = async (editor) => {
        setIsLoading(true);
        const storedProjectData = await editor.store();
        _projects[_atIndex].page = storedProjectData;
        localStorage.setItem('projects', JSON.stringify(_projects));
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    const loadGrapes = () => {
        const editor = grapesjs.init({
            container: '#gjs',
            fromElement: true,
            height: '100vh',
            width: 'auto',
            // plugins: ['grapesjs-tui-image-editor', basicBlock, gWebpage, 'grapesjs-custom-code'],
            plugins: [basicBlock, gWebpage],
            canvas: {
                styles: [
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
                ],
                scripts: [
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
                ],
            },
            assetManager: {
                upload: false,
                autoAdd: false,
                embedAsBase64: false
            },
            blockManager: {
                blocks: [],
            },
            storageManager: false
        });
        loadComponents(editor);
        if (_projects[_atIndex].page !== null) {
            editor.loadProjectData(_projects[_atIndex].page);
        }
    }

    return (
        <>
            {isLoading &&
                <div className='position-relative'>
                    <div style={{ minHeight: '100vh', width: '100%', zIndex: 5, backgroundColor: 'rgba(255,255,255,0.2)' }} className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </div>
            }
            <div>
                <div id="gjs">
                    <h1>Lorem Ipsum!</h1>
                    <Link to='/dashboard/admin'>react link</Link>
                </div>
            </div>
        </>
    );
}