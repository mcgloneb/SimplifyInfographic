<svg version="1.1" id="White" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 192 192" style="enable-background:new 0 0 192 192;" xml:space="preserve">
    <defs>
         <clippath id="clipForQuotes">
             <rect x="20.8" y="119.2" width="48.5" height="31.9"/>
        </clippath>
    </defs>


<g id="paperAndPen">
    <path id="main" style="fill:#FFFFFF;" d="M186,27.3l-2.7-1.6l1.2-2.7l2.9-6.4c0.4-1,0.1-2.2-0.9-2.8l-1.7-1c-1-0.5-2.2-0.3-2.9,0.6
        l-4.1,5.7l-2.4,3.3c-0.1,0.1-0.1,0.2-0.2,0.3c-1.6,0.2-3.1,1.1-4,2.5c-4.1,5.8-11.5,16.4-18.3,27.2V12h-6v50.2
        c-2.1,3.6-4.1,7.2-6,10.7V0H48L24,24v75h57.7c7.9,0,14.3,6.4,14.3,14.3V150h45v-44.5c-13.3,19.4-24,31.9-26.9,32.5H114
        c-0.1,0-0.3,0-0.4-0.1l0,0c-0.1-0.1-0.2-0.2-0.2-0.3l0,0v-0.1l0,0c-1.2-3.7,9.3-31,27.1-63.8l15.3,8.8c2.3-3.7,4.6-7.6,6.9-11.6
        c7.6-13.3,15.7-30.3,19.7-38.9l0.6,0.4c2.7,1.6,3.8,5,2.4,7.8c-4,8.2-9.6,19.5-15.5,30.2c-1.6,2.9-0.6,6.5,2.2,8.1l0,0
        c7-12.1,14-26.1,18.6-35.7C193.5,37.3,191.4,30.5,186,27.3z"/>
    <path id="extra" style="fill:#FFFFFF;" d="M147,156H96v3.7c0,0.8-0.1,1.5-0.2,2.3H153V87.1c-2,3.2-4,6.4-6,9.4V156z"/>
</g>
<path id="cloudFront" style="fill:#FFFFFF;" d="M81.8,105H8.2c-4.5,0-8.2,3.7-8.2,8.2v45c0,4.5,3.7,8.2,8.2,8.2H41l24.5,24.5v-20.5
    c0-2.2,1.8-4.1,4.1-4.1h12.2c4.5,0,8.2-3.7,8.2-8.2v-45C90,108.7,86.3,105,81.8,105z"/>


<?php

    $startNum = 25.6;
    $inc = 22.5;

?>


<g clip-path="url(#clipForQuotes)">
    <g id="clippedQuotes">

        <?php

            for ($i=1;$i<=3;$i++) {

                $h = $startNum + 1.3;

                ?>

                <path id="quote<?=$i;?>" class="fill" d="M<?=$startNum;?>,124.7v11.6c0,0.7,0.6,1.4,1.4,1.4h5.5
                    c0.8,0,1.4,0.6,1.4,1.4v7.5c0,0.8,0.6,1.4,1.4,1.4h1.8c0.5,0,1.1-0.3,1.3-0.9l3.8-9.3v-13c0-0.7-0.6-1.4-1.4-1.4H<?=$h;?>
                    C<?=$startNum;?>,123.4,<?=$startNum;?>,124,<?=$startNum;?>,124.7z"/>
                                

                <?php

                $startNum += $inc;

            }

        ?>

    </g>
</g>

<rect id="txt3" class="fill" x="48" y="78" width="0" height="6"/>
<rect id="txt2" class="fill" x="48" y="57" width="0" height="6"/>
<rect id="txt1" class="fill" x="48" y="36" width="0" height="6"/>
</svg>
