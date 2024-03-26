
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "NIC.BN",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@hashirshoaeb",
    }
  ],
}

export const intro = {
  title: "Hey, I'm Li",
  description: "A player who especially likes to collect domain names.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "mailto:domain@name.cf",
      isPrimary: true,
    },
    {
      title: "NIC.BN",
      link: "https://nic.bn",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Secure transaction",
  description: [
    "We guarantee that after you make the payment, the domain name will be securely transferred to any registered platform that you recognize.",
  ],
}

export const work = {
  title: "The domain name we hold",
  cards: [
    {
      title: "NIC.BN",
      description: "Rare domain names.",
      icons: null,
    },
    {
      title: "F.AF",
      description: "Single character domain name.",
      icons: null,
    },
    {
      title: "L.KE",
      description: "Single character domain name.",
      icons: null,
    }
  ],
}


export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faearth-americas,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "I firmly believe that in the future digital field, holding a top-notch domain name will make your individual or company's ID on the Internet unique. NIC.BN.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:domain@name.cf",
      isPrimary: true,
    },
    {
      title: "register",
      link: "https://nic.bn",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Registered domain name | single character one letter domain name | Custom domain name | delayed delivery domain name",
  description: "Since 2022, we have provided customers with personalized one-letter single-character domain names and special prefix net domain names. We look forward to providing you with domain name privatization customization services.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@不讲李",
  description: "Like domain names | Likes beautiful women | Likes food",
  cards: [
    {
      title: "My Email",
      link: "domain@name.cf",
    },
    {
      title: "My WhatsApp",
      link: "https://wa.me/16267895678",
    },
    {
      title: "My Telegram",
      link: "https://t.me/domain_bf",
    },
    {
      title: "My Twitter",
      link: "https://twitter.com/domain_bf",
    },
    {
      title: "My VOICE",
      link: "+16267895678",
    },
  ]
}
