import React from 'react';
import loading from '../../assets/loading.gif';

export default function Loading() {
  return (
    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
      <img src={loading} width="100px" height="100px" alt="Loading" />
    </div>
  );
}
