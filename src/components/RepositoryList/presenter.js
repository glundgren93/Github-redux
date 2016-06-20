import React from 'react';
import { Link } from 'react-router';

const renderList = (repo) => {
  return(
      <Link to={`/repository/${repo.name}`} key={ repo.id }>
        <li className="list-group-item" >
          <span className="badge">{ repo.stargazers_count }</span>
          { repo.name }
        </li>
      </Link>
  )
}

const Repository = ({ repos = [] }) => {
  return (
      <ul className="list-group col-md-3">
        { repos.map(renderList) }
      </ul>
  );
}

export default Repository;
