import React from 'react';
import './style.css';

const projectsOne = [
  {
    title: 'Test',
    link: 'https://agile-headland-04774.herokuapp.com/',
    image: 'https://via.placeholder.com/800x1000',
    alt: `project-1`,
  },
  {
    title: 'Test',
    link: '',
    image: 'https://via.placeholder.com/800x1000',
    alt: `project-2`,
  },
  {
    title: 'Test',
    link: '',
    image: 'https://via.placeholder.com/800x1000',
    alt: `project-3`,
  },
];

const projectsTwo = [
  {
    title: 'Test',
    link: '',
    image: 'https://via.placeholder.com/800x1000',
    alt: `project-4`,
  },
  {
    title: 'Test',
    link: '',
    image: 'https://via.placeholder.com/800x1000',
    alt: `project-5`,
  },
  {
    title: 'Test',
    link: '',
    image: 'https://via.placeholder.com/800x1000',
    alt: `project-6`,
  },
];

function Projects() {
  return (
    <div>
      <div className='row justify-content-center' id='projects-top'>
        <div className='container d-flex flex-column flex-md-row project-container'>
          {projectsOne.map((data, index) => (
            <div className='col-md-4' key={`project-column-${index}`}>
              <img className='img-fluid pb-4' src={data.image} alt={data.alt}></img>
              <div className='project-titles text-center'>{data.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='row justify-content-center' id='projects-bottom'>
        <div className='container d-flex flex-column flex-md-row project-container'>
        {projectsTwo.map((data, index) => (
            <div className='col-md-4' key={`project-column-${index}`}>
              <img className='img-fluid pb-4' src={data.image} alt={data.alt}></img>
              <div className='project-titles text-center'>{data.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
