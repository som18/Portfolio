import React  from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import profileImage from "../assets/LinkedIn.jpg";
import resume from "../assets/Resume.docx";  // Import the resume file
// import emailjs from 'emailjs-com';

function Home() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });


  // const [isSending, setIsSending] = useState(false);
  // const [buttonText, setButtonText] = useState('Send');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSending(true);
  //   emailjs.sendForm('service_qrgbmhs', 'template_lsh4krp', e.target, 'sZekvht32FhfIVaMk')
  //     .then((result) => {
  //       console.log(result.text);
  //       setButtonText('Sent');
  //       setIsSending(false);
  //       setFormData({ name: '', email: '', message: '' });
  //     }, (error) => {
  //       console.log(error.text);
  //       setButtonText('Send');
  //       setIsSending(false);
  //       alert('Failed to send the message, please try again.');
  //     });
  // };
  return (
    <div className="home">
      <div className="about">
        <img src={profileImage} alt="Sombuddha" className="profile-image" />
        <h2 className="title">&lt;&gt;Hi, I am Sombuddha&lt;/&gt;</h2>
        <div className="prompt">
          <p>
           A Salesforce Developer Driven to Turn Ideas into Digital Reality
          </p>
          <div className="icon">
            <a href="https://www.linkedin.com/in/sombuddha-biswas-858740244/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/som18" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </div>
          <a href={resume} download="Resume.docx" className="download-link">
            Download My Resume
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, ReactJS, Yarn, NPM, Bootstrap, Material UI, TailwindCSS, Shadcn UI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Python, Javascript, Express.js, NodeJS, SQL, Azure, MongoDB, .NET, Apex
            </span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>
              HTML, CSS, Javascript, Python, C#, C, Java
            </span>
          </li>
          <li className="item">
            <h2>Platform Knowledge</h2>
            <span>
              Salesforce CPQ, Visualforce, Apex, LWC, Sales Cloud, Data Cloud, Service Cloud
            </span>
          </li>
        </ol>
      </div>
      {/* <div className="contact">
        <h1>Get in Touch</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" disabled={isSending}>
            {isSending ? <div className="spinner"></div> : buttonText}
          </button>
        </form>
      </div> */}
    
    </div>
    
  );
}

export default Home;
