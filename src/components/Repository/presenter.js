import React, { Component } from 'react';
import { Link } from 'react-router';
import RepositoryTree from '../RepositoryTree/presenter'


class Repository extends Component {
  componentWillMount() {
    this.props.getRepo(this.props.params.repoName);
  }

  render() {


    const { repo = {}, repoTree } = this.props;

    return (
      <div className="row">
          <h3>{ repo.full_name }</h3>
            <ul className="list-inline col-md-12">
              <li className="col-md-8"><Link to={`/repository/${repo.name}/commits`}><span className="label label-primary">Commits</span></Link></li>
              <li className="col-md-4">
                <div className="input-group">
                  <input type="text" className="form-control" type="text" id="clone_url" value={ repo.clone_url } />
                  <span className="input-group-btn">
                    <button className="btn btn-default" data-clipboard-target="#clone_url" type="button">
                      <span className="glyphicon glyphicon-copy" aria-hidden="true"></span>
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          <div className="col-md-12">
            <hr />
            <RepositoryTree repoTree={ repoTree } repo={ repo }/>
          </div>
      </div>
    )
  }
}

export default Repository;
