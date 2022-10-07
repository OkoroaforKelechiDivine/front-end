import React from "react";
import "../styles/Home.css"
// import logo from "../Assets/logo.jpg"

function Home (){
    return(
        <div className={"body"}>
            <nav className={"navbar"} role={"navigation"}>
                <div className={"brand-logo"}>
                    <a href={"Home"}> <p>Kelechi Divine</p></a>
                </div>
                <div id={"toggle-menu"} className={"toggle-menu"} alt={"toggle-navbar"}></div>
                <ul className={"nav-links"}>
                    <li className={"nav-link active"}><a href={""}>Home</a></li>
                    <li className={"nav-link"}><a href={"./pages/about.html"}>About</a></li>
                    <li className={"nav-link"}>
                        <a href={"#"}>Brokerage <i className={"fas fa-chevron-down"}></i></a>
                        <ul className={"dropdown"}>
                            <li className={"active"}>
                                <span><img src={"./Assets/real-estate 1.svg"} alt={""}/> Residential <i className={"fas fa-chevron-down"}></i></span>
                                <ul className={"mini-dropdown"}>
                                    <li><a href={"#"}>Buying and Selling</a></li>
                                    <li><a href={"#"}>Rentals</a></li>
                                    <li><a href={"#"}>New Projects (Developers)</a></li>
                                    <li><a href={"#"}>Cooperate Homes</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><img src={"./Assets/003-mortgage-1 1.svg"} alt={""}/>Commercial <i className={"fas fa-chevron-down"}></i></span>
                                <ul className={"mini-dropdown"}>
                                    <li><a href={"#"}>Retail</a></li>
                                    <li><a href={"#"}>Industrial Property</a></li>
                                    <li><a href={"#"}>Official Space</a></li>
                                    <li><a href={"#"}>Medical Properties</a></li>
                                    <li><a href={"#"}>Banking Properties</a></li>
                                    <li><a href={"#"}>Agricultural Property</a></li>
                                    <li><a href={"#"}>Lands Property</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={"nav-link"}>
                        <a href={"#"}>Management<i className={"fas fa-chevron-down"}></i></a>
                        <ul className={"dropdown"}>
                            <li><a href={"#"}>Property Management</a></li>
                            <li><a href={"#"}>Sales & Marketing Management</a></li>
                        </ul>
                    </li>
                    <li className={"nav-link"}><a href={""}>Investment <i className={"fas fa-chevron-down"}></i></a></li>
                    <li className={"nav-link"}><a href={""}>Development <i className={"fas fa-chevron-down"}></i></a></li>
                    <li className={"nav-link"}><a href={""}>Project Blog</a></li>
                    <li className={"nav-link"}><a href={"./pages/contact.html"}>Contact</a></li>
                </ul>
            </nav>

            <main className={"hero-section"} role={"main"}>
                <div className={"hero-content"}>
                    <h1>
                        Discover Amazing
                        Properties in Nigeria
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent tacitinubia nostra, per inceptos himenaeos.
                    </p>
                    <a href={"#"}>Explore Properties <i className={"fas fa-arrow-right"}></i></a>
                </div>
                <div className={"carousel-control"}>
                    <button type={"button"} id={"carousel-button-prev"} className={"carousel-button"}><i className={"fas fa-arrow-left"}></i></button>
                    <button type={"button"} id={"carousel-button-next"} className={"carousel-button"}><i className={"fas fa-arrow-right"}></i></button>
                </div>
                <a href={"#mission"}><img src={"./Assets/scroll icon.png"} alt={"scroll_button"} id={"scroll_button"}/></a>
            </main>

            <section className={"mission"} id={"mission"}>
                <div className={"title"}>
                    <h1>Our Mission</h1>
                    <img src={"./Assets/v-arrow.svg"} alt={"vector arrow svg"}/>
                </div>
                <div className={"mission-text"}>
                    <p>
                        <strong>DGR</strong> real estate aims to be the leading property company in Nigeria providing real solutions
                        in the real estate sector. our business affiliations and partnership with numerous business entity was an
                        idea to put together all what it needs to serve our esteemed clients with the best services that well
                        address their issues and meet their needs and promote the integrity of the company.
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
            </section>

            <section className={"services starred"}>
                <div className={"header"}>
                    <h1>Our Services</h1>
                </div>
                <div className={"service service-01"}>
                    <div className={"illustration"}>
                        <img src={"./Assets/service_1.png"} alt={"Real Estate Brokerage"}/>
                    </div>
                    <div className={"service-details"}>
                        <div className={"number"}>1</div>
                        <h1>Real Estate Brokerage</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                            tellus.
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
                            risus.
                            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent tacitinubia nostra, per inceptos
                            himenaeos.
                        </p>
                        <a href={"#"}>Learn More <i className={"fas fa-chevron-right"}></i></a>
                    </div>
                </div>
            </section>

            <section className={"services s_02"}>
                <div className={"service service-02"}>
                    <div className={"illustration"}>
                        <img src={"./Assets/service_2.png"} alt={"Real Estate Management"}/>
                    </div>
                    <div className={"service-details"}>
                        <div className={"number"}>2</div>
                        <h1>Real Estate Management</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                            tellus.
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
                            risus.
                            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent tacitinubia nostra, per inceptos
                            himenaeos.
                        </p>
                        <a href={"#"}>Learn More <i className={"fas fa-chevron-right"}></i></a>
                    </div>
                </div>
            </section>


            <section className={"services s_03"}>
                <div className={"service service-03"}>
                    <div className={"illustration"}>
                        <img src={"./Assets/service_3.png"} alt={"Real Estate Investment"}/>
                    </div>
                    <div className={"service-details"}>
                        <div className={"number"}>3</div>
                        <h1>Real Estate Investment</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                            tellus.
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
                            risus.
                            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent tacitinubia nostra, per inceptos
                            himenaeos.
                        </p>
                        <a href={"#"}>Learn More <i className={"fas fa-chevron-right"}></i></a>
                    </div>
                </div>
            </section>

            <section className={"services s_04"}>
                <div className={"service service-04"}>
                    <div className={"illustration"}>
                        <img src={"./Assets/service_4.png"} alt={"Real Estate Development"}/>
                    </div>
                    <div className={"service-details"}>
                        <div className={"number"}>4</div>
                        <h1>Real Estate Development</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                            tellus.
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
                            risus.
                            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent tacitinubia nostra, per inceptos
                            himenaeos.
                        </p>
                        <a href={"#"}>Learn More <i className={"fas fa-chevron-right"}></i></a>
                    </div>
                </div>
            </section>

            <div className={"featured-projects"}>
                <div className={"header"}>
                    <h1>Featured Projects</h1>
                </div>
                <div className={"featured-project"}>
                    <div className={"illustration"}>
                        <img src={"./Assets/feat-proj.png"} alt={""}/>
                    </div>
                    <div className={"about-featured-project"}>
                        <h1>The Citadel Palace</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem.
                        </p>
                        <div className={"details"}>
                            <div className={"detail"}>
                                <p><strong>Size</strong></p>
                                <small>2,000 m<sup>2</sup></small>
                            </div>

                            <div className={"detail"}>
                                <p><strong>Type</strong></p>
                                <small>Cooperate Homes</small>
                            </div>

                            <div className={"detail"}>
                                <p><strong>Status</strong></p>
                                <small>In Progress <div className={"yellow"}></div></small>
                            </div>

                            <div className={"detail"}>
                                <p><strong>Location</strong></p>
                                <small>Lagos</small>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                </div>
            </div>

            <div className={"luxury"}>
                <h1>You've got luxury with DGR</h1>
            </div>

            <div className={"subscribe-section"}>
                <div className={"subscribe"}>
                    <h1>Subscribe to our Newsletter</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                        tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
                        risus. Maecena.
                    </p>
                    <form>
                        <input type={"text"} placeholder={"Enter your email address"} required/>
                        <button type={"submit"}>Subscribe</button>
                    </form>
                </div>
            </div>

            <footer className={"main-footer"}>
                <div className={"main-footer"}>
                    <div className={"brand-logo"}>
                        <img src={"./Assets/logo.svg"} alt={"brand-logo"}/>
                    </div>
                    <div className={"footer-links"}>
                        <div className={"quick-links"}>
                            <p>Quick Links</p>
                            <ul>
                                <li className={"link"}><a href={"./pages/about.html"}>About DGR</a></li>
                                <li className={"link"}><a href={"#"}>Project Blog</a></li>
                                <li className={"link"}><a href={"./pages/contact.html"}>Contact Us</a></li>
                                <li className={"link"}><a href={"#"}>Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className={"services"}>
                            <p>Services</p>
                            <ul>
                                <li className={"link"}><a href={"#"}>Brokerage</a></li>
                                <li className={"link"}><a href={"#"}>Management</a></li>
                                <li className={"link"}><a href={"#"}>Investment</a></li>
                                <li className={"link"}><a href={"#"}>Development</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={"contact"}>
                        <p>Contact</p>
                        <a href={"tel: +234 (0) 99 333 4444"}><img src={"./Assets/path.svg"} alt={"phone"}/>+234 (0) 99 333 4444</a>
                        <a href={"mailto: dgr@gmail.com"}><img src={"./Assets/mail.svg"} alt={"mail"}/>dgr@gmail.com</a>
                        <a><img src={"./Assets/location.svg"} alt={"location"}/>21, Brobbey Lane, Ikoyi, Lagos.</a>
                        <hr/>
                        <div className={"social-links"}>
                            <a href={""}><img src={"./Assets/facebook.svg"} alt={"facebook"}/></a>
                            <a href={""}><img src={"./Assets/twitter.svg"} alt={"twitter"}/></a>
                            <a href={""}><img src={"./Assets/ig.svg"} alt={"Instagram"}/></a>
                            <a href={""}><img src={"./Assets/linkedin.svg"} alt={"linkedin"}/></a>
                        </div>
                    </div>
                    <hr/>
                    <p className={"copyright"}>2022 DGR Real Estate - All Rights Reserved</p>
                </div>
                </footer>
            <script src="js/main.js"></script>
        </div>
    )
}
export default Home