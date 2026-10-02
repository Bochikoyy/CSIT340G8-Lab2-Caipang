import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I lead, learn, and keep building." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">

        <TimelineItem
          period="Ongoing"
          title="Independent Developer"
          place="Self-employed"
          description="Building web, mobile, and game projects to strengthen my skills and turn ideas into working software."
        />

        <TimelineItem
          period="Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="A third-year student learning through coursework and hands-on projects."
        />

        <TimelineItem
          period="41st administration"
          title="CRAR Chairperson and IT Representative"
          place="CIT-U SSG Legislative Core"
          description="Serving in the student government legislative team and representing IT students."
        />

      </ol>
    </section>
  )
}

export default ExperienceSection
