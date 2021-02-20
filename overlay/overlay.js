var socket = io();

const svg = d3.select("svg");

var defs = svg.append("defs");

var gradientVertical = defs
  .append("linearGradient")
  .attr("id", "gradientVertical")
  .attr("x1", 0)
  .attr("x2", 0)
  .attr("y1", 0)
  .attr("y2", 1);

var gradientVerticalReverse = defs
  .append("linearGradient")
  .attr("id", "gradientVerticalReverse")
  .attr("x1", 0)
  .attr("x2", 0)
  .attr("y1", 1)
  .attr("y2", 0);

var gradientHorizontal = defs
  .append("linearGradient")
  .attr("id", "gradientHorizontal")
  .attr("x1", 0)
  .attr("x2", 1)
  .attr("y1", 0)
  .attr("y2", 0);

var gradientHorizontalReverse = defs
  .append("linearGradient")
  .attr("id", "gradientHorizontalReverse")
  .attr("x1", 1)
  .attr("x2", 0)
  .attr("y1", 0)
  .attr("y2", 0);

var gradientRadialUL = defs
  .append("radialGradient")
  .attr("id", "gradientRadialUL")
  .attr("cx", 0)
  .attr("cy", 0);

var gradientRadialUR = defs
  .append("radialGradient")
  .attr("id", "gradientRadialUR")
  .attr("cx", 1)
  .attr("cy", 0);

var gradientRadialLL = defs
  .append("radialGradient")
  .attr("id", "gradientRadialLL")
  .attr("cx", 0)
  .attr("cy", 1);

var gradientRadialLR = defs
  .append("radialGradient")
  .attr("id", "gradientRadialLR")
  .attr("cx", 1)
  .attr("cy", 1);

var offsets = [0, 0.3, 0.7, 1];
var shade = [36, 96, 96, 36];
var opacity = [1, 1, 1, 0];

for (let i = 0; i < offsets.length; i++) {
  gradientVertical
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);

  gradientVerticalReverse
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);

  gradientHorizontal
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);

  gradientHorizontalReverse
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);

  gradientRadialUL
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);

  gradientRadialUR
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);

  gradientRadialLL
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);

  gradientRadialLR
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);
}

var gradientRadialDoubleUL = defs
  .append("radialGradient")
  .attr("id", "gradientRadialDoubleUL")
  .attr("cx", 0)
  .attr("cy", 0);

var offsets = [0, 0.09, 0.21, 0.3, 0.7, 0.79, 0.91, 1, 1];
var shade = [36, 96, 96, 36, 36, 96, 96, 36, 36];
var opacity = [1, 1, 1, 0, 0, 1, 1, 1, 0];

for (let i = 0; i < offsets.length; i++) {
  gradientRadialDoubleUL
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
    .attr("stop-opacity", opacity[i]);
}

var gradientGlowHorizontal = defs
  .append("linearGradient")
  .attr("id", "gradientGlowHorizontal")
  .attr("x1", 0)
  .attr("x2", 1)
  .attr("y1", 0)
  .attr("y2", 0);

var gradientGlowVertical = defs
  .append("linearGradient")
  .attr("id", "gradientGlowVertical")
  .attr("x1", 0)
  .attr("x2", 0)
  .attr("y1", 0)
  .attr("y2", 1);

var gradientGlowTranslucent = defs
  .append("linearGradient")
  .attr("id", "gradientGlowTranslucent")
  .attr("x1", 0.99)
  .attr("x2", 1)
  .attr("y1", 0.99)
  .attr("y2", 1);

var offsets = [0, 1];
var opacity = [0.1, 1];
var opacityValues = ["0.1;1;1;0.1;0.1", "1;1;0.1;0.1;1"];

for (let i = 0; i < offsets.length; i++) {
  gradientGlowHorizontal
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(153, 255, 255)`)
    .attr("stop-opacity", opacity[i])
    .append("animate")
    .attr("attributeName", "stop-opacity")
    .attr("dur", "20s")
    .attr("repeatCount", "indefinite")
    .attr("values", opacityValues[i]);

  gradientGlowVertical
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(153, 255, 255)`)
    .attr("stop-opacity", opacity[i])
    .append("animate")
    .attr("attributeName", "stop-opacity")
    .attr("dur", "20s")
    .attr("repeatCount", "indefinite")
    .attr("values", opacityValues[i]);

  gradientGlowTranslucent
    .append("stop")
    .attr("offset", offsets[i])
    .attr("stop-color", `rgb(153, 255, 255)`)
    .attr("stop-opacity", opacity[i])
    .append("animate")
    .attr("attributeName", "stop-opacity")
    .attr("dur", "20s")
    .attr("repeatCount", "indefinite")
    .attr("values", opacityValues[i]);
}

