import React from 'react';
import PropTypes from 'prop-types';

const LogsItem = ({ log }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
      </div>
    </li>
  );
};

LogsItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogsItem;
