import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <h3>{label}</h3>
      <input {...input} type="text" id="memo-input" />
      <div className="red-text memo-input-error">{touched && error}</div>
    </div>
  );
};
