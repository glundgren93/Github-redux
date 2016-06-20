import React from 'react';
import { Link } from 'react-router';

const ProfileInfo = ({ profile }) => {
  return (
    <div>
      <h3>{ profile.name }</h3>
      <h4>{ profile.login }</h4>
      <hr />
      <p>{ profile.location }</p>
      <p><a href='#'> { profile.email } </a></p>
      <a target='blank' href={ profile.blog }>{ profile.blog }</a>
    </div>
  )
}

const ProfileFollowers = ({ profile }) => {
  return (
    <h2 className='text-center'>
      <span className="label label-primary">
        { profile.followers}
      </span>
      {' '}
      <span className="label label-primary">
        { profile.following}
      </span>
    </h2>
  )
}

const ProfileThumbnailCaption = ({ profile }) => {
  return (
    <div className="caption">
      <ProfileInfo profile={ profile } />
      <hr />
      <ProfileFollowers profile={ profile } />
    </div>
  )
}

const ProfileThumbnail = ({ profile }) => {
  return (
    <div className="thumbnail">
      <img src={ profile.avatar_url }></img>
      <ProfileThumbnailCaption profile={ profile } />
    </div>
  );
}

const Profile = ({ profile = {} }) => {
  return (
      <div className="col-md-4">
        <div class="row">
          <div className="col-md-9">
            <ProfileThumbnail profile={ profile } />
          </div>
        </div>
      </div>
  )
}

export default Profile;
