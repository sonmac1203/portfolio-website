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
      <Container>
        <h2 className='d-flex justify-content-center element-name'>
          How To Reach Me &#128074;
        </h2>
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
                  rows='7'
                  required='required'
                  placeholder='What are we talking about?*'
                />
              </FormGroup>
            </Form>
            <div className='d-flex justify-content-center'>
              <Button className='contact-btn'>Send</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
