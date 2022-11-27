import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import Bosch_logo from './Assets/sponsorsLogos/Bosch_logo.png';
import Etas from './Assets/sponsorsLogos/etas.png';
import Ford from './Assets/sponsorsLogos/Ford.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import faith from './Assets/teami/faith.png';
import huda from './Assets/teami/huda.png';
import rohit from './Assets/teami/rohit.jpg';
import shams from './Assets/teami/shams.jpg';
import shouryan from './Assets/teami/shouryan.png';

//faith
const TOP_SECTION = {
  TITLE: 'Hack-Dearborn',
  Typed_effect: [
    '36 hours in-person event',
    'Eat, Network, and CODE!',
    'Build Your Resume!'
  ],
  SHORT_DESCRIPTION:
    'Join us on 10th March 2023 with over 100 students from across Michigan for 36 hours of creation, innovation, & fun.',
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: 'https://tally.so/r/3jaKK6',
  HACKERS_REGISTRATION_FORM_LINK: 'https://tally.so/r/mOD6VR'
};

//faith
const SOCIALS = {
  instagram: 'https://www.instagram.com/gdscdearborn/',
  discord: 'https://discord.com/invite/8XJSzmtWPp',
  linkedin: 'https://www.linkedin.com/company/gdsc-dearborn/',
  twitter: 'https://twitter.com/HacksLimbo',
  devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:dearbornhacks@gmail.com'
};

//shams
const MIDDLE_SECTION = {
  TITLE: 'What is Hack-Dearborn?',
  LONG_DESCRIPTION:
    'Hack Dearborn is an upcoming annual hackathon in southeast Michigan. Hack Dearborn will be hosted at the University of Michigan Dearborn by the Google Developer Student Clubs chapter at the University. Hack Dearborn aims to provide students with a creative space to solve problemsand create real world solutions using technology.',
  LOGO: hackathonLogo
};

//Shams
const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://tally.so/r/3jaKK6'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://tally.so/r/mOD6VR'
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
  month: 10,
  year: 2022
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
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

//huda
const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i></i>,
      type: 'Automotive',
      content:
        'Vroom vroom. Detroit is the motor city. Create or implement a creative solution to an automotive issue or idea'
    },
    {
      icon: <i></i>,
      type: 'Social Good Track',
      content:
        'They say it takes a village to raise a child, and this is a way to make a difference in your village (community)! Social issues include community service, inclusion, and healthcare. Teams will create solutions in these areas'
    },
    {
      icon: <i></i>,
      type: 'Creativity Track',
      content:
        'Have an idea that can make someone smile? Or can not be fit into a box? The creativity track is for you! Teams to explore game creation, entertainment applications'
    },
    {
      icon: <i></i>,
      type: 'Sustainability Track',
      content:
        'For all the tree huggers and earth lovers out there, we see you! Propose a challenge statement to teams that addresses sustainability: pollution, climate change, and recycling.'
    }
  ]
  //Array 2
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
      role: 'Shouryan',
      linkedin: 'https://www.linkedin.com/in/shouryannikam/',
      img: shouryan
    },
    {
      role: 'Faith',
      linkedin: 'https://www.linkedin.com/in/faith-long-40963b168/',
      img: faith
    },
    {
      role: 'Shams',
      linkedin: 'https://www.linkedin.com/in/shams-ahson-6453ab210/',
      img: shams
    }
  ],
  [
    //Array 2
    {
      role: 'Rohit',
      linkedin: 'https://www.linkedin.com/in/r-s-nair/',
      img: rohit
    },
    {
      role: 'Huda',
      linkedin: 'https://www.linkedin.com/in/huda248/',
      img: huda
    }
    // {
    //   role: 'Maryam',
    //   linkedin: 'https://www.linkedin.com/in/maryamjaratli/',
    //   img: maryam
    // }
  ]
];

// still not decided
// const JudgesInfo = [
  // {
  //   name: 'Shouryan',
  //   role: 'Judge',
  //   linkedin: 'https://www.linkedin.com/in/shouryannikam/',
  //   github: '',
  // }
  /* [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ] */
// ];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

//all of us
const sponsorLogos = [
  [{src: Ford}, {src: Bosch_logo}, {src: Etas}] //Array 1
  // [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  // [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
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
          'A hackathon is a 24+ hour event where "hackers" all over the globe or particular area will collaborate on creating a functioning software and/or hardware by the end of the event for fame and fortune. Okay, maybe not fame or fortune, but definitely cool prizes and bragging rights.'
      },
      {
        label: 'Who can attend?',
        content:
          'Dearborn Hacks is open to all currently enrolled college students in the southeast area.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers starting their hacking journey.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at @gdscdearborn or dearbornhacks@gmail.com, we would happy to help you.'
      },
      {
        label: 'Can I volunteer?',
        content:
          'Yes we are actively looking for volunteers, fill the form (in footer section) we will be happy to have you.'
      },
      {
        label: 'Will there be swag?',
        content:
          'Yes! Participants will recieving swag! Come and see whose swag it is...'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  // JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
