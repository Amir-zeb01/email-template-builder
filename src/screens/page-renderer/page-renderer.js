import React from "react";
import { Helmet } from "react-helmet";
import grapesjs from 'grapesjs';
import { useParams } from "react-router-dom";

export default function PageRenderer() {
    var _projects;
    var _atIndex;
    const [html, setHtml] = React.useState('');
    const [css, setCss] = React.useState('');
    const { slug } = useParams();

    React.useEffect(() => {
        _projects = JSON.parse(localStorage.getItem('projects'));
        _atIndex = slug.slice(-1);
        loadGrapes(_projects[_atIndex]);
    }, []);

    const loadGrapes = (data) => {
        const editor = grapesjs.init({
            container: '#gjs',
        });
        if (data.page) {
            editor.loadProjectData(data.page);
            let _html = editor.getHtml();
            let _css = editor.getCss();
            setHtml(_html);
            setCss(_css);
        }
    }

    return (
        <>
            <Helmet>
                <style>
                    {css}
                </style>
            </Helmet>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}