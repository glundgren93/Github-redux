import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';

class RepositoryTree extends Component {
  render() {
    const { repo, repoTree } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {
            isEmpty(repoTree) ?
             <tr>Loading</tr> :
             repoTree.tree.map((file) => {
                 return (
                   <tr key={ file.sha }>
                     <td><Link to={`/repository/${repo.name}/${file.sha}`}>{ file.path }</Link></td>
                   </tr>
                 )
             })
          }
        </tbody>
      </table>
    )
  }
}
export default RepositoryTree;
