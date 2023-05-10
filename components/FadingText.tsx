"use client"
import React, { useEffect, useRef } from 'react';

interface Props {
  text: string;
}

const FadingText: React.FC<Props> = ({ text }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const { current: textEl } = textRef;

      textEl.style.opacity = '0';

      const fadeIn = () => {
        if (textEl) {
          textEl.style.transition = 'opacity 500ms ease-in';
          textEl.style.opacity = '1';
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            fadeIn();
            observer.disconnect();
          }
        },
        {
          rootMargin: '0px 0px -100px 0px',
        }
      );

      observer.observe(textEl);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return <span ref={textRef}>{text}</span>;
};

export default FadingText;
