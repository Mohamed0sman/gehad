import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingHero from '@/components/BookingHero'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import BookingSteps from '@/components/BookingSteps'

export const metadata = {
  title: 'احجز جلسة - Gehad Ashraf | استشارة مهنية مجانية',
  description: 'احجز جلسة اكتشاف مجانية مع جهاد أشرف. احصل على إرشاد شخصي قائم على الأدلة لتوضيح اتجاهك المهني والخطوات التالية. Book your free session with Gehad Ashraf.',
  keywords: 'احجز جلسة, استشارة مهنية, تطوير مهني, Career Consultation, Book Session',
}

export default function Booking() {
  return (
    <main>
      <Header />
      <div className="pt-16 lg:pt-20">
        <BookingHero />
        <BookingSteps />
        
        {/* Calendly Embed Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  اختر الوقت المناسب لك
                </h2>
                <CalendlyEmbed height="700px" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
