import { createFileRoute, ErrorComponent, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectPageComponent,
  beforeLoad: ({params}) => {
    const projectName = params.projectId // TODO real name
    return { getTitle: () => projectName }
  },
  loader: ({params}) => {
    throw notFound()

    // TODO: fetch actual data
    return params.projectId

  },
  errorComponent: ErrorComponent,
})

function ProjectPageComponent(){
  const data = Route.useLoaderData()
  return (
  <div>
      <h1>This is {data}</h1>
    </div>
  )
}
