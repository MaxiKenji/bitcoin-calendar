# Bitcoin Calendar

A sleek, modern web application that converts Gregorian calendar years to Bitcoin time, measuring time from either the Bitcoin Whitepaper publication (2008) or the Genesis Block creation (2009).

## 🌐 Live Demo

Visit the live application at: [bitcoincalendar.net](https://bitcoincalendar.net)

## ✨ Features

- **Year Conversion**: Convert any Gregorian year to Bitcoin time format
- **Dual Reference Points**: Toggle between Whitepaper (2008) or Genesis Block (2009) as Year 0
- **Interactive Examples**: Pre-built examples showing historical events in Bitcoin time
- **Dark Theme**: Beautiful, Bitcoin-themed dark interface with orange accents
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Copy to Clipboard**: Easy sharing of converted dates
- **Accessibility**: Full keyboard navigation and screen reader support

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML/CSS/JavaScript (for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MaxiKenji/bitcoin-calendar.git
cd bitcoin-calendar
```

2. Open `index.html` in your web browser or serve with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code Live Server extension
# Right-click index.html and select "Open with Live Server"
```

## 📁 Project Structure

```
bitcoin-calendar/
├── index.html          # Main HTML file
├── style.css          # Comprehensive CSS with design system
├── app.js             # Core JavaScript functionality
├── logo.svg           # Bitcoin logo
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## 🎯 How It Works

### Conversion Logic

- **Before Bitcoin (BB)**: Years before the reference point
- **After Bitcoin (AB)**: Years after the reference point
- **Year 0 AB**: The reference year itself (2008 for Whitepaper, 2009 for Genesis Block)

### Example Conversions

| Gregorian Year | Whitepaper Mode | Genesis Block Mode |
|---|---|---|
| 1971 (Nixon Shock) | 37 BB | 38 BB |
| 2008 (Whitepaper) | Year 0 AB | 1 BB |
| 2009 (Genesis Block) | 1 AB | Year 0 AB |
| 2024 (Current) | 16 AB | 15 AB |
| 2140 (Last Bitcoin) | 132 AB | 131 AB |

## 🛠️ Technical Details

### Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern design system with CSS custom properties
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Custom Fonts**: Ubuntu font family for clean typography

### Key Features Implementation

1. **Input Validation**: Real-time validation with user feedback
2. **Toggle Switch**: Custom-styled toggle for reference point selection
3. **Animation System**: Smooth transitions and loading animations
4. **Copy Functionality**: Cross-browser clipboard integration with fallbacks
5. **Responsive Grid**: CSS Grid with mobile-first approach

### Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- iOS Safari 14+
- Android Chrome 88+

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: Bitcoin orange (#F7931A) with dark theme
- **Typography**: Ubuntu font with carefully crafted scales
- **Spacing System**: Consistent 8px base unit
- **Component Library**: Buttons, cards, forms, and status indicators
- **Dark/Light Mode**: Automatic detection with manual override support

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Test on multiple browsers and devices
- Ensure accessibility compliance
- Update documentation as needed

## 💝 Support

If you find this project useful, consider supporting its development:

- ⭐ **Star** the repository
- 🐛 **Report** bugs and issues
- 💡 **Suggest** new features
- ☕ **Donate** via the integrated BTCPay Server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Satoshi Nakamoto for creating Bitcoin
- The Bitcoin community for inspiration
- Contributors and supporters of this project

## 📧 Contact

- GitHub: [@MaxiKenji](https://github.com/MaxiKenji)
- Website: [bitcoincalendar.net](https://bitcoincalendar.net)

---

*"Time is the most valuable thing we have. Bitcoin time is revolutionary time."*