import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);
  background: ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
