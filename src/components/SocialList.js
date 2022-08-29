function SocialList({ socials }) {
  return (
    <ul className="flex space-x-5 justify-center md:justify-start">
      {socials.map(({ name, url, icon }) => (
        <li className="text-white text-lg" key={name}>
          <a href={url} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialList
