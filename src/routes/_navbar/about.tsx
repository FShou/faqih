import Underconstruction from '@/components/underconstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navbar/about')({
  component: AboutComponent,
  beforeLoad: () => ({ getTitle: () => 'About' }),
})

function AboutComponent(){
  return (
  <Underconstruction />
  )
}
