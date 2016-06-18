import React from 'react';
import { Link } from 'react-router';

const Profile = ({ profile = {} }) => {
  return (
      <div className="col-md-4">
        <div class="row">
          <div className="col-md-9">
            <div className="thumbnail">
              <img src={ profile.avatar_url }></img>
              <div className="caption">
                <h3>{ profile.name }</h3>
                <h4>{ profile.login }</h4>
                <hr />
                <p>{ profile.location }</p>
                <p><a href='#'> { profile.email } </a></p>
                <a target='blank' href={ profile.blog }>{ profile.blog }</a>
                <hr />
                <h2 className='text-center'>
                  <span className="label label-primary">
                    { profile.followers}
                  </span>
                  {' '}
                  <span className="label label-primary">
                    { profile.following}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
