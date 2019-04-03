import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h2>Dashboard</h2>
    <div className="fixed-action-btn">
  <Link className="btn-floating btn-large red" to="/surveys/new">
    <i className="large material-icons">add</i>
  </Link>
</div>
  </div>
);