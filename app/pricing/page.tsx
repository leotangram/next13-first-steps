import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Esta es la página de precios de mis servicios'
}

const PricingPage = () => {
  return <span className="text-7xl">Pricing Page</span>
}

export default PricingPage
