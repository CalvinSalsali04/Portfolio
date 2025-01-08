import React from 'react';
import styled from 'styled-components';
import securephi from '../Images/hospital.webp';
import teslaai from '../Images/tesla.jpg';
import autocar from '../Images/car.jpg';
import mealme from '../Images/mealme.jpg';

const ProjectsSection = styled.section`
  padding: 4rem 0;
  background-color: var(--bg-color);

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ProjectImageLink = styled.a`
  display: block;
  width: 100%;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--text-primary);
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const Tag = styled.span`
  background: #f5f5f5;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "SecurePHI",
      description: "AI-driven healthcare data security solution that uses GPT-4o to identify, segment, and redact sensitive Personal Health Information, ensuring role-based access control and compliance.",
      image: securephi,
      github: "https://github.com/CalvinSalsali04/SecurePHI",
      tags: ["Python", "Flask", "React", "GPT-4o", "Postgres", "Pandas", "SMTP"]
    },
    {
      title: "Tesla.AI",
      description: "AI-powered investment tool driven by a custom-built LLM I developed and fine-tuned for sentiment analysis. It analyzes Elon Musk’s tweets and Tesla-related news to predict stock movements, providing real-time buy, hold, or sell recommendations based on market sentiment.",
      image: teslaai,
      github: "https://github.com/CalvinSalsali04/TSLA.AI",
      tags: [ "Python", "PyTorch", "Cohere", "Pandas", "Tweepy", "NewsAPI", "Twilio"]
    },
    {
      title: "Autonomous Vehicle Simulation",
      description: "Interactive simulation designed to optimize autonomous vehicle navigation and path planning. Built with p5.js, the application uses the A* algorithm to efficiently map routes, while advanced image processing techniques enable precise lane detection and feature recognition, enhancing overall vehicle awareness and decision-making.",
      image: autocar,
      github: "https://github.com/CalvinSalsali04/Autonomous-Vehicle-Simulation",
      tags: ["Python", "OpenCV", "NumPy", "React", "Javascript"]
    },
    {
      title: "MealMe",
      description: "Interactive web app that simplifies finding local eateries by using Google Maps API for location data and Rapid API for real-time restaurant and weather info. Users can discover nearby dining options, rate experiences, and explore restaurants worldwide.",
      image: mealme,
      github: "https://github.com/CalvinSalsali04/MealMe",
      tags: ["React", "NodeJs", "ExpressJs", "MySQL", "Google Maps API", "Rapid API"]
    }
    
  ];

  return (
    <ProjectsSection>
      <ProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImageLink href={project.github} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </ProjectImageLink>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagContainer>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagContainer>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
