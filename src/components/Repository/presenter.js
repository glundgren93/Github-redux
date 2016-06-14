import React from 'react';
import Header from '../Header/presenter';
import { Link } from 'react-router';

const Repository = ({ repo = {} }) => {
  return (
      <div className="row">
        {repo.name}
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
  );
}

export default Repository;
