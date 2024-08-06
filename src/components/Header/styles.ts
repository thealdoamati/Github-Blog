import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 0rem 8rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-profile']};
  font-family: 'Coda', sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.blue};
  font-size: 0.5rem;
`
