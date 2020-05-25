import React from 'react';
import Layout from '../components/layout';
import '../styles/Index.css';
import profile from '../images/irina.jpg';
import img_qf from '../images/quickfinder_2019.png';
import Project from '../components/project';

console.log(profile);


export default () => (
    <Layout>
        <section className="intro">
            <img src={profile} alt="Irina Kramer" />
            <p>Hi there. I'm Irina Kramer, a frontend web developer. My current tech stack is React, JavaScript, APIs, HTML, CSS.  I've been in the web industry for over 15 years, worked at Fortune 100, medium and start-up companies. I specialize in bulding large enterprise and eCommerce websites and apps with focus on optimal user experience and performance. I live in Petaluma, California and like spending my free time enjoying local life, travel and photography.</p>
        </section>
        <section>
            <a name="projects"></a>
            <h2>Projects &amp; Portfolio</h2>

            <Project>
                <h3><a href="https://lit-ridge-16056.herokuapp.com/" target="_blank">My Daily Log</a></h3>
                <p>App for logging daily outdoor and exercise activities.<br />
                    <small>JavaScript, Firebase, APIs, CRUD functionalities, Bootstrap.</small></p>
            </Project>
            <Project>
                <h3><a href="https://feedr-80451.herokuapp.com/">News Feedr</a></h3>
                <p>
                    Personalized news agregator app from various news sources. <br />
                    <small>JavaScript, news APIs, search.</small>
                </p>
            </Project>
            <Project>
                <h3><a href="https://www.lowepro.com/us-en/#quickfinder" target="_blank">Lowepro Quickfinder</a></h3>
                <p>App for quick navigation to a product series page on eCommerce site.<br />
                    <small>JavaScript, HTML, CSS, SVG, Typo3 Flux.</small></p>
            </Project>
            <Project>
                <h3><a href="http://joby.com/us-en/" target="_blank">JOBY.com eCommerce store</a></h3>
                <p>Responsive templates for product, category, shopping cart pages, tech specs feed, and marketing landing pages.<br />
                    <small>Magento theming, HTML, CSS, PHP, Typo3 templating.</small></p>
            </Project>
            <Project>
                <h3><a href="https://irinakramer.github.io/mega-menu/">Responsive Mega Menu</a></h3>
                <p>Lightweight CSS menu for JOBY.com with CSS gradients, transitions, SVG icons, focus on performance and scalability. <a href="https://irinakramer.github.io/mega-menu/">Desktop</a> and <a href="https://irinakramer.github.io/mega-menu/mobile.html">Mobile</a> versions.<br />
                    <small></small></p>
            </Project>
            <Project>
                <h3><a href="https://www.lowepro.com/us-en/" target="_blank">Lowepro eCommerce store</a></h3>
                <p>Magento eCommerce theme implementation for international brand, product and category pages, shopping cart optimization, all UI elements and rich content.<br />
                    <small>Magento, PHP, JavaScript, HTML, CSS, APIs.</small></p>
            </Project>
            <Project>
                <h3><a href="http://blog.lowepro.com" target="_blank">Lowepro Blog</a> and <a href="http://blog.joby.com" target="_blank">JOBY Blog</a></h3>
                <p>Wordpress theme customizations according to brands style guidelines, new post template, old blogs migration to new.<br />
                    <small></small></p>
            </Project>
            <Project>
                <h3><a href="https://codepen.io/irinakramer/pen/jcLlp" target="_blank">Responsive Grid with Flexbox</a></h3>
                <p>Lightweight, framework-independent, fully responsive grid in Flexbox.<br />
                    <small></small></p>
            </Project>
            <Project>
                <h3><a href="https://www.lowepro.com/us-en/loweprofessionals/" target="_blank">Brand Ambassadors</a></h3>
                <p>Landing pages built from PSD mockups to functional templates consisting of components. Brands: <a href="https://www.lowepro.com/us-en/loweprofessionals/viktoria-haack/" target="_blank">Lowepro</a>, <a href="https://joby.com/us-en/ambassadors/andy-burgess/" target="_blank">JOBY</a>, <a href="https://www.manfrotto.com/us-en/experience/ambassadors/" target="_blank">Manfrotto</a>, <a href="https://www.gitzo.com/us-en/ambassadors/" target="_blank">Gitzo</a>.<br />
                    <small>HTML, SCSS, JavaScript, Typo3 Flux and Fluid templating</small></p>
            </Project>
            <Project>
                <h3><a href="https://www.manfrotto.com/it-it/experience/picture-of-life/" target="_blank">Picture of Life </a></h3>
                <p>Components based landing page.<br />
                    <small>HTML, JavaScript, SCSS, Typo3 templating</small></p>
            </Project>
            <Project>
                <h3><a href="https://www.lowepro.com/us-en/about-us/" target="_blank">Capture Life</a></h3>
                <p>Components based landing page <br />
                    <small>HTML, JavaScript, SCSS, SVG animations, Bootstrap, Typo3</small></p>
            </Project>
            <Project>
                <h3><a href="https://www.manfrotto.com/us-en/shopping-assistant/" target="_blank">Shopping Assistant</a></h3>
                <p>Landing page for sorting articles based on user selection.<br />
                    <small>JavaScript, HTML, SCSS, Bootstrap, Typo3 Flux and Fluid templating</small></p>
            </Project>
            <Project>
                <h3><a href="https://github.com/jay-peretz/math_project" target="_blank">Math Skills Tutorial</a></h3>
                <p>An online tutorial for learning pre-algebra and arithmetic, implemented directives for new problem sets, code maintenance.<br />
                    <small>Angular JS, JavaScript, HTML, CSS </small></p>
            </Project>
        </section>
        <section>
            <a name="contact"></a>
            <h2>Contact</h2>
            <p>You can send me an <a href="mailto:irakramer@gmail.com">email</a> or contact me via <a href="https://github.com/irinakramer">LinkedIn</a>. Thanks for visiting!</p>
            <br /><br />
        </section>
    </Layout>
) 
