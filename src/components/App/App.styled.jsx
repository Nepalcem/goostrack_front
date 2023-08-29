import styled from 'styled-components';

export const Container = styled.div`
  /*----Базовий стиль для мобілки 375 - 767 (адаптивний)----*/
  /* outline: 2px solid tomato; */
  width: 100%;
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 24px;

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    padding-top: 24px;
  }

  /*----Стиль для компа від 1440 (адаптивний)----*/

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
