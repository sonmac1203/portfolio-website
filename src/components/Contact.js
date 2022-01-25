import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

const Contact = () => {
  return (
    <section id='contact'>
      <h1 className='d-flex justify-content-center'>4. Contact</h1>
      <p className='d-flex justify-content-center'>Let's get in touch!</p>
      <Row className='justify-content-center mt-4 mb-5'>
        <Col lg='6'>
          <Form>
            <FormGroup>
              <Input
                type='text'
                name='name'
                id='Name'
                required='required'
                placeholder='How should I call you?*'
                className='mb-4'
              />
              <Input
                type='email'
                name='email'
                id='Email'
                required='required'
                placeholder='What is your email address?*'
                className='mb-4'
              />
              <Input
                type='textarea'
                name='text'
                id='Text'
                required='required'
                placeholder='What are we talking about?*'
              />
            </FormGroup>
          </Form>
          <Button>Send</Button>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
