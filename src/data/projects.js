import projQuickfinder from "../images/projects/Quickfinder.png";
import projJoby from "../images/projects/JOBY.png";
import projJobyMenu from "../images/projects/JOBYmenu.png";
import projLowepro from "../images/projects/Lowepro.png";
import projLoweproBlog from "../images/projects/LoweproBlog.png";
import projGrid from "../images/projects/Grid.png";
import projAmbassadors from "../images/projects/Loweprofessionals.png";
import projShoppingAssistant from "../images/projects/ShoppingAssistant.png";
import projMathSkills from "../images/projects/MathSkills.png";
import projBouquet from "../images/projects/Bouquet.png";
import ComingSoon from "../images/projects/ComingSoon.svg";

const projects = [
    {
        name: "Bank Statement Analyzer",
        url: "",
        description:
            "Full stack app to analyze bank transactions and calculate ratios for loan eligibility",
        tech: "React, Chakra, Rest/GraphQL APIs, Flask",
        image: ComingSoon,
        year: "2021 - 2023",
        company: "SmartBiz",
    },
    {
        name: "Bouquet",
        url: "https://bouquet-wine-tasting.herokuapp.com/",
        description:
            "This app is a guide to help you identify aromas and scents present in most wine families. Full CRUD app.",
        tech: "React, Material UI, GeoCharts API, Back4App",
        image: projBouquet,
        year: "2021 - 2023",
        company: "",
    },
    {
        name: "JOBY.com eCommerce site",
        url: "http://joby.com/us-en/",
        description:
            "Responsive templates for product, category, shopping cart pages, tech specs feed, and marketing landing pages.",
        tech: "Magento theming, HTML, CSS, PHP, Typo3 templating.",
        image: projJoby,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Lowepro eCommerce site",
        url: "https://www.lowepro.com/us-en/",
        description:
            "Magento eCommerce theme implementation for international brand, product and category pages, shopping cart optimization, all UI elements and rich content.",
        tech: "Magento, PHP, JavaScript, HTML, CSS, APIs.",
        image: projLowepro,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Brand Ambassadors",
        url: "https://www.lowepro.com/us-en/loweprofessionals/",
        description:
            "Landing pages built from PSD mockups to functional templates consisting of components.",
        tech: "HTML, SCSS, JavaScript, Typo3 Flux and Fluid templating",
        image: projAmbassadors,
        year: "2018",
        extra_text: "More brands: ",
        extra_links: [
            {
                name: "Lowepro",
                url: "https://www.lowepro.com/us-en/loweprofessionals/viktoria-haack/",
            },
            {
                name: "JOBY",
                url: "https://joby.com/us-en/ambassadors/andy-burgess/",
            },
            {
                name: "Manfrotto",
                url: "https://www.manfrotto.com/us-en/experience/ambassadors/",
            },
            {
                name: "Gitzo",
                url: "https://www.gitzo.com/us-en/ambassadors/",
            },
        ],
        company: "Daymen",
    },
    {
        name: "Lowepro Quickfinder",
        url: "https://quickfinder.netlify.app/",
        description:
            "App for quick navigation to a product series page on eCommerce site.",
        tech: "JavaScript, HTML, CSS, SVG, Typo3 Flux.",
        image: projQuickfinder,
        year: "2017",
        company: "Daymen",
    },

    {
        name: "Math Skills Tutorial",
        url: "https://github.com/jay-peretz/math_project",
        description:
            "An online tutorial for learning pre-algebra and arithmetic, implemented directives for new problem sets, code maintenance.",
        tech: "Angular JS, JavaScript, HTML, CSS",
        image: projMathSkills,
        year: "2013",
        company: "SRJC",
    },
    // {
    //     name: "Shopping Assistant",
    //     url: "https://www.manfrotto.com/us-en/shopping-assistant/",
    //     description:
    //         "Landing page for sorting articles based on user selection.",
    //     tech: "JavaScript, HTML, SCSS, Bootstrap, Typo3 Flux and Fluid templating",
    //     image: projShoppingAssistant,
    //     year: "2018",
    // },
    // {
    //     name: "Responsive Mega Menu",
    //     url: "https://irinakramer.github.io/mega-menu/",
    //     description:
    //         "Lightweight CSS menu for JOBY.com with CSS gradients, transitions, SVG icons, focus on performance and scalability.",
    //     tech: "CSS, HTML, SVG animation",
    //     image: projJobyMenu,
    //     year: "2017",
    //     extra_text: "Versions: ",
    //     extra_links: [
    //         {
    //             name: "Desktop",
    //             url: "https://irinakramer.github.io/mega-menu/",
    //         },
    //         {
    //             name: "Mobile",
    //             url: "https://irinakramer.github.io/mega-menu/mobile.html",
    //         },
    //     ],
    // },
    // {
    //     name: "Responsive Grid with Flexbox",
    //     url: "https://codepen.io/irinakramer/pen/jcLlp",
    //     description:
    //         "Lightweight, framework-independent, fully responsive grid in Flexbox.",
    //     tech: "CSS, Flexbox, HTML",
    //     image: projGrid,
    //     year: "2014",
    // },
    // {
    //     name: "Lowepro Blog",
    //     url: "http://blog.lowepro.com",
    //     description:
    //         "Wordpress theme customizations according to brands style guidelines, new blog post template, old blogs migration to new.",
    //     tech: "Wordpress, HTML, PHP, CSS",
    //     image: projLoweproBlog,
    //     year: "2016",
    //     extra_text: "More: ",
    //     extra_links: [
    //         {
    //             name: "JOBY blog",
    //             url: "http://blog.joby.com",
    //         },
    //     ],
    // },
];

export default projects;
