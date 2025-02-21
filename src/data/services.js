import ecommerce from "../icons/services/ecommerce.png";
import webpage from "../icons/services/web_diagram.png";
import support from "../icons/services/web_link.png";

const services = [
    {
        name: "Design & Build Website for Your Business",
        description:
            "Create a user-friendly, impactful website tailored to your goals. Help with brainstorming, research, and growth strategies. Build a structured sitemap, repurpose existing content, and design a wireframe with key elements like contact forms, image galleries, blogs, and social media integrations. Deliver a fully responsive homepage and all non-eCommerce pages (About, Contact, etc.).",
        icon: webpage,
    },
    {
        name: "Set Up & Optimize Your Online Store",
        description:
            "Add eCommerce functionality to your site, including product categorization, layout design, and initial product uploads. Configure payment methods, shipping options, taxes, and automated customer emails. Work primarily with Shopify and WooCommerce, with experience in Wix, Magento, and Squarespace.",
        icon: ecommerce,
    },
    {
        name: "Enhance Your Existing Store",
        description:
            "Improve product organization with better categorization, filtering, color swatches, and multiple product page layouts. Research and integrate apps and plugins to enhance functionality and streamline operations. Apply SEO best practices and set up Google Search Console and Google Merchant to boost visibility and enable product listings in Google Shopping.",
        icon: support,
    },
];

export default services;
