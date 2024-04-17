

import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import BackgroundImage from "../../Assets/home-bg.jpg";
import { Navigate } from "react-router-dom";
import axios from "axios";


const CriteriaLogin = () => {
  const [CompanyName, setCompanyName] = useState("");
  const [data, setData] = useState({
    CompanyName:"",
    role:"",
    Basicskills:"",
    Programmingskills:"",
    CGPA:"",
    Backlog:""
  });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [navigate, setNavigate] = useState(false); // State to manage navigation

  useEffect(()=>{
    console.log(data)
  },[data])

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    await axios.post("http://localhost:7000/api/add-criteria", data ).then((response)=>{
      console.log(response)
    })
    .then((result) => {
      console.log(result.data);
    }).catch((error) => {
      
      
    })
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

//   if (navigate) {
//     return <Navigate to="/admintable" />; // Correctly use Navigate for redirection
//   }

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: 'url(${BackgroundImage})' }}
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        
        <div className="h4 mb-2 text-center">criteriaLogin</div>
        {/* Alert */}
        {/* {show && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert> */}
        {/* )} */}
        <Form.Group className="mb-2" controlId="CompanyName">
          <Form.Label>CompanyName</Form.Label>
          <Form.Control
            type="text"
            value={data.CompanyName}
            placeholder="CompanyName"
            onChange={(e) => setData((prevState) => ({...prevState,"CompanyName": e.target.value}))}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="role">
          <Form.Label>role</Form.Label>
          <Form.Control
            type="role"
            value={data.role}
            placeholder="role"
            onChange={(e) => setData((prevState) => ({...prevState,"role": e.target.value}))}

            

            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Basicskills">
          <Form.Label> Basicskills</Form.Label>
          <Form.Control
            type="Basicskills"
            value={data.Basicskills}
            placeholder="Basicskills"
            onChange={(e) => setData((prevState) => ({...prevState,"Basicskills": e.target.value}))}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Programmingskills">
          <Form.Label>Programmingskills</Form.Label>
          <Form.Control
            type="Programmingskills"
            value={data.Programmingskills}
            placeholder="Programmingskills"
            onChange={(e) => setData((prevState) => ({...prevState,"Programmingskills": e.target.value}))}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="CGPA">
          <Form.Label>CGPA</Form.Label>
          <Form.Control
            type="CGPA"
            value={data.CGPA}
            placeholder="CGPA"
            onChange={(e) => setData((prevState) => ({...prevState,"CGPA": e.target.value}))}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Backlog">
          <Form.Label>Backlog</Form.Label>
          <Form.Control
            type="Backlog"
            value={data.Backlog}
            placeholder="Backlog"
            onChange={(e) => setData((prevState) => ({...prevState,"Backlog": e.target.value}))}
            required
          />
        </Form.Group>
        
        <Button className="w-100" variant="primary" type="submit" disabled={loading}>
          {loading ? "Logging..." : "Log In"}
        </Button>
      </Form>
    </div>
  );
};

export default CriteriaLogin;


