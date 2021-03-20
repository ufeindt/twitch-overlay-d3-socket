class CamFrame {
  constructor(settings) {
    this.parseSettings(settings);
    this.svg = d3.select("svg");
    this.groups = {};
    this.setDefs();
    console.log(this.backgroundAttr);
    this.addGroup("background", this.backgroundAttr);
    this.addGroup("glow", this.glowAttr);
    this.addGroup("border", this.borderAttr);
  }

  parseSettings(settings) {
    this.fullWidth = 1920;
    this.fullHeight = 1080;
    this.camHeight = 720;
    this.camWidth = (16 / 9) * this.camHeight;
    this.frameWidth = 30;
    this.borderWidth = 9;
  }

  get backgroundAttr() {
    return {
      rect: [
        {
          x: 0,
          y: 0,
          width: (this.fullWidth - this.camWidth) / 2,
          height: this.fullHeight,
          fill: "rgb(48,48,48)",
        },
        {
          x: (this.fullWidth + this.camWidth) / 2,
          y: 0,
          width: (this.fullWidth - this.camWidth) / 2,
          height: this.fullHeight,
          fill: "rgb(48,48,48)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: 0,
          width: this.camWidth,
          height: (this.fullHeight - this.camHeight) / 2,
          fill: "rgb(48,48,48)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight + this.camHeight) / 2,
          width: this.camWidth,
          height: (this.fullHeight - this.camHeight) / 2,
          fill: "rgb(48,48,48)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2 - this.frameWidth,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.frameWidth,
          height: this.camHeight,
          fill: "rgb(32,32,32)",
        },
        {
          x: (this.fullWidth + this.camWidth) / 2,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.frameWidth,
          height: this.camHeight,
          fill: "rgb(32,32,32)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight - this.camHeight) / 2 - this.frameWidth,
          width: this.camWidth,
          height: this.frameWidth,
          fill: "rgb(32,32,32)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight + this.camHeight) / 2,
          width: this.camWidth,
          height: this.frameWidth,
          fill: "rgb(32,32,32)",
        },
      ],
      path: [
        {
          d:
            `M ${(this.fullWidth - this.camWidth) / 2} ` +
            `${(this.fullHeight - this.camHeight) / 2} ` +
            `l ${-this.frameWidth} 0 ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${this.frameWidth} ${-this.frameWidth} ` +
            `z`,
          fill: "rgb(32,32,32)",
        },
        {
          d:
            `M ${(this.fullWidth + this.camWidth) / 2} ` +
            `${(this.fullHeight - this.camHeight) / 2} ` +
            `l 0 ${-this.frameWidth} ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${this.frameWidth} ${this.frameWidth} ` +
            `z`,
          fill: "rgb(32,32,32)",
        },
        {
          d:
            `M ${(this.fullWidth - this.camWidth) / 2} ` +
            `${(this.fullHeight + this.camHeight) / 2} ` +
            `l 0 ${this.frameWidth} ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${-this.frameWidth} ${-this.frameWidth} ` +
            `z`,
          fill: "rgb(32,32,32)",
        },
        {
          d:
            `M ${(this.fullWidth + this.camWidth) / 2} ` +
            `${(this.fullHeight + this.camHeight) / 2} ` +
            `l ${this.frameWidth} 0 ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${-this.frameWidth} ${this.frameWidth} ` +
            `z`,
          fill: "rgb(32,32,32)",
        },
      ],
    };
  }

  get glowAttr() {
    return {
      rect: [
        {
          x: (this.fullWidth - this.camWidth) / 2 - this.frameWidth,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.frameWidth,
          height: this.camHeight,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          x: (this.fullWidth + this.camWidth) / 2,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.frameWidth,
          height: this.camHeight,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight - this.camHeight) / 2 - this.frameWidth,
          width: this.camWidth,
          height: this.frameWidth,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight + this.camHeight) / 2,
          width: this.camWidth,
          height: this.frameWidth,
          fill: "url(#gradientGlowTranslucent)",
        },
      ],
      path: [
        {
          d:
            `M ${(this.fullWidth - this.camWidth) / 2} ` +
            `${(this.fullHeight - this.camHeight) / 2} ` +
            `l ${-this.frameWidth} 0 ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${this.frameWidth} ${-this.frameWidth} ` +
            `z`,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          d:
            `M ${(this.fullWidth + this.camWidth) / 2} ` +
            `${(this.fullHeight - this.camHeight) / 2} ` +
            `l 0 ${-this.frameWidth} ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${this.frameWidth} ${this.frameWidth} ` +
            `z`,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          d:
            `M ${(this.fullWidth - this.camWidth) / 2} ` +
            `${(this.fullHeight + this.camHeight) / 2} ` +
            `l 0 ${this.frameWidth} ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${-this.frameWidth} ${-this.frameWidth} ` +
            `z`,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          d:
            `M ${(this.fullWidth + this.camWidth) / 2} ` +
            `${(this.fullHeight + this.camHeight) / 2} ` +
            `l ${this.frameWidth} 0 ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${-this.frameWidth} ${this.frameWidth} ` +
            `z`,
          fill: "url(#gradientGlowTranslucent)",
        },
      ],
      //   rect: [
      //     {
      //       x: this.camWidth,
      //       y: 0,
      //       width: this.frameWidth,
      //       height: this.camHeight,
      //       fill: "url(#gradientGlowTranslucent)",
      //     },
      //     {
      //       x: 0,
      //       y: this.camHeight,
      //       width: this.camWidth,
      //       height: this.frameWidth,
      //       fill: "url(#gradientGlowTranslucent)",
      //     },
      //     {
      //       x: this.verticalPanelWidth - this.frameWidth,
      //       y: this.camHeight + this.frameWidth,
      //       width: this.frameWidth,
      //       height: this.fullHeight - this.camHeight - this.frameWidth,
      //       fill: "url(#gradientGlowVertical)",
      //     },
      //     {
      //       x: this.camWidth + this.frameWidth,
      //       y: this.horizontalPanelHeight - this.frameWidth,
      //       width: this.fullWidth - this.camWidth - this.frameWidth,
      //       height: this.frameWidth,
      //       fill: "url(#gradientGlowHorizontal)",
      //     },
      //   ],
      //   path: [
      //     {
      //       d:
      //         `M ${this.camWidth} ${this.camHeight} ` +
      //         `l ${this.frameWidth} 0 ` +
      //         `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
      //         `${-this.frameWidth} ${this.frameWidth} ` +
      //         `z`,
      //       fill: "url(#gradientGlowTranslucent)",
      //     },
      //   ],
    };
  }

  get borderAttr() {
    return {
      rect: [
        {
          x: (this.fullWidth - this.camWidth) / 2 - this.frameWidth,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.borderWidth,
          height: this.camHeight,
          fill: "url(#gradientHorizontal)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2 - this.borderWidth,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.borderWidth,
          height: this.camHeight,
          fill: "url(#gradientHorizontalReverse)",
        },
        {
          x: (this.fullWidth + this.camWidth) / 2,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.borderWidth,
          height: this.camHeight,
          fill: "url(#gradientHorizontal)",
        },
        {
          x:
            (this.fullWidth + this.camWidth) / 2 +
            this.frameWidth -
            this.borderWidth,
          y: (this.fullHeight - this.camHeight) / 2,
          width: this.borderWidth,
          height: this.camHeight,
          fill: "url(#gradientHorizontalReverse)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight - this.camHeight) / 2 - this.frameWidth,
          width: this.camWidth,
          height: this.borderWidth,
          fill: "url(#gradientVertical)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight - this.camHeight) / 2 - this.borderWidth,
          width: this.camWidth,
          height: this.borderWidth,
          fill: "url(#gradientVerticalReverse)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y: (this.fullHeight + this.camHeight) / 2,
          width: this.camWidth,
          height: this.borderWidth,
          fill: "url(#gradientVertical)",
        },
        {
          x: (this.fullWidth - this.camWidth) / 2,
          y:
            (this.fullHeight + this.camHeight) / 2 +
            this.frameWidth -
            this.borderWidth,
          width: this.camWidth,
          height: this.borderWidth,
          fill: "url(#gradientVerticalReverse)",
        },
      ],
      path: [
        {
          d:
            `M ${(this.fullWidth - this.camWidth) / 2} ` +
            `${(this.fullHeight - this.camHeight) / 2} ` +
            `l ${-2 * this.frameWidth} 0 ` +
            `a ${2 * this.frameWidth} ${2 * this.frameWidth} 0 0 1 ` +
            `${2 * this.frameWidth} ${-2 * this.frameWidth} ` +
            `z`,
          fill: "url(#gradientRadialDoubleLR)",
        },
        {
          d:
            `M ${(this.fullWidth + this.camWidth) / 2} ` +
            `${(this.fullHeight - this.camHeight) / 2} ` +
            `l 0 ${-2 * this.frameWidth} ` +
            `a ${2 * this.frameWidth} ${2 * this.frameWidth} 0 0 1 ` +
            `${2 * this.frameWidth} ${2 * this.frameWidth} ` +
            `z`,
          fill: "url(#gradientRadialDoubleLL)",
        },
        {
          d:
            `M ${(this.fullWidth - this.camWidth) / 2} ` +
            `${(this.fullHeight + this.camHeight) / 2} ` +
            `l 0 ${2 * this.frameWidth} ` +
            `a ${2 * this.frameWidth} ${2 * this.frameWidth} 0 0 1 ` +
            `${-2 * this.frameWidth} ${-2 * this.frameWidth} ` +
            `z`,
          fill: "url(#gradientRadialDoubleUR)",
        },
        {
          d:
            `M ${(this.fullWidth + this.camWidth) / 2} ` +
            `${(this.fullHeight + this.camHeight) / 2} ` +
            `l ${2 * this.frameWidth} 0 ` +
            `a ${2 * this.frameWidth} ${2 * this.frameWidth} 0 0 1 ` +
            `${-2 * this.frameWidth} ${2 * this.frameWidth} ` +
            `z`,
          fill: "url(#gradientRadialDoubleUL)",
        },
      ],
    };
  }

  addGroup(name, attr) {
    this.groups[name] = this.svg.append("g").attr("id", name);

    Object.keys(attr).forEach((key) => {
      this.groups[name]
        .selectAll(key)
        .data(attr[key])
        .enter()
        .append(key)
        .attrs((d) => d);
    });
  }

  setDefs() {
    this.defs = this.svg.append("defs");

    var gradientVertical = this.defs
      .append("linearGradient")
      .attr("id", "gradientVertical")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", 1);

    var gradientVerticalReverse = this.defs
      .append("linearGradient")
      .attr("id", "gradientVerticalReverse")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 1)
      .attr("y2", 0);

    var gradientHorizontal = this.defs
      .append("linearGradient")
      .attr("id", "gradientHorizontal")
      .attr("x1", 0)
      .attr("x2", 1)
      .attr("y1", 0)
      .attr("y2", 0);

    var gradientHorizontalReverse = this.defs
      .append("linearGradient")
      .attr("id", "gradientHorizontalReverse")
      .attr("x1", 1)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", 0);

    // var gradientRadialUL = this.defs
    //   .append("radialGradient")
    //   .attr("id", "gradientRadialUL")
    //   .attr("cx", 0)
    //   .attr("cy", 0);

    // var gradientRadialUR = this.defs
    //   .append("radialGradient")
    //   .attr("id", "gradientRadialUR")
    //   .attr("cx", 1)
    //   .attr("cy", 0);

    // var gradientRadialLL = this.defs
    //   .append("radialGradient")
    //   .attr("id", "gradientRadialLL")
    //   .attr("cx", 0)
    //   .attr("cy", 1);

    // var gradientRadialLR = this.defs
    //   .append("radialGradient")
    //   .attr("id", "gradientRadialLR")
    //   .attr("cx", 1)
    //   .attr("cy", 1);

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

      //   gradientRadialUL
      //     .append("stop")
      //     .attr("offset", offsets[i])
      //     .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
      //     .attr("stop-opacity", opacity[i]);

      //   gradientRadialUR
      //     .append("stop")
      //     .attr("offset", offsets[i])
      //     .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
      //     .attr("stop-opacity", opacity[i]);

      //   gradientRadialLL
      //     .append("stop")
      //     .attr("offset", offsets[i])
      //     .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
      //     .attr("stop-opacity", opacity[i]);

      //   gradientRadialLR
      //     .append("stop")
      //     .attr("offset", offsets[i])
      //     .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
      //     .attr("stop-opacity", opacity[i]);
    }

    var gradientRadialDoubleLR = this.defs
      .append("radialGradient")
      .attr("id", "gradientRadialDoubleLR")
      .attr("cx", 1)
      .attr("cy", 1);

    var gradientRadialDoubleLL = this.defs
      .append("radialGradient")
      .attr("id", "gradientRadialDoubleLL")
      .attr("cx", 0)
      .attr("cy", 1);

    var gradientRadialDoubleUR = this.defs
      .append("radialGradient")
      .attr("id", "gradientRadialDoubleUR")
      .attr("cx", 1)
      .attr("cy", 0);

    var gradientRadialDoubleUL = this.defs
      .append("radialGradient")
      .attr("id", "gradientRadialDoubleUL")
      .attr("cx", 0)
      .attr("cy", 0);

    var offsets = [0, 0.09, 0.21, 0.3, 0.7, 0.79, 0.91, 1, 1];
    var shade = [36, 96, 96, 36, 36, 96, 96, 36, 36];
    var opacity = [1, 1, 1, 0, 0, 1, 1, 1, 0];

    for (let i = 0; i < offsets.length; i++) {
      gradientRadialDoubleLR
        .append("stop")
        .attr("offset", offsets[i])
        .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
        .attr("stop-opacity", opacity[i]);

      gradientRadialDoubleLL
        .append("stop")
        .attr("offset", offsets[i])
        .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
        .attr("stop-opacity", opacity[i]);

      gradientRadialDoubleUR
        .append("stop")
        .attr("offset", offsets[i])
        .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
        .attr("stop-opacity", opacity[i]);

      gradientRadialDoubleUL
        .append("stop")
        .attr("offset", offsets[i])
        .attr("stop-color", `rgb(${shade[i]},${shade[i]},${shade[i]})`)
        .attr("stop-opacity", opacity[i]);
    }

    // var gradientGlowHorizontal = this.defs
    //   .append("linearGradient")
    //   .attr("id", "gradientGlowHorizontal")
    //   .attr("x1", 0)
    //   .attr("x2", 1)
    //   .attr("y1", 0)
    //   .attr("y2", 0);

    // var gradientGlowVertical = this.defs
    //   .append("linearGradient")
    //   .attr("id", "gradientGlowVertical")
    //   .attr("x1", 0)
    //   .attr("x2", 0)
    //   .attr("y1", 0)
    //   .attr("y2", 1);

    var gradientGlowTranslucent = this.defs
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
      //   gradientGlowHorizontal
      //     .append("stop")
      //     .attr("offset", offsets[i])
      //     .attr("stop-color", `rgb(153, 255, 255)`)
      //     .attr("stop-opacity", opacity[i])
      //     .append("animate")
      //     .attr("attributeName", "stop-opacity")
      //     .attr("dur", "20s")
      //     .attr("repeatCount", "indefinite")
      //     .attr("values", opacityValues[i]);

      //   gradientGlowVertical
      //     .append("stop")
      //     .attr("offset", offsets[i])
      //     .attr("stop-color", `rgb(153, 255, 255)`)
      //     .attr("stop-opacity", opacity[i])
      //     .append("animate")
      //     .attr("attributeName", "stop-opacity")
      //     .attr("dur", "20s")
      //     .attr("repeatCount", "indefinite")
      //     .attr("values", opacityValues[i]);

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
  }
}
