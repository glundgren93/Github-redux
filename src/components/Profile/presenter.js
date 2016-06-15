import React from 'react';
import { Link } from 'react-router';

const Profile = ({ profile = {} }) => {
  return (
      <div className="col-md-4 pull left">
        <div class="row">
          <div className="col-md-9">
            <div className="thumbnail">
              <img src={ profile.avatar_url }></img>
              <div className="caption">
                <h3>{ profile.name }</h3>
                <p>{ profile.login }</p>
                <hr />
                <p>{ profile.location }</p>
                <p>{ profile.email }</p>
                <p>{ profile.blog }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
