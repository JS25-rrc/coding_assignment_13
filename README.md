### Step 1 — Clone the repository
```bash
git clone https://github.com/JS25-rrc/coding_assignment_13.git
cd singh_jasanpreet_ui_garden_build_checks
```

### Step 2 — Install dependencies
```bash
npm install --legacy-peer-deps
```

### Step 3 — Run the development server
```bash
npm run dev
```
Open → **http://localhost:5173**

### Step 4 — Run Storybook
```bash
npm run storybook
```
Open → **http://localhost:6006**

### Step 5 — Run tests
```bash
npm run test
```

---

## 🔍 Code Quality Commands

```bash
# Check Prettier formatting
npm run format:check

# Auto-fix Prettier formatting
npm run format

# Run ESLint
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Run all tests
npm run test
```

---

## 🐶 Husky Pre-Commit Hooks

Husky automatically runs the following checks **before every git commit**. If any check fails, the commit is blocked.

```
git commit -m "your message"
          ↓
┌─────────────────────────────┐
│  1. Prettier format check   │
│  2. ESLint code quality     │  ← runs on staged files
│  3. Jest tests              │  ← runs all tests
└─────────────────────────────┘
          ↓
All pass → commit goes through ✅
Any fail → commit is BLOCKED  ❌
```

### Testing the pre-commit hook
Make any small change to a file, then try to commit:
```bash
git add .
git commit -m "test commit"
```
You will see Husky run all three checks automatically before the commit is created.

---

## ⚙️ GitHub Actions CI/CD Pipeline

Every push to GitHub triggers the CI pipeline defined in `.github/workflows/ci.yml`.

The pipeline runs these steps in order:

```
Push to GitHub
      ↓
┌─────────────────────────────┐
│  1. Checkout code           │
│  2. Setup Node.js 18        │
│  3. Install dependencies    │
│  4. Prettier format check   │
│  5. ESLint check            │
│  6. Jest tests              │
│  7. Production build        │
└─────────────────────────────┘
      ↓
All pass → ✅ Green checkmark on GitHub
Any fail → ❌ Red X + email notification
```

View pipeline results at:
```
https://github.com/YOUR_USERNAME/YOUR_REPO/actions
```

---

## 🐳 Docker — Run on localhost:8018

### Build the image
```bash
docker build -t singh_jasanpreet_coding_assignment13 .
```

### Run the container
```bash
docker run -d --name singh_jasanpreet_coding_assignment13 -p 8018:8018 singh_jasanpreet_coding_assignment13
```

### Open in browser
```
http://localhost:8018
```

### Useful Docker commands
```bash
# Check running containers
docker ps

# View container logs
docker logs singh_jasanpreet_coding_assignment13

# Stop the container
docker stop singh_jasanpreet_coding_assignment13

# Remove the container
docker rm singh_jasanpreet_coding_assignment13

# Stop and remove in one command
docker stop singh_jasanpreet_coding_assignment13 && docker rm singh_jasanpreet_coding_assignment13
```

---

## 🧪 Components

| Component | tsx | types | stories | tests | index |
|---|:---:|:---:|:---:|:---:|:---:|
| Button | ✅ | ✅ | ✅ | ✅ | ✅ |
| Label | ✅ | ✅ | ✅ | ✅ | ✅ |
| Text | ✅ | ✅ | ✅ | ✅ | ✅ |
| Table | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dropdown | ✅ | ✅ | ✅ | ✅ | ✅ |
| RadioButton | ✅ | ✅ | ✅ | ✅ | ✅ |
| Img | ✅ | ✅ | ✅ | ✅ | ✅ |
| HeroImage | ✅ | ✅ | ✅ | ✅ | ✅ |
| Card | ✅ | ✅ | ✅ | ✅ | ✅ |

Each component has:
- Active state with full colour support
- Disabled state with grey background (`cursor: not-allowed`)
- Storybook stories with interactive Controls panel
- Jest tests verifying visibility and disabled behaviour

---

## 🔄 Differences from Assignment 12

| | Assignment 12 | Assignment 13 |
|---|---|---|
| Port | 8083 | **8018** |
| Container name | `_coding_assignment12` | `_coding_assignment13` |
| Working dir | `_ui_garden` | `_ui_garden_build_checks` |
| Husky pre-commit | ❌ | ✅ |
| Prettier | ❌ | ✅ |
| ESLint enforced | ❌ | ✅ |
| GitHub Actions | ❌ | ✅ |

---

## 📝 Notes

- Run `npm install --legacy-peer-deps` instead of `npm install` due to Storybook 8 peer dependency requirements
- The `.gitattributes` file enforces LF line endings on all platforms to prevent Windows CRLF issues with Prettier
- TypeScript version 5.9.3 may show a warning with `@typescript-eslint` — this is expected and does not affect functionality
