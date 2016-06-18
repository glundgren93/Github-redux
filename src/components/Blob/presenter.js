import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';

class Blob extends Component {
  componentWillMount() {
    this.props.getBlob(this.props.params.sha);
  }

  render() {
    const { blob } = this.props;
    const repoName = this.props.params.repoName;
    const fileName = this.props.params.path;

    return (
      <div>
        <h4>{ fileName }</h4>
        <pre>
          { blob }
        </pre>
      </div>
    )
  }
}

export default Blob;
