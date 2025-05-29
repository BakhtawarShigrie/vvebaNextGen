'use client';
import {useEffect} from 'react';

const RippleButtonEffect = () => {
 useEffect(() => {
  const buttons = document.querySelectorAll('.ripple-button');

  const createRipple = (e) => {
   const button = e.currentTarget;
   const ripple = document.createElement('span');

   const diameter = Math.max(button.clientWidth, button.clientHeight);
   const radius = diameter / 2;

   ripple.style.width = ripple.style.height = `${diameter}px`;
   ripple.style.left = `${
    e.clientX - button.getBoundingClientRect().left - radius
   }px`;
   ripple.style.top = `${
    e.clientY - button.getBoundingClientRect().top - radius
   }px`;
   ripple.classList.add('ripple-effect');

   button.appendChild(ripple);

   setTimeout(() => {
    ripple.remove();
   }, 600);
  };

  const removeRipples = (e) => {
   const button = e.currentTarget;
   const ripples = button.querySelectorAll('.ripple-effect');
   ripples.forEach((ripple) => {
    ripple.remove();
   });
  };

  buttons.forEach((button) => {
   button.addEventListener('mouseenter', createRipple);
   button.addEventListener('mouseleave', removeRipples);
  });

  return () => {
   buttons.forEach((button) => {
    button.removeEventListener('mouseenter', createRipple);
    button.removeEventListener('mouseleave', removeRipples);
   });
  };
 }, []);

 return null;
};

export default RippleButtonEffect;
