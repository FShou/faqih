import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navbar/projects/')({
  component: () => <div>Hello /_navbar/projects/!</div>,
  beforeLoad: () => ({ getTitle: () => 'Projects' }),
})
