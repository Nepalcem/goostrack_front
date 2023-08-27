import styled from 'styled-components';

export const DescriptionItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    &:nth-child(2n) {
      align-items: flex-end;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 228px;
    /* width: 1107px; */

    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;
    }

    &:nth-child(2n-1) {
      justify-content: end;
    }
  }
`;

export const DescriptionItemTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 275px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
  }
`;

export const ItemNumber = styled.p`
  color: #3e85f3;
  font-family: Inter;
  font-size: 80px;
  /* font-style: normal; */
  font-weight: 700;
  line-height: 1;
  letter-spacing: -4px;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ItemMarkBlock = styled.div`
  display: flex;
  min-height: 56px;
  border-radius: 44px;
  background-color: #dcebf7;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  margin-left: 0;
  margin-right: auto;

  padding: 8px 18px;

  @media screen and (min-width: 768px) {
    padding: 6px 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ItemMark = styled.p`
  color: #3e85f3;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ItemHeader = styled.h2`
  color: #171820;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;

    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ItemText = styled.p`
  color: rgba(17, 17, 17, 0.9);
  font-family: Inter;
  font-size: 14px;
  /* font-style: normal; */
  font-weight: 500;
  line-height: 1.28571;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ImageThumb = styled.div`
  height: 457px;
  width: 335px;
  border-radius: 40px;
  overflow: hidden;

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    height: 700px;
    width: 704px;
    border-radius: 100px;
  }

  /*----Стиль для компа від 1440 (адаптивний)----*/
  @media screen and (min-width: 1440px) {
    height: 700px;
    width: 604px;
  }
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;
