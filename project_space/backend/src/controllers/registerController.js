const register = require("../models/register")
const path = require("path")
const pdf = require('pdf-parse-pages');

const fs = require('fs')
const registerform = async (req, res, next) => {
    console.log(req.body)
    console.log(req.files[0])
    let resumeFile;
    let resumeFileName = req.files[0].filename;
    let resumeFileExtension = path.extname(req.files[0].originalname)
    resumeFile = resumeFileName + resumeFileExtension;
    fs.rename("uploads/resumes/" + resumeFileName, "uploads/resumes/" + resumeFileName + resumeFileExtension, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
            return;
        }
        console.log('File renamed successfully');
        let dataBuffer = fs.readFileSync("uploads/resumes/" + resumeFileName + resumeFileExtension);

        pdf(dataBuffer).then(function(data) {
        
            // number of pages
            console.log(data.numpages);
            // pages array
            console.log(data.pages);
            // number of rendered pages
            console.log(data.numrender);
            // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata);
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version);
            
            // PDF text
            console.log(data.text);
        
        });

        
        const pdfPath =  "uploads/resumes/" + resumeFileName + resumeFileExtension;
    });

   




    console.log(resumeFileExtension)
    try {
        const { inputName, inputEmail, inputBranch, inputCGPA,  inputBacklog,inputCollege } = req.body;
        let resume = resumeFile;
        const newregister = new register({ inputName, inputEmail, inputBranch, inputCGPA,inputBacklog, inputCollege, resume });
        await newregister.save();
        const existingregister = await register.findOne({ inputEmail });
        if (existingregister) {
            return res.status(400).json({ message: 'use have already register' })
        }
        const newUser = new User({
            Name,
            Email,
            Branch,
            CGPA,
            Backlogs,
            College,
            resumeFile
        });
        await newUser.save();
        res.status(201).json({ message: 'user register ' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.registerform = registerform;