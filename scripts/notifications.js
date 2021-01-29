var socket = io();

const mainDiv = d3.select("div");
mainDiv
  .style("font", "10px sans-serif")
  .style("text-align", "right")
  .style("color", "white");

mainDiv
  .selectAll("div")
  .append("div")
  .data([10, 20, 40, 30, 50])
  .join("div")
  .style("background", "steelblue")
  .style("padding", "3px")
  .style("margin", "1px")
  .style("height", "10px")
  .style("width", (d) => `${d * 10}px`)
  .text((d) => d);
