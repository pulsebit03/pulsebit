# PulseBit Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases PulseBit's services, portfolio, and contact information with a sleek design and smooth animations.

## Features

- 🌓 Dark/Light mode support
- 🎨 Modern and responsive design
- ✨ Smooth animations and transitions
- 📱 Mobile-first approach
- 📬 Contact form with email integration
- 🗺️ Google Maps integration
- 💬 WhatsApp integration
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 15.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: Nodemailer
- **UI Components**: Custom React components
- **Development Tools**: ESLint, TurboRepo

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pulsebit_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_RECEIVE=contact@yourdomain.com
   ```
   Note: For EMAIL_PASS, use an App Password generated from your Google Account.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── app/         # App router pages
│   ├── components/  # React components
│   └── utils/       # Utility functions
├── .env            # Environment variables
└── package.json    # Project dependencies
```

## Deployment

This website can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: contact@pulsebit.tech
- Phone: +91 6306411343
- Address: Grasim Colony, Renukoot, Sonebhadra UP(231217), India
