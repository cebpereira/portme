import { About } from '@/components/About'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Rail } from '@/components/Rail'
import { Skills } from '@/components/Skills'
import { Toaster } from '@/components/ui/sonner'
import { useContent } from '@/lib/i18n'

export default function App() {
  const content = useContent()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cobalt focus:px-4 focus:py-2 focus:text-chalk"
      >
        {content.nav.skipToContent}
      </a>

      <Rail />

      <div className="lg:pl-60 xl:pl-68">
        <main id="main">
          <div className="mx-auto max-w-[58rem] space-y-14 px-5 sm:space-y-16 sm:px-8 lg:px-12">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
          </div>

          <Contact />
        </main>

        <Footer />
      </div>

      <Toaster position="bottom-right" />
    </>
  )
}
