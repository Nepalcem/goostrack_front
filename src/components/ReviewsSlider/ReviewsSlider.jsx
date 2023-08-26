import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

import userAvatar from '../../images/svg/photo-user.svg';
import star from '../../images/svg/star.svg';
import yellowStar from '../../images/svg/yellow-star.svg';
import arrowRight from '../../images/svg/r-arrow.svg';
import {
  Title,
  ReviewWrapper,
  UserWrapper,
  UserAvatar,
  UserName,
  UserReview,
  Star,
  ArrowLeft,
  ArrowRight,
  ArrowWrapper,
} from './ReviewsSlider.styled.jsx';
import { Container } from 'components/App/App.styled';

const reviews = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    userAvatar: userAvatar,
    stars: 2,
    review: 'GooseTrack is impressive.',
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    userAvatar: userAvatar,
    stars: 0,
    review:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    userAvatar: userAvatar,
    stars: 5,
    review:
      'The calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    userAvatar: userAvatar,
    stars: 4,
    review: 'Highly recommended.',
  },
];

const ReviewsSlider = () => {
  return (
    <Container>
      <Title>Reviews</Title>
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        grabCursor={true}
        effect={'coverflow'}
        slidesPerView={1}
        spaceBetween={20}
        autoHeight={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        navigation={{
          prevEl: '#custom-prev-button',
          nextEl: '#custom-next-button',
        }}
        breakpoints={{
          1440: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
      >
        {reviews.map(review => {
          const starIcons = [];
          for (let i = 0; i < review.stars; i++) {
            starIcons.push(<Star key={i} src={yellowStar} alt="star" />);
          }
          for (let i = review.stars; i < 5; i++) {
            starIcons.push(
              <Star key={i} src={star} alt="star" className="grey-star" />
            );
          }

          return (
            <SwiperSlide key={review.id}>
              <ReviewWrapper>
                <UserWrapper>
                  <UserAvatar src={review.userAvatar} alt="UserAvatar" />
                  <div>
                    <UserName>{review.name}</UserName>
                    <div>{starIcons}</div>
                  </div>
                </UserWrapper>
                <UserReview>{review.review}</UserReview>
              </ReviewWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowWrapper>
        <ArrowLeft id="custom-prev-button">
          <img src={arrowRight} alt="arrowLeft" />
        </ArrowLeft>
        <ArrowRight id="custom-next-button">
          <img src={arrowRight} alt="arrowRight" />
        </ArrowRight>
      </ArrowWrapper>
    </Container>
  );
};

export default ReviewsSlider;
