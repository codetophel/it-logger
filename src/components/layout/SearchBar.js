import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');
  return (
    <div>
      <nav style={{ marginBottom: '2rem' }} className='blue'>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input
                id='search'
                placeholder='Search Logs..'
                type='search'
                ref={text}
                onChange={(e) => searchLogs(text.current.value)}
              />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
