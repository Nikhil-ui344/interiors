# Interiors - Luxury Interior Design Portfolio Website

A high-end, frontend-only React application inspired by Swiss Bureau Interior Design (sb-id.com), featuring smooth animations, modern design, and responsive layouts.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Framer Motion, GSAP
- **9 Complete Pages**: Home, About, Services, Projects, People, News, Contact + Detail Pages
- **Smooth Animations**: Framer Motion page transitions, GSAP scroll triggers, parallax effects
- **Fully Responsive**: Mobile-first design, optimized for all screen sizes
- **Reusable Components**: Modular architecture with 15+ reusable components
- **Clean Design**: Ultra-minimal aesthetic with elegant typography and spacious layouts
- **Dynamic Routing**: React Router with nested routes and category filtering

## 📁 Project Structure

```
interiors-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── PageHeader/
│   │   ├── ProjectCard/
│   │   ├── ServiceCard/
│   │   ├── TeamCard/
│   │   ├── Accordion/
│   │   ├── ImageGallery/
│   │   ├── ContactForm/
│   │   └── ScrollFadeIn/
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── ServiceDetail/
│   │   ├── Projects/
│   │   ├── ProjectDetail/
│   │   ├── People/
│   │   ├── News/
│   │   └── Contact/
│   ├── data/                # JSON data files
│   │   ├── services.json
│   │   ├── projects.json
│   │   ├── team.json
│   │   └── news.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

The application will be available at `http://localhost:5173`

## 🎨 Design Features

### Typography
- Primary Font: Montserrat (300, 400, 500, 600, 700)
- Clean hierarchy with generous letter spacing
- Minimal, elegant headings

### Color Palette
- Primary: `#1a1a1a` (Dark)
- Secondary: `#666` (Gray)
- Light: `#f5f5f5` (Off-white)
- White: `#ffffff`

### Animation Features
- **Framer Motion**: Page transitions, staggered animations, hover effects
- **GSAP ScrollTrigger**: Parallax effects, scroll-based reveals
- Smooth 60fps animations throughout

### Key Pages

#### Homepage
- Fullscreen hero with fade-in animation
- Introduction section with grid layout
- Featured projects gallery
- Parallax mid-section
- Services overview
- Statistics counter
- Call-to-action section

#### Projects
- Category filtering (All, Residential, Commercial, Hospitality)
- Grid layout with hover effects
- Individual project detail pages with image galleries

#### Services
- Service cards with detailed descriptions
- Accordion for process, timeline, deliverables
- Related projects section

#### About
- Company story and values
- Team showcase
- Image-driven narrative

#### People
- Team member grid
- Hover effects revealing names and positions
- Grayscale to color image transitions

#### Contact
- Multi-field contact form
- Business information
- Google Maps integration
- Business hours

## 📱 Responsive Breakpoints

- Desktop: 1400px+ (max-width container)
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **GSAP** - Professional animation platform
- **React Icons** - Icon components
- **CSS Modules** - Scoped styling

## 📄 Available Routes

- `/` - Homepage
- `/about` - About page
- `/services` - Services listing
- `/services/:id` - Service detail
- `/projects` - All projects
- `/projects/:category` - Filtered projects
- `/project/:id` - Project detail
- `/people` - Team page
- `/news` - News & insights
- `/contact` - Contact page

## 🖼️ Image Placeholders

All images use Unsplash as placeholder source. Replace with actual project images in production.

## 🎯 Key Components

### Navbar
- Sticky navigation with scroll effect
- Dropdown menus for Services and Projects
- Mobile-responsive hamburger menu

### Hero
- Configurable height (full, medium, small)
- Background image with overlay
- Animated title and subtitle

### ProjectCard
- Hover zoom effect
- Overlay with "View Project" link
- Category and location metadata

### ServiceCard
- Numbered cards with hover lift effect
- "Learn More" call-to-action
- Clean border design

### Accordion
- Smooth expand/collapse animations
- Single-item expansion
- Icon transitions

### ImageGallery
- Grid layout with lightbox
- Click to view full size
- Smooth modal animations

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "framer-motion": "^10.16.16",
  "gsap": "^3.12.4",
  "react-icons": "^4.12.0"
}
```

## 🚀 Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized animations (60fps)
- Minimal bundle size with Vite

## 🎨 Customization

### Update Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #1a1a1a;
  --color-secondary: #666;
  --color-light: #f5f5f5;
  --color-white: #ffffff;
}
```

### Update Content
Edit JSON files in `src/data/`:
- `services.json` - Service offerings
- `projects.json` - Portfolio projects
- `team.json` - Team members
- `news.json` - News articles

## 📝 License

This is a demo project for educational purposes.

## 👨‍💻 Author

Created as a high-end interior design portfolio template.

---

**Built with ❤️ using React, Framer Motion, and GSAP**
