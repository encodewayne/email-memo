import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <h5>{label}</h5>
      <input {...input} type="text" style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