background = svg.append("g").attr("id", "background");

background
  .selectAll("rect")
  .data([
    //{ x: 0, y: 0, width: 320, height: 240, shade: 48 },
    { x: 0, y: 270, width: 160, height: 810, shade: 48 },
    { x: 350, y: 0, width: 1570, height: 90, shade: 48 },
    { x: 320, y: 0, width: 30, height: 240, shade: 32 },
    { x: 0, y: 240, width: 320, height: 30, shade: 32 },
    { x: 160, y: 270, width: 30, height: 810, shade: 32 },
    { x: 350, y: 90, width: 1570, height: 30, shade: 32 },
  ])
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => `rgb(${d.shade},${d.shade},${d.shade})`);

background
  .selectAll("path")
  .data([{ d: "M 320 240 l 30 0 a 30 30 0 0 1 -30 30 z", shade: 32 }])
  .enter()
  .append("path")
  .attr("d", (d) => d.d)
  .attr("fill", (d) => `rgb(${d.shade},${d.shade},${d.shade})`);

glow = svg.append("g").attr("id", "glow");

glow
  .selectAll("rect")
  .data([
    {
      x: 320,
      y: 0,
      width: 30,
      height: 240,
      gradient: "gradientGlowTranslucent",
    },
    {
      x: 0,
      y: 240,
      width: 320,
      height: 30,
      gradient: "gradientGlowTranslucent",
    },
    {
      x: 160,
      y: 270,
      width: 30,
      height: 810,
      gradient: "gradientGlowVertical",
    },
    {
      x: 350,
      y: 90,
      width: 1570,
      height: 30,
      gradient: "gradientGlowHorizontal",
    },
  ])
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => `url(#${d.gradient})`);

glow
  .selectAll("path")
  .data([
    {
      d: "M 320 240 l 30 0 a 30 30 0 0 1 -30 30 z",
      gradient: "gradientGlowTranslucent",
    },
  ])
  .enter()
  .append("path")
  .attr("d", (d) => d.d)
  .attr("fill", (d) => `url(#${d.gradient})`);

border = svg.append("g").attr("id", "border");

border
  .selectAll("rect")
  .data([
    { x: 320, y: 0, width: 9, height: 240, gradient: "gradientHorizontal" },
    {
      x: 341,
      y: 0,
      width: 9,
      height: 90,
      gradient: "gradientHorizontalReverse",
    },
    {
      x: 332,
      y: 90,
      width: 18,
      height: 18,
      gradient: "gradientRadialUR",
    },
    {
      x: 332,
      y: 102,
      width: 18,
      height: 18,
      gradient: "gradientRadialLR",
    },
    {
      x: 341,
      y: 120,
      width: 9,
      height: 120,
      gradient: "gradientHorizontalReverse",
    },
    { x: 0, y: 240, width: 320, height: 9, gradient: "gradientVertical" },
    {
      x: 0,
      y: 261,
      width: 160,
      height: 9,
      gradient: "gradientVerticalReverse",
    },
    {
      x: 160,
      y: 252,
      width: 18,
      height: 18,
      gradient: "gradientRadialLL",
    },
    {
      x: 172,
      y: 252,
      width: 18,
      height: 18,
      gradient: "gradientRadialLR",
    },
    {
      x: 190,
      y: 261,
      width: 130,
      height: 9,
      gradient: "gradientVerticalReverse",
    },
    { x: 160, y: 270, width: 9, height: 810, gradient: "gradientHorizontal" },
    {
      x: 181,
      y: 270,
      width: 9,
      height: 810,
      gradient: "gradientHorizontalReverse",
    },
    { x: 350, y: 90, width: 1570, height: 9, gradient: "gradientVertical" },
    {
      x: 350,
      y: 111,
      width: 1570,
      height: 9,
      gradient: "gradientVerticalReverse",
    },
  ])
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => `url(#${d.gradient})`);

border
  .selectAll("path")
  .data([
    {
      d: "M 320 240 l 60 0 a 60 60 0 0 1 -60 60 z",
      gradient: "gradientRadialDoubleUL",
    },
  ])
  .enter()
  .append("path")
  .attr("d", (d) => d.d)
  .attr("rx", (d) => 9)
  .attr("ry", (d) => 9)
  .attr("fill", (d) => `url(#${d.gradient})`);
