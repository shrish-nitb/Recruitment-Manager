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
import { ThemeProvider, createTheme, withTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SyncIcon from "@mui/icons-material/Sync";
import ReplayIcon from "@mui/icons-material/Replay";
import ClearIcon from "@mui/icons-material/Clear";
import "animate.css";
import Navbar from "./components/navbar";
import axios from "axios";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PersonIcon from '@mui/icons-material/Person';


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    document.fonts.ready.then(() => setIsReady(true));
  }, [])

  const [txtData, setTxtData] = React.useState({name: "", scholar: "", email: "", whatsapp: ""});
 
  var Verticals = [
    "Sponsorship Executive",
    "Event Manager",
    "Content Writer",
    "Web Developer",
    "Designer",
    "Video Editor",
  ];
  const collection = {
    course: [
      "Architecture",
      "Civil Engineering",
      "Chemical Engineering",
      "Computer Science Engineering",
      "Electrical Engineering",
      "Electronics and Communication Engineering",
      "Materials and Metallurgical Engineering",
      "Mathematics and Data Science",
      "Mechanical Engineering",
      "Planning",
    ],
    Year: ["First", "Second", "Third", "Fourth"],
    Section: [
      "Architecture A",
      "Architecture B",
      "Planning A",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
    ]
  };
  var [status, setStatus] = React.useState({text: "APPLY", outlook: "outlined"});
  var [PrimaryVerticals, setPrimaryVerticals] = React.useState(Verticals);
  var [SecondaryVerticals, setSecondaryVerticals] = React.useState(Verticals);
  const [Course, setCourse] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Section, setSection] = React.useState("");
  const [Fv, setFv] = React.useState("");
  const [Sv, setSv] = React.useState("");
  const [pcbDisplay, setpcbDisplay] = React.useState("none");
  const [scbDisplay, setscbDisplay] = React.useState("none");
  const [isLoading, setLoading] = React.useState(false);
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  var [sectioncontrolinputbool, setsectioncontrolinputbool] =
    React.useState(false);

  var [sectionControlDisplay, setsectionControlDisplay] =
    React.useState("none");
  const handleYearChange = (e) => {
    setYear(e.target.value);
    if (e.target.value == "First") {
      setsectioncontrolinputbool(true);
      setsectionControlDisplay("block");
    } else {
      setsectioncontrolinputbool(false);
      setsectionControlDisplay("none");
    }
  };
  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };
  const handleFvChange = (e) => {
    setFv(e.target.value);
    setSecondaryVerticals(
      Verticals.filter((b) => {
        return b !== e.target.value;
      })
    );
    setpcbDisplay("flex");
  };
  const handleSvChange = (e) => {
    setSv(e.target.value);
    setPrimaryVerticals(
      Verticals.filter((a) => {
        return a !== e.target.value;
      })
    );
    setscbDisplay("flex");
  };

  return (isReady &&
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
       <Navbar/>
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
                  fontSize: "4.7241em",
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
                  fontSize: "6.7488em",
                  display: "inline-block",
                  marginTop: "-1.5625em",
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
            <a href="#section-form">
              <button className="about-btn">Register Now</button>
            </a>
          </div>
        </section>
        <section id="section-2" style={{ background: "white" }}>
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
            <a href="#section-form">
              <button
                className="about-btn-2"
                style={{ color: "#eda177", border: "0.125em solid #e59b73" }}
              >
                Join Us
              </button>
            </a>
          </div>
        </section>
        {/*timeline and vertical*/}
        {/*timeline*/}
        <section id="section-5">
          <h3
            className="proposal-title"
            style={{ color: "White", marginBottom: "0px" }}
          >
            Overview{" "}
          </h3>

          <VerticalTimeline className="vertical-timeline">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "#fff",
                color: "white",
                boxShadow: "0 3px 0 #2196f3",
                textAlign: "left"
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="Round 1"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<LaptopMacIcon fontSize="100px"/>}
            >
              <div style={{ color: "rgb(48 48 48)" }}>
                <h3 className="vertical-timeline-element-title">
                Technical Round 
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                (Online)
                </h4>
                <p>
                Tasks are allotted to each vertical to be completed in a fixed duration of a time interval. Round 1 tasks are to be submitted online through google forms.
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "white",
                boxShadow: "0 3px 0 #2196f3",
                textAlign: "left",
              }}
           
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="Round 2"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff"}}
              icon={<GroupsIcon />}
              
            >
              <div style={{ color: "rgb(48 48 48)" }}>
                <h3 className="vertical-timeline-element-title">
                Interview Round
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                (Offline)

                </h4>
                <p>
                After qualification of the first round, offline interviews are organized by the team E-Cell to test the prompt skills of candidates, management, and ability to deal with work under pressure with tasks and situations allotted at hand.
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "white",
                boxShadow: "0 3px 0 #2196f3",
                textAlign: "left",
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="Round 3"
              icon={<PersonIcon/>}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <div style={{ color: "rgb(48 48 48)" }}>
                <h3 className="vertical-timeline-element-title">
                HR Interview round
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                (Offline)
                </h4>
                <p>
                Qualifiers from round 2 are put to the final test with the HR Interview rounds conducted offline. Dedication and perseverance to take society and its events to their highest potential are examined for the final selections.
                </p>
              </div>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "white",
                boxShadow: "0 3px 0 #2196f3",
                textAlign: "left",
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <div style={{ color: "rgb(48 48 48)" }}>
                <h3 className="vertical-timeline-element-title">
                  Lorem, ipsum dolor.
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Lorem, ipsum.
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, natus!
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "white",
                boxShadow: "0 3px 0 #2196f3",
                textAlign: "left",
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <div style={{ color: "rgb(48 48 48)" }}>
                <h3 className="vertical-timeline-element-title">
                  Lorem, ipsum dolor.
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Lorem, ipsum.
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, natus!
                </p>
              </div>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </section>
        <section id="section-4" style={{ width: "100vw" }}>
          <div className="proposal">
            <h3 className="proposal-title">Verticals </h3>
            <div className="proposal-row1">
              <div className="proposal-box wow animate__animated animate__fadeIn">
                <p className="box-title ">Sponsorship Executive</p>
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
                  handles of the team. They also design various brochures and
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
        <section id="section-form">
          <Grid
            sx={{
              justifyContent: { xs: "center", lg: "left" },
              pb: { xs: "3em", sm: "2em", md: "2em" },
            }}
            container
            style={{ marginTop: "4rem" }}
          >
            <Grid item xs={0} lg={6}>
              <Box
                sx={{ my: 20 }}
                style={{
                  backgroundImage: "url(man.png)",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: "70vh",
                }}
              ></Box>
            </Grid>
            <Grid item xs={10} sm={9} md={8} lg={5}>
            <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
            <form
                action="/"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus({text: "", outlook: ""})
                  setLoading(true)
                  txtData.year = Year;
                  txtData.course = Course;
                  txtData.section = Section;
                  txtData.primary = Fv;
                  txtData.secondary = Sv;
                  var request = axios.post('https://recruitment-manager-backend.onrender.com/create', txtData)
                  .then(function (response) {
                    if(response.data == 2){
                      toast.success("You're registered Succesfully!!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    } else {
                      const errCodes = {
                        "3":"Already Registered!",
                        "11":"Invalid whatsapp",
                        "16":"Invalid Email",
                        "15":"Invalid Scholar ID",
                        "14":"Tampered responses!",
                        "12":"Character limit is 50",
                        "13":"Missing required fileds"
                      } 
                      toast.error(`Failed: ERR CODE ${errCodes[response.data.toString()]}`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    }
                    setStatus({text: "Apply", outlook: "outlined"})
                    setLoading(false)
                  })
                  .catch(function (error) {
                    toast.error(`ERROR: ${error}`, {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      });
                    setStatus({text: "Apply", outlook: "outlined"})
                    setLoading(false)
                  });
                
                }}
              >
                <Box
                  id="rnform"
                  style={{ textAlign: "center" }}
                  sx={{
                    "& > :not(style)": { m: 1, width: "98%" },
                  }}
                >
                  <Box id="rnhead" sx={{ my: 3 }}>
                    {" "}
                    <span
                      style={{
                        fontFamily: '"Poppins"',
                        fontStyle: "normal",
                        fontWeight: 800,
                        fontSize: "4.0971em",
                        letterSpacing: "0.06em",
                        color: "#FA43FF",
                        display: "inline-block",
                        marginRight: "0.25em",
                      }}
                    >
                      Register
                    </span>
                    <span
                      style={{
                        fontFamily: '"Poppins"',
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "4.0971em",
                        color: "white",
                      }}
                    >
                      Now
                    </span>
                  </Box>
                  <TextField
                    label="Fullname"
                    required
                    id="fullnameInput"
                    name="name"
                    value={txtData.name}
                    onChange={(e)=>{
                        setTxtData({...txtData, name: e.target.value})
                        
                    }}
                    variant="outlined"
                  >
                    Fullname
                  </TextField>
                  <TextField
                    type="number"
                    label="Scholar ID"
                    required
                    id="scholarInput"
                    name="scholar"
                    variant="outlined"
                    value={txtData.scholar}
                    onChange={(e)=>{
                        setTxtData({...txtData, scholar: e.target.value})
                        
                    }}
                    onKeyDown={(e) => {
                      if (e.which === 38 || e.which === 40 || e.which === 69) {
                        e.preventDefault();
                      }
                    }}
                  >
                    Scholar ID
                  </TextField>

                  <TextField
                    select
                    required
                    label="Course"
                    name="branch"
                    value={Course}
                    sx={{ textAlign: "left" }}
                    onChange={handleCourseChange}
                    fullWidth
                  >
                    {collection.course.map((e) => {
                      return <MenuItem value={e}>{e}</MenuItem>;
                    })}
                  </TextField>

                  <TextField
                    select
                    required
                    label="Year"
                    name="year"
                    value={Year}
                    sx={{ textAlign: "left" }}
                    onChange={handleYearChange}
                    fullWidth
                  >
                    {collection.Year.map((e) => {
                      return <MenuItem value={e}>{e}</MenuItem>;
                    })}
                  </TextField>

                  <TextField
                    select
                    required={sectioncontrolinputbool}
                    label="Section"
                    name="section"
                    sx={{ textAlign: "left" }}
                    onChange={handleSectionChange}
                    value={Section}
                    fullWidth
                    id="SectionControl"
                    style={{ display: sectionControlDisplay }}
                  >
                    {collection.Section.map((e) => {
                      return <MenuItem value={e}>{e}</MenuItem>;
                    })}
                  </TextField>

                  <TextField
                    required
                    type="email"
                    id="emailInput"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={txtData.email}
                    onChange={(e)=>{
                        setTxtData({...txtData, email: e.target.value})
                        
                    }}
                  >
                    Email
                  </TextField>

                  <TextField
                    required
                    type="number"
                    id="whatsappInput"
                    label="Whatsapp"
                    name="whatsapp"
                    value={txtData.whatsapp}
                    onChange={(e)=>{
                        setTxtData({...txtData, whatsapp: e.target.value})
                        
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    onKeyDown={(e) => {
                      if (e.which === 38 || e.which === 40 || e.which === 69) {
                        e.preventDefault();
                      }
                    }}
                    variant="outlined"
                  >
                    Whatsapp
                  </TextField>

                  <TextField
                    select
                    required
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    labelId="FvLabel"
                    value={Fv}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ mx: 2 }}>
                          <IconButton
                            id="pcb"
                            style={{ display: pcbDisplay }}
                            onClick={() => {
                              setpcbDisplay("none");
                              setFv("");
                              setPrimaryVerticals(
                                Verticals.filter((a) => {
                                  return a !== Sv;
                                })
                              );
                              setSecondaryVerticals(Verticals);
                            }}
                          >
                            <ClearIcon></ClearIcon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    label="Primary Vertical"
                    name="primary"
                    onChange={handleFvChange}
                    sx={{ textAlign: "left" }}
                    fullWidth
                  >
                    {PrimaryVerticals.map((e) => {
                      return <MenuItem value={e}>{e}</MenuItem>;
                    })}
                  </TextField>

                  <TextField
                    select
                    required
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ mx: 2 }}>
                          <IconButton
                            id="scb"
                            style={{ display: scbDisplay }}
                            onClick={() => {
                              setscbDisplay("none");
                              setSv("");
                              setPrimaryVerticals(Verticals);
                              setSecondaryVerticals(
                                Verticals.filter((a) => {
                                  return a !== Fv;
                                })
                              );
                            }}
                          >
                            <ClearIcon></ClearIcon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    labelId="SvLabel"
                    value={Sv}
                    name="secondary"
                    label="Secondary Vertical"
                    onChange={handleSvChange}
                    sx={{ textAlign: "left" }}
                    fullWidth
                  >
                    {SecondaryVerticals.map((e) => {
                      return <MenuItem value={e}>{e}</MenuItem>;
                    })}
                  </TextField>

                  <Typography
                    variant="subtitle2"
                    display="block"
                    sx={{ textAlign: "left", px: 2 }}
                    style={{ color: "#f5f5f5d6" }}
                    gutterBottom
                  >
                    By Clicking Apply you comply with our Rules and Regulations
                  </Typography>

                  <LoadingButton
                    type="submit"
                    variant={status.outlook}
                    loading={isLoading}
                    style={{
                      borderColor: "#fff",
                      color: "white",
                      marginTop: "2rem",
                    }}
                    sx={{ p: 2, fontSize: { xs: "0.8rem", lg: "1.1rem" } }}
                    onClick={(e) => {
                      console.log(e);
                    }}
                    fullWidth
                  
                  >
                   {status.text}
                  </LoadingButton>
                </Box>
              </form>
            </Grid>
          </Grid>
        </section>
        <section id="section-6">
          <p className="heading faq-head" style={{ color: "#FFFFFF" }}>
            Rules And <span style={{ color: "#EDA177" }}>Regulations</span>
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
              The first round shall be online where all participants will be
              given a task according to their verticals. Participants who clear
              this round shall advance to the offline interview round. The
              participants who advance the offline interview round shall face an HR interview
              round.
            </p>
            <p className="ans">
              Any form of plagiarism or use of unfair means in any stage of the
              recruitment shall lead to immediate disqualification of a
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
                <p>Krishna Kumar Lalwani</p>
                <p>
                  <a href="tel:+91 70492 99241">+91 70492 99241</a>
                </p>
              </div>
              <div className="foot-no">
              <p>Chaitanya Sharma</p>
                <p>
                  <a href="tel: +91 98972 25339">+91 98972 25339</a>
                </p>
              </div>
              <div className="foot-no">
                <p>Shrish Shrivastava</p>
                <p>
                  <a href="tel: +91 93403 99137">+91 93403 99137</a>
                </p>
              </div>
              <div className="foot-no">
                <p>Aarushi Gulati</p>
                <p>
                  <a href="tel:+91 93017 53553">+91 93017 53553</a>
                </p>
              </div>

            </div>
          
            <div className="foot-right">
            <div className="footer-two-icons">
            <i className="fa-solid fa-location-dot" />
            <a href="mailto:alum@ecellnitb.com">
                  <i className="fa-solid fa-envelope" />
                
                </a>
            </div>
            <div className="footer-address-mail">
            <p className="adress-content">
                {" "}
                
                Maulana Azad National Institute of Technology, Bhopal India -
                462003
              </p>
              <p className="footer-mail">
                <a href="mailto:alum@ecellnitb.com">
                 
                  support@ecellnitb.com
                </a>
              </p>
            </div>
             
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
