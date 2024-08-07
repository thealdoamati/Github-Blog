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
  fetchUserIssues: (query: string) => void
  isIssuesLoading: boolean
  userIssues: string
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
  const [isIssuesLoading, setIsIssuesLoading] = useState(true)
  const [userIssues, setUserIssues] = useState('')
  const [search, setSearch] = useState('')
  const username = 'thealdoamati'
  const repo = 'Github-Blog'

  async function getUserData() {
    const response = await api.get(`/users/${username}`)
    const userData = response.data
    setUser(userData)
    setIsUserLoading(false)
  }

  async function fetchUserIssues(query?: string) {
    const searchQuery = query || search
    const response = await api.get(`/search/issues`, {
      params: {
        q: `${searchQuery} repo:${username}/${repo}`,
        sort: 'created',
        order: 'desc',
      },
    })
    const userIssues = response.data.items
    setUserIssues(userIssues)
    setIsIssuesLoading(false)
  }

  useEffect(() => {
    getUserData()
    fetchUserIssues('')
  }, [])

  return (
    <GithubContext.Provider
      value={{
        user,
        isUserLoading,
        fetchUserIssues,
        isIssuesLoading,
        userIssues,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
