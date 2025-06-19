import React from 'react';
import './Contacts.css';

const contacts = [
  {
    name: 'Elena Markova',
    position: 'Head of HR Department',
    email: 'elena.markova@uuou.edu',
    phone: '+123 555 101',
  },
  {
    name: 'Ivan Petrenko',
    position: 'HR Assistant',
    email: 'ivan.petrenko@uuou.edu',
    phone: '+123 555 102',
  },
  {
    name: 'Natalie Shevchenko',
    position: 'Recruitment Specialist',
    email: 'n.shevchenko@uuou.edu',
    phone: '+123 555 103',
  },
  {
    name: 'General HR Inquiries',
    position: 'HR Department',
    email: 'hr-dept-official@uuou.edu',
    phone: '+123 421 100',
  }
];

function Contacts() {
  return (
    <div>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Contact Page</h2>
        <p style={{ textAlign: 'center' }}>This portal is created to help you contact the HR Department of our institution.</p>

        <div className="contact-grid">
          {contacts.map((person, index) => (
            <div key={index} className="contact-card">
              <h5>{person.name}</h5>
              <p><strong>{person.position}</strong></p>
              <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
              <p>Phone: <a href={`tel:${person.phone}`}>{person.phone}</a></p>
            </div>
          ))}
        </div>
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
