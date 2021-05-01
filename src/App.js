import './App.css';
import logo from './images/bitmap2.png'
import banter from './images/banter.png'
import creativeag from './images/creativeag.png'
import todo from './images/super-todo.png'

function App() {
  return (
    <>
      <div id="nav-bar">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="https://davidkaris.xyz">
                <img class="logo" src={logo} alt=""/>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="https://davidkaris.xyz"><span className="common-span">01.</span>Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about"><span className="common-span">02.</span>About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#projects"><span className="common-span">03.</span>Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact"><span className="common-span">04.</span>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
      {/* ------------------------------------------------------ */}
      <div>
          <div className="container">
              <div className="introduction">
                <div className="intro-text">
                    <h5>Hello, I am</h5>
                    <h1>David Kariuki.</h1>
                    <h1 className="intro-sub">A Passionate Software Developer.</h1>
                    <p>
                        Hi, my name is David. I am a software developer based in <br/> Kenya  who loves building
                        powerful, high quality, <br/> scalable Web Apps. 
                    </p>
                </div>
                <div className="cta">
                    <a href="#projects"><button className="cta-select">View Projects</button></a>
                </div>
                <div className="social-icons">
                  <h6>Visit my socials on :</h6>
                    <a className="github" target="_blank" rel="noreferrer" href="https://github.com/Dkw-69"><i className="fab fa-github"></i></a>
                    <a className="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/david-kariuki-2684a2160"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
          </div>
      </div>
      
      {/* ------------------------------------------------- */}
      <div className="about-major-section" id="about">
        <div className="container">
          <div className="About">
            <h2 className="about"><span className="common-span-1">02.</span>About Me</h2>
            <p className="about-para">
              Hello! I'm David, a software engineer based in Kenya, who
              is passionate <br/>about building software. I develop exceptional 
              applications <br/>that provide interactive user experience, with 
              <br/>powerful scalable backends.
            </p>
            <p className="skills">A few technologies I've used:</p>
          </div>
              <div className="skills-section">
                <ul className="skills-listing">
                    <li>HTML5/CSS3</li>
                    <li>Bootsrap</li>
                    <li>Javascript(ES6)</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Mongodb</li>
                    <li>Django</li>
                </ul>
              </div>
          </div>
        </div>
      
      {/* -------------------------------------------------- */}
      <section className="projects-section" id="projects">
        <div className="container" id="projects-target">
          <h2 className="projects text-center"><span className="common-span-1">03.</span>A Few Projects</h2>
          <p className="projects-para text-center">Here Are some projects that I've built :</p>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="project-image">
              <div className="overlay"></div>
                <img src={banter} alt=""/>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 long-card">
              <div className="project">
                <h5 className="project-title">banter</h5>
                <div className="project-child">
                  <p className="project-description">
                    This is a react chat webapp. The app has the ability to login, logout
                    post messages and images. You can create new chatroom and is mobile responsive. 
                  </p>
                </div>
                <div className="project-stack">
                  <h6 className="project-text">React</h6>
                  <h6 className="project-text">Chatengine Api</h6>
                  <a className="project-link" target="_blank" rel="noreferrer" href="https://github.com/Dkw-69/banter"><i className="fab fa-github github-link"></i></a>
                  <a className="project-link" target="_blank" rel="noreferrer" href="https://banterr.xyz/"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            </div>
          </div>
          <div className="row project-row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="projectb">
                <h5 className="projectb-title">Creative Agency</h5>
                <div className="projectb-child">
                  <p className="projectb-description">
                    This is a webapp for an agency. The app has a sanity api for storing blogs. I built 
                    the app using react, materialize for styling and sanity backend for the blogs.
                  </p>
                </div>
                <div className="projectb-stack">
                  <h6 className="projectb-text">React</h6>
                  <h6 className="projectb-text">Materialize.</h6>
                  <h6 className="projectb-text">Sanity Api</h6>
                  <a className="project-link" target="_blank" rel="noreferrer" href="https://github.com/Dkw-69/creativeag"><i className="fab fa-github github-link"></i></a>
                  <a className="projectb-link" target="_blank" rel="noreferrer" href="https://creativeag.xyz/"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="projectb-image">
              <div className="projectb-overlay"></div>
                <img src={creativeag} alt=""/>
              </div>
            </div>
          </div>
          <div className="row project-row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="project-image">
              <div className="overlay"></div>
                <img src={todo} alt=""/> 
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="project">
                <h4 className="project-title">Simple Todo</h4>
                <div className="project-child">
                  <p className="project-description">
                    A beautiful and elegant webapp for adding or removing tasks. I used react, react-context api
                    and materialize for this minimal app.
                  </p>
                </div>
                <div className="project-stack">
                  <h6 className="project-text">React</h6>
                  <h6 className="project-text">React Context</h6>
                  <h6 className="project-text">Materialize</h6>
                  <a className="project-link" target="_blank" rel="noreferrer" href="https://github.com/Dkw-69/super_todo_list"><i className="fab fa-github github-link"></i></a>
                  <a className="project-link" target="_blank" rel="noreferrer" href="https://super-todo-app.netlify.app/"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
        
     {/* ------------------------------------------------------ */}
      <section className="extra-projects">
        <div className="container extra-container">
          <h2 className="projects-extra text-center">Other Noteworthy Projects</h2>
          <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-stretch py-4">
                <div className="project-div">
                  <div className="folder">
                    <i className="far fa-folder-open"></i>
                  </div>
                  <div className="iconz d-flex justify-content-center align-items-center">
                    <a className="card-github" target="_blank" rel="noreferrer" href="https://github.com/Dkw-69/react-portfolio"><i className="fab fa-github"></i></a>
                  </div>
                  <div className="text">
                    <h3 className="mid-head">This Portfolio</h3>
                    <p className="mid-para">
                      I built this personal portfolio with react and bootstrap for frontend styling.
                      The portfolio was the first ever project that I built after learning bootstrap 
                      and it has gone through alot of mods.
                    </p>
                  </div>
                  <div className="extra-stack">
                    <h6>React</h6>
                    <h6>Bootstrap</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-stretch py-4">
                <div className="project-div">
                  <div className="folder">
                    <i className="far fa-folder-open"></i>
                  </div>
                  <div className="iconz d-flex justify-content-center align-items-center">
                    <a className="card-github" target="_blank" rel="noreferrer" href="https://github.com/Dkw-69/blogrr"><i className="fab fa-github"></i></a>
                  </div>
                  <div className="text">
                    <h3 className="mid-head">Blogr App</h3>
                    <p className="mid-para">
                      I was able to build this full stack webapp but due to limited vps knowledge could not afford to 
                      host. The front end is react and materialize while the backend is nodejs. Please 
                      visit the repo and install to run locally.
                    </p>
                  </div>
                  <div className="extra-stack">
                    <h6>Nodejs</h6>
                    <h6>React</h6>
                    <h6>Materialize</h6>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* -------------------------------------------------- */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="contact-header text-center"><span className="common-span-1">04.</span>Let's Talk</h2>
          <p className="text-center contact-para">For new opportunities or even a chat, my inbox is always open.</p>
          <div className="d-flex justify-content-center">
            <a className="contact-link" href="mailto:devdavie6@gmail.com"><button className="contact-button">Say Hello</button></a>
          </div>
        </div>
      </section>
      {/* <div className="container mt-5"><hr style="color: #00A19B;"></div> */}
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">Copyright &copy; 2021
        </div>
      </footer>
    </>
  );
}

export default App;
