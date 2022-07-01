/*
Items for the profile page.
These would ideally come from a database... but given the
scale of this website it makes more sense to just keep them
in the codebase for now.
*/

import eagleLogo from '@/apps/teaocha-design/assets/images/logos/Eagle-logo.png'
import wordwallLogo from '@/apps/teaocha-design/assets/images/logos/Wordwall-logo-square.png'
import grokLockLogo from '@/apps/teaocha-design/assets/images/logos/GrokLock-logo-square.png'
import jetLogo from '@/apps/teaocha-design/assets/images/logos/JET-logo.jpeg'

export const experience = [
  {
    title: 'Eagle Genomics Ltd.',
    link: {
      href: 'https://www.eaglegenomics.com',
      text: 'www.eaglegenomics.com',
    },
    from: 'Jan 2017',
    until: 'Dec 2020',
    duration: '4 Years',
    image: eagleLogo,
    fallbackIconName: 'Keyboard',
    sections: [
      {
        title: 'Senior Software Engineer',
        duration: '1 year',
        location: 'Cambridge, England, United Kingdom',
        description: [
          `
            Lead developer/maintainer of the Web-UI for the company's central
            knowledge-exploration platform, as well as
            being a core member of the architecture team for the platform in general.
          `,
          `
            I started during the early design and development stages of the product,
            and had a voice in many of the discussions that helped to grow that
            product into a multi-team endeavour.
          `,
          `
            Key technologies used in this role included Javacript/React, Python, Docker,
            GraphQL, REST, Auth0, and Microservices architecture.
          `,
        ],
      },
      {
        title: 'Software Engineer',
        duration: '3 years',
        location: 'Cambridge, United Kingdom',
      }
    ],
  },
  {
    title: 'Work-Abroad, Studying & Freelance Software Engineering',
    fallbackIconName: 'Education',
    from: 'Jan 2016',
    until: 'Nov 2016',
    duration: '1 year',
    sections: [
      {
        location: 'Japan & United Kingdom',
        description: [
          `
            I started the first few months of this year by working in a hostel in Kyoto,
            and then spent the rest of the year studying more advanced web-development
            techniques, along with some functional programming etc.
          `,
          `
            During this period I created the first version of this portfolio and
            used it as a hub to do some freelance software jobs for extra practice.
          `
        ],
      }
    ],
  },
  {
    title: 'Wordwall',
    link: {
      href: 'https://www.wordwall.net',
      text: 'www.wordwall.net',
    },
    from: 'Nov 2014',
    until: 'Oct 2015',
    duration: '1 year',
    fallbackIconName: 'Keyboard',
    image: wordwallLogo,
    sections: [
      {
        location: 'Liverpool, United Kingdom',
        description: [
          `
            Full-stack developer for software aimed at helping teachers to build
            classroom activities.
          `,
          `
            The software already existed as a C# windows app with a respectable customer
            base. It was our responsibility to migrate that app into a web-based format,
            centred around a new community and resource-sharing portal.
          `
        ],
      }
    ],
  },
  {
    title: 'JET Programme',
    link: {
      href: 'http://www.jetprogramme.org',
      text: 'www.jetprogramme.org',
    },
    from: 'Jul 2011',
    until: 'Jun 2013',
    duration: '2 years',
    fallbackIconName: 'WhiteBoardApp16',
    image: jetLogo,
    sections: [
      {
        title: 'Assistant Language Teacher',
        location: 'Hagi, Yamaguchi, Japan',
        description: [
          `
            I taught English in a number of elementary and junior schools in the rural
            south of Japan.
          `,
        ],
      }
    ],
  },
]

export const education = [
  {
    title: 'Univeristy of Southampton',
    link: {
      href: 'https://www.southampton.ac.uk',
      text: 'www.southampton.ac.uk',
    },
    from: 'Sep 2007',
    until: 'Jun 2011',
    duration: '4 years',
    fallbackIconName: 'Education',
    sections: [
      {
        title: 'MPhys Physics - 1st Class Honors',
        location: 'Southampton, United Kingdom',
        description: [
          `
            Four year master's program, accepted on scholarship.
            Specializing in nuclear physics, and solar power.
          `,
          `
            My masters thesis was in Epidemic Modelling, for which I designed
            and ran multiple world-simulations of a viral outbreak. (Written in C++).
          `
        ],
      }
    ],
  },
  {
    title: 'Japanese Language Proficiency Test',
    link: {
      href: 'http://www.jlpt.jp',
      text: 'www.jlpt.jp',
    },
    from: 'Jan 2019',
    until: ' ',
    fallbackIconName: 'Certificate',
    sections: [
      {
        title: 'Level N2 Certification',
        description: [
          `
            Second highest level (one below fluent) of the JLPT - internationally
            recognised Japanese Language certification.
          `,
        ],
      }
    ],
  },
]

export const projects = [
  {
    title: 'Grok Lock - Hill Shizuki',
    link: {
      href: 'https://www.groklock.com',
      text: 'www.groklock.com',
    },
    from: 'Nov 2013',
    until: 'Mar 2014',
    duration: '5 Months',
    fallbackIconName: 'MusicInCollectionFill',
    image: grokLockLogo,
    sections: [
      {
        location: 'Yorkshire, United Kingdom',
        description: [
          `
            I spent around five months teaching myself music production, and 3D
            modelling, whilst writing and recording an album under my alter-ego
            'Grok Lock'. The album was titled 'Hill Shizuki' and was released onto
            most digital streaming platforms, where you can still find it today.
          `
        ],
      }
    ],
  }
]