# Personality Discovery App

A modern, playful personality discovery web app built with React and Vite. Users answer a short quiz to discover their personality archetype and receive personalized insights.

## ✨ Features

- **12 Engaging Questions** - Conversational questions that indirectly measure personality traits
- **9 Unique Archetypes** - Fun, memorable personality types like "The Chaos Creative" and "The Quiet Strategist"
- **14 Personality Dimensions** - Sophisticated scoring system measuring traits like energy, curiosity, independence, etc.
- **Modern Neo-Brutalist Design** - Bold typography, thick borders, strong contrast, and playful colors
- **Fully Responsive** - Mobile-first design that works on all devices
- **Share Results** - Users can copy and share their personality results
- **No Backend Required** - All calculations happen in the browser

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd personality-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components (future)
├── data/
│   ├── questions.js    # Quiz questions and answer options
│   └── personalities.js # Personality archetypes and descriptions
├── engine/
│   └── personalityCalculator.js  # Scoring algorithm
├── pages/
│   ├── LandingPage.jsx
│   ├── LandingPage.css
│   ├── QuizPage.jsx
│   ├── QuizPage.css
│   ├── ResultsPage.jsx
│   └── ResultsPage.css
├── hooks/
│   └── useQuiz.js      # Quiz state management
├── App.jsx             # Main app component
├── App.css
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## ✏️ Making Updates

### Adding or Editing Questions

Edit `src/data/questions.js`:

```javascript
{
  id: 13,
  question: "Your new question here?",
  type: "multiple",
  choices: [
    { text: "Option A", score: { energy: 4, social: 2 } },
    { text: "Option B", score: { creativity: 5, independence: 3 } },
    // Add more choices...
  ]
}
```

Each choice should include a `score` object with trait names and values (1-5).

### Adding or Editing Personality Archetypes

Edit `src/data/personalities.js`:

```javascript
{
  name: "Archetype Name",
  tagline: "Short, catchy description",
  description: "Full personality description...",
  strengths: ["Strength 1", "Strength 2", ...],
  observations: ["Observation 1", "Observation 2", ...],
  social: "Social style description...",
  work: "Work style description...",
  energy: "Energy description..."
}
```

### Customizing the Scoring Algorithm

Edit `src/engine/personalityCalculator.js`:

The `getArchetypeIndex()` function determines which archetype a user gets based on their scores. You can adjust the decision tree logic here:

```javascript
if (scores.spontaneity > 75 && scores.creativity > 70) {
  return 0; // Chaos Creative
}
// Add more conditions...
```

### Styling Changes

Global styles are in `src/index.css`. Each page has its own CSS file:
- `src/pages/LandingPage.css`
- `src/pages/QuizPage.css`
- `src/pages/ResultsPage.css`

Color palette:
- Primary: Electric Purple (`#8b5cf6`)
- Secondary: Bright Pink (`#ec4899`)
- Accent: Bright Yellow (`#fbbf24`)
- Accent: Cyan (`#06b6d4`)
- Background: Warm Off-White (`#fafaf8`)
- Text: Near Black (`#1a1a1a`)

## 🎨 Customization Tips

### Changing Colors

Find and replace color codes throughout the CSS files:
- `#8b5cf6` - Purple
- `#ec4899` - Pink
- `#fbbf24` - Yellow
- `#06b6d4` - Cyan

### Adjusting Number of Questions

Update the quiz to have more or fewer questions - just add/remove items in `src/data/questions.js`. The progress bar will automatically adjust.

### Modifying the Landing Page

Edit the hero text and preview cards in `src/pages/LandingPage.jsx`.

## 🔧 Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **JavaScript ES6+** - Modern JavaScript

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Vercel will auto-detect Vite and deploy

### Deploy to GitHub Pages

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/personality-app/',
  // ... rest of config
})
```

Then deploy the `dist/` folder.

## 🎯 Future Enhancements

- [ ] Backend integration for saving results
- [ ] User accounts and history
- [ ] More question types (sliders, image selections)
- [ ] Share to social media
- [ ] Comparison with friends
- [ ] PDF export of results
- [ ] Dark mode toggle

## 📝 License

MIT - Feel free to use and modify!

## 💡 Tips for Developers

1. **Test Locally** - Use `npm run dev` to test changes in real-time
2. **Hot Reload** - Vite automatically reloads when you save files
3. **Keep Components Simple** - Each page is self-contained
4. **Data-Driven** - Questions and archetypes are in separate files for easy updates
5. **Calculation Logic** - Personality calculation is separate from UI for flexibility

## 🤝 Need Help?

Check the code comments or review the structure above. The app is intentionally kept simple and readable for easy customization.

---

Built with ❤️ for personality discovery
