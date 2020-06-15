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

    <title>Toiletpaper | Grace Choy</title>
</head>

<body id="single">

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

            <!-- section-01 - Single Work Intro -->

            <section id="single-intro">
                <div class="boxed">
                    <h2>Toiletpaper</h2>
                    <div class="intro-txt">
                        Libero ultrices porttitor morbi porttitor risus, suscipit. Tempor
                        montes, scelerisque arcu vitae
                        sed
                        dictum pharetra,
                        nulla risus. Mauris eget purus urna sit span diam.
                    </div>
            </section>


            <!-- section-02 - Image Black -->

            <section id="single-content">
                <div class="boxed">
                    <div class="gallery-wrapper">
                        <figure class="cover reveal-y">
                            <div class="cover-mask"></div>
                            <img src="src/img/jpg/single-01.jpg">
                        </figure>

                        <figure class="gallery-item g-full reveal-y">
                            <img src="src/img/jpg/single-02.png">
                        </figure>

                        <figure class="gallery-item g-left reveal-y">
                            <img src="src/img/jpg/project-05.png">
                        </figure>

                        <figure class="gallery-item g-right reveal-y">
                            <img src="src/img/jpg/project-04.jpg">
                        </figure>

                        <figure class="gallery-item g-center reveal-y">
                            <img src="src/img/jpg/single-03.png">
                        </figure>
                    </div>

                    <a class="next-post-nav">
                        <div class="next-link" data-label="next project">next project</div>
                        <div class="stroke"></div>
                        <div class="next-label" data-label="darkroom">darkroom</div>
                    </a>
                </div>
            </section>


            <!-- section-03 - Contact -->

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