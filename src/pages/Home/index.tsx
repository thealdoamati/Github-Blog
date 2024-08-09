import { useContext } from 'react'
import { GithubContext } from '../../context/GithubContext'
import { HomeDiv, ProfileCard, ProfileContent, ProfileTitle } from './styles'
import { SearchForm } from '../../components/SearchForm'
import { IssueCard } from '../../components/IssueCard'

export function Home() {
  const { user, userIssues } = useContext(GithubContext)

  return (
    <HomeDiv>
      <ProfileCard>
        <img src={user.avatar_url} alt={`${user.name}'s avatar`} />
        <ProfileContent>
          <ProfileTitle>
            <h1>{user.name}</h1>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </ProfileTitle>
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
        </ProfileContent>
      </ProfileCard>
      <div>
        <h3>Publicações</h3>
        <p>{userIssues.length} publicações</p>
      </div>

      <SearchForm />
      {userIssues.map((userIssue) => {
        return <IssueCard key={userIssue.id} issue={userIssue} />
      })}
    </HomeDiv>
  )
}
