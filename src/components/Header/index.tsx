import { HeaderStyle } from './styles'
import logo from '../../assets/blog_logo.svg'

export function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="" />
      <h1>GITHUB BLOG</h1>
    </HeaderStyle>
  )
}
