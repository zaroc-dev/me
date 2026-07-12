export type Locale = 'en' | 'de';

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  href?: string;
  featured?: boolean;
  metric?: string;
  metricLabel?: string;
  repoHref?: string;
};

export type SiteContent = {
  locale: Locale;
  meta: { title: string; description: string };
  skip: string;
  nav: { work: string; journey: string; lab: string; contact: string; menu: string };
  system: { online: string; location: string };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    intro: string;
    primary: string;
    secondary: string;
    terminalLabel: string;
    terminal: Array<{ key: string; value: string }>;
    terminalPrompt: string;
  };
  stats: Array<{ value: string; label: string }>;
  work: { eyebrow: string; title: string; intro: string; viewProject: string; projects: Project[] };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    present: string;
    items: Array<{ date: string; title: string; place?: string; description: string; active?: boolean }>;
  };
  lab: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: Array<{ code: string; title: string; description: string; detail: string }>;
    quote: string;
    quoteLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    copy: string;
    copied: string;
    linksLabel: string;
  };
  command: { open: string; placeholder: string; empty: string; hint: string; navigation: string; projects: string; actions: string };
  footer: { built: string; source: string; backToTop: string };
};

const projects = {
  en: [
    {
      id: 'valstore', index: '01', title: 'Valstore', featured: true,
      description: 'A mobile Valorant shop that grew from a Flutter experiment into a product used by more than 100,000 players.',
      tags: ['Flutter', 'Android', 'Product'], status: 'Shipped', metric: '100k+', metricLabel: 'users',
      href: 'https://github.com/zaroc-dev/valstore-mobile',
    },
    {
      id: 'pipapromotion', index: '02', title: 'Pipa Promotion', featured: true,
      description: 'My first client website: a focused digital home for a promotion agency, designed and delivered end to end.',
      tags: ['Web', 'Client work', '2026'], status: 'Live', metric: '01', metricLabel: 'client launch',
      href: 'https://pipapromotion.de',
    },
    {
      id: 'kafka', index: '03', title: 'Kafka',
      description: 'A student platform for planning semesters and making university life a little less chaotic.',
      tags: ['Next.js', 'Firebase'], status: 'Project', href: 'https://kafka.zaroc.de', repoHref: 'https://github.com/zaroc-dev/kafka',
    },
    {
      id: 'luminotes', index: '04', title: 'Luminotes',
      description: 'Cross-platform infinite-canvas note-taking for thoughts that refuse to fit on a page.',
      tags: ['Flutter', 'Canvas'], status: 'Experiment', href: 'https://github.com/zaroc-dev/luminotes',
    },
    {
      id: 'mc68k', index: '05', title: 'MC68K Emulator',
      description: 'A Rust-based Motorola 68000 emulator concept paired with its own code editor.',
      tags: ['Rust', 'Emulation'], status: 'Concept', href: 'https://github.com/zaroc-dev/mc68000-emulator',
    },
    {
      id: 'qube', index: '06', title: 'Qube',
      description: 'Self-deployable game servers for turning a blank machine into a shared Minecraft world.',
      tags: ['Docker', 'Next.js'], status: 'Homelab', href: 'https://github.com/zaroc-dev/qube',
    },
    {
      id: 'wallpaper', index: '07', title: 'Wallpaper Engine UI',
      description: 'A Linux GUI wrapper that makes Wallpaper Engine integration feel at home on the desktop.',
      tags: ['Flutter', 'Linux'], status: 'Open source', href: 'https://github.com/zaroc-dev/linux-wallpaperengine-ui',
    },
    {
      id: 'dotfiles', index: '08', title: 'NixOS / Dotfiles',
      description: 'My reproducible Linux environment, configuration archive, and permanently unfinished digital workshop.',
      tags: ['NixOS', 'Linux', 'Rice'], status: 'Always active', href: 'https://github.com/zaroc-dev/dotfiles',
    },
  ],
  de: [
    {
      id: 'valstore', index: '01', title: 'Valstore', featured: true,
      description: 'Ein mobiler Valorant-Shop, der vom Flutter-Experiment zu einem Produkt mit mehr als 100.000 Nutzern wurde.',
      tags: ['Flutter', 'Android', 'Produkt'], status: 'Veröffentlicht', metric: '100k+', metricLabel: 'Nutzer',
      href: 'https://github.com/zaroc-dev/valstore-mobile',
    },
    {
      id: 'pipapromotion', index: '02', title: 'Pipa Promotion', featured: true,
      description: 'Meine erste Kundenwebsite: ein fokussierter digitaler Auftritt für eine Promotion-Agentur – von Konzept bis Launch.',
      tags: ['Web', 'Kundenprojekt', '2026'], status: 'Live', metric: '01', metricLabel: 'Kundenlaunch',
      href: 'https://pipapromotion.de',
    },
    {
      id: 'kafka', index: '03', title: 'Kafka',
      description: 'Eine Plattform zur Semesterplanung, die den Hochschulalltag ein kleines Stück weniger chaotisch macht.',
      tags: ['Next.js', 'Firebase'], status: 'Projekt', href: 'https://kafka.zaroc.de', repoHref: 'https://github.com/zaroc-dev/kafka',
    },
    {
      id: 'luminotes', index: '04', title: 'Luminotes',
      description: 'Plattformübergreifende Notizen auf einer unendlichen Leinwand – für Gedanken, die auf keine Seite passen.',
      tags: ['Flutter', 'Canvas'], status: 'Experiment', href: 'https://github.com/zaroc-dev/luminotes',
    },
    {
      id: 'mc68k', index: '05', title: 'MC68K Emulator',
      description: 'Das Konzept eines Motorola-68000-Emulators in Rust, kombiniert mit einem eigenen Code-Editor.',
      tags: ['Rust', 'Emulation'], status: 'Konzept', href: 'https://github.com/zaroc-dev/mc68000-emulator',
    },
    {
      id: 'qube', index: '06', title: 'Qube',
      description: 'Selbst deploybare Gameserver, die aus einer leeren Maschine eine gemeinsame Minecraft-Welt machen.',
      tags: ['Docker', 'Next.js'], status: 'Homelab', href: 'https://github.com/zaroc-dev/qube',
    },
    {
      id: 'wallpaper', index: '07', title: 'Wallpaper Engine UI',
      description: 'Ein Linux-GUI-Wrapper, mit dem sich die Wallpaper-Engine-Integration auf dem Desktop zu Hause fühlt.',
      tags: ['Flutter', 'Linux'], status: 'Open Source', href: 'https://github.com/zaroc-dev/linux-wallpaperengine-ui',
    },
    {
      id: 'dotfiles', index: '08', title: 'NixOS / Dotfiles',
      description: 'Meine reproduzierbare Linux-Umgebung, mein Konfigurationsarchiv und meine dauerhaft unfertige digitale Werkstatt.',
      tags: ['NixOS', 'Linux', 'Rice'], status: 'Immer aktiv', href: 'https://github.com/zaroc-dev/dotfiles',
    },
  ],
} satisfies Record<Locale, Project[]>;

