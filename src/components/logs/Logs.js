import React, { useState, useEffect } from 'react';
import LogsItem from './LogsItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) return <h4>Loading...</h4>;

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p>No logs to show...</p>
        ) : (
          logs.map((log) => <LogsItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

export default Logs;
