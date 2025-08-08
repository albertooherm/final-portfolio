# Alberto Hermosillo Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features internationalization, dark/light theme support, and reusable components.

## 🚀 Features

- **Internationalization**: Support for English and Spanish
- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Theme**: Toggle between themes
- **Reusable Components**: Modular component architecture
- **TypeScript**: Full type safety
- **Framer Motion**: Smooth animations
- **Tailwind CSS**: Utility-first styling
- **ESLint & Prettier**: Code quality and formatting

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── cards/            # Card components
│   │   ├── WorkExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ArticleCard.tsx
│   │   └── index.ts
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ClientOnly.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Articles.tsx
│   └── ui/               # UI components
│       ├── AnimatedSection.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── contexts/             # React contexts
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── hooks/                # Custom hooks
│   ├── useScrollAnimation.ts
│   └── usePortfolioData.ts
├── i18n/                 # Internationalization
│   └── locales/
│       ├── en.json
│       └── es.json
├── lib/                  # Utility functions
│   ├── data.ts
│   └── utils.ts
└── types/                # TypeScript types
    └── index.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd albert-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🌐 Internationalization

The project supports multiple languages through JSON files in `src/i18n/locales/`. To add a new language:

1. Create a new JSON file in `src/i18n/locales/`
2. Add the language to the `Language` type in `src/types/index.ts`
3. Update the language context to include the new language

### Data Structure

All content is managed through the internationalization files:

```json
{
  "navigation": {
    "designerName": "Alberto Hermosillo",
    "projects": "Projects",
    "about": "About"
  },
  "data": {
    "workExperience": [
      {
        "id": "google",
        "title": "Product Designer",
        "company": "Google",
        "description": "..."
      }
    ],
    "projects": [...],
    "articles": [...]
  }
}
```

## 🎨 Customization

### Adding New Content

1. **Work Experience**: Add entries to `data.workExperience` in the locale files
2. **Projects**: Add entries to `data.projects` in the locale files
3. **Articles**: Add entries to `data.articles` in the locale files

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Colors and fonts can be customized in:

- `src/app/globals.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration

### Components

All components are modular and reusable. To create a new component:

1. Create the component in the appropriate directory
2. Add TypeScript types in `src/types/index.ts`
3. Export from the relevant index file
4. Use the `usePortfolioData` hook for data access

## 🔧 Configuration

### ESLint

ESLint is configured with Next.js and TypeScript rules. Configuration is in `eslint.config.mjs`.

### Prettier

Prettier is configured for consistent code formatting. Configuration is in `.prettierrc`.

### TypeScript

TypeScript configuration is in `tsconfig.json` with strict type checking enabled.

## 📱 Responsive Design

The project is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎭 Animations

Animations are powered by Framer Motion and include:

- Scroll-triggered animations
- Hover effects
- Page transitions
- Loading states

## 🌙 Theme Support

The project supports both light and dark themes:

- Automatic theme detection
- Manual theme toggle
- Persistent theme preference
- Smooth theme transitions

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and type checking
5. Submit a pull request

## 📞 Contact

For questions or support, please contact [your-email@example.com]
