import { useContext } from 'react'
import { GithubContext } from '../../context/GithubContext'
import { HomeDiv, ProfileCard } from './styles'

export function Home() {
  const { user } = useContext(GithubContext)

  return (
    <HomeDiv>
      <ProfileCard>
        <img src={user.avatar_url} alt={`${user.name}'s avatar`} />
        <div>
          <div>
            <h1>{user.name}</h1>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </div>
          <p>{user.bio}</p>
          <div>
            <p>
              <svg width="16" height="16" fill="currentColor">
                <use href="#icon-github" />
              </svg>
              {user.login}
            </p>
            <p>
              <svg width="16" height="16" fill="currentColor">
                <use href="#icon-company" />
              </svg>
              {user.company}
            </p>
            <p>
              <svg width="16" height="16" fill="currentColor">
                <use href="#icon-followers" />
              </svg>
              {user.followers} seguidores
            </p>
          </div>
        </div>
      </ProfileCard>
      <div>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>
    </HomeDiv>
  )
}
