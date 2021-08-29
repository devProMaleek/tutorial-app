// import styled-component library
import styled from 'styled-components';

// Export the wrapper/container
export const Wrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, .65) 100%), url(${({ image }) => image}),
                 var(--darkGrey); 
  background-size: 100%, cover;
  background-repeat: no-repeat;
  //background-position: ;
  height: 100vh;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    
    to {
      opacity: 1;
    }
  }

`;

// Export the content.
export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;

`;

// Export the text container.
export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);
  }
`;

