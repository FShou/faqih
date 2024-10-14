import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navbar/blogs/')({
  component: () => <div>Hello /_navbar/blog/!</div>,
  beforeLoad: () => ({ getTitle: () => 'Blogs' }),
})
