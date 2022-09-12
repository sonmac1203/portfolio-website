import React from 'react';
import { List, Container } from 'reactstrap';
import experiences from '../config/experiences.json';

const Experiences = () => {
  const header = (title, organization, url) => {
    return (
      <>
        {title}{' '}
        <span className='emphasized'>
          {url.length > 0 ? (
            <a href={url} target='_blank' className='special-link'>
              {organization}
            </a>
          ) : (
            organization
          )}
        </span>
      </>
    );
  };
  return (
    <section id='experiences'>
      <Container>
        <h2 className='mb-5 element-name'>
          Where I've Learned and Worked &#129309;
        </h2>
        {experiences.map((e, k) => (
          <ExperienceItem
            key={k}
            header={header(e.title, e.organization, e.url)}
            time={e.time}
            description={e.description}
            last={k === experiences.length - 1}
          />
        ))}
      </Container>
    </section>
  );
};

const ExperienceItem = ({ header, time, description, last }) => {
  return (
    <div className={!last ? 'mb-5 exp-item' : 'exp-item'}>
      <h4 className='ml-3 experience-title'>{header}</h4>
      <h6 className='ml-3 mb-4'>{time}</h6>
      <List className='exp-list'>
        {description.map((point, key) => (
          <li key={key}>{point}</li>
        ))}
      </List>
    </div>
  );
};

export default Experiences;
