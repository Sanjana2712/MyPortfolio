import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(100, 255, 218)", "rgb(58, 136, 254)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sanjana",
    lastName: "Gaddamanugu",
    initials: "g", // the example uses first and last, but feel free to use three or more if you like.
    position: [
        'Full-stack Developer',
        'Mern-stack Developer',
        'Frontend Developer',
      ],
    contact:[
        'Happy to connect!',
        'Let’s collaborate',
    ],
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    socials: [
        {
            link: "https://github.com/Sanjana2712",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/sanjanadevi/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://medium.com/@gsanjana97",
            icon: "fa fa-medium",
            label: 'medium'
        }
    ],
    bio: "I’m a full stack developer with a deep passion for JavaScript, React and all things web development. I studied CompSci at San Francisco State, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day.",
    skills:
        {
            proficientWith: ['Python','Javascript', 'Typescript', 'SQL', 'Html5','CSS3'],
            exposedTo: ['React.js', 'Node.js', 'Next.js','Express.js','Tailwind CSS','Docker','Pandas','SonarQube', 'Cypress', 'Jest', 'Postman', 'AWS']
        }
    ,
    hobbies: [
        {
            label: 'competitive typing',
        },
        {
            label: 'blogging',
        },
        {
            label: 'sketching',
        },
        {
            label: 'volunteering',
        }
    ],
    portfolio: [ 
        {
            title: "GatorMart",
            description: "Full-stack e-commerce marketplace with real-time inventory management and secure payment processing.",
            live: "", 
            source: "https://github.com/Sanjana2712/GatorMart", 
            image: mock1
        },
        {
            title: "HealthShare",
            description: "AI-powered platform that consolidates and analyzes COVID-19 healthcare worker experiences.",
            live: "http://18.218.238.186",
            source: "https://github.com/Sanjana2712/health-share",
            image: mock2
        },
        {
            title: "Luna",
            description: "AI-powered children's storytelling application with personalized narrative generation and interactive features.",
            live: "",
            source: "https://github.com/Sanjana2712/JadeMind",
            image: mock3
        },
    ]
}