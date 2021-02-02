import React from 'react';
import Helmet from "react-helmet";
import Layout from '../components/layout';
import '../styles/index.css';
import profile from '../images/irina.jpg';
import projEvaluateNews from '../images/projects_EvaluateNews.png';
import projMyDailyLog from '../images/projects_MyDailyLog.png';
import projFeedr from '../images/projects_Feedr.png';
import projQuickfinder from '../images/projects_Quickfinder.png';
import projJoby from '../images/projects_JOBY.png';
import projJobyMenu from '../images/projects_JOBYmenu.png';
import projLowepro from '../images/projects_Lowepro.png';
import projLoweproBlog from '../images/projects_LoweproBlog.png';
import projGrid from '../images/projects_Grid.png';
import projAmbassadors from '../images/projects_Loweprofessionals.png';
import projPicturOfLife from '../images/projects_PictureOfLife.png';
import projShoppingAssistant from '../images/projects_ShoppingAssistant.png';
import projMathSkills from '../images/projects_MathSkills.png';
import projTravelApp from '../images/projects_TravelApp.png';

console.log(profile);

const data = [
    {
        id: 1,
        name: 'Math Skills Tutorial',
        url: 'https://github.com/jay-peretz/math_project',
        description: 'An online tutorial for learning pre-algebra and arithmetic, implemented directives for new problem sets, code maintenance.',
        tech: 'Angular JS, JavaScript, HTML, CSS',
        image: projMathSkills,
        year: '2013'
    },
    {
        id: 2,
        name: 'Shopping Assistant',
        url: 'https://www.manfrotto.com/us-en/shopping-assistant/',
        description: 'Landing page for sorting articles based on user selection.',
        tech: 'JavaScript, HTML, SCSS, Bootstrap, Typo3 Flux and Fluid templating',
        image: projShoppingAssistant,
        year: '2018'
    },
    {
        id: 3,
        name: 'Picture of Life',
        url: 'https://www.manfrotto.com/it-it/experience/picture-of-life/',
        description: 'Components based landing page.',
        tech: 'HTML, JavaScript, SCSS, Typo3 templating',
        image: projPicturOfLife,
        year: '2019',
        extra_text: 'More: ',
        extra_links: [
            {
                name: 'Capture Life',
                url: 'https://www.lowepro.com/us-en/about-us/'
            }
        ]
    },
    {
        id: 4,
        name: 'Brand Ambassadors',
        url: 'https://www.lowepro.com/us-en/loweprofessionals/',
        description: 'Landing pages built from PSD mockups to functional templates consisting of components.',
        tech: 'HTML, SCSS, JavaScript, Typo3 Flux and Fluid templating',
        image: projAmbassadors,
        year: '2018',
        extra_text: 'More brands: ',
        extra_links: [
            {
                name: 'Lowepro',
                url: 'https://www.lowepro.com/us-en/loweprofessionals/viktoria-haack/'
            },
            {
                name: 'JOBY',
                url: 'https://joby.com/us-en/ambassadors/andy-burgess/'
            },
            {
                name: 'Manfrotto',
                url: 'https://www.manfrotto.com/us-en/experience/ambassadors/'
            },
            {
                name: 'Gitzo',
                url: 'https://www.gitzo.com/us-en/ambassadors/'
            }
        ]
    },
    {
        id: 5,
        name: 'Responsive Grid with Flexbox',
        url: 'https://codepen.io/irinakramer/pen/jcLlp',
        description: 'Lightweight, framework-independent, fully responsive grid in Flexbox.',
        tech: 'CSS, Flexbox, HTML',
        image: projGrid,
        year: '2014'
    },
    {
        id: 6,
        name: 'Lowepro Blog',
        url: 'http://blog.lowepro.com',
        description: 'Wordpress theme customizations according to brands style guidelines, new blog post template, old blogs migration to new.',
        tech: 'Wordpress, HTML, PHP, CSS',
        image: projLoweproBlog,
        year: '2016',
        extra_text: 'More: ',
        extra_links: [
            {
                name: 'JOBY blog',
                url: 'http://blog.joby.com'
            }
        ]
    },
    {
        id: 7,
        name: 'Lowepro eCommerce site',
        url: 'https://www.lowepro.com/us-en/',
        description: 'Magento eCommerce theme implementation for international brand, product and category pages, shopping cart optimization, all UI elements and rich content.',
        tech: 'Magento, PHP, JavaScript, HTML, CSS, APIs.',
        image: projLowepro,
        year: '2016'
    },
    {
        id: 8,
        name: 'Responsive Mega Menu',
        url: 'https://irinakramer.github.io/mega-menu/',
        description: 'Lightweight CSS menu for JOBY.com with CSS gradients, transitions, SVG icons, focus on performance and scalability.',
        tech: 'CSS, HTML, SVG animation',
        image: projJobyMenu,
        year: '2017',
        extra_text: 'Versions: ',
        extra_links: [
            {
                name: 'Desktop',
                url: 'https://irinakramer.github.io/mega-menu/'
            },
            {
                name: 'Mobile',
                url: 'https://irinakramer.github.io/mega-menu/mobile.html'
            }
        ]
    },
    {
        id: 9,
        name: 'JOBY.com eCommerce site',
        url: 'http://joby.com/us-en/',
        description: 'Responsive templates for product, category, shopping cart pages, tech specs feed, and marketing landing pages.',
        tech: 'Magento theming, HTML, CSS, PHP, Typo3 templating.',
        image: projJoby,
        year: '2017'
    },
    {
        id: 10,
        name: 'Lowepro Quickfinder',
        url: 'https://quickfinder.netlify.app/',
        description: 'App for quick navigation to a product series page on eCommerce site.',
        tech: 'JavaScript, HTML, CSS, SVG, Typo3 Flux.',
        image: projQuickfinder,
        year: '2017-2020'
    },
    {
        id: 11,
        name: 'News Feedr',
        url: 'https://feedr-80451.herokuapp.com/',
        description: 'Personalized news agregator app from various news sources.',
        tech: 'JavaScript, news APIs, search.',
        image: projFeedr,
        year: '2020'
    },
    {
        id: 12,
        name: 'My Daily Log',
        url: 'https://lit-ridge-16056.herokuapp.com/',
        description: 'App for logging daily outdoor and exercise activities.',
        tech: 'JavaScript, Firebase, APIs, CRUD functionalities, Bootstrap.',
        image: projMyDailyLog,
        year: '2020'
    },
    {
        id: 13,
        name: 'Evaluate News with NLP',
        url: 'https://github.com/irinakramer/evaluate-news-nlp',
        description: 'App to check an article for sentiment such as positivity, subjectivity and irony.',
        tech: 'JavaScript, Node, Express, Webpack, SCSS, MeaningCloud API.',
        image: projEvaluateNews,
        year: '2020'
    },
    {
        id: 14,
        name: 'Travel Planner',
        url: 'http://travel-app-17.herokuapp.com/',
        description: 'This app takes user destination city and departure date to return photo of the city and weather forecast for that date.',
        tech: 'JavaScript, Node, Express, Webpack, SCSS, APIs: Geonamens, Weatherbit, Pixabay',
        image: projTravelApp,
        year: '2020'
    }

];

