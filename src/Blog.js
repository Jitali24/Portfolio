import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = ({ posts }) => {
  const blogCardsRef = useRef([]);

  useEffect(() => {
    blogCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="blog-section">
      <h2>Blog</h2>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div
            key={index}
            className="blog-card"
            ref={(el) => (blogCardsRef.current[index] = el)}
          >
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-summary">{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
