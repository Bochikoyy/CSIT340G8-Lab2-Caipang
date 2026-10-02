function ContactLink({ label, href, text }) {
  const external = /^https?:\/\//.test(href)

  return (
    <li>
      <span className="inline-block w-24 text-sm text-stone-500">{label}</span>
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="font-medium hover:underline">{text}</a>
    </li>
  )
}

export default ContactLink