export const content: Record<Locale, SiteContent> = {
  en: {
    locale: 'en',
    meta: {
      title: 'Arthur “ZAROC” Aktamirov — Software Engineer',
      description: 'Portfolio of Arthur Aktamirov — software engineer, Linux enthusiast, and builder of useful systems.',
    },
    skip: 'Skip to content',
    nav: { work: 'Work', journey: 'Journey', lab: 'Lab', contact: 'Contact', menu: 'Open command menu' },
    system: { online: 'Available for interesting work', location: 'Baden-Württemberg, DE' },
    hero: {
      eyebrow: 'Software engineer · system tinkerer',
      title: 'I build useful systems,',
      accent: 'from polished apps to strange experiments.',
      intro: 'I’m Arthur “ZAROC” Aktamirov — a technical computer science student, working engineer, and Linux enthusiast who likes turning ambitious ideas into things people can actually use.',
      primary: 'Explore my work',
      secondary: 'GitHub profile',
      terminalLabel: 'Active session',
      terminal: [
        { key: 'operator', value: 'arthur / zaroc' },
        { key: 'base', value: 'baden-württemberg, de' },
        { key: 'focus', value: 'web · systems · automation' },
        { key: 'mode', value: 'building & learning' },
      ],
      terminalPrompt: 'ready for the next quest',
    },
    stats: [
      { value: '100k+', label: 'users reached' },
      { value: '8', label: 'selected builds' },
      { value: '2024', label: 'working in industry since' },
      { value: 'DE / EN', label: 'communication' },
    ],
    work: {
      eyebrow: 'Selected deployments', title: 'Projects with a pulse.',
      intro: 'Products, experiments, and open-source work across mobile, web, systems, and infrastructure.',
      viewProject: 'Open project', projects: projects.en,
    },
    journey: {
      eyebrow: 'Activity log', title: 'Still becoming.',
      intro: 'A path from building my first PC to building software for users, clients, and students.',
      present: 'Now',
      items: [
        { date: '2026', title: 'First client launch', place: 'Pipa Promotion', description: 'Designed and developed my first customer website from brief to production.', active: true },
        { date: '2025–26', title: 'Programming lecturer', place: 'Albstadt-Sigmaringen University', description: 'Taught the practical Programming 1 course and helped students find their footing in Python.' },
        { date: 'May 2025', title: 'Swarovski Hackathon', description: 'Built, tested, and presented under a very real deadline.' },
        { date: 'Since 2024', title: 'Working student · Software Development', description: 'Python, web development, Docker, GitLab CI/CD, and PostgreSQL in production-facing work.' },
        { date: 'Ongoing', title: 'B.Eng. Technical Computer Science', place: 'Albstadt-Sigmaringen University', description: 'Studying the boundary between software and the machines it runs on.' },
        { date: 'Earlier', title: 'Application Development apprenticeship', description: 'Built foundations in C#, RPG, SQL, and professional software development.' },
        { date: 'Origin', title: 'Technical Abitur', description: 'Built my first PC, wrote my first Java programs, and never really stopped tinkering.' },
      ],
    },
    lab: {
      eyebrow: 'Off the main thread', title: 'The lab is always running.',
      intro: 'The things I explore when no ticket is telling me what to build.',
      cards: [
        { code: '01', title: 'Linux & rice', description: 'NixOS, dotfiles, reproducible systems, and spending entirely reasonable amounts of time on a status bar.', detail: 'github.com/zaroc-dev/dotfiles' },
        { code: '02', title: 'Homelab & agents', description: 'Self-hosting, Ollama, n8n, automation, and finding useful jobs for small fleets of agents.', detail: 'automation · ai · infrastructure' },
        { code: '03', title: 'Fantasy worlds', description: 'Eragon, Tolkien, The Witcher, and the stories that eventually supplied the name ZAROC.', detail: 'books · lore · worldbuilding' },
        { code: '04', title: 'Games that fight back', description: 'Soulslikes, RPGs, and systems that reward curiosity, patience, and one more attempt.', detail: 'soulslikes · rpgs · gaming' },
      ],
      quote: 'Curiosity is the root process.', quoteLabel: 'Operating principle',
    },
    contact: {
      eyebrow: 'Open channel', title: 'Let’s build something worth shipping.',
      intro: 'Have an interesting project, an unreasonable technical idea, or just want to compare homelab notes? My inbox is open.',
      copy: 'Copy Discord handle', copied: 'Copied .zaroc.', linksLabel: 'Find me elsewhere',
    },
    command: { open: 'Command menu', placeholder: 'Type a command or search…', empty: 'No matching command.', hint: 'to open', navigation: 'Navigation', projects: 'Projects', actions: 'Actions' },
    footer: { built: 'Designed and built by Arthur Aktamirov with Astro.', source: 'View source', backToTop: 'Back to top' },
  },
  de: {
    locale: 'de',
    meta: {
      title: 'Arthur „ZAROC“ Aktamirov — Softwareentwickler',
      description: 'Portfolio von Arthur Aktamirov — Softwareentwickler, Linux-Enthusiast und Erbauer nützlicher Systeme.',
    },
    skip: 'Zum Inhalt springen',
    nav: { work: 'Projekte', journey: 'Werdegang', lab: 'Labor', contact: 'Kontakt', menu: 'Befehlsmenü öffnen' },
    system: { online: 'Offen für spannende Projekte', location: 'Baden-Württemberg, DE' },
    hero: {
      eyebrow: 'Softwareentwickler · Systemtüftler',
      title: 'Ich entwickle nützliche Systeme –',
      accent: 'von durchdachten Apps bis zu seltsamen Experimenten.',
      intro: 'Ich bin Arthur „ZAROC“ Aktamirov – Student der Technischen Informatik, Werkstudent und Linux-Enthusiast. Ich verwandle ambitionierte Ideen gerne in Dinge, die Menschen tatsächlich nutzen können.',
      primary: 'Projekte entdecken',
      secondary: 'GitHub-Profil',
      terminalLabel: 'Aktive Sitzung',
      terminal: [
        { key: 'operator', value: 'arthur / zaroc' },
        { key: 'basis', value: 'baden-württemberg, de' },
        { key: 'fokus', value: 'web · systeme · automation' },
        { key: 'modus', value: 'bauen & lernen' },
      ],
      terminalPrompt: 'bereit für die nächste quest',
    },
    stats: [
      { value: '100k+', label: 'erreichte Nutzer' },
      { value: '8', label: 'ausgewählte Projekte' },
      { value: '2024', label: 'in der Branche seit' },
      { value: 'DE / EN', label: 'Kommunikation' },
    ],
    work: {
      eyebrow: 'Ausgewählte Deployments', title: 'Projekte mit Puls.',
      intro: 'Produkte, Experimente und Open-Source-Arbeit aus Mobile, Web, Systems und Infrastruktur.',
      viewProject: 'Projekt öffnen', projects: projects.de,
    },
    journey: {
      eyebrow: 'Aktivitätslog', title: 'Immer in Entwicklung.',
      intro: 'Vom ersten selbst gebauten PC zu Software für Nutzer, Kunden und Studierende.',
      present: 'Heute',
      items: [
        { date: '2026', title: 'Erster Kundenlaunch', place: 'Pipa Promotion', description: 'Meine erste Kundenwebsite vom Briefing bis zum Produktivbetrieb konzipiert und entwickelt.', active: true },
        { date: '2025–26', title: 'Dozent · Programmieren 1', place: 'Hochschule Albstadt-Sigmaringen', description: 'Das Python-Praktikum begleitet und Studierenden beim Einstieg ins Programmieren geholfen.' },
        { date: 'Mai 2025', title: 'Swarovski Hackathon', description: 'Unter einer sehr realen Deadline gebaut, getestet und präsentiert.' },
        { date: 'Seit 2024', title: 'Werkstudent · Softwareentwicklung', description: 'Python, Webentwicklung, Docker, GitLab CI/CD und PostgreSQL in produktionsnahen Projekten.' },
        { date: 'Laufend', title: 'B.Eng. Technische Informatik', place: 'Hochschule Albstadt-Sigmaringen', description: 'Studium an der Schnittstelle zwischen Software und den Maschinen, auf denen sie läuft.' },
        { date: 'Davor', title: 'Ausbildung · Anwendungsentwicklung', description: 'Fundament in C#, RPG, SQL und professioneller Softwareentwicklung aufgebaut.' },
        { date: 'Ursprung', title: 'Technisches Abitur', description: 'Den ersten PC gebaut, die ersten Java-Programme geschrieben und seitdem nicht mehr aufgehört zu tüfteln.' },
      ],
    },
    lab: {
      eyebrow: 'Abseits des Main Threads', title: 'Das Labor läuft immer.',
      intro: 'Die Dinge, die ich erkunde, wenn kein Ticket vorgibt, was als Nächstes entsteht.',
      cards: [
        { code: '01', title: 'Linux & Rice', description: 'NixOS, Dotfiles, reproduzierbare Systeme und vollkommen angemessen viel Zeit für eine Statusleiste.', detail: 'github.com/zaroc-dev/dotfiles' },
        { code: '02', title: 'Homelab & Agents', description: 'Self-Hosting, Ollama, n8n, Automation und nützliche Aufgaben für kleine Agentenflotten.', detail: 'automation · ai · infrastruktur' },
        { code: '03', title: 'Fantasy-Welten', description: 'Eragon, Tolkien, The Witcher und die Geschichten, aus denen schließlich der Name ZAROC entstand.', detail: 'bücher · lore · worldbuilding' },
        { code: '04', title: 'Spiele mit Gegenwehr', description: 'Soulslikes, RPGs und Systeme, die Neugier, Geduld und einen weiteren Versuch belohnen.', detail: 'soulslikes · rpgs · gaming' },
      ],
      quote: 'Neugier ist der Root-Prozess.', quoteLabel: 'Betriebsprinzip',
    },
    contact: {
      eyebrow: 'Offener Kanal', title: 'Lass uns etwas bauen, das einen Launch verdient.',
      intro: 'Ein spannendes Projekt, eine leicht unvernünftige technische Idee oder Lust auf Homelab-Austausch? Mein Postfach ist offen.',
      copy: 'Discord-Handle kopieren', copied: '.zaroc. kopiert', linksLabel: 'Weitere Profile',
    },
    command: { open: 'Befehlsmenü', placeholder: 'Befehl eingeben oder suchen…', empty: 'Kein passender Befehl.', hint: 'zum Öffnen', navigation: 'Navigation', projects: 'Projekte', actions: 'Aktionen' },
    footer: { built: 'Entworfen und gebaut von Arthur Aktamirov mit Astro.', source: 'Quellcode', backToTop: 'Nach oben' },
  },
};

export const isLocale = (value: string | undefined): value is Locale => value === 'en' || value === 'de';
