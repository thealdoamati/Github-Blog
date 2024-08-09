import styled from 'styled-components'

export const IssueCardWrapper = styled.a`
  background-color: #1f2937;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  color: white;
  text-decoration: none;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #374151;
  }
`

export const IssueCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const IssuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  width: 100%;
  margin-top: 16px;
`
