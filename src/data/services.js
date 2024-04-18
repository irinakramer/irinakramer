import frontend from "../icons/services/web_development.png";
import ecommerce from "../icons/services/ecommerce.png";
import cms from "../icons/services/web_page.png";
import webpage from "../icons/services/web_diagram.png";
import app from "../icons/services/app_development.png";
import support from "../icons/services/web_link.png";

const services = [
    {
        name: "Custom websites",
        description:
            "Tailored sites built from scratch with the latest web tech.",
        icon: frontend,
    },
    {
        name: "E-Commerce",
        description:
            "Powerful online stores in Magento, WooCommerce, etc.",
        icon: ecommerce,
    },
    {
        name: "Landing pages",
        description:
            "Custom one-pagers for product promotion and email collection.",
        icon: webpage,
    },
    {
        name: "Wordpress",
        description:
            "Off-the-shelf and custom themes, tailored to your needs.",
        icon: cms,
    },
    {
        name: "App development",
        description: "Web apps in React for workflow enhancement.",
        icon: app,
    },
    {
        name: "Support",
        description:
            "Ongoing technical support, collaboration, and consulting.",
        icon: support,
    },
];

export default services;
