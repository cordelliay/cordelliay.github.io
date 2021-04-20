import './App.css';
import React, { useState } from 'react';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const Main = () => {
  return (
  <div className="feature-grid">
    <h1 className="feature-heading feature-part1">Cordellia</h1>
    <h2 className="feature-heading feature-part2">Yokum</h2>
    <h2 className="feature-part3">Web<sup>&</sup>Data</h2>
    <div className="bg-main-feature-color feature-rect1 ease-down"></div>
    <div className="bg-main-feature-color feature-rect2 ease-down"></div>
    <div className="bg-main-feature-color feature-rect3 ease-across"></div>
    <div className="bg-main-feature-color feature-rect4 ease-across"></div>
    <div className="bg-main-feature-color feature-rect5 ease-across"></div>
    <div className="bg-main-feature-color feature-rect6 ease-across"></div>
    <div className="bg-main-feature-color feature-rect7 ease-down"></div>
    <div className="feature-circle1">
      <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" stroke="transparent" />
      </svg>
    </div>
    <div className="feature-circle2">
      <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" stroke="transparent" />
      </svg>
    </div>
  </div>
  )
}
const Details = () => {
  const detail = [
    {
      name: 'Location',
      icon: 'fas fa-map-marker-alt',
      value: 'Baltimore, MD',
    }, 
    // {
    //   name: 'Job',
    //   icon: 'fas fa-briefcase',
    //   value: 'Technical Lead & QA Manager',
    // },
  ];
  return(
    detail.map((detail, index) =>
    <div className="info-wrapper flex" key={index}>
        <i className={`info info-icon ${detail.icon}`} aria-hidden="true"></i>
        <div className="info-label">{detail.name}: <span className="info-detail">{detail.value}</span></div>
    </div>
    )
  )
  
}

const AboutMe = () => {
  return (
    <>
      <section className="about panel bg-main-feature-color" aria-labelledby="about">
        <div className="flex">
            <div className="about-wrap">
                <h2 className="heading sticky bg-main-feature-color" id="about">About</h2>
                <Details />
            </div>
            <div className="bg-black divider-vert-detached"></div>
            <div className="about-contents contain">
                <h3>Hi.👋<br />My name is Cordellia!</h3>
                <p>I have a reputation for creating applications with a focus on usability, and accessibility. I am well organized, eager, and hard working with excellent communication skills and knack for quickly grasping new concepts and software. As both a programmer and manager, I have a proven track record of completing diverse projects quickly and efficiently.</p>
                <p>..or that's what it says on my resume. I'm a huge nerd. I like doing things once rather than twice, grilling on sunny days, and hanging with my dog. </p>
            </div>
        </div>
      </section>
    </>
  )
}
const TechItems = () => {
  const tech = ["MySQL", "PHP", "CSS3", "HTML5", "XML", "React", "JQuery", "Javascript", "Propel ORM", "SASS / SCSS", "AngularJS", "Twig", "Slim Framework", "Bootstrap", "Foundation"];
  return (
    tech.map((tech, index) => <li className="tech-item" key={index}> {tech}</li>)
  )
}

const ApiItems = () => {
  const api = ["Altmetrics", "Scopus", "MailChimp", "Asana", "YouTube", "Google Analytics", "Highcharts"];
  return (
    api.map((api, index) => <li className="api-item" key={index}> {api}</li>)
  )
}

const OtherItems = () => {
  const other = ["Filemaker", "STATA", "Tableau", "AllBooks", "Data Studio", "Google Tag Manager", "Google Optimize", ];
  return (
    other.map((other, index) => <li className="other-item" key={index}> {other}</li>)
  )
}

const Skills = () => {
  return (
    <>
      <section className="skills" aria-labelledby="skill">
        <div className="heading sticky bg-black">
            <h2 className="skills-heading" id="skill">Skills</h2>
            <div className="bg-main-feature-color divider-hor"></div>
        </div>
        <div className="panel skill skill-wrapper">
            <div className="skill-mode">
                <div className="skill-mode-wrapper">
                    <h3 className="skill-heading" id="tech">Tech</h3>
                    <ul aria-labelledby="tech">
                      <TechItems />
                    </ul>
                </div>
            </div>
            <div className="bg-main-feature-color divider-vert"></div>
            <div className="skill-mode">
                <div className="skill-mode-wrapper">
                    <h3 className="skill-heading" id="api">API<small>s</small></h3>
                    <ul aria-labelledby="api">
                      <ApiItems />
                    </ul>
                    <h3 className="skill-heading" id="other">Other</h3>
                    <ul aria-labelledby="other">
                      <OtherItems />
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  ) 
}

