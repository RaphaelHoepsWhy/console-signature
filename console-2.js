// 362 x 204
let g = () => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 204" width="450px" height="204px">
      <style>
        .text { font-family: monospace; font-size: 12px; white-space: pre; fill: #00ee00; }
          .shiftA {
                transform-origin: center center;
                animation-name: translateA;
                animation-duration: 1000ms;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                animation-delay: -100ms;
            }

          .shiftB {
                transform-origin: center center;
                animation-name: translateB;
                animation-duration: 1100ms;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                animation-delay: -200ms;

            }


          .shiftC {
                transform-origin: center center;
                animation-name: translateB;
                animation-duration: 900ms;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                animation-delay: -500ms;
            }

        @keyframes translateA {
            0%, 40%, 100% {
                transform: translateX(0);
            }
            20% {
                transform: translateX(5px)
            }
            60% {
                transform: translateX(-5px)
            }
        }
         @keyframes translateB {
            0%, 60%, 100% {
                transform: translateX(0);
            }
            30% {
                transform: translateX(3px)
            }
            80% {
                transform: translateX(-3px)
            }
        }
         @keyframes translateC {
            0%, 50%, 100% {
                transform: translateX(0);
            }
            20% {
                transform: translateX(2px)
            }
            70% {
                transform: translateX(-2px)
            }
        }
      </style>
      <text x="0" y="020" class="text shiftC">             ██████                    ███                 </text>
      <text x="0" y="035" class="text shiftB">            ███░░███                  ░███                 </text>
      <text x="0" y="050" class="text shiftA">           ░░██████    ███  ███  ███  ░███████    ███  ███ </text>
      <text x="0" y="065" class="text shiftB">            ██████    ░███ ░███ ░███  ░███░░███  ░███ ░███ </text>
      <text x="0" y="080" class="text shiftC">          ░███░░███   ░███ ░███ ░███  ░███ ░███  ░███ ░███ </text>
      <text x="0" y="095" class="text shiftB">          ░███ ░░███  ░░███████████   ░███ ░███  ░███ ░███ </text>
      <text x="0" y="110" class="text shiftA">          ░░█████░███  ░░████░████    ░███ ░███  ░░███████</text>
      <text x="0" y="125" class="text shiftB">           ░░░░░ ░░░    ░░░░ ░░░░     ░░░  ░░░░   ░░░░░███</text>
      <text x="0" y="140" class="text shiftC">                                                  ███ ░███</text>
      <text x="0" y="155" class="text shiftB">                                                 ░░██████ </text>
      <text x="0" y="170" class="text xxxxxx">           Design and development by &amp;why         ░░░░░░   </text>
      <text x="0" y="185" class="text xxxxxx">           Make the future happen today              </text>
    </svg>
    `;

  // const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;
  const svgDataUrl = `data:image/svg+xml;base64,${btoa(
    unescape(encodeURIComponent(svg))
  )}`;

  //   const svgDataUrl = `data:image/svg+xml;base64,${btoa(
  //     encodeURIComponent(svg)
  //   )}`;

  console.log(
    "%c ",
    `
        background-image: url(${svgDataUrl});
        padding-bottom: 204px;
        padding-left: 450px;
        margin: 0px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      `
  );
};

g();
