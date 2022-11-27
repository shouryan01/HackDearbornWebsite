import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

// function sponsors = () => {
//   window.open(SOCIALS.email)
// }

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Hack Dearborn"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring </h3>

      <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
