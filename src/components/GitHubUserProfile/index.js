import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Card = styled.div`
  ${tw`bg-teal-500 text-white p-4 rounded-md w-auto max-w-sm mx-auto`}
  img {
    ${tw`w-auto max-w-full rounded-md`}
  }
  .content {
    ${tw`bg-white rounded-md text-gray-900 p-2 my-1`}
  }
  a {
    ${tw`text-teal-800 font-bold`}
  }
`;

function GitHubUserProfile(props) {
  console.log('props', props);

  const { name, login, bio, avatar_url, company, created_at } = props.user;
  return (
    <Card>
      <div className="image">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="content">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${login}`}
          className="header"
        >
          {name}
        </a>
        {created_at && (
          <div className="meta">
            <span className="date">
              Joined in
              {created_at.substring(0, 4)}
            </span>
          </div>
        )}
        <div className="description">{bio}</div>
        <div className="company">
          <a href={company}>{company}</a>
        </div>
      </div>
      <div className="extra content">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${login}?tab=followers`}
        >
          <i className="user icon" />
          Followers
        </a>
      </div>
    </Card>
  );
}

export default GitHubUserProfile;
