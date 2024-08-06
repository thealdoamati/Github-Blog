import { createContext, useEffect, useState } from 'react'
import { api } from '../api/axios'

export interface User {
  name: string
  bio: string | null
  login: string
  company: string
  followers: number
  avatar_url: string
  html_url: string
}

interface GithubContextType {
  user: User
  isUserLoading: boolean
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubProviderProps {
  children: React.ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<User>({
    name: '',
    bio: null,
    login: '',
    company: '',
    followers: 0,
    avatar_url: '',
    html_url: 'https://github.com/',
  })
  const [isUserLoading, setIsUserLoading] = useState(true)

  async function getUserData() {
    const username = 'thealdoamati'
    const response = await api.get(`/users/${username}`)
    const userData = response.data
    // setUser(userData)
    setIsUserLoading(false)
  }
  useEffect(() => {
    getUserData()
  }, [])

  return (
    <GithubContext.Provider value={{ user, isUserLoading }}>
      {children}
    </GithubContext.Provider>
  )
}