const ProjectList = ({ projects }) => (
    <>
        {
            projects.slice(0).reverse().map(project => (
                <ProjectItem project={project} key={project.id} />
            ))
        }
    </>
);
// map over extras
const ExtraList = ({ extras }) => (
    <>
        {
            extras.map((extra, index) =>
                <ExtraItem extra={extra} key={index} />
            )
        }
    </>
);
const ExtraItem = ({ extra }) => (
    <span className="project__extra"><a href={extra.url} target="_blank" rel="noopener noreferrer">{extra.name}</a></span>
)
const ProjectItem = ({ project }) => (
    <div className="project">
        <div className="project__text">
            <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>

            <p>{project.description}

                {project.extra_text &&
                    <>
                        <br />
                        {project.extra_text}
                        <ExtraList extras={project.extra_links} />
                    </>
                }
                <br />
                <small>{project.tech}</small></p>
        </div>
        <div className="project__image">
            <a href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} width="150" height="90" alt={project.name} /></a>
        </div>
    </div>
);


export default () => (
    <Layout>
        <Helmet>
            <html lang="en" />
            <title>Irina Kramer - Frontend Engineer</title>
            <meta name="title" content="Irina Kramer - Frontend Web Engineer, Web Developer" />
            <meta name="description" content="Personal/portfolio website for Irina Kramer, frontend web developer with focus on ecommerce, enterprise websites and apps." />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@irinakramer" />
            <meta name="twitter:title" content="Irina Kramer - Frontend Engineer" />
            <meta name="twitter:description"
                content="Personal/portfolio website for Irina Kramer, frontend web developer with focus on ecommerce, enterprise websites and apps." />
            <meta name="twitter:image" content={profile} />
            <meta property="og:title" content="Irina Kramer - Frontend Engineer" />
            <meta property="og:description"
                content="Personal/portfolio website for Irina Kramer, frontend web developer with focus on ecommerce, enterprise websites and apps." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.irinakramer.com/" />
            <meta property="og:image" content={profile} />
        </Helmet>

        <section className="intro">
            <img src={profile} alt="Irina Kramer" />
            <p>Hi there. I'm Irina Kramer, a frontend web developer. My current tech stack is JavaScript, React, APIs, HTML, CSS.  I've been in the web industry for over 15 years, worked at Fortune 100, medium and start-up companies. I contributed to large enterprise and eCommerce websites and apps, focusing on optimal user experience and performance. Currently I build personalized full-stack web apps. I live in Petaluma, California and like spending my free time enjoying local life, travel and photography.</p>
        </section>
        <section>
            <span id="projects"></span>
            <h2>Projects &amp; Portfolio</h2>
            <ProjectList projects={data} />
        </section>
        <section>
            <span id="contact"></span>
            <h2>Contact</h2>
            <p>You can send me an <a href="mailto:irakramer@gmail.com">email</a> or contact me via <a href="https://www.linkedin.com/in/irinakramer/">LinkedIn</a>. Thanks for visiting!</p>
            <br /><br />
        </section>
    </Layout>
) 
