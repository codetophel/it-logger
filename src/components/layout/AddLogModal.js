import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);
      M.toast({
        html: `Log added by ${tech}`,
      });

      //clear fields
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              {' '}
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select technician
              </option>
              <option value='Joey Badass'>Joey Badass</option>
              <option value='Joel Smith'>Joel Smith</option>
              <option value='Daddy Wizzy'>Daddy Wizzy</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect blue btn-flat'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '65%',
  height: '65%',
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, addLog)(AddLogModal);
