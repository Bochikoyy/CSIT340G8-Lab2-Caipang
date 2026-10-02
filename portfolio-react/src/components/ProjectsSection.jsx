import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have worked on." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="AutoPDF"
          description="A Windows utility that watches Downloads and converts supported files to PDF in the background while preserving originals."
          tech="Python · PySide6 · SQLite"
          link="https://github.com/Bochikoyy/AutoPDF"
        />
        <ProjectCard
          year="2026"
          title="Rot"
          description="A creature-catching RPG with tile-based exploration, turn-based battles, quests, and save slots."
          tech="Java · Swing · AWT"
          link="https://github.com/ZyrilR/Rot"
        />
        <ProjectCard
          year="2026"
          title="Sunroom Study Reviewer"
          description="A lesson workspace that brings notes, flashcards, quizzes, and a focus timer together."
          tech="JavaScript · Vite · Playwright"
          link="https://github.com/Bochikoyy/reviewerRoom"
        />
        <ProjectCard
          year="2026"
          title="Ukayearn"
          description="A Cebu thrift marketplace prototype for browsing listings, making offers, chatting with sellers, and simulated checkout."
          tech="Kotlin · Android · Gradle"
          link="https://github.com/koi-frog143/Ukayearn"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
