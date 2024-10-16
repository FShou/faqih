import Underconstruction from '@/components/underconstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navbar/blogs/')({
  component: BlogsComponent,
  beforeLoad: () => ({ getTitle: () => 'Blogs' }),
})

function BlogsComponent(){

  return (
  <Underconstruction />
  )
}
