<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 192 192" style="enable-background:new 0 0 192 192;" xml:space="preserve">
    <defs>
         <clippath id="clipForDots">
            <rect x="19" y="18" width="66" height="47"/>
        </clippath>
         <clippath id="clipForQuotes">
             <rect x="82.9" y="86.8" width="84.5" height="46.8"/>
        </clippath>
    </defs>
    <g id="cloudBack">
        <circle id="cloudDotLo" style="fill:#CAD9DE;" cx="19.5" cy="127.5" r="10.5"/>
        <circle id="couldDotHi" style="fill:#CAD9DE;" cx="39" cy="105" r="12"/>
        <ellipse id="cloud" style="fill:#CAD9DE;" cx="52.5" cy="42" rx="52.5" ry="42"/>
    </g>
    <path id="cloudFront" style="fill:#F29111;" d="M180,66H72c-6.6,0-12,5.4-12,12v66c0,6.6,5.4,12,12,12h48.1l36,36v-30
    c0-3.3,2.7-6,6-6H180c6.6,0,12-5.4,12-12V78C192,71.4,186.6,66,180,66z"/>
    <g  clip-path="url(#clipForDots)">
        <g id="dotContainer">
            <circle id="dot0" style="fill:#FFFFFF;" cx="-67.5" cy="42" r="7.5"/>
            <circle id="dot1" style="fill:#FFFFFF;" cx="-43.5" cy="42" r="7.5"/>
            <circle id="dot2" style="fill:#FFFFFF;" cx="-19.5" cy="42" r="7.5"/>
            <circle id="dot3" style="fill:#FFFFFF;" cx="4.5" cy="42" r="7.5"/>
            <circle id="dot4" style="fill:#FFFFFF;" cx="28.5" cy="42" r="7.5"/>
            <circle id="dot5" style="fill:#FFFFFF;" cx="52.5" cy="42" r="7.5"/>
            <circle id="dot6" style="fill:#FFFFFF;" cx="76.5" cy="42" r="7.5"/>
        </g>
    </g>
    <g clip-path="url(#clipForQuotes)">
        
        <g id="quoteContainer">
                        
            <?php
                $start = 142.7;
                $start = 82.7;
                $distance = 30;
                for ($i=1; $i<=6; $i++) {

                    $c = $start + 0.9;

                    echo '<path style="fill:#FFFFFF;" d="M'.$start.',95v17c0,1.1,0.9,2,2,2h8c1.1,0,2,0.9,2,2v11 c0,1.1,0.9,2,2,2h2.6c0.8,0,1.6-0.5,1.9-1.3l5.5-13.7V95c0-1.1-0.9-2-2-2h-20C'.$c.',93,'.$start.',93.9,'.$start.',95z"/>';

                    $start = $start + $distance;

                }

            ?>       
        </g>
        
    </g>
</svg>
