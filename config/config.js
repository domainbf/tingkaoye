
import profile from './profile.PNG';
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
      title: "Domain Name Alliance",
      link: "https://domain.cards/",
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
  title: "Domain name held",
  cards: [
    {
      title: "NIC.BN",
      description: " Rare domain names.",
    },
    {
      title: "F.AF",
      description: "Single character domain name.",
    },
    {
      title: "L.KE",
      description: "Single character domain name.",
    },
    {
      title: "CXL.NET",
      description: "Welcome to quote.",
    },
    {
      title: "SORA.MK",
      description: "Welcome to quote.",
    },
    {
      title: "RULE.ML",
      description: "Welcome to quote.",
    },
    {
      title: "INTELS.AT",
      description: "Welcome to quote.",
    },
    {
      title: "SALE.VG",
      description: "Welcome to quote.",
    },
    {
      title: "Fil.ng",
      description: "Welcome to quote.",
    },
    {
      title: "FUCK.BF",
      description: "Welcome to quote.",
    },
    {
      title: "FUCK.FO",
      description: "Welcome to quote.",
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
          link: "https://nic.bn",
        },
        
      ]
    },
    {
      title: "Whois.ls",
      description: "Comprehensive query websites such as domain name availability and holder related information + DNS query",
      icons: [
        {
          icon: faGooglePlay,
          link: "https://whois.ls",
        },
      
      ]
    },
    {
      title: "Tools.st",
      description: "Domain name related navigation URL, including domain name registration price comparison, DNS query, Whois history and other related websites",
      icons: [
        {
          icon: faGooglePlay,
          link: "https://tools.st",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Every domain name has a story that belongs to it, and the story that belongs to you, it may be here.",
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
      link: "mailto:domain@name.cf",
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
      link: "tel:6267895678",
    },
  ]
}
