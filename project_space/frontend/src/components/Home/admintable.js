import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useNavigate } from "react-router-dom";
import "../style.css";

const Datalist = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const result = window.confirm("Do you want to leave ?");
        if (result){
            navigate('/');
        }else{
            
        }
        
    };

    // Example data - replace this with your actual data
    const studentData = [
        ["S.No", "Name", "Email", "Branch", "C.G.P.A", "College", "Resume", "TCS", "GOOGLE", "ACCENTURE", "DARWINBOX", "IBM", "AMAZON"],
        // [1, "vyshnavi", "email@example.com", "Branch", "9.0", "College Name", "Link to Resume", "Yes", "No", "Yes", "No", "Yes", "No"]
        // Add more student rows here
    ];

    const downloadExcel = () => {
        const ws = XLSX.utils.aoa_to_sheet(studentData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Students");

        // Write workbook and trigger download
        const wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});
        const blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
        saveAs(blob, 'StudentData.xlsx');
    };

    // Utility function to convert s to ArrayBuffer
    function s2ab(s) { 
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }


    return(
        <>
        <br/>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <h2>Student Information</h2>
            <button className="add-student-btn">Add Student</button>
            <button className="download-btn" onClick={downloadExcel}>Download Report</button>
            <table align="center" border={1}>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Branch</th>
                    <th>C.G.P.A</th>
                    <th>College</th>
                    <th>Resume</th>
                    <th>TCS</th>
                    <th>GOOGLE</th>
                    <th>ACCENTURE</th>
                    <th>DARWINBOX</th>
                    <th>IBM</th>
                    <th>AMAZON</th>
                    <th>Generate Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>

                    
            </table>
        </>
    )
}
export default Datalist;
