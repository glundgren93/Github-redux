import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';

class Tree extends Component {
  componentWillMount() {
    this.props.getTree(this.props.params.sha);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.sha !== this.props.params.sha) {
      this.props.getTree(nextProps.params.sha);
    }
  }

  render() {
    const treeFile = this.props.tree;
    const repoName = this.props.params.repoName;
    const fileName = this.props.params.path;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>{ fileName }</th>
          </tr>
        </thead>
        <tbody>
          {
            isEmpty(treeFile.tree) ?
             <tr>Loading</tr> :
             treeFile.tree.map((file) => {
                 return (
                   <tr key={ file.sha }>
                     { file.type == 'tree'
                    ? <td><Link to={`/repository/${repoName}/tree/${file.path}/${file.sha}`}>{ file.path }</Link></td>
                    : <td><Link to={`/repository/${repoName}/blob/${file.sha}/${file.path}`}>{ file.path }</Link></td>}
                   </tr>
                 )
             })
          }
        </tbody>
      </table>
    )
  }
}
export default Tree;
