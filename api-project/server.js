const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());

const professionalData = {
    professionalName: "Brayden Wayman",
    base64Image: "iVBORw0KGgoAAA...",

    nameLink: {
        firstName: "Brayden",
        url: "https://example.com"
    },

    primaryDescription: " is a student at BYU-Pathway.",

    workDescription1: "I am currently pursuing a degree in Computer Science.",
    workDescription2: "I am passionate about learning new technologies and solving complex problems.",

    linkTitleText: "Connect with me:",

    linkedInLink: {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/brayden-wayman-976916314/"
    },

    githubLink: {
        text: "GitHub",
        link: "https://github.com/brayden0618"
    }
};

app.get('/professional', (req, res) => {
    res.json(professionalData);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});