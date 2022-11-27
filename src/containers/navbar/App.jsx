import HomePage from 'containers/Home/HomePage';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles.scss';


const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;

const NAVBAR = () => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);
  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );
      return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);


  return (
    <Router>
      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                <Link to={`#home`}>
                  <span className="links">Home </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">prizes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">sponsors </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#team`}>
                  <span className="links">team </span>{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
      </nav>

			<HomePage />
  
    </Router>
  );
};

export default NAVBAR;
