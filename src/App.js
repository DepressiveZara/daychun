import './App.css';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDiscord,
} from 'react-icons/fa';
import Infomation from './components/Infomation';
import Avatar from './components/Avatar';
import avatar from './assets/avatar.jpg';

const infomations = {
  name: 'Ngo Quoc Dat',
  socials: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100086242208936',
      icon: <FaFacebook />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/datlechin',
      icon: <FaTwitter />,
    },
    {
      name: 'Github',
      url: 'https://github.com/datlechin',
      icon: <FaGithub />,
    },
    {
      name: 'Discord',
      url: 'https://discordapp.com/users/556129204526120980',
      icon: <FaDiscord />,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ngoquocdat2003',
      icon: <FaInstagram />,
    },
  ],
  paragraph:
    "I'm a full-stack web developer from Ho Chi Minh, Vietnam. I love Laravel and its ecosystem.",
};

function App() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center">
      <Avatar avatar={avatar} />
      <Infomation infomations={infomations} />
    </div>
  );
}

export default App;
