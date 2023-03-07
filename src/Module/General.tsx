import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import { default as aifuture } from './Assets/sponsorsLogos/AIFuture.png';
import Amazon from './Assets/sponsorsLogos/Amazon.png';
import Bosch_logo from './Assets/sponsorsLogos/bschlogo.png';
import cecs from './Assets/sponsorsLogos/CECS_vertical.png';
import echo3d2 from './Assets/sponsorsLogos/echo3d2-removebg-preview.png';
import ETAS_Logo from './Assets/sponsorsLogos/etasLogo.png';
import Ford from './Assets/sponsorsLogos/Ford.png';
import Forvia from './Assets/sponsorsLogos/Forvia.png';
import github from './Assets/sponsorsLogos/github.png';
import lce from './Assets/sponsorsLogos/little-caesars-logo.png';
import stickers from './Assets/sponsorsLogos/sticker.png';
import verbwire from './Assets/sponsorsLogos/verbwire.jpg';

import printer from './Assets/prizeImages/3dprinter.png';
import arduino from './Assets/prizeImages/arduino.png';
import drone from './Assets/prizeImages/drone.png';
import fujifilm from './Assets/prizeImages/fujifilm.png';
import gcpBox from './Assets/prizeImages/gcpSwag.png';
import hydro from './Assets/prizeImages/hydro.png';
import metaQuest from './Assets/prizeImages/Oculus_Quest2.png';
import sony from './Assets/prizeImages/sonyXM5.png';
import switchPrize from './Assets/prizeImages/switchlite1.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import eejoy from './Assets/teami/eejoy.jpg';
import faith from './Assets/teami/faith.png';
import huda from './Assets/teami/huda.png';
import kanika from './Assets/teami/kanika.jpg';
import rohit from './Assets/teami/rohit.jpg';
import shams from './Assets/teami/shams.jpg';
import shouryan from './Assets/teami/shouryan.png';
import zahra from './Assets/teami/zahra.jpeg';

//faith
const TOP_SECTION = {
  TITLE: 'Hack Dearborn',
  Typed_effect: [
    '24hrs in-person event',
    'Eat, Network and CODE!',
    'Win Prizes!',
    'Land Internships!'
  ],
  SHORT_DESCRIPTION:
    'Join us on March 11th 2023 for 24 hours of fun, innovation and creation!',
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: 'https://form.typeform.com/to/ls29erhF#university=xxxxx',
  HACKERS_REGISTRATION_FORM_LINK: 'https://forms.gle/cnZjcWK525jQxBUZ7',
  GDSC_LINK: 'https://gdsc.community.dev/university-of-michigan-dearborn-mi/',
};

//faith
const SOCIALS = {
  instagram: 'https://www.instagram.com/gdscdearborn/',
  discord: 'https://discord.com/invite/8XJSzmtWPp',
  linkedin: 'https://www.linkedin.com/company/gdsc-dearborn/',
  twitter: 'https://twitter.com/HacksLimbo',
  devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:info@hackdearborn.org'
};

//shams
const MIDDLE_SECTION = {
  TITLE: 'What is Hack Dearborn?',
  LONG_DESCRIPTION:
    'Hack Dearborn is an upcoming annual hackathon in southeast Michigan. Hack Dearborn will be hosted at the University of Michigan Dearborn by the Google Developer Student Clubs chapter at the University. Hack Dearborn aims to provide students with a creative space to solve problems and create real world solutions using technology.',
  LOGO: hackathonLogo
};

//Shams
const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://form.typeform.com/to/ls29erhF#university=xxxxx'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://form.typeform.com/to/ls29erhF#university=xxxxx'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 3,
  year: 2023
};

