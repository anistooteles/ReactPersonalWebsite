import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const ActionButton = ({ iconName, actionHandler, className }) => {
  return (
    <button onClick={actionHandler} className={className}>
      <FontAwesomeIcon icon={iconName} />
    </button>
  );
};

export default ActionButton;
