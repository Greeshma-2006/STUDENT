const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Dummy dataset (JSON file)
const DATA_FILE = './students.json';

// Ensure JSON file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Save student data
app.post('/save-student', (req, res) => {
    const newStudent = req.body;
    const students = JSON.parse(fs.readFileSync(DATA_FILE));
    students.push(newStudent);
    fs.writeFileSync(DATA_FILE, JSON.stringify(students));
    res.json({ message: 'Student data saved successfully!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

