<!doctype html>
<html dir="ltr" lang="en-US">

<head>
    <title><?php echo basename(__DIR__); ?></title>
    <link type="image/x-icon" rel="shortcut icon" href="assets/images/favicon.png" />
    <!-- Required meta tags -->
    <meta charset="UTF-8" />
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700" />
    <link type="text/css" rel="stylesheet" href="assets/css/all.min.css" />
    <link type="text/css" rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="assets/css/jquery.fancybox.min.css" />
    <link type="text/css" rel="stylesheet" href="assets/css/owl.carousel.min.css" />
    <link type="text/css" rel="stylesheet" href="assets/font/" />

    <link type="text/css" rel="stylesheet" href="assets/css/styles.css" />
    <link type="text/css" rel="stylesheet" href="assets/css/responsive.css" />

</head>

<body>

    <?php
    function chk_active($p)
    {
        $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        if (strpos($actual_link, $p) !== false) {
            return true;
        } else {
            return false;
        }
    }
    ?>

    <!--Header-->
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="index.php"><img src="assets/images/logo.png" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon">
                        <div class="plate plate4" onclick="this.classList.toggle('active')">
                            <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                                <path class="line line1" d="M 50,35 H 30" />
                                <path class="line line2" d="M 50,35 H 70" />
                                <path class="line line3" d="M 50,50 H 30" />
                                <path class="line line4" d="M 50,50 H 70" />
                                <path class="line line5" d="M 50,65 H 30" />
                                <path class="line line6" d="M 50,65 H 70" />
                            </svg>
                            <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                                <path class="line" d="M 34,32 L 66,68" />
                                <path class="line" d="M 66,32 L 34,68" />
                            </svg>
                        </div>
                    </span></button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link <?php if (chk_active('index')) {
                                                    echo " active ";
                                                } ?>" href="index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="aboutus.php">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="privateJetcharter.php">Vip charter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="groupcharter.php">Group charter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="cargocharter.php">Cargo charter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="topjets.php">Top jets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="contact.php">Contact</a>
                        </li>

                    </ul>

                    <div class="btns">
                        <a href="#" class="borderred">SignIn</a>
                        <a href="#" class="btnblack">SignUp</a>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Modal -->
    </header>