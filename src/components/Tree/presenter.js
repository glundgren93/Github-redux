import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';

class Tree extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  componentWillMount() {
    this.props.getTree(this.props.params.sha);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.sha !== this.props.params.sha) {
      this.props.getTree(nextProps.params.sha);
    }
  }

  renderList(file) {
    return (
      <tr key={ file.sha }>
        { file.type == 'tree'
       ? <td><Link to={`/repository/${this.props.params.repoName}/tree/${file.path}/${file.sha}`}>{ file.path }</Link></td>
       : <td><Link to={`/repository/${this.props.params.repoName}/blob/${file.sha}/${file.path}`}>{ file.path }</Link></td>}
      </tr>
    )
  }

  render() {
    const treeFile = this.props.tree;
    const fileName = this.props.params.path;

    return (
      <div className="row">
        <h3>{ fileName }</h3>
        <div className="col-md-12">
          <table className="table table-hover table-bordered">
            <tbody>
              { isEmpty(treeFile.tree) ? <tr>Loading</tr> : treeFile.tree.map(this.renderList) }
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}
export default Tree;
