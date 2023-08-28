import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import userAvatar from '../../images/svg/photo-user.svg';
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
  StarsWrapper,
} from './ReviewsSlider.styled.jsx';
import { fetchReviews } from 'redux/reviews/reviewsOperation';
import { selectReviews } from 'redux/reviews/reviewsSelectors';

const ReviewsSlider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  const reviews = useSelector(selectReviews);
  console.log('reviews', reviews);
  return (
    <>
      <Title>Reviews</Title>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        navigation={{
          prevEl: '#custom-prev-button',
          nextEl: '#custom-next-button',
        }}
        autoHeight={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: false,
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
          for (let i = 0; i < review.rating; i++) {
            starIcons.push(<Star key={i} src={yellowStar} alt="star" />);
          }
          for (let i = review.rating; i < 5; i++) {
            starIcons.push(
              <Star key={i} src={star} alt="star" className="grey-star" />
            );
          }
          return (
            <>
              <SwiperSlide key={review.owner.username}>
                <ReviewWrapper>
                  <UserWrapper>
                    <UserAvatar src={review.owner.avatarURL} alt="UserAvatar" />
                    <div>
                      <UserName>{review.owner.username}</UserName>
                      <StarsWrapper>{starIcons}</StarsWrapper>
                    </div>
                  </UserWrapper>
                  <UserReview>{review.comment}</UserReview>
                </ReviewWrapper>
              </SwiperSlide>
            </>
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
    </>
  );
};

export default ReviewsSlider;
