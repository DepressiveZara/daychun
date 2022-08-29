function Paragraph({ text }) {
  return (
    <p className="italic text-sm md:text-base px-5 md:px-0 max-w-sm md:max-w-md font-mono opacity-75">
      {text}
    </p>
  )
}

export default Paragraph
