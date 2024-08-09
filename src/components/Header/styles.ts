import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 0rem 8rem;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme['base-profile']} 0%,
    ${(props) => props.theme['base-border']} 100%
  );
  font-family: 'Coda', sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.blue};
  font-size: 0.5rem;
`
