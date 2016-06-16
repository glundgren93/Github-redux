import React, { Component } from 'react';
import { Link } from 'react-router';
import RepositoryTree from '../RepositoryTree/presenter'

class Repository extends Component {
  componentWillMount() {
    this.props.getRepo(this.props.params.name);
  }

  render() {
    const { repo = {}, repoTree } = this.props;
    console.log('render repository')

    return (
      <div className="row">
        <h3>{ repo.full_name }</h3>
      <div>
        <hr />
        <RepositoryTree repoTree={ repoTree } />
      </div>
        <Link to="/" className="btn btn-primary pull-right">Back</Link>
      </div>
    )
  }
}

export default Repository;
