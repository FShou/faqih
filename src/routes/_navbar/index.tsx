import HeroSection from '@/components/hero-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_navbar/')({
  component: HomeComponent,
  beforeLoad: () => ({ getTitle: () => 'Faqih Suyudi' }),
})

function HomeComponent() {
  return (
      <HeroSection />
  )
}
