import React from 'react';
import Header from '../Header/presenter';
import { Link } from 'react-router';

const Repository = ({ repos = [], getRepo }) => {
  return (
      <div className="row">
          <Header name="Repositories" />
          <ul className="list-group col-md-4">
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
        </div>
  );
}

export default Repository;
