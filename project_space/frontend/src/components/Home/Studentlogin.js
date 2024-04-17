// // import React, { useState } from "react";
// // import { Form, Button, Alert } from "react-bootstrap";
// // import "./Studentlogin.css";
// // import BackgroundImage from "../../Assets/home-bg.jpg";
// // import { Navigate } from "react-router-dom";
// // import axios from 'axios'

// // function StudentLogin(){
// //   const [user, setuser]=useState({
// //     inputUsername:"",
// //     inputPassword:""


// //   });
// // }

// // const StudentLogin = () => {
// //   const [inputUsername, setInputUsername] = useState("");
// //   const [inputPassword, setInputPassword] = useState("");

// //   const [show, setShow] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     const api='http://localhost:3000/api/login'
// //     setLoading(true);
// //     await delay(500);
// //     console.log(`inputUsername :${inputUsername}, inputPassword :${inputPassword}`);
// //     if (inputUsername !== "student" || inputPassword !== "1234") {
// //       setShow(true);
// //     }
// //     setLoading(false);
// //     axios.post(api).then((res)=>{
// //       console.log(res.data)
// //     })
      
// //   };

 

// //   const handlePassword = () => {};

// //   function delay(ms) {
// //     return new Promise((resolve) => setTimeout(resolve, ms));
// //   }

// //   return (
// //     <div
// //       className="sign-in__wrapper"
// //       style={{ backgroundImage: `url(${BackgroundImage})` }}
// //     >
// //       {/* Overlay */}
// //       <div className="sign-in__backdrop"></div>
// //       {/* Form */}
// //       <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        
// //         <div className="h4 mb-2 text-center">Student Login</div>
// //         {/* ALert */}
// //         {show ? (
// //           <Alert
// //             className="mb-2"
// //             variant="danger"
// //             onClose={() => setShow(false)}
// //             dismissible
// //           >
// //             Incorrect username or password.
// //           </Alert>
// //         ) : (
// //           <div />
// //         )}
// //         <Form.Group className="mb-2" controlId="username">
// //           <Form.Label>Username</Form.Label>
// //           <Form.Control
// //             type="text"
// //             value={inputUsername}
// //             placeholder="Username"
// //             onChange={(e) => setInputUsername(e.target.value)}
// //             required
// //           />
// //         </Form.Group>
// //         <Form.Group className="mb-2" controlId="password">
// //           <Form.Label>Password</Form.Label>
// //           <Form.Control
// //             type="password"
// //             value={inputPassword}
// //             placeholder="Password"
// //             onChange={(e) => setInputPassword(e.target.value)}
// //             required
// //           />
// //         </Form.Group>
        
// //         {!loading ? (
// //           <Button className="w-100" variant="primary" type="submit">
// //             Log In
// //           </Button>
// //         ) : (
// //           <Button className="w-100" variant="primary" type="submit" disabled>
// //             Logging In...
// //              <Navigate to="/register1" />;
// //           </Button>
// //         )}
// //       </Form>
      
// //     </div>
// //   );
// // };

// // export default StudentLogin;




// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import "./Studentlogin.css";
// import BackgroundImage from "../../Assets/home-bg.jpg";
// import { Navigate } from "react-router-dom";
// import axios from 'axios'

// function StudentLogin(){
//   const [user, setuser]=useState({
//     inputUsername:"",
//     inputPassword:""


//   });
// }

// const StudentLogin = () => {
//   const [inputUsername, setInputUsername] = useState("");
//   const [inputPassword, setInputPassword] = useState("");

//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const api='http://localhost:3000/api/login'
//     setLoading(true);
//     await delay(500);
//     console.log(`inputUsername :${inputUsername}, inputPassword :${inputPassword}`);
//     if (inputUsername !== "student" || inputPassword !== "1234") {
//       setShow(true);
//     }
//     setLoading(false);
//     axios.post(api).then((res)=>{
//       console.log(res.data)
//     })
      
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
        
//         <div className="h4 mb-2 text-center">Student Login</div>
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
//         <Form.Group className="mb-2" controlId="username">
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
//              <Navigate to="/register1" />;
//           </Button>
//         )}
//       </Form>
      
//     </div>
//   );
// };

// export default StudentLogin;



import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Studentlogin.css";
import BackgroundImage from "../../Assets/home-bg.jpg";
import { Navigate } from "react-router-dom";
import axios from 'axios';

// const axiosAPI = axios.create();
function StudentLogin() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [navigate, setNavigate] = useState(false);



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   try {
  //     const response = await fetch('http://localhost:3000/api/login');
  //     const data=await response.json();
  //     setInputUsername(data);
  //     setInputPassword(data);

  //     console.log(response.data);

  //     if (response.status === 200) {
  //       // Login successful
  //       console.log("Login successful");
  //       // Redirect user or perform any other action
  //     } else {
  //       // Login failed
  //       console.log("Login failed");
  //       setShowAlert(true);
  //     }
  //   } catch (error) {
  //     // Handle error
  //     console.log("Error:", error);
  //     setShowAlert(true);
  //   }

  //   setLoading(false);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("http://localhost:7000/api/login", {inputUsername,inputPassword})
    .then((res)=>{
      localStorage.setItem('authUser',JSON.stringify(res.data))
    window.location.href = '/register1'
    })
    .catch((err)=>{
      alert("incorrect username or password")
      window.location.reload();
    })
    
   };
  //  if (navigate){
  //   return <Navigate to="/register1"/>;
  //   //window.location.href = '/register1'
  //  }


  return (
    <div className="sign-in__wrapper" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="h4 mb-2 text-center">Student Login</div>
        {/* {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            Incorrect username or password.
          </Alert>
        )} */}
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
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
      </Form>
    </div>
  );
}

export default StudentLogin;
