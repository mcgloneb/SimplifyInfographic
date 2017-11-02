<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" id="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=0">
        <title>Test Infographic</title>
        <link rel="stylesheet" href="dist/css/style.css">
    </head>

    <body>

        <div class="container" id="intro_trigger">
            
            <div class="row header">
                <div class="col-12 p-0">
                    <a href="http://transform.dev-moi.co.uk/">&nbsp;</a>
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
                        Four steps to improved application performance with machine learning
                    </div>
                </div>
            </div>
        </div>
        <!-- intro line end -->    
           
        <div class="container" id="intro_trigger">
            <!-- intro scene start -->
            <div class="row scene scene__intro scene--no-margin">
                <div class="col-12 scene__body scene__body--secondary">
                    It takes more than just human intelligence to keep your hybrid cloud applications running at peak performance. Discover four steps to smarter application monitoring – for simpler employee workloads, increased productivity and improved customer satisfaction.</div>
            </div>
            <!-- intro scene end -->

            <!-- scene one start -->
            <div class="row scene" id="s1">
                <div class="col-12 scene__header">
                    Consider how visible your applications are today
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
                        <p>of production applications have bugs or errors<sup>1</sup></p>
                        </div>
                        <div class="col-md-2 col-sm-12 text-center chart-text">
                            <p>yet</p>
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
                        <p>of businesses admit that it's their <strong>customers</strong> who are 'frequently' or 'occasionally' first to spot them<sup>1</sup></p>
                </div>
            </div>

            <div class="row scene scene__one scene--no-margin">

                <div class="col-12">
                    <div class="row">
                        <div class="col-md-7 offset-md-1 col-sm-12 scene--bordered">
                            <div class="row scene">
                                <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                                    <p><strong>Why?</strong> Existing monitoring solutions are slow and create too much data</p>
                                </div>
                                <div class="col-md-10 offset-md-2 col-sm-10 offset-sm-1">
                                    <p><strong>The result:</strong> <span>Only 6%</span> of companies completely trust their monitoring strategy<sup>1</sup></p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-md-3 col-sm-12 text-center scene__graphic scene--bordered flex-container">
                            <img src="./images/temp_dial.png" />
                        </div>
                    </div>
                </div>

            </div>

            <!-- scene one end -->

            <!-- scene two start -->
            <div class="row scene scene__two" id="s2">
                
                <div class="col-12 scene__header">
                   Consolidate your disparate monitoring systems
                </div>
                
                <div class="col-12 scene__body">
                    <div class="row">
                        <div class="col-md-5 cols-xs-12 scene__graphic flex-container" id="s2_trigger">
                            <?php include('./images/svg/graph.php'); ?>     
                        </div>
                        <div class="col-md-5  cols-xs-12  offset-md-2">
                            <p>On average, organisations have:<br /><span>6-10</span><br />IT operations systems of record, typically working in functional silos<sup>2</sup>.</p>
                            <p>This is clearly too many, so:</p>
                            <p><span>55%</span><br />of IT organisations already recognise a need for new monitoring solutions that take a more holistic view<sup>3</sup></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- scene two end -->

            <!-- scene three start -->
            <div class="row scene scene__three" id="s3">
                
                <div class="col-12 scene__header">
                   Continue your migration towards hybrid cloud
                </div>

                <div class="col-12 scene__body" id="s3_trigger">

                    <p class="text-center">Oracle CEO Mark Hurd predicts that, by 2025:</p>


                    <div class="row text-center scene__graphic"> 
                        <div class="col-md-4 col-sm-12"><?php include('./images/svg/big_data.php'); ?><p><span>80%</span><br />of production applications will run in the cloud</p></div>
                        <div class="col-md-4 col-sm-12"><img src="./images/temp_scene3_icon2.png" /><p><span>80%</span><br />of IT budgets will be spent on business innovation, and only</p></div>
                        <div class="col-md-4 col-sm-12" id="laptopspanner"><?php include('./images/svg/laptop_with_spanner.php'); ?><p><span>20%</span><br />will go towards system maintenance</p></div>    
                    </div>
        

                    <div class="col-12 scene__body scene__enterprise" style="background-image:url(./images/temp_scene3_clouds.png);">
                        <div class="row">
                            <div class="col-10 col-offset-2">
                                <p class="line-height-150">And <span>enterprise clouds</span><br />will be the <span>most secure</span> place for IT processing.</p>
                            </div>
                        </div>
                    </div>

                </div> 

                <div class="col-12 scene__body scene scene--no-margin no-padding">
                    <div class="row">
                        <div class="col-12">
                            <p>This will help your business simplify its operations and improve the performance of its applications.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- scene three end -->


            <!-- scene four start -->
            <div class="row scene scene__four" id="s4">
                
                <div class="col-12 scene__header">
                    Adopt smarter application monitoring in the cloud
                </div>
                
                <div class="col-12 scene__body">
                    <div class="row">
                        <div class="col-md-5 offset-md-1 cols-xs-12 scene__graphic flex-container" id="s4_trigger">
                            <img src="./images/temp_scene4_magnifyingglass.png" />
                        </div>
                        <div class="col-md-5 offset-md-1 col-sm-12 ">
                            <p><span>75%</span><br />of heavy users of multiple cloud solutions have already implemented service-level monitoring and reporting across their full mix of public, private and hybrid cloud resources<sup>3</sup>.</p>
                            <p>Oracle Management Cloud (OMC) intelligently identifies performance issues across all your cloud resources using four types of machine learning algorithm:</p>
                        </div>
                    </div>

                    <div class="row scene__callout">
                        <div class="col-md-7 offset-md-1 col-sm-12">
                            <ul>
                                <li>Correlating data sets that are too large for humans to evaluate</li>
                                <li>Clustering data sets to automatically identify problems</li>
                                <li>Detecting and troubleshooting anomalies</li>
                                <li>Predicting future behaviour to enable intelligent decisions</li>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-12 flex-container scene__graphic">
                            <?php include('./images/svg/tree.php'); ?>
                        </div>
                    </div>

                    <div class="row scene__body">
                        <div class="col-md-2 offset-md-1 col-sm-2 scene__graphic flex-container"><img src="./images/temp_scene4_arrow.png" class="arrow_icon" /></div>
                        <div class="col-md-8 col-sm-9"><p class="no-margin">Machine learning is essential for effective application performance monitoring.</p></div>
                    </div>

                </div>
            </div>
            <!-- scene four end -->


            <!-- summary start -->
            <div class="row scene scene__summary">
                
                <div class="col-12 scene__body scene__body--tertiary">

                    <div class="row">
                        
                        <div class="col-12 col-md-6 scene__graphic" id="summary_trigger">
                            <div class="flex-container">
                                <?php include('./images/svg/summaryIcon2.php'); ?>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 scene__copy">
                            <div class="flex-container">
                                <p>Machine learning can simplify your hybrid cloud infrastructure, giving you the freedom to achieve more.</p>                                
                                <p>It can reach into your huge volumes of complex data and pull out the simple truths on application performance – enabling you to improve employee productivity and optimise the customer experience.</p>
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
                            Read our eBook, 'A New Shared Vision', to discover the potential to innovate through RPA and AI in shared services at your organisation. 
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta__button">
                <div class="container">
                    <div class="row button__body">
                        <div class="col-12 col-lg-7">
                            <a href="https://www.oracle.com/webfolder/s/delivery_production/docs/FY16h1/doc31/567701-fsn-wp.pdf" target="_blank" class="button">
                                Download eBook
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
                    <strong>Additional sources</strong>
                    <ol>
                        <li>Business 2 Community</li>
                        <li>Bersin by Deloitte, The Cost of Voluntary Turnover, September 2016</li>
                        <li>The Power of Thanks by Eric Mosley, March 2015</li>
                        <li>The McKinsey Global Institute</li>
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

    </body>
</html>