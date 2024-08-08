import { Issue } from '../../context/GithubContext'
import { IssueCardHeader, IssueCardWrapper } from './styles'

interface IssueCardProps {
  issue: Issue
}

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <IssueCardWrapper
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IssueCardHeader>
        <h1>{issue.title}</h1>
        <p>{issue.created_at}</p>
      </IssueCardHeader>
      <p>{issue.body}</p>
    </IssueCardWrapper>
  )
}
