import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1.2rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  backdrop-filter: blur(5px);
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: translateY(${props => props.hide ? '-100%' : '0'});

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3.5rem;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 2rem;
    margin: 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--text-primary);
    transition: width 0.2s ease;
  }

  &:hover {
    color: var(--text-primary);
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const emailSubject = "Let's Chat";
  const emailBody = "Hey Calvin, I'd love to connect!";
  const resumeSubject = "Resume Request";
  const resumeBody = "Hi Calvin, I'm interested in viewing your resume. Looking forward to learning more about your experience!";

  const emailLink = `mailto:cs.salsali@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const resumeLink = `mailto:cs.salsali@gmail.com?subject=${encodeURIComponent(resumeSubject)}&body=${encodeURIComponent(resumeBody)}`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Nav hide={!visible}>
      <NavContainer>
        <Logo>Calvin's Portfolio</Logo>
        <NavLinks>
          <NavLink href={emailLink}>Email</NavLink>
          <NavLink href="https://www.linkedin.com/in/calvinsalsali/" target="_blank" rel="noopener noreferrer">LinkedIn</NavLink>
          <NavLink href="https://github.com/CalvinSalsali04" target="_blank" rel="noopener noreferrer">GitHub</NavLink>
          <NavLink href={resumeLink}>Resume</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
