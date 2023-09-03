import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  Container,
  Label,
  ModalHeader,
  Radio,
  Rating,
} from './ModalRating.styled';
const ModalRating = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      <ModalHeader>Rating</ModalHeader>

      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <Label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? '#FFAC33'
                    : '#CEC9C1'
                }
              />
            </Rating>
          </Label>
        );
      })}
    </Container>
  );
};

export default ModalRating;
