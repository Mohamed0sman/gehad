import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Book Your Session - Gehad Ashraf | Free Career Consultation",
  description:
    "Schedule your free discovery session with Gehad Ashraf. Get personalized, evidence-based guidance to clarify your career direction and next steps.",
  keywords:
    "Book Session, Career Consultation, Professional Development, Career Coaching, Free Consultation",
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
