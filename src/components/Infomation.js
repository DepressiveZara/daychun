import Paragraph from './Paragraph'
import SocialList from './SocialList'

function Infomation({ infomations }) {
  return (
    <div className="text-center space-y-7 mt-6 md:mt-0 md:ml-16 md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold uppercase">
        {infomations.name}
      </h1>
      <Paragraph text={infomations.paragraph} />
      <SocialList socials={infomations.socials} />
    </div>
  )
}

export default Infomation
