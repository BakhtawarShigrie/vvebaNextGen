'use client';
import {useState} from 'react';
import '@/app/css/style.css';
import RippleButtonEffect from '../rippleButtonEffect';

export default function Timeline() {
 const [activeEvents, setActiveEvents] = useState([2]);

 const events = [
  {
   date: 'Jan 3, 2025',
   title: 'Mother Birthday',
   heading: 'Day you have been waiting for',
   description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, magni. Sequi, porro iusto? Possimus ipsum tempora quidem illo cupiditate quas.',
  },
  {
   date: 'Jan 5, 2026',
   title: 'Mother Birthday',
   heading: 'Day you have been waiting for',
   description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, magni. Sequi, porro iusto? Possimus ipsum tempora quidem illo cupiditate quas.',
  },
  {
   date: 'May 5, 2026',
   title: 'Mother Birthday',
   heading: 'Day you have been waiting for',
   description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, magni. Sequi, porro iusto? Possimus ipsum tempora quidem illo cupiditate quas.',
  },
  {
   date: 'Aug 5, 2026',
   title: 'Mother Birthday',
   heading: 'Day you have been waiting for',
   description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, magni. Sequi, porro iusto? Possimus ipsum tempora quidem illo cupiditate quas.',
  },
  {
   date: 'Sep 5, 2026',
   title: 'Mother Birthday',
   heading: 'Day you have been waiting for',
   description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, magni. Sequi, porro iusto? Possimus ipsum tempora quidem illo cupiditate quas.',
  },
 ];

 const toggleEvent = (index) => {
  setActiveEvents((prev) =>
   prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
  );
 };

 const handleMouseMove = (e) => {
  const wrapper = e.currentTarget;
  const timeline = wrapper.querySelector('.timeline');
  if (!timeline) return;

  const scrollWidth =
   (e.clientX / wrapper.clientWidth) *
   (wrapper.clientWidth - timeline.clientWidth);
  timeline.style.left = `${scrollWidth.toFixed(1)}px`;
 };

 return (
  <section className="timeline-section">
   <div className="timeline-header text-center">
    <span className="timeline-subtitle">My Learning Journey</span>
    <h3 className="timeline-title">Key milestones and Timeline</h3>
   </div>
   <div className="timeline-wrapper" onMouseMove={handleMouseMove}>
    <ul className="timeline">
     {events.map((event, index) => (
      <li key={index} data-date={event.date}>
       <span className="title">{event.title}</span>
       <div
        className={`data ${activeEvents.includes(index) ? 'show' : ''}`}
        onClick={() => toggleEvent(index)}
       >
        <h3>{event.heading}</h3>
        <small>{event.date}</small>
        <p>{event.description}</p>
        <RippleButtonEffect />
        <button
         className="close ripple-button"
         onClick={(e) => {
          e.stopPropagation();
          toggleEvent(index);
         }}
        >
         Click To Close
        </button>
       </div>
      </li>
     ))}
    </ul>
   </div>
  </section>
 );
}
