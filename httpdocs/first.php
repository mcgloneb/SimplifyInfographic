<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" id="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=0">
        <title>Test Infographic</title>
        <link rel="stylesheet" href="dist/css/style.css">

    </head>

    <body>

        <div class="container">
            <div class="row">
                <div class="col-12" style="height: 100vh;" id="el1">
                    <h1>Section 1</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12" style="height: 100vh;" id="el2">
                    <h1>Section 2</h1>
                </div>
            </div>
            


            <!-- pie chart start -->
            <div class="row scene scene__1" id="s1">
                <div class="col-12 scene__header">
                    Leanness that cuts costs
                </div>
                <div class="col-12 col-md-5 scene__body" id="s1_graphic">

                    <?php include('./images/svg/pie.php'); ?>
                </div>
                <div class="col-12 col-md-7 scene__body">
                    <div id="s1_content" class="content">
                        <div class="title">Cut costs by</div>
                        <div class="counter"><span id="s1_number">0</span>%</div>
                        Accenture research found RPA helped some companies reduce costs by 80%, performing tasks at just 10% of the cost of the same work performed by people.
                    </div>
                </div>
            </div>
            <!-- pie chart end -->
        </div>

        <div class="container-fluid">
            <div class="row divider">
                <span>BUT: Business doesn't innovate by RPA alone...</span>
            </div>
        </div>

        <div class="container">
            <!-- laptop -->
            <div class="row scene" id="s4">
                <div class="col-12 scene__header scene__rpa">
                    RPA
                </div>
                <div class="col-12 col-md-7 scene__body" id="s4_graphic">

                    <?php include('./images/svg/rpa2.php'); ?>
                </div>
                <div class="col-12 col-md-5 scene__body">
                    <div id="s4_content">
                        RPA alone won’t make smarter business decisions. It can only automate what’s there already, and has little value processes vary from day to day. So if you don’t want a large mess made more quickly, you need to standardise your processes first. Or add a dose of Adaptive Intelligence.
                    </div>
                </div>
            </div>
            <!-- laptop end -->


            <div class="row">
                <div class="col-12" style="height: 100vh;" id="el3">
                    <h1>Section 3</h1>
                </div>
            </div>
        </div>


        <script src="dist/js/App.bundle.js"></script>

    </body>
</html>