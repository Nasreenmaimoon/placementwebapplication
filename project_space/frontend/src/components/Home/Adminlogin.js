// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import "./Studentlogin.css";

// import BackgroundImage from "../../Assets/home-bg.jpg";


// const AdminLogin = () => {
//   const [inputUsername, setInputUsername] = useState("");
//   const [inputPassword, setInputPassword] = useState("");

//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     await delay(500);
//     console.log(`Username :${inputUsername}, Password :${inputPassword}`);
//     if (inputUsername !== "admin" || inputPassword !== "1234") {
//       setShow(true);
//     }
//     setLoading(false);
//   };

//   const handlePassword = () => {};

//   function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   return (
//     <div
//       className="sign-in__wrapper"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* Overlay */}
//       <div className="sign-in__backdrop"></div>
//       {/* Form */}
//       <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        
//         <div className="h4 mb-2 text-center">Admin Login</div>
//         {/* ALert */}
//         {show ? (
//           <Alert
//             className="mb-2"
//             variant="danger"
//             onClose={() => setShow(false)}
//             dismissible
//           >
//             Incorrect username or password.
//           </Alert>
//         ) : (
//           <div />
//         )}
//         <Form.Group className="mb-2 " controlId="username" >
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             value={inputUsername}
//             placeholder="Username"
//             onChange={(e) => setInputUsername(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mb-2" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={inputPassword}
//             placeholder="Password"
//             onChange={(e) => setInputPassword(e.target.value)}
//             required
//           />
//         </Form.Group>
//         {!loading ? (
//           <Button className="w-100" variant="primary" type="submit">
//             Log In
//           </Button>
//         ) : (
//           <Button className="w-100" variant="primary" type="submit" disabled>
//             Logging In...
//           </Button>
//         )}<br/>
//         {/* <div className="d-grid justify-content-center">
//           <Button
//             className="text-muted px-0"
//             variant="link"
//           >
//             Create An account!
//           </Button>
//         </div> */}
//       </Form>
      
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Studentlogin.css";
// import BackgroundImage from "../../Assets/home-bg.jpg";
import { Navigate } from "react-router-dom";
import Datalist from "./admintable";

const AdminLogin = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [navigate, setNavigate] = useState(false); // State to manage navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log('Username :${inputUsername}, Password :${inputPassword}');
    if (inputUsername === "admin" && inputPassword === "1234") {
      // If credentials are correct, navigate to another page
      setNavigate(true);
    } else {
      setShow(true);
    }
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  if (navigate) {
    return <Navigate to="/admintable" />; // Correctly use Navigate for redirection
  }

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: 'url(${BackgroundImage})' }}
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        
        <div className="h4 mb-2 text-center">Admin Login</div>
        {/* Alert */}
        {show && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        
        <Button className="w-100" variant="primary" type="submit" disabled={loading}>
          {loading ? "Logging In..." : "Log In"}
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;