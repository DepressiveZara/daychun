import './App.css'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import Infomation from './components/Infomation'
import Avatar from './components/Avatar'
import avatar from './assets/avatar.jpg'

const infomations = {
  name: 'Ngo Quoc Dat',
  socials: [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: <FaFacebook />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <FaTwitter />,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: <FaInstagram />,
    },
    {
      name: 'Github',
      url: 'https://github.com',
      icon: <FaGithub />,
    },
  ],
  paragraph:
    'he only way to learn a new programming language is by writing programs in it.',
}

function App() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center">
      <Avatar avatar={avatar} />
      <Infomation infomations={infomations} />
    </div>
  )
}

export default App
