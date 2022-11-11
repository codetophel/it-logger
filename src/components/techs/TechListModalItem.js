import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteTech } from '../../actions/techActions';

const TechListModalItem = ({ tech, deleteTech }) => {
  const { firstName, lastName, id } = tech;
  const onDelete = () => {
    deleteTech(id);

    M.toast({
      html: `${firstName} ${lastName} was deleted from the technician list `,
    });
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechListModalItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechListModalItem);
