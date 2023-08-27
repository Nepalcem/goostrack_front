import styled from 'styled-components';
import { primaryColor } from 'utils/variables';

export const ReviewsContainer = styled.div``;
export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 1.14;
  color: ${primaryColor};
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 50px;
  }
`;

export const ReviewWrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 580px;
    padding: 32px;
  }

  @media (min-width: 1440px) {
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
export const StarsWrapper = styled.div`
  display: flex;
`;

export const UserAvatar = styled.img`
  display: block;
  object-fit: cover;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  margin-right: 18px;
`;

export const UserName = styled.p`
  margin: 0;
  margin-bottom: 13px;
  font-size: 18px;
  font-weight: bold;
  color: #343434;
`;

export const UserReview = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.29;
`;

export const Star = styled.img`
  margin-right: 10px;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArrowLeft = styled.div`
  transform: scale(-1, 1);
  margin-right: 10px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  cursor: pointer;
`;

export const ArrowRight = styled.div`
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  cursor: pointer;
`;

// modules={[Navigation, Autoplay, EffectCoverflow]}
//         grabCursor={true}
//         effect={'coverflow'}
//         slidesPerView={1}
//         spaceBetween={20}
//         // autoHeight={true}
//         centeredSlides={true}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 50,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         loop={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//           waitForTransition: false,
//         }}
//         navigation={{
//           prevEl: '#custom-prev-button',
//           nextEl: '#custom-next-button',
//         }}
//         breakpoints={{
//           1440: {
//             slidesPerView: 2,
//             spaceBetween: 24,
//           },
//         }}
