import { useContext, useEffect } from 'react'
import * as z from 'zod'
import { GithubContext } from '../../context/GithubContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer, SearchInput } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchUserIssues } = useContext(GithubContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    mode: 'onChange',
  })

  async function searchTransactions(data: SearchFormInputs) {
    fetchUserIssues(data.query)
  }

  useEffect(() => {
    fetchUserIssues('')
  }, [])

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchTransactions)}>
      <SearchInput type="text" placeholder="Buscar" {...register('query')} />
    </SearchFormContainer>
  )
}
