// import React, { useRef, useState } from "react";
// import ReactToPrint from "react-to-print";
// import { ArrowDown } from "react-feather";
// import { useNavigate } from "react-router-dom";


// import Editor from "../Editor/Editor";
// import Resume from "../Resumee/Resumee";
// import Register2 from "../Home/register2";


// import styles from "./Body.module.css";

// function Body() {
//   const navigate = useNavigate();
//   const resumeRef = useRef();
//   const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
//   const sections = {
//     basicInfo: "Basic Info",
//     workExp: "Skills",
//     project: "Projects",
//     education: "Education",
//     achievement: "Achievements",
//     summary: "Summary",
//     other: "Other",
//   };
//   // const resumeRef = useRef();

//   const [activeColor, setActiveColor] = useState(colors[0]);
//   const [resumeInformation, setResumeInformation] = useState({
//     [sections.basicInfo]: {
//       id: sections.basicInfo,
//       sectionTitle: sections.basicInfo,
//       detail: {},
//     },
//     [sections.workExp]: {
//       id: sections.workExp,
//       sectionTitle: sections.workExp,
//       details: [],
//     },
//     [sections.project]: {
//       id: sections.project,
//       sectionTitle: sections.project,
//       details: [],
//     },
//     [sections.education]: {
//       id: sections.education,
//       sectionTitle: sections.education,
//       details: [],
//     },
//     [sections.achievement]: {
//       id: sections.achievement,
//       sectionTitle: sections.achievement,
//       points: [],
//     },
//     [sections.summary]: {
//       id: sections.summary,
//       sectionTitle: sections.summary,
//       detail: "",
//     },
//     [sections.other]: {
//       id: sections.other,
//       sectionTitle: sections.other,
//       detail: "",
//     },
//   });

//   return (
//     <div className={styles.container}>
//       <p className={styles.heading}>Resume Builder</p>
//       <div className={styles.toolbar}>
//         <div className={styles.colors}>
//           {colors.map((item) => (
//             <span
//               key={item}
//               style={{ backgroundColor: item }}
//               className={`${styles.color} ${
//                 activeColor === item ? styles.active : ""
//               }`}
//               onClick={() => setActiveColor(item)}
//             />
//           ))}
//         </div>
//         <ReactToPrint
//           trigger={() => {
//             return (
//               <button>
//                 Download <ArrowDown />
//               </button>
//             );
//           }}
//           content={() => resumeRef.current}
//         />
//       </div>
//       <div className={styles.main}>
//         <Editor
//           sections={sections}
//           information={resumeInformation}
//           setInformation={setResumeInformation}
//         />
//         <Resume
//           ref={resumeRef}
//           sections={sections}
//           information={resumeInformation}
//           activeColor={activeColor}
//         />
//       </div>
//     </div>
//   );
// }

// export default Body;



import React, { useRef, useState, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { useNavigate } from "react-router-dom";
import Editor from "../Editor/Editor";
import Resume from "../Resumee/Resumee";
import Register2 from "../Home/register2";
import styles from "./Body.module.css";

function Body() {
  const navigate = useNavigate();
  const resumeRef = useRef();
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Skills",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  // const navigate = useNavigate(); // Use the useNavigate hook

  // Handler to be called after the print action is completed
  // const handleAfterPrint = () => {
  //   navigate('/register2'); // Replace '/your-path-here' with the path you want to redirect to
  // };
  // const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState( () => {
    const savedData = localStorage.getItem("resumeInformation");
    return savedData ? JSON.parse(savedData) : {
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  };
  });
  useEffect(() => {
    localStorage.setItem("resumeInformation", JSON.stringify(resumeInformation));
  }, [resumeInformation]);

  const handleAfterPrint = () => {
    navigate('/register2'); // Navigate to the specified path
  };
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
        trigger={() => (
          <button>
            Download <ArrowDown />
          </button>
        )}
        content={() => resumeRef.current}
        onAfterPrint={handleAfterPrint} // Use onAfterPrint to trigger redirection
      />
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;
