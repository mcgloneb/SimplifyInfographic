<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$lang = 'en';
if (!empty($_GET['lang'])) {

    switch($_GET['lang']) {
        case 'de' :
        case 'fr' :
            $lang = $_GET['lang'];
    }
}
include 'languages/'.$lang.'.php';

?><!DOCTYPE html>
<html lang="<?= $lang; ?>">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" id="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=0">
        <title><?= $meta['title']; ?></title>
        <link rel="stylesheet" href="dist/css/style.css">
    </head>

    <body class="<?= $lang; ?>">

        <div class="container" id="intro_trigger">
            
            <div class="row header">
                <div class="col-12 p-0">
                    <a href="#" onclick="window.location=window.location.href;">&nbsp;</a>
                </div>
            </div>

            <div class="row scene scene__intrographic">
                <div class="col-12 p-0" id="intro_graphic_container">
                    <img src="./images/header.png" />
                </div>
            </div>
        </div>

        <!-- intro line start -->
        <div class="outer-container">
            <div class="container">
                <div class="row scene scene--no-margin">
                    <div class="col-4 scene__introline">
                        <?= $additional['introLine']; ?>
                    </div>
                </div>
            </div>
        </div>
        <!-- intro line end -->    
           
        <div class="container" id="intro_trigger">
            <!-- intro scene start -->
            <div class="row scene scene__intro scene--no-margin">
                <div class="col-12 scene__body scene__body--secondary">
                    <?= $introScene[0]; ?>
                </div>
            </div>
            <!-- intro scene end -->

            <!-- scene one start -->
            <div class="row scene" id="s1">
                <div class="col-12 scene__header">
                    1. <?= $sceneOne[0]; ?>
                </div>   
            </div> 

            <div class="row scene scene__one scene--no-margin scene--padding">
                <div class="col-md-4 offset-md-1 col-sm-12 text-center" id="s1_trigger">
                    <figure class="static-chart">
                        <svg width="200" height="200">:
                          <circle class="outer" cx="95" cy="95" r="85"/>
                        </svg>
                    </figure>
                    <!-- 31% Demo Chart -->
                      <figure class="chart" data-percent="32">
                        <figcaption id="percentage32">0%</figcaption>
                        <svg id="chart32" width="200" height="200">:
                        <defs>
                            <linearGradient id="MyGradient">
                              <stop offset="0%" stop-color="#f58f28" />
                              <stop offset="100%" stop-color="#f70604" />
                            </linearGradient>
                          </defs>
                          <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                      </figure>
                    <p><?= $sceneOne[1]; ?></p>
                </div>
                <div class="col-md-2 col-sm-12 text-center chart-text">
                    <p><?= $sceneOne[2]; ?></p>
                </div>
                <div class="col-md-4 col-sm-12 text-center">
                    <figure class="static-chart">
                        <svg width="200" height="200">:
                            <circle class="outer" cx="95" cy="95" r="85" />
                        </svg>
                    </figure>
                      <!-- 71% Demo Chart -->
                      <figure class="chart" data-percent="71">
                        <figcaption id="percentage71">0%</figcaption>
                        <svg id="chart71" width="200" height="200">:
                        <defs>
                            <linearGradient id="MyGradient">
                              <stop offset="0%" stop-color="#f58f28" />
                              <stop offset="100%" stop-color="#f70604" />
                            </linearGradient>
                          </defs>
                          <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                      </figure>
                    <p><?= $sceneOne[3]; ?></p>
                </div>
            </div>

            <div class="row scene scene__one scene--no-margin">

                <div class="col-12">
                    <div class="row" id="s1b_trigger">
                        <div class="col-lg-7 offset-lg-1 col-sm-12 scene--bordered">
                            <div class="row padded-tb">
                                <hr />
                                <div class="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1">
                                    <p><?= $sceneOne[4]; ?></p>
                                </div>
                                <div class="col-lg-10 offset-lg-2 col-sm-10 offset-sm-1">
                                    <p><?= $sceneOne[5]; ?></p>
                                </div>
                            </div>                         
                        </div>
                        <div class="col-lg-3 col-sm-12 text-center scene__graphic scene--bordered flex-container">
                            <?php include('./images/svg/dial.php'); ?>     
                        </div>
                    </div>
                </div>
            </div>
            <!-- scene one end -->

            <!-- scene two start -->
            <div class="row scene scene__two" id="s2">
                
                <div class="col-12 scene__header">
                   2. <?= $sceneTwo[0]; ?>
                </div>
                
                <div class="col-12 scene__body">
                    <div class="row">
                        <div class="col-lg-6 cols-xs-12 scene__graphic flex-container" id="s2_trigger">
                            <?php include('./images/svg/graph2.php'); ?>     
                        </div>
                        <div class="col-lg-5  cols-xs-12  offset-lg-1">
                            <p><?= $sceneTwo[1]; ?></p>
                            <p><?= $sceneTwo[2]; ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- scene two end -->

            <!-- scene three start -->
            <div class="row scene scene__three" id="s3">
                
                <div class="col-12 scene__header">
                   3. <?= $sceneThree[0]; ?>
                </div>

                <div class="col-12 scene__body" id="s3_trigger">

                    <p class="text-center"><?= $sceneThree[1]; ?></p>


                    <div class="row text-center scene__graphic"> 
                        <div class="col-lg-4 col-sm-12">
                            <div class="s3__match">
                                <?php include('./images/svg/big_data.php'); ?>
                            </div>
                            <p><?= $sceneThree[2]; ?></p>
                            </div>
                        <div class="col-lg-4 col-sm-12 microscope">
                            <div class="s3__match">
                                <?php include('./images/svg/microscope2.php'); ?>
                            </div>
                            <p><?= $sceneThree[3]; ?></p>
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <div class="s3__match">
                                <?php include('./images/svg/laptop_with_spanner.php'); ?>
                            </div>
                            <p><?= $sceneThree[4]; ?></p>
                        </div>    
                    </div>
        

                    <div class="col-12 col-lg-11 offset-lg-1 scene__enterprise" style="background-image:url(./images/temp_scene3_clouds.png);">
                        <div class="row flex-container">
                            <div class="<?= $customClasses['cloudContainer']; ?>">
                                <p class="line-height-150"><?= $sceneThree[5]; ?></p>
                            </div>
                        </div>
                    </div>

                </div> 

                <div class="col-12 scene__body scene scene--no-margin no-padding">
                    <div class="row">
                        <div class="col-12">
                            <p style="font-weight: bold;"><?= $sceneThree[6]; ?></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- scene three end -->


            <!-- scene four start -->
            <div class="row scene scene__four" id="s4">
                
                <div class="col-12 scene__header">
                    4. <?= $sceneFour[0]; ?>
                </div>
                
                <div class="col-12 scene__body">
                    <div class="row">
                        <div class="col-lg-5 cols-xs-12 scene__graphic text-center" id="s4_trigger_1">
                            <div class="flex-container ie-fix">
                                <?php include('./images/svg/magnifyChart.php'); ?>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-0 col-sm-12">
                            <p><?= $sceneFour[1]; ?></p>
                            <p class="no-margin-b padded-b"><?= $sceneFour[2]; ?></p>
                        </div>
                    </div>

                    <div class="row scene__callout">
                        <div class="col-lg-7 col-12">
                            <?php if (!empty($sceneFour[3])) : ?>
                            <ul>
                                <?php foreach($sceneFour[3] as $line) : ?>
                                    <li><?= $line; ?></li>
                                <?php endforeach; ?>
                            </ul>
                            <?php endif; ?>
                        </div>
                        <div class="col-lg-5 col-sm-12 flex-container scene__graphic" id="s4_trigger">
                            <div class="flex-container">
                                <?php include('./images/svg/tree.php'); ?>
                            </div>
                        </div>
                    </div>

                    <div class="row additional-info">
                        <div class="col-lg-1 col-sm-2 scene__graphic flex-container"><img src="./images/temp_scene4_arrow.png" class="arrow_icon" /></div>
                        <div class="col-lg-7 col-sm-9 flex-container"><span><?= $sceneFour[4]; ?></span></div>
                    </div>

                </div>
            </div>
            <!-- scene four end -->


            <!-- summary start -->
            <div class="row scene scene__summary">
                
                <div class="col-12 scene__body scene__body--tertiary">

                    <div class="row">
                        
                        <div class="col-12 col-lg-6 scene__graphic" id="summary_trigger">
                            <div class="flex-container">
                                <?php include('./images/svg/summaryIcon2.php'); ?>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 scene__copy">
                            <div class="flex-container">
                                <?= $additional['summary']; ?>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <!-- summary end -->


        </div>


        <!-- call to action -->
        <div class="cta">

            <div class="cta__summary">
                <div class="container">
                    <div class="row summary__body">
                        <div class="col-12 col-lg-7">
                            <?= $additional['cta'][0]; ?> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta__button">
                <div class="container">
                    <div class="row button__body">
                        <div class="col-12 col-lg-7">
                            <a href="<?= $additional['cta'][1]; ?>" target="_blank" class="button">
                                <?= $additional['cta'][2]; ?>
                                <span><?php include('./images/svg/ctaArrow.php'); ?></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <?php include('./images/svg/cta.php'); ?>

        </div>
        <!-- call to action end -->

        <!-- closing comments start -->   

        <div class="container" id="intro_trigger">
            <div class="row scene scene--large-margin scene__footer no-gutters">
                <div class="col-12">
                    <strong><?= $additional['resources']; ?></strong>
                    <ol>
                        <li>Put the 'Ops' in 'DevOps': Improve Speed and Agility through Better Service Delivery, by Forrester, August 2016</li>
                        <li>Deploy a Multivendor Strategy for Availability and Performance Monitoring, by Gartner, January 2014</li>
                        <li>Integrated Cloud-Based Monitoring and Analytics Break Down IT Operations Silos, by IDC, June 2016</li>
                    </ol>
                </div>
            </div>
            <div class="row scene scene--small-margin scene__footer">
                <div class="col-sm-8">
                    Copyright &copy; 2017, Oracle and/or its affiliates. All rights reserved. Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.
                </div>
                <div class="col-sm-4 footer__logo">
                    <div class="logo__image"></div>
                </div>
            </div>



        </div> <!-- /container -->

        <script src="dist/js/App.bundle.js"></script>

        <!-- Start SiteCatalyst code -->
        <script language="JavaScript" src="https://www.oracleimg.com/us/assets/metrics/ora_ocom.js"></script>
        <!-- End SiteCatalyst code -->


    </body>
</html>