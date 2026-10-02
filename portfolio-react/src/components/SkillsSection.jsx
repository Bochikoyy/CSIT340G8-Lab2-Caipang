import SectionHeading from './SectionHeading.jsx'
import SkillTag from './SkillTag.jsx'

function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Python" />
            <SkillTag name="Java" />
            <SkillTag name="C" />
            <SkillTag name="Kotlin" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Frameworks and engines</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Next.js" />
            <SkillTag name="Spring Boot" />
            <SkillTag name="Unity" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="VS Code" />
            <SkillTag name="Git" />
            <SkillTag name="Canva" />
            <SkillTag name="Codex" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
