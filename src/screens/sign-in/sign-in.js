import React from "react";
import { Container, Form } from "react-bootstrap";

import { faSignInAlt} from "@fortawesome/free-solid-svg-icons";

import { MyButton } from "../../components";
import TextField from "../../components/custom-inputs/text-field";
import { logo } from "../../assets";
import { loginUser } from "../../store/reducer";
import { useDispatch } from "react-redux";


export default function SignIn() {

    const dispatch =useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('user','panther');
        dispatch(loginUser());
    }

    return (
        <div className="signin_page">
            <Container fluid>
                <div className="form_wrapper shadow p-4 bg-light">
                    <Form autoComplete="off" onSubmit={handleLogin}>
                        <div className="text-center mt-5 mb-3">
                            <img src={logo} alt=""/>
                        </div>
                        <h6 className="display-6 text-center mb-4">Welcome</h6>
                        <div className="mb-3">
                            <TextField
                                label='Email'
                                type="email"
                                name="email"
                                placeholder='john@example.com'
                                required
                                error=''
                            />
                        </div>
                        <div className="mb-5">
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                placeholder='xxxx'
                                required
                                error=''
                            />
                        </div>
                        <MyButton type="submit" icon={faSignInAlt} color="dark" btnStyle="w-100 rd-25" label='LogIn' />
                    </Form>
                </div>
            </Container>
        </div>
    );
}