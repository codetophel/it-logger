import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/layout/AddLogModal';
import EditLogModal from './components/layout/EditLogModal';
import AddTechModal from './components/techs/AddTechmodal';
import TechListModal from './components/techs/TechListModal';

const App = () => {
  useEffect(() => {
    //Init materialize js
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <AddBtn />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
