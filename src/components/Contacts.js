import React from 'react';

function Contacts() {
  return (
    <div>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', padding: '1rem', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Contact Page</h2>
      <p style={{ textAlign: 'center' }}>This portal is created to inform contact the HR Department in our institution.</p>
    </div>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
        title="University Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7316.776615423892!2d34.564685780278936!3d49.58131884557528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1sru!2sua!4v1750032282917!5m2!1sru!2sua"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
