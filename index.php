<!DOCTYPE html>
<html lang="en-US">

<head>
    <!-- Character Set -->
    <meta charset="utf-8" />
    <!-- Description -->
    <meta name="description"
        content="Occaecat mollit adipisicing laboris in fugiat sed non laborum cupidatat est nostrud anim nisi incididunt enim consectetur laboris aliquip." />
    <!-- Keywords -->
    <meta name="keywords" content="keywords, keywords, keywords" />
    <!-- Robots Status -->
    <meta name="robots" content="index, follow" />
    <!-- Author-->
    <meta name="author" content="Inravel Creative" />
    <!-- Viewport Setting -->
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <!-- Stylesheet -->
    <link rel="stylesheet" type="text/css" href="src/css/main.css" />
    <!-- Favicon -->
    <link rel="icon" href="" />

    <title>Grace Choy</title>
</head>

<body id="home">

    <!-- Loading Page -->
    <div id="loader">
        <div class="loader-content">
            <!-- <img class="loader-logo" src="src/img/svg/logo-dark.svg" alt="CanLife" /> -->
            <!-- <div class="progress" id="progress"></div> -->
        </div>
    </div>

    <div class="site-wrapper">
        <header>
            <!-- Top Header -->

            <div class="top-header">
                <!-- Logo -->
                <div class="logo-link">
                    <a href="./">
                        <span class="initial-part">G</span><span class="logo-part">race Choy</span>
                    </a>
                </div>

                <div class="logo-signature">
                    <img src="src/img/svg/logo-en.svg" alt="">
                </div>

                <!-- Burger Toggle -->
                <div class="burger-menu">
                    <span></span>
                    <span></span>
                </div>

                <!-- Navigation -->
                <nav role="nav" class="nav-wrapper">
                    <div class="nav-container">
                        <div class="nav-menu">
                            <a class="active" href="work.php">Work</a>
                            <span class="nav-sep"></span>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>


        <!-- Main Content -->
        <main class="page-content">

            <!-- Side Info Right -->
            <aside class="side-visual">
                <canvas id="c"></canvas>
            </aside>

            <!-- section-01 - Welcome -->

            <section id="home-welcome">
                <div class="welcome-content">
                    <h1 style="display: none;">Grace Choy</h1>


                    <div class="mission-statement">
                        <div class="text">
                            <p>how <br /> does my <br /> my art make you</p>

                            <p>
                                <span class="word wisteria"> Feel</span>
                                <span class="word belize"> Dream</span>
                                <span class="word pomegranate"> Fear</span>
                                <span class="word green"> Hope</span>
                            </p>
                            </br>
                        </div>

                        <a href="#home-work" class="scroll-bottom">
                            <div class="scroll-label">G</div>
                            <div class="scroll-txt">take a look</div>
                        </a>
                    </div>
                </div>
            </section>


            <!-- section-02 - Work -->

            <section id="home-work">
                <div class="boxed">

                    <div class="slider-container">
                        <!-- <div class="slider-overlay"></div> -->
                        <ul class="slider">
                            <li class="slide current-slide">
                                <div class="slide-content container-l">
                                    <div class="slide-txt col-4">
                                        <div class="slide-txt-content">
                                            <div class="indicator">1/3</div>
                                            <div class="title "><a href="#">darkroom</a></div>
                                            <div class="category">photography</div>
                                            <div class="desc">
                                            my first time developing film in dark room, and so I
                                                experimented with double exposure whilst editing in the darkroom.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide-visual col-8">
                                        <img src="src/img/jpg/project-01.jpg">
                                        <div class="mask"></div>
                                    </div>
                                </div>
                            </li>

                            <li class="slide">
                                <div class="slide-content container-l">
                                    <div class="slide-txt col-4">
                                        <div class="slide-txt-content">
                                            <div class="indicator">2/3</div>
                                            <div class="title">toiletpaper</div>
                                            <div class="category">Magazine front cover</div>
                                            <div class="desc">Our concept for this issue addresses the bizarre case of
                                                the
                                                “Asian fetish” by non-asian individuals</div>
                                        </div>
                                    </div>
                                    <div class="slide-visual col-8">
                                        <img src="src/img/jpg/project-02.jpg">
                                        <div class="mask"></div>
                                    </div>
                                </div>
                            </li>

                            <li class="slide">
                                <div class="slide-content container-l">
                                    <div class="slide-txt col-4">
                                        <div class="slide-txt-content">
                                            <div class="indicator">3/3</div>
                                            <div class="title">Red Socks</div>
                                            <div class="category">concept</div>
                                            <div class="desc">my first time developing film in dark room, and so I
                                                experimented with double exposure whilst editing in the darkroom.</div>
                                        </div>
                                    </div>
                                    <div class="slide-visual col-8">
                                        <img src="src/img/jpg/project-03.jpg">
                                        <div class="mask"></div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                        <div class="slider-nav">
                            <button class="__prev is-off"></button>
                            <button class="__next"></button>
                        </div>  
                        <div class="more-link"><a href="work.php">more work</a></div>                                              
                    </div>
                </div>
            </section>

            <!-- section-03 - SVG TEXT PATH -->

            <section id="home-textpath">

                <!-- TEXT PATH 1 -->
                <svg class="text-container" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
                    <path id="text-curve" d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0" fill="none" />

                    <text y="40">
                        <textPath id="top-path" href="#text-curve" startOffset="200">
                            everything you can imagine is real
                        </textPath>
                    </text>
                </svg>

                <!-- EYE OBJECT-->
                <svg class="middle-eye" viewBox="0 0 1440 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect class="eye-border" y="33" fill="black" />
                </svg>

                <!-- TEXT PATH 2 -->
                <svg class="text-container" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
                    <path id="text-curve" d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0" fill="none" />

                    <text y="40">
                        <textPath id="bottom-path" href="#text-curve" startOffset="200">
                            an endless series of experiments
                        </textPath>
                    </text>
                </svg>


            </section>

            <!-- section-04 - About -->

            <section id="home-about">
                <div class="boxed">
                    <div class="about-intro reveal-y">Did my artwork make you feel, fear, hope, or dream? 
                    <br /><br />
                    My <span class="highlight">spotify</span> playlist would bring you a whole other side of me. I would suggest you start with my playlist titled <span class="highlight">“D&D”</span> and work your way through the groove that inspires you the most.
                    </div>

                    <div class="scratch-module">
                        <!-- <div class="scratch-label ">scratch me please ) =</div> -->
                        <div class="scratch-label "><img src="src/img/svg/scratch-me.svg" alt=""></div>
                        <figure class="canvasContainer">
                            <canvas id="scratcher" width="750" height="465"></canvas>
                            <img class="cursor-object" src="src/img/svg/hand-group.svg" alt="">
                        </figure>
                    </div>
                </div>

            </section>



            <!-- section-05 - Contact -->

            <section id="contact">
                <div class="boxed">
                    <div class="contact-info">
                        <h2 class="reveal-y">get in touch</h2>
                        <div class="info">
                            <a href="mailto:info@gracechoy.com" class="email reveal-x">info@gracechoy.com</a>
                            <a href="tel:12345677886" class="phone reveal-x">44 043 435 125 98</a>
                        </div>
                    </div>

                    <div class="bottom-navigation container reveal-y">
                        <div class="navigation-container col-6">
                            <ul>
                                <li><a href="#" data-label="The Red Socks">The Red Socks</a></li>
                                <li><a href="#" data-label="Toiletpaper">Toiletpaper</a></li>
                                <li><a href="#" data-label="darkroom">darkroom</a></li>
                                <li><a href="#" data-label="Chinese Calligraphy">Chinese Calligraphy</a></li>
                                <li><a href="#" data-label="Dior Collaboration">Dior Collaboration</a></li>
                            </ul>
                        </div>
                        <div class="navigation-container col-6">
                            <ul>
                                <li><a href="#" data-label="Life Drawing">Life Drawing</a></li>
                                <li><a href="#" data-label="Firestarter">Firestarter</a></li>
                                <li><a href="#" data-label="Loverboy">Loverboy</a></li>
                                <li><a href="#" data-label="LVMH Sustainability">LVMH Sustainability</a></li>
                                <li><a href="#" data-label="Ceramicist Collaboration">Ceramicist Collaboration</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>




        <!-- Footer -->

        <footer>
            <div class="copyright">©2020, Grace Choy</div>
            <div class="logo-footer">
                <img src="src/img/svg/logo-footer.svg" alt="Grace Choy">
            </div>
        </footer>
    </div>


    <!-- Scripts -->

    <script src="src/js/vendors/anime.min.js"></script>
    <script src="src/js/vendors/intersection-observer.js"></script>
    <script src="src/js/vendors/progressbar.min.js"></script>
    <script src="src/js/vendors/imagesloaded.pkgd.min.js"></script>
    <script src="src/js/vendors/masonry.pkgd.min.js"></script>
    <!-- <script src="js/TweenMax.min.js"></script> -->
    <script src="src/js/app.js"></script>

</body>

</html>