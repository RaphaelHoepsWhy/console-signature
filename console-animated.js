// 362 x 204
let g = () => {
  const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 204" width="450px" height="204px">
      <style>
.text {
  font-family: monospace;
  font-size: 12px;
  white-space: pre;
  fill: #00ee00;
}
.link {
  text-decoration: underline;
  fill: #00ee00;
}
.shiftA,
.shiftB,
.shiftC {
  transform-origin: center center;
  animation-timing-function: cubic-bezier(0.58, 0, 0.44, 0.99);
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.shiftA {
  animation-name: translateA;
  animation-duration: 1000ms;
  animation-delay: -333ms;
}

.shiftB {
  animation-name: translateB;
  animation-duration: 1000ms;
  animation-delay: -666ms;
}

.shiftC {
  animation-name: translateC;
  animation-duration: 1000ms;
  animation-delay: -0ms;
}

@keyframes translateA {
  0% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(4px);
  }
}
@keyframes translateB {
  0% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(3px);
  }
}
@keyframes translateC {
  0% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(2px);
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
      <text x="0" y="200" class="text xxxxxx">           Visit us at <a class="link" target="_blank" href="https://why.de">https://why.de</a>  </text>
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
