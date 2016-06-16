import React, { Component } from 'react';
import { isEmpty } from 'lodash';

class RepositoryTree extends Component {
  render() {
    const { repoTree } = this.props;

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
                     <td>{ file.path }</td>
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
