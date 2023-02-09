import { useEffect, useState } from 'react';
import { FOOTER, SOCIALS, TOP_SECTION } from '../../Module/General';
import { Btn } from '../Landing/index.jsx';
import CodeOfConduct from './assets/Code of Conduct.txt';
import CommunityValues from './assets/Community Values.txt';
import cross from './assets/cross.svg';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
//------------------------------------------------------------------
import './style.scss';

const GithubTemplate = ({hideTemplate}) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{' '}
          <a href={TOP_SECTION.GDSC_LINK}>Level Up</a>,
          where we will be hosting workshops, tech talks, panel
          discussions, and career sessions!
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} alt="" />
    </div>
  );
};

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          {/* <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div> */}
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          {/* <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
              <img src={DevPost} alt="" />
            </a>
          </div> */}
        </div>
        <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Hacker Registration" />
          </a>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Volunteer Registration" />
            </a>
          )}
        </div>
        <div className="footer_info">
          <p>
            Contact us:  
            <a href={SOCIALS.email}>
              {' '}info@hackdearborn.org{' '}
            </a>{' '}
          </p>

          {FOOTER.Privacy_policy.required && (
            <a
              href={CommunityValues}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Community Values</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && (
            <a
              href={CodeOfConduct}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Code of Conduct</p>
            </a>
          )}
        </div>
        {template && viewTemplate && (
          <GithubTemplate hideTemplate={() => setViewTemplate(false)} />
        )}
      </div>
    </div>
  );
};

export default Footer;
