import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingHero from '@/components/BookingHero'
import BookingForm from '@/components/BookingForm'
import BookingSteps from '@/components/BookingSteps'

export const metadata = {
  title: 'Book a Session - Gehad Ashraf | Free Career Consultation',
  description: 'Book your free session with Gehad Ashraf. Get personalized, evidence-based guidance to clarify your career direction and next steps.',
}

export default function Booking() {
  return (
    <main>
      <Header />
      <div className="pt-16 lg:pt-20">
        <BookingHero />
        <BookingSteps />
        <BookingForm />
      </div>
      <Footer />
    </main>
  )
}