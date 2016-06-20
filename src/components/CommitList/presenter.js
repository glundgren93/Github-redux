import React, { Component } from 'react';
import { isEmpty } from 'lodash';

class CommitList extends Component {
  componentWillMount() {
    this.props.getCommitList();
  }

  renderCommitList(c) {
    const date = new Date(c.commit.author.date);

    return (
     <tr key={c.sha}>
      <td>
        {
          c.author == null ?
          null :
          <div className="media-left col-md-1">
            <a href="#" className='thumbnail'>
              <img src={ c.author.avatar_url } alt="..." />
            </a>
          </div>
        }
        <h4>
          { c.commit.message }
        </h4>
        { c.commit.author.name } commited on { date.toDateString() }.
      </td>
     </tr>
    )
  }

  render() {
    const { commitList } = this.props;

    return (
      <div className="row">
        <h3>Commits</h3>
        <div className="col-md-12">
          <table className="table table-hover table-bordered">
            <tbody>
              { isEmpty(commitList) ? <tr>Loading</tr> : commitList.map(this.renderCommitList) }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default CommitList;
