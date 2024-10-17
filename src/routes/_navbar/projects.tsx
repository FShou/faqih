import Underconstruction from '@/components/underconstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navbar/projects')({
  component: ProjectsComponent,
  beforeLoad: () => ({ getTitle: () => 'Projects' }),
})

function ProjectsComponent() {
  return <Underconstruction />
}
