# Ekene Chris Personal Website

This is the personal website and brand platform for Ekene Chris, DevOps Architect and Technical Educator.

## Technologies Used

- **Next.js 14** - React framework with server-side rendering and static site generation
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ekene-personal-website.git
cd ekene-personal-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
ekene-personal-website/
├── public/              # Static files like images
│   └── images/          # Website images
├── src/                 # Source code
│   ├── app/             # App router pages
│   │   ├── about/       # About page
│   │   ├── blog/        # Blog page
│   │   ├── contact/     # Contact page
│   │   ├── resources/   # Resources page
│   │   ├── globals.css  # Global CSS
│   │   └── layout.js    # Root layout
│   └── components/      # Reusable components
│       ├── Footer.jsx   # Footer component
│       └── Header.jsx   # Header component
├── .gitignore          # Git ignore file
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── README.md           # Project documentation
└── tailwind.config.js  # Tailwind configuration
```

## Customization

### Images

Replace the placeholder images in the `public/images` directory with your own images.

### Content

Update the content in the page files to match your specific information, services, and offerings.

### Styling

The website uses the following color scheme:

- Linen (`#FFF4E9`) - Background color
- Black (`#111111`) - Text and dark sections
- Caput Mortuum (`#592429`) - Primary accent color
- Kombu Green (`#2B3B2E`) - Secondary accent color
- Gold (`#FFD700`) - Highlight accent color

To modify the color scheme, update the `tailwind.config.js` file and the `:root` variables in `globals.css`.

## Deployment

### Deploy to Vercel

The easiest way to deploy this website is using [Vercel](https://vercel.com), the platform from the creators of Next.js:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project to Vercel
3. Vercel will detect it's a Next.js project and use the optimal build settings automatically

### Other Deployment Options

You can also deploy this website to other platforms:

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

## Contact

For questions or support regarding this website, please contact [hello@ekenechris.com](mailto:hello@ekenechris.com).
