import { Component } from 'react';
import { Form, Button, Col, Spinner, Alert } from 'react-bootstrap';
import { createProduct } from '../services/productData';
import SimpleSider from '../components/Siders/SimpleSider';
import '../components/CreateSell/CreateSell.css';


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", price: "", description: "", city: "", category: "", image: "", loading: false, alertShow: false, errors: [] };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }


    onChangeHandler(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.files) {
            this.setState({ image: e.target.files[0] })
        }
    };

    onSubmitHandler(e) {
        e.preventDefault();
        let { title, price, description, city, category, image } = this.state;
        let obj = { title, price, description, city, category }
        this.setState({ loading: true })
        this.getBase64(image)
            .then((data) => {
                obj['image'] = data;
                createProduct(obj)
                    .then(res => {
                        if (res.error) {
                            this.setState({ loading: false })
                            this.setState({ errors: res.error })
                            this.setState({ alertShow: true })
                        } else {
                            this.props.history.push(`/categories/${category}/${res.productId}/details`)
                        }
                    })
                    .catch(err => console.error('Creating product err: ', err))
            })
            .catch(err => console.error('Converting to base64 err: ', err));
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    render() {
        return (
            <>
                <SimpleSider />
                <div className='container' style={{textAlign: "center", backgroundColor: '#4068FC'}}>
                    <h1 className="heading" style={{textAlign: "center", color: '#FFFFFF'}}>Add a Product</h1>
                    <Form onSubmit={this.onSubmitHandler}>
                        {this.state.alertShow &&
                            <Alert variant="danger" onClose={() => this.setState({ alertShow: false })} dismissible>
                                <p>
                                    {this.state.errors}
                                </p>
                            </Alert>
                        }
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label style={{textAlign: "center", color: '#FFFFFF'}}>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" name="title" required onChange={this.onChangeHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label style={{textAlign: "center", color: '#FFFFFF'}}>Price</Form.Label>
                                <Form.Control type="number" step="0.01" placeholder="Price" name="price" required onChange={this.onChangeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDescription.ControlTextarea1">
                            <Form.Label style={{textAlign: "center", color: '#FFFFFF'}}>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" placeholder="What are you selling?" required onChange={this.onChangeHandler} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCategory">
                                <Form.Label style={{textAlign: "center", color: '#FFFFFF'}}>University</Form.Label>
                                <Form.Control  as="select"  defaultValue="N/A" name="category"  required onChange={this.onChangeHandler}>
                                <option>N/A</option>
                                <option>Algoma University</option>
                                    <option>Brock University</option>
                                    <option>Carleton University</option>
                                    <option>Lakehead University</option>
                                    <option>Laurentian University</option>
                                    <option>McMaster University</option>
                                    <option>Nipissing University</option>
                                    <option>Queen's University</option>
                                    <option>Toronto Metropolitan University</option>
                                    <option>Saint Paul University</option>
                                    <option>University of Guelph-Humber</option>
                                    <option>University of Ontario Institute of Technology</option>
                                    <option>University of Ottawa</option>
                                    <option>University of Toronto</option>
                                    <option>University of Waterloo</option>
                                    <option>University of Western Ontario</option>
                                    <option>University of Windsor</option>
                                    <option>Wilfrid Laurier University</option>
                                    <option>York University</option>
                                    </Form.Control>
                                   
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCategory">
                                <Form.Label style={{textAlign: "center", color: '#FFFFFF'}}>Category</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="category" required onChange={this.onChangeHandler}>
                                    <option>Choose...</option>
                                    <option>Math</option>
                                    <option>Physics</option>
                                    <option>Biology</option>
                                    <option>Chemistry</option>
                                    <option>Arts</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridImage" >
                                <Form.Label style={{textAlign: "center", color: '#FFFFFF'}}>Image</Form.Label>
                                <Form.Control name="image" type="file" required onChange={this.onChangeHandler} />
                            </Form.Group>
                        </Form.Row>
                        {this.state.loading ?
                            <Button className="col-lg-12" variant="dark" disabled >
                                Please wait... <Spinner animation="border" />
                            </Button>
                            :
                            <Button className="col-lg-12" variant="dark" type="submit">Continue</Button>
                        }
                    </Form>
                </div>
            </>
        )
    }
}

export default AddProduct;