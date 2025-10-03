import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingHero from '@/components/BookingHero'
import BookingForm from '@/components/BookingForm'
import BookingSteps from '@/components/BookingSteps'

export const metadata = {
  title: 'احجز جلستك - جهاد أشرف | حجز جلسة توجيه مهني مجانية',
  description: 'احجز جلستك المجانية مع جهاد أشرف، مدربة التوجيه المهني المعتمدة. استشارة شخصية لمساعدتك في تحديد مسارك المهني.',
}

export default function Booking() {
  return (
    <main>
      <Header />
      <BookingHero />
      <BookingSteps />
      <BookingForm />
      <Footer />
    </main>
  )
}