import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 80px;
    height: 80px;
    color: #fff;
    background-color: #3e85f3;
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    border-radius: 50%;
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: 375px) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

