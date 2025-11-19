# Modern Hospital - Next.js Website

A Modern, responsive hospital website built with Next.js 14, featuring Server-Side Rendering (SSR) and ready for Client-Side Rendering (CSR) enhancements.

## Features

- **Server-Side Rendering (SSR)** - Fast initial page loads and SEO-friendly
- **Responsive Design** - Mobile-first approach with Modern UI/UX
- **Component-Based Architecture** - Reusable components with individual CSS files
- **TypeScript Support** - Type-safe development
- **Modern Styling** - Global CSS with component-specific stylesheets

## Project Structure

```
Modern_hospital/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── specialities/      # Specialities pages
│   ├── health-packages/   # Health packages pages
│   ├── contact/           # Contact page
│   ├── find-doctor/       # Find doctor page
│   ├── appointment/       # Appointment booking
│   ├── blog/              # Blog pages
│   └── news/              # News pages
├── components/            # Reusable components
│   ├── Header/           # Header component
│   ├── Footer/           # Footer component
│   ├── Hero/             # Hero section
│   ├── Specialities/     # Specialities section
│   ├── HealthPackages/   # Health packages section
│   ├── PatientStories/   # Patient stories section
│   ├── Blog/             # Blog section
│   └── NewsMedia/        # News & Media section
└── package.json          # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Pages & Routes

- `/` - Homepage
- `/about` - About Us
- `/specialities` - All Specialities
- `/specialities/[slug]` - Individual Speciality
- `/health-packages` - Health Check Packages
- `/contact` - Contact Us
- `/find-doctor` - Find a Doctor
- `/appointment` - Request Appointment
- `/blog` - Blog Listing
- `/news` - News & Media

## Styling

- **Global Styles**: `app/globals.css` - Contains CSS variables, reset styles, and global utilities
- **Component Styles**: Each component has its own CSS file (e.g., `Header/Header.css`)
- **Page Styles**: Each page can have its own CSS file (e.g., `about/page.css`)

## Future Enhancements

- Client-Side Rendering (CSR) for interactive components
- API integration for dynamic content
- Authentication system
- Appointment booking system
- Online report viewing
- Doctor search functionality

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS3

## License

MIT

