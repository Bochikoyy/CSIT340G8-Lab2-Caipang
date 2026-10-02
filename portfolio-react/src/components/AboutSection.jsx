import SectionHeading from './SectionHeading.jsx'
import Fact from './Fact.jsx'

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="Who am I?" />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I'm a third-year BSIT student at Cebu Institute of Technology – University. Like a
        good cup of coffee, I think useful software comes together one thoughtful step at a
        time.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  )
}

export default AboutSection
