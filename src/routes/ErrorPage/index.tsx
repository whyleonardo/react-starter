import { Helmet } from 'react-helmet'
import { useRouteError } from 'react-router'

export const ErrorPage = () => {
  const error = useRouteError()

  console.log(error)
  return (
    <>
      <Helmet title="Error" />
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </>
  )
}
