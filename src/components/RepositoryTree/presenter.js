import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';

class RepositoryTree extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(file) {
    return (
      <tr key={ file.sha }>
        { file.type == 'tree'
          ? <td><Link to={`/repository/${this.props.repo.name}/tree/${file.path}/${file.sha}`}>{ file.path }</Link></td>
          : <td><Link to={`/repository/${this.props.repo.name}/blob/${file.sha}/${file.path}`}>{ file.path }</Link></td>}
      </tr>
    )
  }

  render() {
    const { repoTree } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover table-bordered">
            <tbody>
              { isEmpty(repoTree) ? <tr>Loading</tr> : repoTree.tree.map(this.renderList) }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default RepositoryTree;
