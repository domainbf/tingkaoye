
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "NIC.BN",
  links: [
    {
      title: "website",
      link: "#about",
    },
    {
      title: "domain name",
      link: "#projects",
    },
    {
      title: "Mi Biao Franchise",
      link: "#contact",
    },
    {
      title: "Contact information",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://shen.fan",
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
  title: "Who I am",
  description: [
    "We provide domain names with customization personalization uniqueness characteristics top-level domain names and provide you with high-quality domain names at a good price which will help you occupy a vital place in the digital field in the future.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "I create pixel perfect iOS and Andriod apps using Flutter.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "NIC.BN",
      description: "Nic.bn is a company that provides services such as special price domain name registration, domain name customization and domain name delay delivery.",
      icons: [
        {
          icon: faGooglePlay,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        
      ]
    },
    {
      title: "Whois.ls",
      description: "Comprehensive query websites such as domain name availability and holder related information + DNS query",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
      
      ]
    },
    {
      title: "Tools.st",
      description: "Domain name related navigation URL, including domain name registration price comparison, DNS query, Whois history and other related websites",
      icons: [
        {
          icon: faGooglePlay,
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
