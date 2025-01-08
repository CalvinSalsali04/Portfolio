import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #2c3e50;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #2c3e50;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #34495e;
  }
`;

const SocialLinks = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SocialLink = styled.a`
  color: #2c3e50;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #34495e;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <ContactForm onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Name" 
          required 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          required 
        />
        <TextArea 
          placeholder="Your message" 
          required 
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      
      <SocialLinks>
        <SocialLink href="https://github.com/calvinsalsali" target="_blank" rel="noopener noreferrer">
          GitHub
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/calvinsalsali" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
        <SocialLink href="mailto:calvin.salsali@example.com">
          Email
        </SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;
