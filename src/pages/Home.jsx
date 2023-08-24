import { Container } from '../components/App/App.styled';
import AuthSection from '../components/AuthSection/AuthSection';

const Home = () => {
  return (
    <>
      <AuthSection />

      <section>
        <Container>
          <p>Description</p>
        </Container>
      </section>

      <section>
        <Container>
          <p>ReviewsSlider</p>
        </Container>
      </section>
    </>
  );
};
export default Home;
