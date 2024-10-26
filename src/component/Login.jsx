import React, { useState } from 'react';
import { Form, Button, Container, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const Login = () => {
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); 

  // تبديل بين النموذجين
  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", email, password);
    } else {
      console.log("Signing up with:", name, email, password);
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <ToggleButtonGroup type="radio" name="formType" className="mb-3">
        <ToggleButton variant="outline-primary" active={isLogin} onClick={() => setIsLogin(true)}>
          Login
        </ToggleButton>
        <ToggleButton variant="outline-secondary" active={!isLogin} onClick={() => setIsLogin(false)}>
          Sign Up
        </ToggleButton>
      </ToggleButtonGroup>
      
      <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <h3 className="text-center">{isLogin ? "Login" : "Sign Up"}</h3>
        
        {!isLogin && (
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        )}
        
        <Form.Group controlId="formBasicEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="mt-3 w-100">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
