import React from 'react';
import styled from 'styled-components';
import pfp from '../Images/calvinpfp.jpeg';

const AboutSection = styled.section`
  padding: 8rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 7rem 1rem 4rem;
    gap: 2rem;
  }
`;

const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`;

const Bio = styled.div`
  max-width: 700px;
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 600;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const AboutMe = () => {
  return (
    <AboutSection>
      <ProfileImage>
        <img src={pfp} alt="Calvin Salsali" />
      </ProfileImage>
      <Bio>
        <Name>Calvin Salsali</Name>
        <Description>
        I'm a Software Engineering student at McMaster University, deeply passionate about software development and machine learning, with a strong drive to solve complex problems that contribute to the betterment of people. Currently Seeking Summer 2025 Internships :)
        </Description>
      </Bio>
    </AboutSection>
  );
};

export default AboutMe;
