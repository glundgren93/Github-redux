import React from 'react';
import { isEmpty } from 'lodash';

const RepositoryTree = ({ repoTree }) => {
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


export default RepositoryTree;
