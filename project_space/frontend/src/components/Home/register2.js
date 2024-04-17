import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Studentlogin.css"; // Make sure to create or update your CSS file accordingly
import BackgroundImage from "../../Assets/home-bg.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import Home from "./Home";

const Register2 = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputBranch, setInputBranch] = useState("");
  const [inputCGPA, setInputCGPA] = useState("");
  const [inputBacklog, setInputBacklog] = useState("");
  const [inputCollege, setInputCollege] = useState("");
  const [file, setFile] = useState(null); // For file upload
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // State to track registration status
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const navigate = useNavigate();
  // localStorage.clear()
  const formdt = localStorage.getItem("userform");
  console.log("fghfgh");
  console.log(formdt);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('inputName', inputName)
    formData.append('inputEmail', inputEmail)
    formData.append('inputBranch', inputBranch)
    formData.append('inputCGPA', inputCGPA)
    formData.append('inputBacklog',inputBacklog)
    formData.append('inputCollege', inputCollege)
    formData.append(' resume',  file)
    console.log(formData)

    axios.post("http://localhost:7000/api/register",formData,  {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    // Placeholder for registration logic
    // Set isRegistered to true upon successful registration
    console.log({
      inputName,
      inputEmail,
      inputBranch,
      inputCGPA,
      inputBacklog,
      inputCollege,
      file,
    });
    setLoading(false);
    setIsRegistered(true); // Simulate successful registration
  };

  function handleFileChange(event) {
    setFile(event.target.files[0]);

    console.log(event.target.files[0])
  }

  if (isRegistered) {
    alert("your form has been successfully submitted");
    return <Navigate to="/Home" />; // Redirect to the login page or another page after successful registration
  }

  const onDataStore = () => {

    const formData = {
      name: inputName,
      email: inputEmail,
      branch: inputBranch,
      cgpa: inputCGPA,
      backlog : inputBacklog,
      college: inputCollege
    }
    console.log(formData)
    localStorage.setItem("userform", formData);

    navigate('/register3');
  }

  return (
    <div className="sign-in__wrapper" style={{ backgroundImage: 'url(${BackgroundImage}) '}}>
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="h4 mb-2 text-center">Student Application</div>
        {show && (
          <Alert className="mb-2" variant="danger" onClose={
            () => setShow(false)} dismissible>
            Registration error message here.
          </Alert>
        )}
        {/* Name field */}
        <Form.Group className="mb-2" controlId="name">
          
          <Form.Control
            type="text"
            placeholder="Name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            required
          />
        </Form.Group>
        {/* Email field */}
        <Form.Group className="mb-2" controlId="email">
         
          <Form.Control
            type="email"
            placeholder="Email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
        </Form.Group>
        {/* Branch field */}
        <Form.Group className="mb-2" controlId="branch">
         
          <Form.Control
            type="text"
            placeholder="Branch"
            value={inputBranch}
            onChange={(e) => setInputBranch(e.target.value)}
            required
          />
        </Form.Group>
        {/* CGPA field */}
        <Form.Group className="mb-2" controlId="cgpa">
          
          <Form.Control
            type="text"
            placeholder="CGPA"
            value={inputCGPA}
            onChange={(e) => setInputCGPA(e.target.value)}
            required
          />
       </Form.Group>
       {/* Backlog field */}
       <Form.Group className="mb-2" controlId="backlog">
          
          <Form.Control
            type="text"
            placeholder="Backlogs"
            value={inputBacklog}
            onChange={(e) => setInputBacklog(e.target.value)}
            required
          />
          </Form.Group>
       {/*College field*/}
       <Form.Group className="mb-2" controlId="college">
         
         <Form.Control
           type="text"
           placeholder="College"
           value={inputCollege}
           onChange={(e) => setInputCollege(e.target.value)}
           required
         />
        </Form.Group>
        {/* File upload field */}
        <Form.Group className="mb-2" controlId="file">
          <Form.Label>Upload your Resume</Form.Label>
          <Form.Control type="file" name="resume" onChange={handleFileChange}
          required
           />
        </Form.Group>
        <Button className="w-100" variant="primary" onClick={onDataStore}>
            Create Resume
          </Button><br/><br/>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <Button className="w-100" variant="primary" disabled>
            Submitting...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Register2;







// import React, { useState , useEffect} from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import "./Studentlogin.css"; // Make sure to create or update your CSS file accordingly
// import BackgroundImage from "../../Assets/home-bg.jpg";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import Home from "./Home";

// const Register2 = () => {
//   const [inputName, setInputName] = useState("");
//   const [inputEmail, setInputEmail] = useState("");
//   const [inputBranch, setInputBranch] = useState("");
//   const [inputCGPA, setInputCGPA] = useState("");
//   const [inputBacklog, setInputBacklog] = useState("");
//   const [inputCollege, setInputCollege] = useState("");
//   const [file, setFile] = useState(null); // For file upload
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isRegistered, setIsRegistered] = useState(false); // State to track registration status
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const [userFormData, setUserFormData] = useState({
//     inputName: "",
//     inputEmail: "",
//     inputBranch: "",
//     inputCGPA: "",
//     inputBacklog: "",
//     inputCollege: "",
//     resume: ""
//   });

//   const addformdt = (e)=>{
//     setUserFormData({
//       ...userFormData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const navigate = useNavigate();
//   // localStorage.clear()
//   useEffect(() => {
//     const userString = localStorage.getItem('userform');
//     const userData = userString ? JSON.parse(userString) : {};
//     console.log(userData);
//     setUserFormData(userData);
//   }, []);

  

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     userFormData.resume = file;
//     console.log(userFormData)

//     axios.post("http://localhost:7000/api/register",userFormData,  {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     // Placeholder for registration logic
//     // Set isRegistered to true upon successful registration
   
//     setLoading(false);
//     setIsRegistered(true); // Simulate successful registration
//   };

//   function handleFileChange(event) {
//     setFile(event.target.files[0]);

//     console.log(event.target.files[0])
//   }

//   if (isRegistered) {
//     alert("your form has been successfully submitted");
//     return <Navigate to="/Home" />; // Redirect to the login page or another page after successful registration
//   }

//   const onDataStore = () => {

//     console.log(userFormData)
//     const userString = JSON.stringify(userFormData);
//     localStorage.setItem("userform", userString);

//     navigate('/register3');
//   }

//   return (
//     <div className="sign-in__wrapper" style={{ backgroundImage: `url(${BackgroundImage}) `}}>
//       <div className="sign-in__backdrop"></div>
//       <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
//         <div className="h4 mb-2 text-center">Student Application</div>
//         {show && (
//           <Alert className="mb-2" variant="danger" onClose={
//             () => setShow(false)} dismissible>
//             Registration error message here.
//           </Alert>
//         )}
//         {/* Name field */}
//         <Form.Group className="mb-2" controlId="name">
          
//           <Form.Control
//             type="text"
//             placeholder="Name"
//             name="inputName"
//             value={userFormData.inputName}
//             onChange={addformdt}
//             required
//           />
//         </Form.Group>
//         {/* Email field */}
//         <Form.Group className="mb-2" controlId="email">
         
//           <Form.Control
//             type="email"
//             placeholder="Email"
//             name="inputEmail"
//             value={userFormData.inputEmail}
//             onChange={addformdt}
//             required
//           />
//         </Form.Group>
//         {/* Branch field */}
//         <Form.Group className="mb-2" controlId="branch">
         
//           <Form.Control
//             type="text"
//             placeholder="Branch"
//             name="inputBranch"
//             value={userFormData.inputBranch}
//             onChange={addformdt}
//             required
//           />
//         </Form.Group>
//         {/* CGPA field */}
//         <Form.Group className="mb-2" controlId="cgpa">
          
//           <Form.Control
//             type="text"
//             placeholder="CGPA"
//             name="inputCGPA"
//             value={userFormData.inputCGPA}
//             onChange={addformdt}
//             required
//           />
//        </Form.Group>
//        {/* Backlog field */}
//        <Form.Group className="mb-2" controlId="backlog">
          
//           <Form.Control
//             type="text"
//             placeholder="Backlogs"
//             name="inputBacklog"
//             value={userFormData.inputBacklog}
//             onChange={addformdt}
//             required
//           />
//           </Form.Group>
//        {/*College field*/}
//        <Form.Group className="mb-2" controlId="college">
         
//          <Form.Control
//            type="text"
//            placeholder="College"
//            name="inputCollege"
//            value={userFormData.inputCollege}
//            onChange={addformdt}
//            required
//          />
//         </Form.Group>
//         {/* File upload field */}
//         <Form.Group className="mb-2" controlId="file">
//           <Form.Label>Upload your Resume</Form.Label>
//           <Form.Control type="file" name="resume" onChange={handleFileChange}
//           required
//            />
//         </Form.Group>
//         <Button className="w-100" variant="primary" onClick={onDataStore}>
//             Create Resume
//           </Button><br/><br/>
//         {!loading ? (
//           <Button className="w-100" variant="primary" type="submit">
//             Submit
//           </Button>
//         ) : (
//           <Button className="w-100" variant="primary" disabled>
//             Submitting...
//           </Button>
//         )}
//       </Form>
//     </div>
//   );
// };

// export default Register2;

