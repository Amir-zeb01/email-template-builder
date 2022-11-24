import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextField({
    label,
    type = 'text',
    wrapperStyle = '',
    handleInput=()=>{},
    initValue=null,
    error,
    inputStyle='',
    ...props
}) {

    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!!initValue) {
            setValue(initValue);
        }
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
        handleInput(e);
    }

    return (
        <div className={'input_wrapper ' + wrapperStyle}>
            {label && <Form.Label className={error ? 'text-danger' : ''}>{label}</Form.Label>}
            <div className="position-relative">
                <Form.Control
                    type={type === 'password' ? show ? 'text' : 'password' : type}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    className={error ? ('is-invalid ' + inputStyle) : ('' + inputStyle)}
                    {...props}
                />
                {error && <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>}
                {
                    type === 'password' &&
                    <button type="button" className="border-0 rounded-circle focus_none translate-middle position-absolute top-50 end-0"
                    style={{backgroundColor:'transparent'}}
                    onClick={() => setShow(!show)} >
                        {show ?
                            <FontAwesomeIcon icon={faEyeSlash} />
                            :
                            <FontAwesomeIcon icon={faEye} />
                        }
                    </button>
                }
            </div>
        </div>
    );
}
