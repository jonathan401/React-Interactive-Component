import React from 'react';
import SubmitButton from './SubmitButton';
import ButtonList from './ButtonList';
import Button from './Button';
import '../styles/Card.css';

const Card = () => {
  return (
    <div className="rating-card card">
      <div className="badge btn">
        <img src="../images/icon-star.svg" alt="" role="presentation" />
      </div>
      <div className="header">
        <h2>How did we do?</h2>
      </div>
      <div className="card-text">
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <ButtonList>
        <Button value={1} />
        <Button value={2} />
        <Button value={3} />
        <Button value={4} />
        <Button value={5} />
      </ButtonList>
      <SubmitButton />
    </div>
  );
};

export default Card;
