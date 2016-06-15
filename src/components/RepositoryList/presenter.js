import React from 'react';
import { Link } from 'react-router';

const Repository = ({ repos = [], getRepo }) => {
  return (
      <ul className="list-group col-md-3">
        {
          repos.map((repo) => {
            return(
                <Link to={`/repository/${repo.id}`} key={ repo.id }>
                  <li onClick={ () => getRepo(repo.name) } className="list-group-item" >
                    <span className="badge">{ repo.stargazers_count }</span>
                    { repo.name }
                  </li>
                </Link>
            )
          })
        }
      </ul>
  );
}

export default Repository;
