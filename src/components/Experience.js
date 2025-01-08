import React from 'react';
import styled from 'styled-components';
import company1Logo from '../Images/scotiabank_logo.jpeg';
import company2Logo from '../Images/pointclickcare_logo.jpeg';
import company3Logo from '../Images/gbl_io_logo.jpeg';
import company4Logo from '../Images/envpow_logo.jpeg';

const ExperienceSection = styled.section`
  padding: 4rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: #e0e0e0;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 50%;
  padding: 0 40px;
  ${props => props.position === 'left' ? 'left: 0;' : 'left: 50%;'}

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 0 20px 0 60px;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const CompanyLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    top: 1.2rem;
    right: 1.2rem;
  }
`;

const TextContent = styled.div`
  padding-right: 60px;

  @media (max-width: 768px) {
    padding-right: 50px;
  }
`;

const Date = styled.p`
  color: #666;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const Role = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Company = styled.h4`
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Experience = () => {
  const experiences = [
    {
      date: "Jan 2025 - Present",
      role: "Software Engineer Intern",
      company: "Scotiabank",
      logo: company1Logo,
      description: ""
    },
    {
      date: "Sept 2024 - Dec 2024",
      role: "Software Engineer Intern",
      company: "PointClickCare",
      logo: company2Logo,
      description: ""
    },
    {
      date: "May 2024 - Aug 2024",
      role: "Software Engineer Intern",
      company: "GBl.io",
      logo: company3Logo,
      description: ""
    },
    {
      date: "May 2023 - Aug 2023",
      role: "Data Research Intern",
      company: "EPS inc.",
      logo: company4Logo,
      description: ""
    }
  ]; 

  return (
    <ExperienceSection>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} position={index % 2 === 0 ? 'left' : 'right'}>
            <Content>
              <CompanyLogo>
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </CompanyLogo>
              <TextContent>
                <Role>{exp.role}</Role>
                <Company>{exp.company}</Company>
                <Date>{exp.date}</Date>
                <Description>{exp.description}</Description>
              </TextContent>
            </Content>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
