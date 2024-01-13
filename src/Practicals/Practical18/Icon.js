import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ className }) => {
  return <FontAwesomeIcon icon={faHeart } className={className} />;
};

export default Icon;
