// Підключення компонентів
import AuthSection from '../components/AuthSection/AuthSection';
import Description from '../components/Description/Description';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import Footer from 'components/Footer/Footer';
import GoToTop from '../components/scroll/GoToTop';
// import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

const Home = () => {
  return (
    <>
    {/* <ThemeToggler /> */}
      <GoToTop />
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <Footer />
    </>
  );
};
export default Home;
