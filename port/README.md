# Portfolio — Component Architecture

## File Structure

```
src/
├── services/
│   └── api.js              ← All backend calls (portfolioApi)
├── hooks/
│   └── index.js            ← usePortfolioData, useActiveSection, useReveal,
│                              useInViewAnimation, useScrollProgress, useContactForm
├── components/
│   ├── UI.jsx              ← Cursor, ScrollProgress, Loader, Icon library
│   ├── Sidebar.jsx         ← Nav sidebar + social links
│   ├── Hero.jsx            ← Landing section
│   ├── About.jsx           ← About me + animated skill bars
│   ├── Projects.jsx        ← Paginated project cards slider
│   ├── Sections.jsx        ← Education, Experience, Certifications, Interests
│   └── Contact.jsx         ← Contact form + Footer
└── App.jsx                 ← Root: fetches data once, wires all sections
```

---

## services/api.js

Central HTTP layer. Every API endpoint is in one place:

```js
import portfolioApi from './services/api';

// Individual calls
await portfolioApi.getProfile();
await portfolioApi.getProjects();
await portfolioApi.sendContact({ name, email, message });

// Fetch all at once (used in App.jsx)
const data = await portfolioApi.fetchAll();
```

Set your backend URL via an env variable:
```
VITE_API_URL=https://your-backend.com/api
```

---

## hooks/index.js

| Hook                        | Purpose                                     |
|-----------------------------|---------------------------------------------|
| `usePortfolioData()`        | Fetches all data, returns `{ data, loading, error }` |
| `useActiveSection(ids)`     | Tracks which section is visible (for nav)   |
| `useReveal()`               | Triggers `.in` on `.reveal` elements        |
| `useInViewAnimation(t)`     | Returns `[ref, inView]` — fires once        |
| `useScrollProgress()`       | Returns 0–100 scroll percentage             |
| `useContactForm()`          | Form state + submission with loading/error  |

---

## Backend API Expectations

| Method | Endpoint           | Response                          |
|--------|--------------------|-----------------------------------|
| GET    | /api/profile       | `{ name, domain, summary, ... }`  |
| GET    | /api/skills        | `{ languages, frameworks_tools, softSkills }` |
| GET    | /api/projects      | `[ { title, description, tech, image, demo, repo } ]` |
| GET    | /api/education     | `[ { institution, course, duration, cgpa } ]` |
| GET    | /api/experience    | `[ { company, role, duration, description, type } ]` |
| GET    | /api/certifications| `[ { name, issuer, image, link } ]` |
| GET    | /api/interests     | `string[]` OR `{ interests: string[] }` |
| POST   | /api/contact       | `{ name, email, message }` → any  |