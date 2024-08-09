import styled from 'styled-components'

export const LoadingSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 74rem;
  margin: 2rem auto;
  padding: 0 1rem;
`

export const ArticleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 74rem;
  margin: -6rem auto;
  padding: 0 1rem;
`

export const ArticleHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ArticleCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h1 {
    font-size: 1.5rem;
    margin-top: 10px;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 15px;
    gap: 10px;

    p {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