const WorkHistory = [
  {
    name: 'Impact Report Generator',
    job: 'National Academies of Sciences, Engineering, and Medicine',
    type: 'Web Application',
    note: 'Using internal data and data collected from Altmetrics, Scopus, Web of Science, and MailChimp this module will allow users to quickly produce, edit, and create multipage PDF summaries of the impact of a various reports. Really, the easiest way to understand is to just see the end result <a class="highlight" href="https://drive.google.com/file/d/1x2lEhkZ1FseTiDvZ1fUoknIx0GDV6ssm/view" target="_blank">a styled PDF.</a> This complex report took about 20 seconds for a user to generate and allowed inline customization. Built using PHP, Twig, Slim, lil AJAX, some really intense data queries, and several APIs.',
    work: [
      {
      icon: 'fas fa-code',
      type: 'Full stack',
      },
      {
        icon: 'fas fa-chart-area',
        type: 'Charts',
      },
      {
        icon: 'fas fa-database',
        type: 'Data',
      },
      {
        icon: 'fas fa-cog',
        type: 'APIs',
      },
      {
        icon: 'fa-user-clock',
        type: 'Time Saver',
      },
    ]
  },
  {
    name: 'National Academies Press Website',
    job: 'National Academies of Sciences, Engineering, and Medicine',
    type: 'Website',
    note: 'I made extensive changes and functional improvements to this iterative <a class="highlight" href="https://www.nap.edu/"> website.</a> It serves over 2 million users/ 3 million session a month. I worked on many features including: segmented searching, division and initiatives, and revitalizing analytics (switching to Google Tag Manager).',
    work: [
      {
      icon: 'fas fa-code',
      type: 'Full stack',
      },
      {
        icon: 'fas fa-chart-area',
        type: 'Analytics',
      },
      {
        icon: 'fas fa-database',
        type: 'Data',
      },
      {
        icon: 'fas fa-cog',
        type: 'APIs',
      },
    ]
  },
  {
    name: 'Sales Metric & Analysis Reporting',
    job: 'Johns Hopkins University Press',
    type: 'Desktop Application',
    note: 'Data visualization, custom reporting, and business intelligence for 12 client presses. This gave each press the ability to analyze transactional data, create ad hoc reporting, and forecast future sales and stock needs. It resulted in a significant decrease in workload and improved data access for the presses. Built using Filemaker, custom SQL statements, Highcharts and a lil razzle dazzle.',
    work: [
      {
      icon: 'fas fa-network-wired',
      type: 'Schema',
      },
      {
        icon: 'fas fa-chart-area',
        type: 'Charts',
      },
      {
        icon: 'fas fa-database',
        type: 'Data',
      },
      {
        icon: 'fas fa-pencil-ruler',
        type: 'Design',
      },
      {
        icon: 'fas fa-user-friends',
        type: 'Training',
      },
    ]
  },
  {
    name: 'Bulk Shipping Requests',
    job: 'Johns Hopkins University Press',
    type: 'Desktop Application',
    note: 'This app worked with the disparate systems of 12 client presses and simplified the process of requesting contractually obligated gratis books. Built using Filemaker. It integrated data from various versions of AllBooks and allowed upload to our distribution software, Bookmaster. Validated addresses, checked for potentional duplicate requests. It resulted in a savings of over 3,500 hours of labor per year for Johns Hopkins Press.',
    work: [
      {
      icon: 'fas fa-vote-yea',
      type: 'Validation',
      },
      {
        icon: 'fas fa-random',
        type: 'Data Transformation',
      },
      {
        icon: 'fas fa-user-clock',
        type: 'Time Saver',
      },
      {
        icon: 'fas fa-pencil-ruler',
        type: 'Design',
      },
      {
        icon: 'fas fa-user-friends',
        type: 'Training',
      },
    ]
  },
  {
    name: 'Exhibition Point of Sale System',
    job: 'Johns Hopkins University Press',
    type: 'Mobile Application',
    note: 'Application for offline sales at exhibitions and events. Allowed users to scan barcodes, track sales, calculate discounts, gather contact information, and generate emailed reciepts when the user regained wifi access. Built using Filemaker.',
    work: [
      {
      icon: 'fas fa-vote-yea',
      type: 'Validation',
      },
      {
        icon: 'fas fa-upload',
        type: 'Data Import',
      },
      {
        icon: 'fas fa-network-wired',
        type: 'Schema',
      },
      {
        icon: 'fas fa-pencil-ruler',
        type: 'Design',
      },
      {
        icon: 'fas fa-user-friends',
        type: 'Training',
      },
    ]
  },
  {
    name: 'Hopkins Fulfillment Services Website',
    job: 'Johns Hopkins University Press',
    type: 'Website',
    note: 'A responsive website built on Bootstrap. Nothing fancy but a massive improvement over what they previously had.',
    work: [
      {
        icon: 'fas fa-pencil-ruler',
        type: 'Design',
      },
      {
        icon: 'fas fa-code',
        type: 'Front End development',
      },
    ]
  },

]

