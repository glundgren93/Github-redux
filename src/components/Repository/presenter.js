import React, { Component } from 'react';
import { Link } from 'react-router';
import RepositoryTree from '../RepositoryTree/presenter'

const Readme = ({ readme }) => {
  return (
      <div>
        {
          readme == "" ?
          <h3>No Readme</h3> :
          <div className="panel panel-default">
            <div className="panel-heading">Readme</div>
            <div className="panel-body">
              <pre>
                { readme }
              </pre>
            </div>
          </div>
          }
      </div>
  )
}

const RepoCloneInfo = ({ repo }) => {
  return (
    <li className="col-md-4">
      <div className="input-group">
        <input type="text" readOnly className="form-control" type="text" id="clone_url" value={ repo.clone_url } />
        <span className="input-group-btn">
          <button className="btn btn-default" data-clipboard-target="#clone_url" type="button">
            <span className="glyphicon glyphicon-copy" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    </li>
  )
}

const RepositoryInfo = ({ repo }) => {
  return (
    <ul className="list-inline col-md-12">
      <li className="col-md-8"><Link to={`/repository/${repo.name}/commits`}><span className="label label-primary">Commits</span></Link></li>
      <RepoCloneInfo repo={ repo } />
    </ul>
  )
}

class Repository extends Component {
  componentWillMount() {
    this.props.getRepo(this.props.params.repoName);
  }

  render() {
    const { repo = {}, repoTree, readme = "" } = this.props;

    return (
      <div className="row">
          <h3>{ repo.full_name }</h3>
          <RepositoryInfo repo={repo} />
          <div className="col-md-12">
            <hr />
            <RepositoryTree repoTree={ repoTree } repo={ repo }/>
            <Readme readme={ readme } />
          </div>
      </div>
    )
  }
}

export default Repository;
