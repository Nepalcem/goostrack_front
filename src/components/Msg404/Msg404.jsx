import { Container } from '../App/App.styled';
import { Section404 } from './Msg404.styled';

const Msg404 = () => {
  return (
    <Section404>
      <Container>
        <p>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        {/* <NavLink to="/">Go to the Main Page</NavLink> */}
      </Container>
    </Section404>
  );
};

export default Msg404;
