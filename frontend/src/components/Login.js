import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios"; // Import axios to make HTTP requests

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:5000/api/users/login"; // Backend login endpoint

    try {
      // Send login request to the backend
      const response = await axios.post(apiUrl, { email, password });

      if (response.status === 200) {
        // Save the JWT token (if login is successful)
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        
        // Navigate to your app's internal route (dashboard, homepage, etc.)
      }
    } catch (err) {
      // Handle errors and display error message
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <div className="text-center mb-4">
            <h2 style={{ fontSize: "32px", fontWeight: "600" }}>Instagram</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            {/* Email field */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone number, username, or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: "12px",
                  fontSize: "14px",
                  borderRadius: "5px",
                  border: "1px solid #dbdbdb",
                }}
              />
            </Form.Group>

            {/* Password field */}
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  padding: "12px",
                  fontSize: "14px",
                  borderRadius: "5px",
                  border: "1px solid #dbdbdb",
                }}
              />
            </Form.Group>

            {/* Login Button */}
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              style={{
                padding: "12px",
                backgroundColor: "#0095f6",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Log In
            </Button>

            {/* Error Message */}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <div className="text-center mb-3">
              <span style={{ backgroundColor: "#dbdbdb", padding: "0 10px" }}>
                OR
              </span>
            </div>

            <Button
              variant="info"
              className="w-100 mb-3"
              style={{
                padding: "12px",
                backgroundColor: "#3897f0",
                border: "none",
                fontSize: "16px",
              }}
            >
              Log in with Facebook
            </Button>

            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <a href="#" style={{ color: "#0095f6", textDecoration: "none" }}>
                  Sign up
                </a>
              </p>
              <p>
                <a href="#" style={{ color: "#0095f6", textDecoration: "none" }}>
                  Forgot password?
                </a>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
