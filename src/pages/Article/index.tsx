import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GithubContext, Issue } from '../../context/GithubContext'
import { ArticleCard, ArticleDiv, ArticleHead, LoadingSpan } from './styles'

export function Article() {
  const [article, setArticle] = useState<Issue>()
  const { issueId } = useParams()
  axios.get(`/${issueId}`)
  const { userIssues, fetchUserIssues, isIssuesLoading } =
    useContext(GithubContext)

  useEffect(() => {
    if (userIssues.length > 0) {
      const foundIssue = userIssues.find(
        (userIssue) => userIssue.id === Number(issueId),
      )
      setArticle(foundIssue)
    } else {
      fetchUserIssues('')
    }
  }, [fetchUserIssues, issueId, userIssues])

  return (
    <>
      {isIssuesLoading ? (
        <LoadingSpan>Loading...</LoadingSpan>
      ) : (
        <ArticleDiv>
          <ArticleCard>
            <ArticleHead>
              <a href="/">VOLTAR</a>
              <a href={article?.html_url}>VER NO GITHUB</a>
            </ArticleHead>

            <h1>{article?.title}</h1>
            <div>
              <span>{article?.user.login}</span>
              <span>{article?.created_at}</span>
              <span>{article?.comments} comentários</span>
            </div>
          </ArticleCard>
          <p>{article?.body}</p>
        </ArticleDiv>
      )}
    </>
  )
}
