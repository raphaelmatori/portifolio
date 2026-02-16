## Portfolio App

This directory contains a single–page React application that renders a dark, modern portfolio homepage similar to the provided design (hero with tagline, GitHub call‑to‑action, avatar, social links, and featured project cards).

### Scripts

- **Install dependencies**

  ```bash
  npm install
  ```

- **Start development server**

  ```bash
  npm run dev
  ```

- **Build for production**

  ```bash
  npm run build
  ```

- **Preview production build**

  ```bash
  npm run preview
  ```

### Customisation

- Update text content and links in `src/components/HeroSection.tsx`, `src/components/FeaturedProjectsSection.tsx`, and `src/components/Footer.tsx`.
- To use a real avatar image, place `avatar.png` in a `public/` folder and replace the avatar markup in `HeroSection` with an `<img>` tag pointing to `/avatar.png`.

