# Project AI Rules – Global Behavior Instructions

## 🧠 General Interaction

# Describe how the agent should behave in _every_ interaction.

- Always follow these rules unless explicitly overridden.
- If a rule is unclear or the task ambiguous → ask for clarification.
- Do not assume missing context — ask before acting.
- **ONLY do what is explicitly requested. Do not add extra features, improvements, or "helpful" additions.**

## 🚫 Forbidden Actions (Strict)

# These rules are ABSOLUTE and NON-NEGOTIABLE.

### Files & Structure
- **DO NOT create new files unless explicitly requested by name or purpose.**
- **DO NOT create .md files (README, SUMMARY, CHANGELOG, NOTES, etc.) unless explicitly asked.**
- **DO NOT generate documentation files or summary files after completing tasks.**
- DO NOT delete, rename, or move existing files unless asked.
- DO NOT create "helpful" utility files, config files, or example files.

### Git & Version Control
- **DO NOT run ANY git commands (add, commit, push, etc.) unless explicitly instructed.**
- **DO NOT stage changes automatically.**
- **DO NOT commit changes automatically.**
- **DO NOT push to remote repositories unless explicitly requested.**
- DO NOT modify `.git` or any git history.
- If you see uncommitted changes, DO NOT commit them on your own.

### Dependencies & Configuration
- **DO NOT add, remove, or upgrade dependencies without explicit approval.**
- DO NOT modify build or CI configuration without consent.
- DO NOT modify package.json, tsconfig.json, or similar config files unless requested.

## 📍 Location & Structure

- Always operate within the project directory: `C:\02_Projects\Cefortte - front-end\04_dev\frontend\cefortte`
- Do not generate content outside `src/`, `app/`, or related code folders.
- Do not create files in the root directory unless explicitly requested.

## 🧩 Editing Guidelines

# How edits should be made - MINIMAL and PRECISE.

- **Make ONLY the minimal edits that exactly solve the requested task.**
- **Do NOT refactor, optimize, or "improve" code that wasn't mentioned in the request.**
- **Do NOT add extra features, error handling, or validation unless requested.**
- **Do NOT add comments, JSDoc, or documentation unless requested.**
- Prefer diffs/patch style changes when suggested.
- Keep original formatting unless the task requests formatting changes.
- If editing one function, do not touch other functions "while you're there".

## 📌 Code Style & Quality

# Basic shared guidelines for consistent output.

- Maintain existing coding style and conventions.
- If new patterns are introduced, **ask first before implementing**.
- Follow language-specific best practices (TypeScript, React, Next.js, Tailwind).
- Avoid using deprecated or unstable APIs.
- **Do NOT convert JavaScript to TypeScript unless asked.**
- **Do NOT change import styles or module structure unless asked.**

## 🧪 Testing & Build

- **Do NOT modify or create tests unless explicitly asked.**
- **Do NOT run tests automatically unless requested.**
- **Do NOT execute builds (npm run build, pnpm build, etc.) automatically.**
- If tests exist and a task is testing-related → respect existing test framework.
- Do not add testing libraries or frameworks without permission.

## 📚 Documentation & Comments

- **NEVER generate README.md, SUMMARY.md, CHANGELOG.md, NOTES.md, or similar files automatically.**
- **Do NOT create documentation files after completing a task.**
- Only update documentation when explicitly requested.
- Comments should be technical and concise.
- **Do NOT add JSDoc comments unless requested.**
- **Do NOT add TODO comments unless requested.**

## 📦 Dependencies

- **Do NOT add, remove or upgrade dependencies without explicit approval.**
- **Do NOT install packages automatically (pnpm install, npm install, etc.) unless asked.**
- If a dependency issue is detected, **report it and ask** instead of fixing automatically.
- Do not suggest "better" or "alternative" libraries unless asked for recommendations.

## 🧰 Problem Breakdown & Approval

- **Before large code changes or multi-file modifications, ask for confirmation to proceed.**
- Provide a summary of steps before executing multi-part tasks.
- If the task could be interpreted in multiple ways, **ask for clarification first**.
- Do not make assumptions about what the user "probably wants".

## 📡 Error & Edge Cases

- **If uncertain how to proceed → STOP and ASK instead of guessing.**
- Report any missing context rather than approximating.
- Do not try to "fix" things that aren't broken.
- Do not add error handling for scenarios that won't happen.

## 🏁 Task Completion

- End your response with a clear, **concise** summary of changes made.
- If action was requested, confirm completion explicitly.
- **Do NOT suggest next steps or additional improvements unless asked.**
- **Do NOT ask "Would you like me to..." for things not requested.**
- Just complete the task and confirm it's done.

## ⚠️ Critical Reminders

**WHEN IN DOUBT:**
1. Ask the user first
2. Do the minimum required
3. Do NOT create files automatically
4. Do NOT run git commands automatically
5. Do NOT add "helpful" extras

**THE GOLDEN RULE: Only do what was explicitly requested. Nothing more, nothing less.**