const WorkItem = () => {
  return (
    WorkHistory.map((works, index) =>
    <div className="details contain" key={index}>
      <div className="item-wrap">
          <h3 className="next-details-title">{works.name}</h3>
          <span className="job">{works.type} for {works.job}</span>
          <div className="details-content">
              <p>
              {ReactHtmlParser(works.note)}
              </p>
          </div>
          <div className="flex">
            {works.work.map((w, index) => <WorkType key={index} icon={w.icon} type={w.type} />)}
          </div>
      </div>
  </div>
  ))
}

const WorkType = props => {
  return(
    <div className="info-wrapper flex">
        <i className={`inco-icon info ${props.icon}`} aria-hidden="true"></i>
        <div className="info-label">{props.type}</div>
    </div>
  )
} 

const Work = () => {
  return (
    <>
    <section>
      <div className="next" aria-labelledby="work">
          <div className="heading sticky" id="heading">
              <h2 className="next-heading" id="work">Work</h2>
              <div className="bg-black divider-hor-mini"></div>
          </div>
          <div className="next-content"> 
            <WorkItem />
          </div>
      </div>
  </section>
  </>
  )

}



const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/cordelliay@hotmail.com",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <>
      <section className="panel bg-main-feature-color" aria-labelledby="hi">
        <div className="aligner">
            <div className="contact-wrap contain">
                <h2><span className="bg-main-feature-color" id="hi">Say hi!</span></h2>
                <div className="border" id='formview'>
                    <form className="pad" onSubmit={handleOnSubmit}>
                        <input type="text" name="email" className="question" id="email" required autoComplete="off" />
                        <label htmlFor="email"><span className="q">Email:</span></label>
                        <textarea name="message" rows="2" className="question" id="msg" required autoComplete="off"></textarea>
                        <label htmlFor="msg" className="q"><span>Message:</span></label>
                        <button className="bg-black" type="submit" >Send</button>
                    </form>
                    <div role="alert" aria-live="assertive">
                      {serverState.status && (
                        <p className={!serverState.status.ok ? "errorMsg" : ""}> 
                          {serverState.status.msg}
                        </p>
                      )}
                    </div>
                </div>
                <div className="flex giant">
                    <div className="info-wrapper flex">
                        <i className="info-icon info fab fa-twitter"></i>
                        <div className="info-label"><a href="https://twitter.com/ocdilla">@ocdilla</a></div>
                    </div>
                    <div className="info-wrapper flex">
                        <i className="info-icon info fab fa-linkedin"></i>
                        <div className="info-label"><a href="https://www.linkedin.com/in/cordellia-yokum-b96629121/">Linkedin</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

const More = () => {
  return (
    <>
    <section className="panel data" aria-labelledby="more">
      <div className="contain flex">
        <div className="circle">
            <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" stroke="transparent" fill="var(--main-feature-color)" />
            </svg>
        </div>
        <h2 className="center overflow" id="more">More</h2>
        <div className="desc">
            <p>Whether writing code or reviewing it, I offer real accessible solutions to complex designs.  I specialize in helping designers identify accessible patterns and giving developers markup recommendations before the build. Accessibility audits are easy to do but sharing how to avoid errors and fix issues in the code is much more valuable than a list of violations.</p>
            <p>Accessible doesn’t have to mean ugly! At Fastspot,  I got to work on some award-winning websites, including <a href="https://www.webbyawards.com/winners/2019/websites/general-websites/school-university/" className="highlight">2019 Webby Winner </a> for School / University: MICA <a href="https://winners.webbyawards.com/2020/websites/general-websites/schooluniversity/120845/yale-college" className="highlight">2020 Webby People’s Voice Award</a> for School / University: Yale College that meets WCAG 2.0 AA compliance. </p>
            <p>Plus I've done some presentations on <a className="highlight" href="https://drive.google.com/file/d/1fDOGla3COXnufEWoAUVJ4_anW13bO1kr/view?usp=sharing">Accessibility</a> and <a className="highlight" href="https://drive.google.com/file/d/1ZZEVC8rFu9PsJR5e3DFWMrvq41jJqTbk/view?usp=sharing">Quality Assurance.</a></p>
        </div>
      </div>
    </section>
  </>
  )
}


const App = () => {
  return (
    <div className="App">
      <main>
      <Main />
      <div id="second">
        <AboutMe />
        <Skills />
        <Work />
        <More />
        <Contact />
      </div>
      </main> 
    </div>
  );
}


export default App;
