import React, { Component } from 'react';
import { Link } from 'react-router';

class Blob extends Component {
  componentWillMount() {
    this.props.getBlob(this.props.params.sha);
  }

  render() {
    const { blob } = this.props;
    const repoName = this.props.params.name;

    return (
      <div>
        <pre>
          { blob }
        </pre>
        <Link to={`/repository/${repoName}`} className="btn btn-primary pull-right">Back</Link>
      </div>
    )
  }
}

export default Blob;
