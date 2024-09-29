import bsa from "../images/projects/bsa.jpg";
import projQuickfinder from "../images/projects/quickfinder.jpg";
import projJoby from "../images/projects/joby.jpg";
import projMegaMenu from "../images/projects/megamenu.jpg";
import projLowepro from "../images/projects/lowepro.jpg";
import projLoweproBlog from "../images/projects/loweproblog.jpg";
import projJobyBlog from "../images/projects/jobyblog.jpg";
import projGrid from "../images/projects/Grid.png";
import projAmbassadors from "../images/projects/loweprofessionals.jpg";
import projShoppingAssistant from "../images/projects/ShoppingAssistant.png";
import projMathSkills from "../images/projects/MathSkills.png";
import projBouquet from "../images/projects/bouquet.jpg";
import ComingSoon from "../images/projects/ComingSoon.svg";
import dianamajumdarart from "../images/projects/dianamajumdarart.jpg";

const projects = [
    {
        name: "Diana Majumdar Art eCommerce",
        url: "http://dianamajumdarart.com",
        description:
            "Responsive templates for product, category, shopping cart pages, tech specs feed, and marketing landing pages.",
        tech: "Wordpress Elementor, Woocommerce, PHP, CSS",
        image: dianamajumdarart,
        year: "2024",
        company: "IKON web studio",
    },
    {
        name: "JOBY.com eCommerce",
        url: "http://joby.com/us-en/",
        description:
            "Responsive templates for product, category, shopping cart pages, tech specs feed, and marketing landing pages.",
        tech: "Magento, HTML, CSS, PHP, Typo3, Video",
        image: projJoby,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Lowepro eCommerce",
        url: "https://www.lowepro.com/us-en/",
        description:
            "Magento eCommerce theme implementation for international brand, product and category pages, shopping cart optimization, all UI elements and rich content.",
        tech: "Magento, PHP, JavaScript, HTML, CSS, UGC APIs",
        image: projLowepro,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Bank Statement Analyzer",
        url: "../projects/bsa",
        description:
            "Full stack app to analyze bank transactions and calculate ratios for loan eligibility",
        tech: "React, Chakra UI, Rest/GraphQL APIs, Flask",
        image: bsa,
        year: "2021 - 2023",
        company: "SmartBiz",
    },
    {
        name: "Loweprofessionals",
        url: "https://www.lowepro.com/us-en/loweprofessionals/",
        description:
            "Landing pages built from PSD mockups to functional templates consisting of components.",
        tech: "HTML, SCSS, JavaScript, Typo3 Flux and Fluid templating",
        image: projAmbassadors,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Bouquet",
        url: "https://bouquet-topaz.vercel.app/",
        description:
            "This app is a guide to help you identify aromas and scents present in most wine families. Full CRUD app.",
        tech: "React, Material UI, GeoCharts API, Back4App",
        image: projBouquet,
        year: "2021 - 2023",
        company: "Personal",
    },
    // {
    //     name: "Brand Ambassadors",
    //     url: "https://www.lowepro.com/us-en/loweprofessionals/",
    //     description:
    //         "Landing pages built from PSD mockups to functional templates consisting of components.",
    //     tech: "HTML, SCSS, JavaScript, Typo3 Flux and Fluid templating",
    //     image: projAmbassadors,
    //     year: "2018",
    //     extra_text: "More brands: ",
    //     extra_links: [
    //         {
    //             name: "Lowepro",
    //             url: "https://www.lowepro.com/us-en/loweprofessionals/viktoria-haack/",
    //         },
    //         {
    //             name: "JOBY",
    //             url: "https://joby.com/us-en/ambassadors/andy-burgess/",
    //         },
    //         {
    //             name: "Manfrotto",
    //             url: "https://www.manfrotto.com/us-en/experience/ambassadors/",
    //         },
    //         {
    //             name: "Gitzo",
    //             url: "https://www.gitzo.com/us-en/ambassadors/",
    //         },
    //     ],
    //     company: "Vitec",
    // },
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

    // {
    //     name: "Math Skills Tutorial",
    //     url: "https://github.com/jay-peretz/math_project",
    //     description:
    //         "An online tutorial for learning pre-algebra and arithmetic, implemented directives for new problem sets, code maintenance.",
    //     tech: "Angular JS, JavaScript, HTML, CSS",
    //     image: projMathSkills,
    //     year: "2013",
    //     company: "SRJC",
    // },
    // {
    //     name: "Shopping Assistant",
    //     url: "https://www.manfrotto.com/us-en/shopping-assistant/",
    //     description:
    //         "Landing page for sorting articles based on user selection.",
    //     tech: "JavaScript, HTML, SCSS, Bootstrap, Typo3 Flux and Fluid templating",
    //     image: projShoppingAssistant,
    //     year: "2018",
    // },
    {
        name: "Responsive Mega Menu",
        url: "https://irinakramer.github.io/mega-menu/",
        description:
            "Lightweight CSS menu for JOBY.com with CSS gradients, transitions, SVG icons, focus on performance and scalability.",
        tech: "CSS, HTML, SVG animation",
        image: projMegaMenu,
        year: "2017",
    },
    // {
    //     name: "Responsive Grid with Flexbox",
    //     url: "https://codepen.io/irinakramer/pen/jcLlp",
    //     description:
    //         "Lightweight, framework-independent, fully responsive grid in Flexbox.",
    //     tech: "CSS, Flexbox, HTML",
    //     image: projGrid,
    //     year: "2014",
    // },
    {
        name: "Lowepro Blog",
        url: "http://blog.lowepro.com",
        description:
            "Wordpress theme customizations according to brands style guidelines, new blog post template, old blogs migration to new.",
        tech: "Wordpress, HTML, PHP, CSS",
        image: projLoweproBlog,
        year: "2016",
    },
    {
        name: "JOBY blog",
        url: "http://blog.joby.com",
        description:
            "Wordpress theme customizations according to brands style guidelines, new blog post template, old blogs migration to new.",
        tech: "Wordpress, HTML, PHP, CSS",
        image: projJobyBlog,
        year: "2016",
    },
];

export default projects;
