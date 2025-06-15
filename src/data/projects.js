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
import fibercirclestudio from "../images/projects/fiber_circle_studio.jpg";
import veraalden from "../images/projects/vera-alden.jpg";
import glenkramer from "../images/projects/glen_kramer.jpg";
import jennifermygatttatum from "../images/projects/jennifer-mygatt-tatum.jpg";

const projects = [
    {
        name: "Jennifer Mygatt Tatum Art eCommerce",
        url: "https://www.jennifermygatttatum.com",
        description:
            "Designed and developed a custom Squarespace eCommerce website tailored to the artist’s style. Built features to showcase artwork, events, and galleries. Integrated payment processing, contact forms, Mailchimp signup, Instagram feed, and connected the site to Google Search Console and Merchant Center.",
        tech: "Squarespace, CSS, image processing",
        image: jennifermygatttatum,
        year: "2025",
        company: "IKON web studio",
    },
    {
        name: "Fiber Circle Studio",
        url: "https://fibercirclestudio.com/",
        description:
            "Enhanced the store’s functionality with a structured product taxonomy, filters, and color swatches. Improved discoverability with Google indexing, added back-in-stock notifications, and a required terms acceptance checkbox. Providing ongoing support for smooth operation and scalability.",
        tech: "Shopify, Liquid, JavaScript, HTML, CSS, Image processing",
        image: fibercirclestudio,
        year: "2025",
        company: "IKON web studio",
    },
    {
        name: "Diana Majumdar Art eCommerce",
        url: "http://dianamajumdarart.com",
        description:
            "Designed and developed a fully responsive eCommerce site with a custom layout, sliders, and a masonry grid. Built custom templates for product, category, shopping cart, and marketing pages. Integrated payment methods, contact forms, Mailchimp signup, Instagram feed, and Google tools for search visibility and shopping ads. Added custom features, including red dot indicators for sold products and an artwork inquiry form on product pages.",
        tech: "Wordpress Elementor, Woocommerce, JavaScript, PHP, HTML, CSS",
        image: dianamajumdarart,
        year: "2024",
        company: "IKON web studio",
    },
    {
        name: "Artist eCommerce Template website",
        url: "https://ikonwebstudio.wixstudio.com/vera-alden",
        description:
            "Designed a custom template website for a contemporary artist, highlighting new works, categories, exhibitions, and key content to promote their art. Integrated interactive features to display artwork within frames and in room settings.",
        tech: "Wix Studio",
        image: veraalden,
        year: "2025",
        company: "IKON web studio",
    },
    {
        name: "Glen Kramer fine art",
        url: "https://glenkramer.netlify.app",
        description:
            "Designed and coded a website for a plein air artist to display and keep an archive of their art. Integrated a feature to show framed version of each artwork.",
        tech: "Astro, HTML, CSS, Javascript",
        image: glenkramer,
        year: "2024",
        company: "IKON web studio",
    },

    {
        name: "JOBY.com eCommerce",
        url: "http://joby.com/us-en/",
        description:
            "Developed responsive templates for product, category, shopping cart, and marketing landing pages, along with a tech specs feed. Built a custom CMS to empower users with easy content management and updates.",
        tech: "Magento, HTML, CSS, PHP, Typo3, Video",
        image: projJoby,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Lowepro eCommerce",
        url: "https://www.lowepro.com/us-en/",
        description:
            "Implemented a custom Magento theme for an international brand, developing product and category pages with optimized shopping cart functionality. Designed and refined all UI elements and rich content for a seamless user experience.",
        tech: "Magento, PHP, JavaScript, HTML, CSS, UGC APIs",
        image: projLowepro,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Bank Statement Analyzer",
        url: "../projects/bsa",
        description:
            "Built front end architecture for a full stack app to analyze bank transactions and calculate ratios for loan eligibility.",
        tech: "React, Chakra UI, Rest/GraphQL APIs, Flask",
        image: bsa,
        year: "2021 - 2023",
        company: "SmartBiz",
    },
    {
        name: "Loweprofessionals",
        url: "https://www.lowepro.com/us-en/loweprofessionals/",
        description:
            "Converted PSD mockups into fully functional, component-based templates, ensuring a seamless and responsive user experience.",
        tech: "HTML, SCSS, JavaScript, Typo3 Flux and Fluid templating",
        image: projAmbassadors,
        year: "2019",
        company: "Vitec",
    },
    {
        name: "Bouquet",
        url: "https://bouquet-topaz.vercel.app/",
        description:
            "Developed a full CRUD application designed to help users identify aromas and scents commonly found in various wine families. Provides an interactive and intuitive guide for wine enthusiasts to explore and learn about different fragrance profiles.",
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
    // {
    //     name: "Lowepro Quickfinder",
    //     url: "https://quickfinder.netlify.app/",
    //     description:
    //         "App for quick navigation to a product series page on eCommerce site.",
    //     tech: "JavaScript, HTML, CSS, SVG, Typo3 Flux.",
    //     image: projQuickfinder,
    //     year: "2017",
    //     company: "Daymen",
    // },

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
    // {
    //     name: "Responsive Mega Menu",
    //     url: "https://irinakramer.github.io/mega-menu/",
    //     description:
    //         "Lightweight CSS menu for JOBY.com with CSS gradients, transitions, SVG icons, focus on performance and scalability.",
    //     tech: "CSS, HTML, SVG animation",
    //     image: projMegaMenu,
    //     year: "2017",
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
    {
        name: "Lowepro Blog",
        url: "http://blog.lowepro.com",
        description:
            "Customized a WordPress theme to align with the brand's style guidelines, including the creation of a new blog post template. Migrated existing blog content to the updated design for a consistent and seamless user experience.",
        tech: "Wordpress, HTML, PHP, CSS",
        image: projLoweproBlog,
        year: "2016",
    },
    {
        name: "JOBY blog",
        url: "http://blog.joby.com",
        description:
            "Customized a WordPress theme to align with the brand's style guidelines, including the creation of a new blog post template. Migrated existing blog content to the updated design for a consistent and seamless user experience.",
        tech: "Wordpress, HTML, PHP, CSS",
        image: projJobyBlog,
        year: "2016",
    },
];

export default projects;
