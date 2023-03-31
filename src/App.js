import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { ThemeProvider, createTheme, withTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'animate.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [Course, setCourse] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Section, setSection] = React.useState("");
  const [Fv, setFv] = React.useState("");
  const [Sv, setSv] = React.useState("");

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
    if (e.target.value == "First") {
      console.log(Year);
      document.getElementById("SectionControl").style.display = "block";
    } else {
      document.getElementById("SectionControl").style.display = "none";
    }
  };
  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };
  const handleFvChange = (e) => {
    setFv(e.target.value);
  };
  const handleSvChange = (e) => {
    setSv(e.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <nav style={{ opacity: 1 }}>
          <a href="https://www.ecellnitb.com">
            <img className="logo" id="logo-1" src="Images/logo.png" />
          </a>
          <ul className="nav nav-items" style={{ textTransform: "uppercase" }}>
            <li className="nav-link">
              <a onclick="closeNav()" href="#large-header">
                home
              </a>
            </li>
            <li className="nav-link">
              <a onclick="closeNav()" href="#section-2">
                About Us
              </a>
            </li>
            <li className="nav-link">
              <a onclick="closeNav()" href="#section-5">
                Timeline
              </a>
            </li>
            <li className="nav-link">
              <a onclick="closeNav()" href="#section-4">
                Verticals
              </a>
            </li>
            <li className="nav-link">
              <a onclick="closeNav()" href="#section-6">
                Register Now
              </a>
            </li>
          </ul>
          <div className="burger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
        <section
          id="large-header"
          className="large-header"
          style={{ backgroundImage: "url(bgr.png)" }}
        >
          <div className="home">
            <p className="main-head main-title">
              <span
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "4.7241rem",
                  lineHeight: "7.0625rem",
                  letterSpacing: "0.06em",
                  color: "#FFFFFF",
                }}
              >
                WE ARE
              </span>
              <br />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "6.7488rem",
                  display: "inline-block",
                  marginTop: "-1.5625rem",
                  letterSpacing: "0.06em",
                  color: "#FA43FF",
                }}
              >
                RECRUITING!
              </span>
            </p>
            <p className="main-sub-head">
              Make Your Way to MANIT's Most Dynamic Society
            </p>
          </div>
          <div className="main">
            <div className="countdown">
              <div>
                <span style={{ color: "#FFFFFF" }} className="number days" />
                <span style={{ color: "white" }}>Days</span>
              </div>
              <div>
                <span style={{ color: "#FFFFFF" }} className="number hours" />
                <span style={{ color: "white" }}>Hours</span>
              </div>
              <div>
                <span style={{ color: "#FFFFFF" }} className="number minutes" />
                <span style={{ color: "white" }}>Minutes</span>
              </div>
              <div>
                <span style={{ color: "#FFFFFF" }} className="number seconds" />
                <span style={{ color: "white" }}>Seconds</span>
              </div>
            </div>
            <a href="#section-3">
              <button className="about-btn">Register Now</button>
            </a>
          </div>
        </section>
        <section id="section-2" style={{background:"white"}}>
          <div className="about">
            <p className="about-head heading ">
              About <span style={{ color: "#EDA177" }}> E-Cell NIT Bhopal</span>
            </p>
            <p className="about-text">
              Entrepreneurship Cell MANIT Bhopal is a voluntary organization
              with the principal objective of promoting start-up culture and
              building an entrepreneurial environment. E-Cell brings you a
              perfect opportunity to develop mastery in skills and turn your
              budding, blooming innovative ideas to reality. Events like
              E-Summit and Pe-Charcha host competitions challenging creativity
              and sessions from experts in respective fields that have laid out
              the foundation for moulding the burgeoning entrepreneurial minds.
            </p>
            <a href="#section-3">
              <button className="about-btn">Join Us</button>
            </a>
          </div>
        </section>
        {/*timeline and vertical*/}
        {/*timeline*/}
            <h3 className="proposal-title" style={{color:"White",marginBottom:"0px"}}>Timeline </h3>
            
        <VerticalTimeline >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "white", boxShadow:"0 3px 0 #2196f3" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <div style={{color:"rgb(48 48 48)"}}>
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p></div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "white", boxShadow:"0 3px 0 #2196f3" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <div style={{color:"rgb(48 48 48)"}}>
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p></div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "white", boxShadow:"0 3px 0 #2196f3" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <div style={{color:"rgb(48 48 48)"}}>
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p></div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "white", boxShadow:"0 3px 0 #2196f3" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <div style={{color:"rgb(48 48 48)"}}>
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p></div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "white", boxShadow:"0 3px 0 #2196f3" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <div style={{color:"rgb(48 48 48)"}}>
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p></div>
          </VerticalTimelineElement>        
          
        </VerticalTimeline>
        
        <section id="section-4" style={{ width: "100vw" }}>
          <div className="proposal">
            <h3 className="proposal-title">Verticals </h3>
            <div className="proposal-row1">
              <div className="proposal-box wow animate__animated animate__fadeIn">
                <p className="box-title ">Sponsorship</p>
                <p className="box-text-2">
                  Sponsorship executives who are a part of E-Cell are
                  responsible for securing financial support and partnerships
                  from external organizations to fund the various events and
                  programs. They work closely with all other members to identify
                  potential sponsors and develop sponsorship packages that meet
                  the needs of both the parties. They also handle identifying
                  potential sponsors and developing a list of target
                  organizations, developing and pitching sponsorship packages to
                  potential sponsors and negotiating sponsorship terms and
                  agreements.
                </p>
              </div>
              <div className="proposal-box wow animate__animated animate__fadeIn">
                <p className="box-title">Event Managers</p>
                <p className="box-text-2">
                  Event Managers at E-Cell manage and promote the events and
                  programs to its target audience to ensure that events are
                  well-planned and well-promoted. Their roles include developing
                  and executing a comprehensive public relations strategy,
                  maintaining relationships with key stakeholders including
                  managing social media handles, promotional activities,
                  managing press releases and planning the various events
                  conducted by us.
                </p>
              </div>
              <div className="proposal-box wow animate__animated animate__fadeIn">
                <p className="box-title"> Content Writers</p>
                <p className="box-text-2">
                  A content writer at E-Cell is responsible for creating written
                  content that supports the team's communication goals and
                  objectives. This includes writing content for the website,
                  social media channels, emails, letters, brochures, press
                  releases and other communication channels. Content writers
                  work closely with members from all other verticals to ensure
                  that apt content is delivered to the targeted audience.
                </p>
              </div>
            </div>
            <div className="proposal-row2">
              <div className="proposal-box wow animate__animated animate__fadeIn">
                <p className="box-title">Designers</p>
                <p className="box-text-2">
                  Designers at team E-Cell are responsible for designing all the
                  posters that are uploaded on the website or social media
                  handles of the team. They also design various brochures andf
                  booths during E-Summit and all the websites associated with
                  E-Cell.
                </p>
              </div>
              <div className="proposal-box wow animate__animated animate__fadeIn">
                <p className="box-title">Video Editors</p>
                <p className="box-text-2">
                  Video editors at Team E-Cell are responsible for making all
                  the videos that are uploaded on the website or social media
                  handles of the team including the official aftermovie of
                  E-Summit.
                </p>
              </div>
              <div className="proposal-box wow animate__animated animate__fadeIn">
                <p className="box-title">Web Developers</p>
                <p className="box-text-2">
                  A web developer recruited in E-Cell is responsible for
                  developing and maintaining the websites of various events and
                  the official website of E-Cell. They work closely with other
                  members, such as the content writing team and the designers to
                  ensure that the website meets our goals and objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Registration form */}
        <section>
          <Grid container sx={{ my: 10, px:20 }}>
            <Grid item xs={12} md={6} >
              <Box sx={{my:20}} style={{backgroundImage: 'url(man.png)', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height:"70vh"}}>

              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                style={{textAlign:"center"}}
              >
                <div sx={{my:3}} > <span style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 800, fontSize: '4.0971rem', lineHeight: '6.125rem', letterSpacing: '0.06em', color: '#FA43FF', display:"inline-block", marginRight:"1.25rem"}}>Register</span>
                
                <span style={{fontFamily: '"Poppins"', fontStyle: 'normal', fontWeight: 700, fontSize: '4.0971rem', lineHeight: '6.125rem', color: 'white'}}>Now</span></div>
                
                <FormControl variant="outlined">
                  <InputLabel htmlFor="fullnameInput">Fullname</InputLabel>
                  <OutlinedInput
                    id="fullnameInput"
                    label="Fullname"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="scholarInput">Scholar ID</InputLabel>
                  <OutlinedInput
                    id="scholarInput"
                    label="Scholar ID"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="CourseLabel">Course</InputLabel>
                  <Select
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    labelId="CourseLabel"
                    value={Course}
                    label="Course"
                    onChange={handleCourseChange}
                    fullWidth
                  >
                    <MenuItem value={"CSE"}>CSE</MenuItem>
                    <MenuItem value={"ECE"}>ECE</MenuItem>
                    <MenuItem value={"EE"}>EE</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="YearLabel">Year</InputLabel>
                  <Select
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    labelId="YearLabel"
                    value={Year}
                    label="Year"
                    onChange={handleYearChange}
                    fullWidth
                  >
                    <MenuItem value={"First"}>First</MenuItem>
                    <MenuItem value={"Second"}>Second</MenuItem>
                    <MenuItem value={"Third"}>Third</MenuItem>
                    <MenuItem value={"Fourth"}>Fourth</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  id="SectionControl"
                  style={{ display: "none" }}
                  fullWidth
                >
                  <InputLabel id="SectionLabel">Section</InputLabel>
                  <Select
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    labelId="SectionLabel"
                    value={Section}
                    label="Section"
                    onChange={handleSectionChange}
                    fullWidth
                  >
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                    <MenuItem value={"D"}>D</MenuItem>
                    <MenuItem value={"E"}>E</MenuItem>
                    <MenuItem value={"F"}>F</MenuItem>
                    <MenuItem value={"G"}>G</MenuItem>
                    <MenuItem value={"H"}>H</MenuItem>
                    <MenuItem value={"I"}>I</MenuItem>
                    <MenuItem value={"J"}>J</MenuItem>
                    <MenuItem value={"K"}>K</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="emailInput">Email</InputLabel>
                  <OutlinedInput
                    id="emailInput"
                    label="Email"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="whatsappInput">Whatsapp</InputLabel>
                  <OutlinedInput
                    id="whatsappInput"
                    label="Whatsapp"
                    startAdornment={
                      <InputAdornment position="start">+91</InputAdornment>
                    }
                    variant="outlined"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="FvLabel">Primary Vertical</InputLabel>
                  <Select
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    labelId="FvLabel"
                    value={Fv}
                    label="Primary Vertical"
                    onChange={handleFvChange}
                    fullWidth
                  >
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                    <MenuItem value={"D"}>D</MenuItem>
                    <MenuItem value={"E"}>E</MenuItem>
                    <MenuItem value={"F"}>F</MenuItem>
                    <MenuItem value={"G"}>G</MenuItem>
                    <MenuItem value={"H"}>H</MenuItem>
                    <MenuItem value={"I"}>I</MenuItem>
                    <MenuItem value={"J"}>J</MenuItem>
                    <MenuItem value={"K"}>K</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="SvLabel">Secondary Vertical</InputLabel>
                  <Select
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    labelId="SvLabel"
                    value={Sv}
                    label="Secondary Vertical"
                    onChange={handleSvChange}
                    fullWidth
                  >
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                    <MenuItem value={"D"}>D</MenuItem>
                    <MenuItem value={"E"}>E</MenuItem>
                    <MenuItem value={"F"}>F</MenuItem>
                    <MenuItem value={"G"}>G</MenuItem>
                    <MenuItem value={"H"}>H</MenuItem>
                    <MenuItem value={"I"}>I</MenuItem>
                    <MenuItem value={"J"}>J</MenuItem>
                    <MenuItem value={"K"}>K</MenuItem>
                  </Select>
                </FormControl>
                <LoadingButton variant="outlined" sx={{ p: 2 }}>
                  REGISTER
                </LoadingButton>
              </Box>
            </Grid>
          </Grid>
        </section>
        <section id="section-6">
          <p className="heading faq-head" style={{ color: "#FFFFFF" }}>
            Rules And Regulations
          </p>
          <div className="faq">
            <p className="ans">
              Only undergraduates from MANIT can apply for the recruitment.
            </p>
            <p className="ans">
              Interested students can apply in a maximum of two verticals.
            </p>
            <p className="ans">
              Interested students can apply for the recruitment through the
              official website of Entrepreneurship Cell MANIT Bhopal.
            </p>
            <p className="ans">
              The recruitment shall be done in three rounds and in a hybrid
              manner.
            </p>
            <p className="ans">
              The recruitment shall be done in three rounds and in a hybrid
              manner.
            </p>
            <p className="ans">
              The first round shall be online where all participants will be
              given a task according to their verticals. Participants who clear
              this round shall advance to the offline interview round. The
              participants who advance this round shall face an HR interview
              round.
            </p>
            <p className="ans">
              Any form of plagiarism or use of unfair means in any stage of
              the recruitment shall lead to immediate disqualification of a
              candidate.
            </p>
            <p className="ans">
              Any participant who fails to abide by the deadline set for task
              submission shall not be considered. Thus, participants must
              strictly adhere to the timings.
            </p>
          </div>
        </section>
        <section id="section-7">
          <hr className="footer-hr" />
          <p className="foot-head">Contact Us</p>
          <div className="footer">
            <div className="foot-left">
              <div className="foot-no">
                <p>Sarthak Agar</p>
                <p>
                  <a href="tel: +91 97528 24611">+91 97528 24611</a>{" "}
                </p>
              </div>
              <div className="foot-no">
                <p>Aaditya vijayvargiya</p>
                <p>
                  <a href="tel:+91 93402 86321">+91 93402 86321</a>
                </p>
              </div>
              <div className="foot-no">
                <p>Gopal Vashisth</p>
                <p>
                  <a href="tel:+91 97175 94994"> +91 97175 94994</a>
                </p>
              </div>
            </div>
            <div className="foot-right">
              <p className="adress-content">
                {" "}
                <i className="fa-solid fa-location-dot" />
                Maulana Azad National Institute of Technology, Bhopal India -
                462003
              </p>
              <p className="footer-mail">
                <a href="mailto:alum@ecellnitb.com">
                  <i className="fa-solid fa-envelope" />
                  support@ecellnitb.com
                </a>
              </p>
            </div>
          </div>
          <div className="social">
            <div className="icon">
              <div className="icon1">
                <a href="https://www.instagram.com/ecell_nitb/">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
              <div className="icon1">
                <a href="https://www.youtube.com/@EntrepreneurshipCellNITBhopal">
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
              <div className="icon1">
                <a href="https://www.linkedin.com/company/ecell-manit">
                  {" "}
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
              <div className="icon1">
                <a href="https://www.facebook.com/ecellnitbhopal/">
                  <i className="fa-brands fa-square-facebook" />
                </a>
              </div>
            </div>
            <div className="copyright">
              <p> Copyright © 2023 • E-Cell MANIT Bhopal</p>
            </div>
          </div>
        </section>
      </div>
      </ThemeProvider>
  );
}

export default App;
