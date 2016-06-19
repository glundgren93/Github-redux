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
        <Link to={`/repository/${repo.name}/commits`}>Commits</Link>
        <div>
          <RepositoryTree repoTree={ repoTree } repo={ repo }/>
        </div>
      </div>
    )
  }
}

export default Repository;
