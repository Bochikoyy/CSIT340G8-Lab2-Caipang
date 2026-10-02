import SectionHeading from './SectionHeading.jsx'
import ContactLink from './ContactLink.jsx'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:chrisnelcaipang@gmail.com" text="chrisnelcaipang@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/Bochikoyy" text="github.com/Bochikoyy" />
        <ContactLink label="Facebook" href="https://www.facebook.com/chrisnel.graine" text="facebook.com/chrisnel.graine" />
      </ul>
    </section>
  )
}

export default ContactSection
