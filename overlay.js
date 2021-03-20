const defaults = {
  fullWidth: 1920,
  fullHeight: 1080,
  camHeight: 240,
  camRatio: 4 / 3,
  horizontalPanelHeight: 126,
  panelRatio: 16 / 9,
  frameWidth: 30,
  borderWidth: 9,
};

class OverlayFrame {
  constructor(settings) {
    this.parseSettings(settings);
    this.svg = d3.select("svg");
    this.groups = {};
    this.setDefs();
    this.addGroup("background", this.backgroundAttr);
    this.addGroup("glow", this.glowAttr);
    this.addGroup("border", this.borderAttr);
    if (settings.streamlabsToken) {
      this.addObjects(settings.streamlabsToken);
    }
  }

  parseSettings(settings) {
    this.fullWidth = 1920;
    this.fullHeight = 1080;
    this.camHeight = 240;
    this.camWidth = (4 / 3) * this.camHeight;
    this.horizontalPanelHeight = 126;
    this.verticalPanelWidth = (16 / 9) * this.horizontalPanelHeight;
    this.frameWidth = 30;
    this.borderWidth = 9;
    this.alertWidth = this.fullWidth - this.verticalPanelWidth;
    this.alertHeight = 200;
    this.viewerCountWidth = 200;
    this.viewerCountHeight = 100;
  }

  addObjects(token) {
    this.mainDiv = d3.select("#main");

    let alertTop =
      this.horizontalPanelHeight +
      (this.fullHeight - this.horizontalPanelHeight - this.alertHeight) / 2;
    let alertLeft =
      this.verticalPanelWidth +
      (this.fullWidth - this.verticalPanelWidth - this.alertWidth) / 2;

    let viewCountTop = this.camHeight + this.frameWidth + 20;
    let viewCountLeft = 20;

    this.mainDiv.append();
    this.mainDiv
      .selectAll("object")
      .data([
        {
          width: this.viewerCountWidth,
          height: this.viewerCountHeight,
          style:
            "position: absolute; " +
            `top: ${viewCountTop}px; ` +
            `left: ${viewCountLeft}px`,
          data: `https://streamlabs.com/widgets/viewer-count?token=${token}`,
        },
        {
          width: this.alertWidth,
          height: this.alertHeight,
          style:
            "position: absolute; " +
            `top: ${alertTop}px; ` +
            `left: ${alertLeft}px`,
          data: `https://streamlabs.com/alert-box/v3/${token}`,
        },
      ])
      .enter()
      .append("object")
      .attrs((d) => d);
  }

  get backgroundAttr() {
    return {
      rect: [
        {
          x: this.camWidth,
          y: 0,
          width: this.frameWidth,
          height: this.camHeight,
          fill: "rgb(32,32,32)",
        },
        {
          x: 0,
          y: this.camHeight,
          width: this.camWidth,
          height: this.frameWidth,
          fill: "rgb(32,32,32)",
        },
        {
          x: 0,
          y: this.camHeight + this.frameWidth,
          width: this.verticalPanelWidth - this.frameWidth,
          height: this.fullHeight - this.camHeight - this.frameWidth,
          fill: "rgb(48,48,48)",
        },
        {
          x: this.camWidth + this.frameWidth,
          y: 0,
          width: this.fullWidth - this.camWidth - this.frameWidth,
          height: this.horizontalPanelHeight - this.frameWidth,
          fill: "rgb(48,48,48)",
        },
        {
          x: this.verticalPanelWidth - this.frameWidth,
          y: this.camHeight + this.frameWidth,
          width: this.frameWidth,
          height: this.fullHeight - this.camHeight - this.frameWidth,
          fill: "rgb(32,32,32)",
        },
        {
          x: this.camWidth + this.frameWidth,
          y: this.horizontalPanelHeight - this.frameWidth,
          width: this.fullWidth - this.camWidth - this.frameWidth,
          height: this.frameWidth,
          fill: "rgb(32,32,32)",
        },
      ],
      path: [
        {
          d:
            `M ${this.camWidth} ${this.camHeight} ` +
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
          x: this.camWidth,
          y: 0,
          width: this.frameWidth,
          height: this.camHeight,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          x: 0,
          y: this.camHeight,
          width: this.camWidth,
          height: this.frameWidth,
          fill: "url(#gradientGlowTranslucent)",
        },
        {
          x: this.verticalPanelWidth - this.frameWidth,
          y: this.camHeight + this.frameWidth,
          width: this.frameWidth,
          height: this.fullHeight - this.camHeight - this.frameWidth,
          fill: "url(#gradientGlowVertical)",
        },
        {
          x: this.camWidth + this.frameWidth,
          y: this.horizontalPanelHeight - this.frameWidth,
          width: this.fullWidth - this.camWidth - this.frameWidth,
          height: this.frameWidth,
          fill: "url(#gradientGlowHorizontal)",
        },
      ],
      path: [
        {
          d:
            `M ${this.camWidth} ${this.camHeight} ` +
            `l ${this.frameWidth} 0 ` +
            `a ${this.frameWidth} ${this.frameWidth} 0 0 1 ` +
            `${-this.frameWidth} ${this.frameWidth} ` +
            `z`,
          fill: "url(#gradientGlowTranslucent)",
        },
      ],
    };
  }

