import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import BlogPosts from '@/components/BlogPosts'
import BlogCategories from '@/components/BlogCategories'

export const metadata = {
  title: 'Blog - Gehad Ashraf | Career Development & Personal Growth Articles',
  description: 'Read the latest articles and insights on career development, personal growth, and building your professional path from Gehad Ashraf, NCDA Certified Professional.',
}

export default function Blog() {
  return (
    <main>
      <Header />
      <BlogHero />
      <BlogCategories />
      <BlogPosts />
      <Footer />
    </main>
  )
}