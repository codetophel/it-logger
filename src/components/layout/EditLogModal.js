import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { clearCurrent, updateLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({ updateLog, current, clearCurrent }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };

      updateLog(updLog);
      M.toast({ html: `Log Updated by ${tech}` });

      //clear fields
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
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
              <TechSelectOptions />
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

EditLogModal.propTypes = {
  curent: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal
);
