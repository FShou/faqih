import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navbar/about')({
  component: () => <div>Hello /_navbar/about!</div>,
  beforeLoad: () => ({ getTitle: () => 'About' }),
})
