import React from 'react'

const CssUnit = () => (
  <div className="DetailView">
    <article class="css-units-meat">
      <h2> CSS Units</h2>
      <p>
        As a developer, sometimes you need to be flexible when it comes to sizing. Sometimes your designer won't budge<br>
        when it comes to making the size of the logo be relevant to the rest of the site. So here you are, deciding whether you<br>
        should use a variety of units types or make all elements use the same units. Today I'd like to share a quick breakdown of some<br>
        of the units CSS has to offer. This is not an exhaustive list, but I'll highlight some common units and a couple unique ones.
      </p>

      <h3> Types of units</h3>
      <p>
        Firstly, units are either <strong>relative</strong> or <strong>absolute</strong>. <br><br>
        A quick explanation... <br>
        A <strong>relative</strong> unit is determined by values that are relative to another length.<br>
        An <strong>absolute </strong>unit is when a property's output is known/static. They cannot scale in size.<br>

      </p>
      <h3> Length</h3>
      <p>
        Many properties in CSS use length as values. For example, width, height, box-shadow, padding, margins, font-spacing...<br>
        Here are absolulte and relative <i>length</i> units:<br>
        <ul>
          <li> <strong>Absolute</strong> length units: 'q', 'in', 'cm', 'pt', 'px'</li>
          <li> <strong>Relative</strong> length units: 'em', 'rem', 'ex', 'ch', 'vw', 'vh', 'vmin', 'vmax'</li>
        </ul>
        <br>
        Below are examples of absolute and relative lengths.
      </p>
      <div id="absolute-lengths">
        <h4>Absolute Lengths</h4>
        <div style="text-align: center;">
          <img class='css-unit-absolute' alt="absolute lengths" src="../assets/css_units_absolute_length_examples.png"/>
        </div>
        <h5>pt</h5>
        <p>
          Points are used traditionally in print media(i.e. using a word processor to print an essay on paper).<br>
          1pt == 1/72 of 1in
        </p>
        <h5>px</h5>
        <p>
        The pixel. To popular dismay, the CSS pixel length doesn't equate to the actual pixels used to render images on your screen/device.<br>
        1px == 1/96th of 1in 
        </p>
        <h5>cm</h5>
        <p> 
          Yup, cm stands for centimeter. Since 98% of the world uses the metric system, using cm could be helpful when you know the<br>
          physical properties of the output medium.<br>
          1 cm == 37.8 px
        </p>
        <h5>q</h5>
        <p>
        'Quarter of a millimimeter' is only available in Firefox.<br>
          1 q == 1/30 of 1cm
        </p>
      </div>

      <div id="relative-lengths">
      </div>
        <ul>
          <li>length</li>
          <li>percent</li>
          <li>fraction unit</li>
          <li>measurement of content</li>
        </ul>
      <h3>Length</h3>
        Lengths are either horizontal or vertical.
        <ul>
          <li>px</li>
          <li>em</li>
          <li>rem</li>
          <li>vh</li>
          <li>vw</li>
        </ul>
        
        <ul>
          <li>px</li>
          <li>em</li>
          <li>rem</li>
          <li>vh</li>
          <li>vw</li>
        </ul>
    </article>
  </div>
)

module.exports = CssUnit
