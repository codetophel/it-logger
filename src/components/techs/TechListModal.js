import React, { useState, useEffect } from 'react';
import TechListModalItem from './TechListModalItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center'>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map((tech) => (
              <TechListModalItem key={tech.id} tech={tech} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
