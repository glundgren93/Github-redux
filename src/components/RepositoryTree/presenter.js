import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';

class RepositoryTree extends Component {
  render() {
    const { repo, repoTree } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover table-bordered">
            <tbody>
              {
                isEmpty(repoTree) ?
                 <tr>Loading</tr> :
                 repoTree.tree.map((file) => {
                     return (
                       <tr key={ file.sha }>
                         { file.type == 'tree'
                           ? <td><Link to={`/repository/${repo.name}/tree/${file.path}/${file.sha}`}>{ file.path }</Link></td>
                           : <td><Link to={`/repository/${repo.name}/blob/${file.sha}/${file.path}`}>{ file.path }</Link></td>}
                       </tr>
                     )
                 })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default RepositoryTree;
