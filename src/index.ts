import Employer from "./models/employer.model";
import School from "./models/school.model";
import Skill from "./models/skill.model";
import fs from 'fs';
import EmployerJob from "./models/employerjob.model";

const data: JSON = JSON.parse(JSON.stringify({
  objective: 'To obtain a position where I can use my training in graphic design and computer science, focusing on web and other digital platforms.',
  education: [
    new School({
      name: 'American Academy of Art',
      city: 'Chicago',
      state: 'IL',
      zip: ' 60604',
      country: 'USA'
    },
      'https://aaart.edu',
      'BA - Fine Arts in Graphic Design',
      2010
    ),
    new School({
      name: 'Carmel High School',
      city: 'Mundelein',
      state: 'IL',
      zip: '60060',
      country: 'USA'
    },
    'https://www.carmelhs.org/',
      'Diploma',
      2006
    )
  ],
  skills: {
    technical: {
      software: [
        new Skill('NiceLabel', 'https://www.nicelabel.com/'),
        new Skill('Fishbowl Inventory', 'https://www.fishbowlinventory.com/'),
        new Skill('Visual Studio Code', 'https://code.visualstudio.com'),
        new Skill('Quickbooks', 'https://quickbooks.intuit.com'),
        new Skill('Microsoft Access', 'https://office.com'),
        new Skill('Microsoft Excel', 'https://office.com'),
        new Skill('Adobe InDesign', 'https://www.adobe.com/products/indesign.html')
      ],
      tools: [
        new Skill('Typescript', 'https://www.typescriptlang.org/'),
        new Skill('Javascript', 'https://en.wikipedia.org/wiki/JavaScript'),
        new Skill('NodeJS', 'https://nodejs.org/en/'),
        new Skill('Python', 'https://www.python.org/'),
        new Skill('SASS/SCSS', 'https://sass-lang.com/'),
        new Skill('Postcss', 'https://postcss.org/'),
        new Skill('HTML/CSS', 'https://en.wikipedia.org/wiki/HTML'),
        new Skill('expressJS', 'https://expressjs.com/'),
        new Skill('React', 'https://reactjs.org/'),
        new Skill('Angular', 'https://angular.io/'),
        new Skill('Vue', 'https://vuejs.org/'),
        new Skill('Webpack', 'https://webpack.js.org/'),
        new Skill('Parcel', 'https://parceljs.org/'),
        new Skill('Gulp', 'https://gulpjs.com/')
      ]
    },
    personal: [
      new Skill('Hardworking, determined to perform to the best of my ability'),
      new Skill('Willing to lead others and take on several responsibilities'),
      new Skill('Personable, energetic, works well with others')
    ]
  },
  experience: [
    new Employer({
      name: 'Accumedix, Inc - Contract Medical Device Manufacturing',
      city: 'Libertyville',
      state: 'IL',
      zip: '60048',
      country: 'USA'
    },
      'https://accumedix.com',
      'June 2011',
      'Present',
      [
        new EmployerJob('System and Network Administrator', 'Build and maintain computers/network as well as directly handle user troubleshooting.'),
        new EmployerJob('Programmer', 'Create and maintain interactive NiceLabel forms and custom Fishbowl Inventory reports.'),
        new EmployerJob('Graphic Design', 'Corporate identity, web design, labeling and packaging design for Accumedix and its clients.  Work with other graphic design firms and packaging companies to design and implement production print designs and labeling.  Troubleshoot print and design issues ensuring compliance to federal regulations.'),
        new EmployerJob('Shipping', 'Inventory control and shipping activities for Accumedix customers.  Update and report from Fishbowl manufacturing resource planning application to manage inventory levels.'),
        new EmployerJob('Quality/Manufacturing', 'Quality Control and Manufacturing activities as required by business needs.'),
      ])
  ],
  references: 'Available upon request'
}));

fs.writeFileSync('dist/resume_data.json', JSON.stringify(data));