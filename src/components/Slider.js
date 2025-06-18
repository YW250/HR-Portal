import React from 'react';
import { Carousel } from 'react-bootstrap';
import newsList from '../news';

function Slider() {
	const amountNews = 10;
  return (
    <Carousel>
      {newsList.slice(0, amountNews).map((news, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={news.image}
            alt={`Slide ${i + 1}`}
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
