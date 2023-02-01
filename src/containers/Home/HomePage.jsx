import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Logo, LogoSectionAbout } from '../../components/About/index.jsx';
import { Accordion } from '../../components/Accordian/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import { Myinfo } from '../../components/Landing/index.jsx';
import { FirstPrize, PrizeHeading } from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorsHead
} from '../../components/Sponsors/sponsors.jsx';
import { Member } from '../../components/Team';
import {
  FOOTER,
  frequentlyAskedQuestions, prizeImages, sponsorLogos, TeamInfo, TrackInfo
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import pattern from './assets/pattern4.png';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} namex={s.name} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Track group
const TrackGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={3} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  // const [media, setMedia] = useState();
  // UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className="logoSection" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>


        {/* ********Tracks here ***** */}
        <Row className="prizesection" id="tracks" style={{marginTop: "12%", paddingTop: "5%"}}>
          <PrizeHeading type="Tracks" />
            {TrackInfo.map(TrackGroup)}
        </Row>
        {/* ********Tracks ending here ***** */}


        {/* ********Prizes here ***** */}
        <div id="prizes" style={{marginTop: "6%"}}></div>
        <Row className="prizesection">
          <h1> {"‎ "}</h1>
          <PrizeHeading type="Prizes" />
          {prizeImages.map(SponsorGroup)}
        </Row>

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <br /><br /><br />
          {/* <SponsorUS /> */}
            {sponsorLogos.map(SponsorGroup)}
          
        </Row>
        {/* ********Sponsors ending here ***** */}


        {/* ********Frequently asked Questions here ***** */}
        <div className="PrizeHeading" style={{paddingTop: "6%"}}  id="faq">
          <h1>Frequestly Asked Questions</h1>
        </div>
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Team here ***** */}
        {/* <Row className="sponorSection" id="team"></Row> */}
        <h1 id="team" style={{paddingTop: "6%"}}>Our Team</h1>
        {FOOTER.JOIN_TEAM.required}
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}

        {/* ********Judges here ***** */}

        {/* <h1 id="team">Judges</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={TOP_SECTION.JUDGES_FORM_LINK}
            content="Interested in being judge"
          />
        )}
        {JudgesInfo.map(TeamMembers)} */}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
