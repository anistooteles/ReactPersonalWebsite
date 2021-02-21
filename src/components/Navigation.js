import {
  faDotCircle,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ActionButton from './ActionButton';

const Navigation = ({ action }) => {
  return (
    <div className="nav-container">
      <a href="/" className="btn btn--border">
        <FontAwesomeIcon icon={faUserAstronaut} />
      </a>
      <ActionButton
        className="btn btn--hover"
        iconName={faDotCircle}
        actionHandler={action}
      ></ActionButton>
    </div>
  );
};

export default Navigation;
