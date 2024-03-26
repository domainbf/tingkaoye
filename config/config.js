
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
  title: "Holding domain",
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
  title: "Member website",
  cards: [
    {
      title: "NIC.BN",
      description: "Nic.bn is a company that provides services such as special price domain name registration, domain name customization and domain name delay delivery.",
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
      title: "Whois.ls",
      description: "Comprehensive query websites such as domain name availability and holder related information + DNS query.",
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
      title: "tools.st",
      description: "Domain name related navigation URL, including domain name registration price comparison, DNS query, Whois history and other related websites.",
      icons: [
        {
          icon: faGithub,
          link: "https://tools.st",
          
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
export const bottomHTML = `
<a title="米表联盟[Domain.Cards]" href="https://domain.cards/"><img width="150" height="40" src="https://domain.cards/api/badge/[domain]" atl="米表联盟 BadgeBar"/></a>
`;