  get borderAttr() {
    return {
      rect: [
        {
          x: this.camWidth,
          y: 0,
          width: this.borderWidth,
          height: this.camHeight,
          fill: "url(#gradientHorizontal)",
        },
        {
          x: this.camWidth + this.frameWidth - this.borderWidth,
          y: 0,
          width: this.borderWidth,
          height: this.horizontalPanelHeight - this.frameWidth,
          fill: "url(#gradientHorizontalReverse)",
        },
        {
          x: this.camWidth + this.frameWidth - 2 * this.borderWidth,
          y: this.horizontalPanelHeight - this.frameWidth,
          width: 2 * this.borderWidth,
          height: 2 * this.borderWidth,
          fill: "url(#gradientRadialUR)",
        },
        {
          x: this.camWidth + this.frameWidth - 2 * this.borderWidth,
          y: this.horizontalPanelHeight - 2 * this.borderWidth,
          width: 2 * this.borderWidth,
          height: 2 * this.borderWidth,
          fill: "url(#gradientRadialLR)",
        },
        {
          x: this.camWidth + this.frameWidth - this.borderWidth,
          y: this.horizontalPanelHeight,
          width: this.borderWidth,
          height: this.camHeight - this.horizontalPanelHeight,
          fill: "url(#gradientHorizontalReverse)",
        },
        {
          x: 0,
          y: this.camHeight,
          width: this.camWidth,
          height: this.borderWidth,
          fill: "url(#gradientVertical)",
        },
        {
          x: 0,
          y: this.camHeight + this.frameWidth - this.borderWidth,
          width: this.verticalPanelWidth - this.frameWidth,
          height: this.borderWidth,
          fill: "url(#gradientVerticalReverse)",
        },
        {
          x: this.verticalPanelWidth - this.frameWidth,
          y: this.camHeight + this.frameWidth - 2 * this.borderWidth,
          width: 2 * this.borderWidth,
          height: 2 * this.borderWidth,
          fill: "url(#gradientRadialLL)",
        },
        {
          x: this.verticalPanelWidth - 2 * this.borderWidth,
          y: this.camHeight + this.frameWidth - 2 * this.borderWidth,
          width: 2 * this.borderWidth,
          height: 2 * this.borderWidth,
          fill: "url(#gradientRadialLR)",
        },
        {
          x: this.verticalPanelWidth,
          y: this.camHeight + this.frameWidth - this.borderWidth,
          width: this.camWidth - this.verticalPanelWidth,
          height: this.borderWidth,
          fill: "url(#gradientVerticalReverse)",
        },
        {
          x: this.verticalPanelWidth - this.frameWidth,
          y: this.camHeight + this.frameWidth,
          width: this.borderWidth,
          height: this.fullHeight - this.camHeight - this.frameWidth,
          fill: "url(#gradientHorizontal)",
        },
        {
          x: this.verticalPanelWidth - this.borderWidth,
          y: this.camHeight + this.frameWidth,
          width: this.borderWidth,
          height: this.fullHeight - this.camHeight - this.frameWidth,
          fill: "url(#gradientHorizontalReverse)",
        },
        {
          x: this.camWidth + this.frameWidth,
          y: this.horizontalPanelHeight - this.frameWidth,
          width: this.fullWidth - this.camWidth - this.frameWidth,
          height: this.borderWidth,
          fill: "url(#gradientVertical)",
        },
        {
          x: this.camWidth + this.frameWidth,
          y: this.horizontalPanelHeight - this.borderWidth,
          width: this.fullWidth - this.camWidth - this.frameWidth,
          height: this.borderWidth,
          fill: "url(#gradientVerticalReverse)",
        },
      ],
      path: [
        {
          d:
            `M ${this.camWidth} ${this.camHeight} ` +
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

    var gradientRadialUL = this.defs
      .append("radialGradient")
      .attr("id", "gradientRadialUL")
      .attr("cx", 0)
      .attr("cy", 0);

    var gradientRadialUR = this.defs
      .append("radialGradient")
      .attr("id", "gradientRadialUR")
      .attr("cx", 1)
      .attr("cy", 0);

    var gradientRadialLL = this.defs
      .append("radialGradient")
      .attr("id", "gradientRadialLL")
      .attr("cx", 0)
      .attr("cy", 1);

    var gradientRadialLR = this.defs
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

    var gradientRadialDoubleUL = this.defs
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

    var gradientGlowHorizontal = this.defs
      .append("linearGradient")
      .attr("id", "gradientGlowHorizontal")
      .attr("x1", 0)
      .attr("x2", 1)
      .attr("y1", 0)
      .attr("y2", 0);

    var gradientGlowVertical = this.defs
      .append("linearGradient")
      .attr("id", "gradientGlowVertical")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", 1);

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
  }
}
