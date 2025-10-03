import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import BlogPosts from '@/components/BlogPosts'
import BlogCategories from '@/components/BlogCategories'

export const metadata = {
  title: 'المدونة - جهاد أشرف | مقالات التوجيه المهني والتطوير الشخصي',
  description: 'اقرأ أحدث المقالات والنصائح في التوجيه المهني، التطوير الشخصي، وبناء المسار المهني من جهاد أشرف، مدربة معتمدة NCDA.',
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