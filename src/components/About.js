import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';

function About() {
  useEffect(() => {
    $("#accordion").accordion();
  }, []);

  return (
    <div className="bg-white bg-opacity-75 p-4 text-center">
      <h2>About the Portal</h2>
      <div id="accordion">
        <h3>Purpose</h3>
        <div><p>This portal serves the HR department of a higher education institution.</p></div>
        <h3>Features</h3>
        <div><p>News, Gallery, Contact information, and an interactive slider.</p></div>
        <h3>Technologies</h3>
        <div><p>HTML, CSS, JS, React, Bootstrap, jQuery UI, etc.</p></div>
      </div>
    </div>
  );
}

export default About;