const schedule = [
  {
    day: '11-3-2023',
    events: [
      {
        title: 'Check-In Begins!',
        timings: '10 AM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Sponsor Fair',
        timings: '10 AM - 11:15 AM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Opening Ceremony',
        timings: '11:15 AM - 12 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Hacking Begins!',
        timings: '12 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Team Formation',
        timings: '12 PM - 12:30 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Lunch',
        timings: '12 PM - 1 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'ML With Google Cloud Workshop',
        timings: '2 PM - 3 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Make Your Own Chatbot Workshop',
        timings: '2 PM - 3 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Intro To Flutter Workshop',
        timings: '4 PM - 5 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Sponsor Workshop',
        timings: '4 PM - 5 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Games and Activities',
        timings: '5 PM - 6 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Dinner!',
        timings: '6 PM - 7 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Games and Activities',
        timings: '9 PM - 11 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Doors Lock For Your Safety',
        timings: '11 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
    ]
  },
  {
    day: '12-3-2023',
    events: [
      {
        title: 'Midnight Snack',
        timings: '12 AM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Breakfast',
        timings: '8 AM - 9 AM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Pitching 101 Workshop',
        timings: '9:30 AM - 10:30 AM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'End of Hacking!',
        timings: '12 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Demo Tables',
        timings: '12 PM - 1 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Lunch',
        timings: '1 PM - 2 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
      {
        title: 'Closing Ceremony!',
        timings: '2:15 PM - 3:30 PM',
        link: 'https://calendar.google.com/calendar/u/0?cid=Y19lNWY2NzViMmZkYTY4MDJhOTM2YWE5MzBjNjhmMDkwYjgyNzg2NzUwZGYxYjcyNzRmMzg2MTEyYjIwNDM2N2Q4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      },
    ]
  },
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */


const TrackInfo = [
  [
    //Array 1
    {
      icon: <i></i>,
      type: 'Automotive 🚗',
      content:
        'Vroom vroom! Detroit is the motor city. Create or implement a creative solution to an automotive issue or idea'
    },
    {
      icon: <i></i>,
      type: 'Social Good Track 😇',
      content:
        'They say it takes a village to raise a child, and this is a way to make a difference in your village (community)! Social issues include community service, inclusion, and healthcare. Teams will create solutions in these areas'
    },
  ],
  [
    {
      icon: <i></i>,
      type: 'Creativity Track 💡',
      content:
        'Have an idea that can make someone smile? Or can not be fit into a box? The creativity track is for you! Teams to explore game creation, entertainment applications'
    },
    {
      icon: <i></i>,
      type: 'Sustainability Track 🌳',
      content:
        'For all the tree huggers and earth lovers out there, we see you! Propose a challenge statement to teams that addresses sustainability: pollution, climate change, and recycling.'
    }
  ],
  [
    {
      icon: <i></i>,
      type: 'Web3 Track 🌐',
      content:
        'Use the VerbWire API to win $200 per team! There is $9k in API credits to be won as well!'
    },
  ],
];


/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

//all of us
const TeamInfo = [
  [
    //Array 1
    {
      role: 'Shouryan Nikam',
      linkedin: 'https://www.linkedin.com/in/shouryannikam/',
      img: shouryan
    },
    {
      role: 'Faith Long',
      linkedin: 'https://www.linkedin.com/in/faith-long-40963b168/',
      img: faith
    },
    {
      role: 'Shams Ahson',
      linkedin: 'https://www.linkedin.com/in/shams-ahson-6453ab210/',
      img: shams
    },
    {
      role: 'Rohit Nair',
      linkedin: 'https://www.linkedin.com/in/r-s-nair/',
      img: rohit
    },
    {
      role: 'Huda Hussaini',
      linkedin: 'https://www.linkedin.com/in/huda248/',
      img: huda
    },
    {
      role: 'Kanika Mohan',
      linkedin: 'https://www.linkedin.com/in/kanikamohan7/',
      img: kanika
    },
    {
      role: 'Zahra Alhmood',
      linkedin: 'http://www.linkedin.com/in/zahraa-alhmood',
      img: zahra
    },
    {
      role: 'Eejoy Lim',
      linkedin: 'https://www.linkedin.com/in/eejoylim',
      img: eejoy
    },
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

//all of us
const sponsorLogos = [
  [{src: Ford}, {src: Amazon}, {src: Bosch_logo}], //Array 1
  [, {src: Forvia}, {src: lce}, {src: ETAS_Logo}],
  [{src: stickers, name:"http://hackp.ac/mlh-StandOutStickers-hackathons"}, {src: github}, {src: cecs}], //Array 2
  [{src: aifuture}, {src: echo3d2}, {src: verbwire}] //Array 2
  // [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

const prizeImages = [
  [{src: metaQuest, name: "Meta Quest 2 VR Headset"}, {src: sony, name: "Sony Noise-Cancelling Headphones"}, {src: switchPrize, name: "Nintendo Switch"}],
  [{src: drone, name: "DJI Drone"}, {src: printer, name: "3D Printer"}, {src: hydro, name: "Hydroponics Smart Garden"}],
  [{src: gcpBox, name: "Google Cloud Swag Box"}, {src: arduino, name: "Arduino Starter Kit"}, {src: fujifilm, name:"Fujifilm Instant Camera Kit"}]
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */

// all of us
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24+ hour event where "hackers" will collaborate on creating a functioning software and/or hardware project for fame and fortune. Okay, maybe not fame or fortune, but definitely cool prizes and bragging rights.'
      },
      {
        label: 'Who can attend?',
        content:
          "Hack Dearborn is open to all currently enrolled college students, especially beginners!. ALL majors are welcome - we'll have workshops to help non-technical students get started and build something really cool!"
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          "We love to welcome first time hackers starting their hacking journey. We'll have tons of mentors and workshops to help you get started. We'll also have a beginner track for you to compete in!"
      },
      {
        label: 'How do teams work?',
        content:
          "You can form team with up to 4 members. We encourage you to bring your friends to form a team! If you don't have a team, there'll be plenty of opportunities for you to meet other hackers and form a team!"
      },
      {
        label: 'Can I participate virtually?',
        content:
          'This event will be an exclusively in-person event held at the University Center on the University of Michigan Dearborn campus. We will not be offering a virtual option for this event.'
      },
    ],
    [
      {
        label: 'How to register for the hackathon?',
        content:
          'All you need is to fill our form above! We will send you an email confirmation and a link to join the Discord.'
      },
      {
        label: 'Can I volunteer?',
        content:
          'Yes we are actively looking for volunteers! Just fill in the form above we will be happy to have you. (plus some special perks just for volunteers!)'
      },
      {
        label: 'Will there be swag?',
        content:
          'Yes! All participants will receive some swag. Those who end up demoing their project will receive even more swag!'
      },
      {
        label: 'I have more questions.',
        content:
          'Reach us directly at info@hackdearborn.org, we would happy to help you.'
      },
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  TrackInfo,
  sponsorLogos,
  TeamInfo,
  prizeImages,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
