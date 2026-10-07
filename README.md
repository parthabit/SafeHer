# 🛡️ SafeHer — Women Safety Platform

> **Your safety is our priority.**  
> Instant emergency alerts, trusted helplines, AI support, and safety tools — all in one place. Because every woman deserves to feel safe

🌐 **Live Site:** [safeher-official.netlify.app](https://safeher-official.netlify.app)

--

## ✨ Features 

### 🚨 One-Tap SOS Alert
Press the pulsing SOS button to instantly trigger a loud alarm and send an emergency alert. Notifies your trusted contacts with your location.

### 📳 Shake-to-SOS
Shake your phone hard 3 times to trigger a loud alarm — no need to unlock your phone. Enable it from the banner at the top of the page. Works on mobile via device motion sensors.

### 👩 Trusted Contacts
Add up to 3 emergency contacts with real phone numbers. Tap **Call** to instantly open your phone's dialer. Contacts are saved locally in your browser.

### 🗺️ Journey Tracker
Enter your destination and ETA before traveling alone. Your trusted contact gets notified when you start. If you don't check in on time, an automatic alert is triggered. Works offline with last known state.

### 🤖 SafeHer AI Chatbot
A 24/7 AI assistant powered by **Gemini 2.0 Flash**. Provides emotional support, practical safety advice, and emergency guidance. Falls back to built-in safety responses when offline.

### 📞 Emergency Helplines
Quick-dial buttons for Indian emergency numbers:
| Number | Service |
|--------|---------|
| 112 | Emergency Services (Police / Ambulance / Fire) |
| 1091 | National Women Helpline |
| 181 | Abhayam — Women in Distress |
| 9152987821 | iCall — Mental Health Support |

### ⚡ Offline Mode
Core features — SOS alarm, trusted contacts, shake detection — work without an internet connection. An offline banner appears automatically when connectivity is lost.

### 🔒 Safe Route Planner & Anonymous Reporting
*(Coming soon)* Community-powered unsafe area map and anonymous incident reporting.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| AI Chatbot | Gemini 2.0 Flash via Netlify Serverless Function |
| Hosting | Netlify |
| CI/CD | GitHub → Netlify auto-deploy |
| Storage | Browser `localStorage` (contacts, journey state) |

---

## 🚀 Deployment

This project is deployed on **Netlify** with continuous deployment from GitHub.

### Setup Steps

**1. Clone the repo**
```bash
git clone https://github.com/parthabit/SafeHer.git
cd SafeHer
```

**2. Add Gemini API Key in Netlify**
- Go to Netlify → Site configuration → Environment variables
- Add variable:
  - Key: `GEMINI_API_KEY`
  - Value: your key from [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

**3. Deploy**
- Push to `main` branch → Netlify auto-deploys
- Or drag & drop the folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Project Structure
```
SafeHer/
├── index.html              # Main website (single page)
├── netlify.toml            # Netlify config + security headers
├── netlify/
│   └── functions/
│       └── chat.js         # Serverless function — Gemini API proxy
└── README.md
```

### How the AI Chatbot Works
```
User types message
      ↓
Browser → POST /.netlify/functions/chat
      ↓
Netlify Function reads GEMINI_API_KEY (server-side, never exposed)
      ↓
Calls Gemini 2.0 Flash API
      ↓
Returns reply to browser
```
The API key never reaches the client. ✅

---

## 📱 Mobile Features

| Feature | How to Use |
|---------|-----------|
| Shake-to-SOS | Enable from top banner → shake phone 3× hard |
| Call buttons | Tap any Call button → opens phone dialer directly |
| Offline SOS | Works without internet — alarm still plays |
| Journey Tracker | Enter destination + ETA → auto-alerts if overdue |

---

## 🤝 Contributing

Contributions are welcome! Ideas for future features:
- [ ] Fake call simulator
- [ ] Incident heatmap (crowdsourced unsafe areas)
- [ ] Safe spots directory (verified late-night places)
- [ ] Wearable / smartwatch integration
- [ ] Multilingual support (Hindi, Bengali, Tamil...)
- [ ] PWA / installable mobile app

---

## 📄 License

This project is open source and free to use. Built with ❤️ for women's safety.

---

## ⚠️ Disclaimer

SafeHer is a safety awareness tool. In a real emergency, always call **112** first. This tool is not a substitute for professional emergency services.

---

*"You are never alone."* —-SafeHer
