import { useState } from 'react';
import { Form, Button, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/userData';
import SimpleSider from '../components/Siders/SimpleSider';
import '../components/Register/Register.css';

function Register({ history }) {
    const [loading, setLoading] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState({
        name: null,
        lastName: null,
        gender: null,
        phoneNumber: '',
        email: "",
        password: "",
        repeatPassword: ""
    });

    const handleChanges = (e) => {
        e.preventDefault();
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmitReg = (e) => {
        e.preventDefault();
        setLoading(true);
        registerUser(userData)
            .then(res => {
                if (!res.error) {
                    history.push('/auth/login')
                } else {
                    setLoading(false);
                    setError(res.error);
                    setAlertShow(true);
                }
            }).catch(err => console.error('error from register: ', err))
    }

    return (
        <>
            <SimpleSider />
            <div className="container auth-form" >
                <h1 style={{color:"#FFFFFF"}} className="auth-heading">SIGN UP</h1>
                <Form className="col-lg-8" onSubmit={handleSubmitReg}>
                    {alertShow &&
                        <Alert variant="danger" onClose={() => setAlertShow(false)} dismissible>
                            <p>
                                {error}
                            </p>
                        </Alert>
                    }
                    <Form.Row>
                        <Form.Group controlId="forName" className="col-lg-8">
                            <Form.Label style={{color:"#FFFFFF"}} >Name *</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Name" onChange={handleChanges} required />
                            <Form.Text  style={{color:"#FFFFFF"}} >
                                Your real name or a username.
                            </Form.Text>
                        </Form.Group>
                        {/* <Form.Group controlId="forLastName" className="col-lg-4">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" placeholder="Ivanov" onChange={handleChanges} />
                        </Form.Group> */}
                        <Form.Group as={Col} controlId="formGridGender" className="col-lg-4">
                            <Form.Label style={{color:"#FFFFFF"}} >Gender</Form.Label>
                            <Form.Control as="select" defaultValue="not specified" name="gender" onChange={handleChanges}>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group className="col-lg-12">
                            <Form.Label style={{color:"#FFFFFF"}} >Phone Number *</Form.Label>
                            <Form.Control type="text" name="phoneNumber" placeholder="+4378769999" onChange={handleChanges} />
                            <Form.Text style={{color:"#FFFFFF"}} >
                                Phone Number will be used by the buyer to contact the seller.
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" className="col-lg-12">
                            <Form.Label style={{color:"#FFFFFF"}} >Email address *</Form.Label>
                            <Form.Control type="email" name="email" placeholder="ivan@abv.bg" onChange={handleChanges} required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicPassword" className="col-lg-6">
                            <Form.Label style={{color:"#FFFFFF"}} >Password *</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChanges} required />
                            <Form.Text style={{color:"#FFFFFF"}} >
                                Your password must be 8-20 characters long
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="col-lg-6">
                            <Form.Label style={{color:"#FFFFFF"}} >Confirm Password *</Form.Label>
                            <Form.Control type="password" name="repeatPassword" placeholder="Repeat password" onChange={handleChanges} required />
                        </Form.Group>
                    </Form.Row>
                    {loading ?
                        <Button className="col-lg-12 btnAuth" variant="dark" disabled >
                            Please wait... <Spinner animation="border" />
                        </Button>
                        :
                        <Button variant="dark" className="col-lg-12 btnAuth" type="submit">Sign Up</Button>
                    }

                    <p style={{color:"#FFFFFF"}} className="bottom-msg-paragraph">Already have an account? <Link to="/auth/login">Sign In</Link>!</p>

                    <p  style={{color:"#FFFFFF"}} className="bottom-msg-paragraph">We do not share your personal information with third-party entities nor do we track it. <Link to="/auth/login">Private Policy</Link></p>
                </Form>
            </div>
        </>
    )
}

export default Register;