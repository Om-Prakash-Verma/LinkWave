import { Category } from './types';

export const categories: Category[] = [
  {
    id: 'dev-tools',
    title: 'Developer Tools',
    iconName: 'Code',
    description: 'Essential resources for software development, debugging, and deployment.',
    subCategories: [
      {
        id: 'editors',
        title: 'IDEs & Editors',
        links: [
          {
            title: 'VS Code',
            url: 'https://code.visualstudio.com/',
            description: 'Free, open source code editor redefined and optimized for building and debugging modern web and cloud applications.',
            tags: ['Microsoft', 'Open Source', 'Popular'],
            isRecommended: true
          },
          {
            title: 'Neovim',
            url: 'https://neovim.io/',
            description: 'Hyperextensible Vim-based text editor.',
            tags: ['CLI', 'Vim', 'Advanced']
          },
          {
            title: 'Zed',
            url: 'https://zed.dev/',
            description: 'High-performance, multiplayer code editor from the creators of Atom and Tree-sitter.',
            tags: ['Rust', 'Fast']
          }
        ]
      },
      {
        id: 'hosting',
        title: 'Free Hosting',
        links: [
          {
            title: 'Vercel',
            url: 'https://vercel.com',
            description: 'Develop. Preview. Ship. For the best frontend experience.',
            tags: ['Frontend', 'Next.js', 'Free Tier'],
            isRecommended: true
          },
          {
            title: 'Netlify',
            url: 'https://netlify.com',
            description: 'A powerful serverless platform with an intuitive git-based workflow.',
            tags: ['Static', 'Functions']
          },
          {
            title: 'Render',
            url: 'https://render.com',
            description: 'A unified cloud to build and run all your apps and websites.',
            tags: ['Backend', 'Postgres']
          }
        ]
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    iconName: 'Shield',
    description: 'Tools to protect your digital footprint and secure your data.',
    subCategories: [
      {
        id: 'browsers',
        title: 'Browsers',
        links: [
          {
            title: 'Firefox',
            url: 'https://www.mozilla.org/en-US/firefox/new/',
            description: 'The independent, ethical browser that puts your privacy first.',
            tags: ['Open Source', 'Recommended'],
            isRecommended: true
          },
          {
            title: 'Brave',
            url: 'https://brave.com/',
            description: 'Fast, private and secure web browser for PC, Mac and mobile.',
            tags: ['Chromium', 'Adblock']
          },
          {
            title: 'Tor Browser',
            url: 'https://www.torproject.org/',
            description: 'Defend yourself against tracking and surveillance. Circumvent censorship.',
            tags: ['Anonymity', 'Onion']
          }
        ]
      },
      {
        id: 'vpn',
        title: 'VPN Services',
        links: [
          {
            title: 'Proton VPN',
            url: 'https://protonvpn.com',
            description: 'Secure internet access sent through an encrypted VPN tunnel.',
            tags: ['Free Tier', 'Swiss'],
            isRecommended: true
          },
          {
            title: 'Mullvad',
            url: 'https://mullvad.net',
            description: 'Privacy-focused VPN service that requires no personal information.',
            tags: ['Paid', 'Anonymous']
          }
        ]
      }
    ]
  },
  {
    id: 'media',
    title: 'Media & Design',
    iconName: 'Image',
    description: 'Resources for graphic design, video editing, and audio production.',
    subCategories: [
      {
        id: 'photos',
        title: 'Stock Photos',
        links: [
          {
            title: 'Unsplash',
            url: 'https://unsplash.com',
            description: 'The internet’s source for visuals. Powered by creators everywhere.',
            tags: ['Free', 'High Quality'],
            isRecommended: true
          },
          {
            title: 'Pexels',
            url: 'https://pexels.com',
            description: 'Free stock photos and videos you can use everywhere.',
            tags: ['Video', 'Photo']
          }
        ]
      },
      {
        id: 'icons',
        title: 'Icon Sets',
        links: [
          {
            title: 'Lucide',
            url: 'https://lucide.dev',
            description: 'Beautiful & consistent icon toolkit made by the community.',
            tags: ['SVG', 'React'],
            isRecommended: true
          },
          {
            title: 'Heroicons',
            url: 'https://heroicons.com',
            description: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
            tags: ['Tailwind']
          }
        ]
      }
    ]
  },
  {
    id: 'learning',
    title: 'Learning Resources',
    iconName: 'BookOpen',
    description: 'Courses, books, and tutorials to learn new skills.',
    subCategories: [
      {
        id: 'cs',
        title: 'Computer Science',
        links: [
          {
            title: 'OSSU',
            url: 'https://github.com/ossu/computer-science',
            description: 'Path to a free self-taught education in Computer Science.',
            tags: ['Curriculum', 'Github'],
            isRecommended: true
          },
          {
            title: 'Full Stack Open',
            url: 'https://fullstackopen.com/en/',
            description: 'Deep dive into modern web development.',
            tags: ['React', 'Node.js']
          }
        ]
      }
    ]
  }
];