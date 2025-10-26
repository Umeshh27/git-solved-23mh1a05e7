# My Git Mastery Challenge Journey

## Student Information

- **Name:** ALLA UMESH
- **Student ID:** 23MH1A05E7
- **Repository:** https://github.com/Umeshh27/git-solved-23mh1a05e7
- **Date Started:** 26-10-2025
- **Date Completed:** 26-10-2025

---

## Task Summary

Cloned instructor's repository with pre-built conflicts and resolved all merge conflicts across multiple branches using proper Git workflows. Practiced all major Git commands, including advanced ones like rebase, cherry-pick, reset, and reflog.

---

## Commands Used

| Command         | Times Used | Purpose                       |
| --------------- | ---------- | ----------------------------- |
| git clone       | 1          | Clone instructor's repository |
| git checkout    | 20+        | Switch branches               |
| git branch      | 10+        | Manage branches               |
| git merge       | 2          | Merge branches                |
| git add         | 30+        | Stage changes                 |
| git commit      | 15+        | Save changes                  |
| git push        | 10+        | Push to GitHub                |
| git fetch       | 2          | Fetch updates                 |
| git pull        | 1          | Pull updates                  |
| git stash       | 2          | Save temporary work           |
| git cherry-pick | 1          | Copy commit                   |
| git rebase      | 1          | Rebase branch                 |
| git reset       | 3          | Undo commits                  |
| git revert      | 1          | Safe undo                     |
| git tag         | 2          | Create release tags           |
| git status      | 50+        | Check repository state        |
| git log         | 30+        | View history                  |
| git diff        | 20+        | Compare changes               |

---

## Conflicts Resolved

### Merge 1: main + dev (6 files)

#### Conflict 1: config/app-config.yaml

- **Issue:** Production used port 8080, development used 3000
- **Resolution:** Unified config with environment-based setup
- **Strategy:** Keep production default, dev optional
- **Difficulty:** Medium
- **Time:** 15 min

#### Conflict 2: config/database-config.json

- **Issue:** Different DB hosts/SSL
- **Resolution:** Separate profiles for production/dev
- **Difficulty:** Medium
- **Time:** 10 min

#### Conflict 3: scripts/deploy.sh

- **Issue:** Different deployment logic
- **Resolution:** Conditional logic based on DEPLOY_ENV
- **Difficulty:** Hard
- **Time:** 20 min

#### Conflict 4: scripts/monitor.js

- **Issue:** Different intervals/logs
- **Resolution:** NODE_ENV-based behavior
- **Difficulty:** Medium
- **Time:** 15 min

#### Conflict 5: docs/architecture.md

- **Issue:** Different descriptions
- **Resolution:** Merged into structured document
- **Difficulty:** Easy
- **Time:** 10 min

#### Conflict 6: README.md

- **Issue:** Feature/version mismatch
- **Resolution:** Combined with clear labels
- **Difficulty:** Easy
- **Time:** 10 min

---

### Merge 2: main + conflict-simulator (6 files)

#### Conflict 1: scripts/setup.sh

- **Issue:** Different initialization steps
- **Resolution:** Combined both, modular functions
- **Difficulty:** Medium
- **Time:** 15 min

#### Conflict 2: config/env-config.json

- **Issue:** Conflicting API keys
- **Resolution:** Separate profiles for staging/dev
- **Difficulty:** Medium
- **Time:** 10 min

#### Conflict 3: scripts/build.js

- **Issue:** ES5 vs ES6 modules
- **Resolution:** Conditional module exports based on NODE_ENV
- **Difficulty:** Hard
- **Time:** 20 min

#### Conflict 4: docs/setup.md

- **Issue:** Installation instructions differ
- **Resolution:** Merged instructions, separated optional steps
- **Difficulty:** Easy
- **Time:** 10 min

#### Conflict 5: scripts/deploy-monitor.js

- **Issue:** Conflicting log levels and notifications
- **Resolution:** Environment-based logging
- **Difficulty:** Medium
- **Time:** 15 min

#### Conflict 6: README.md

- **Issue:** Conflicting badges/features
- **Resolution:** Merged and organized by purpose (Setup, Features, Usage)
- **Difficulty:** Easy
- **Time:** 10 min

---

## Most Challenging Parts

1. Understanding conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
2. Choosing which code to keep
3. Resolving complex scripts
4. Testing after resolution

---

## Key Learnings

### Technical Skills

- Conflict resolution process
- Merge conflict markers
- git diff, rebase, cherry-pick, reset, reflog

### Best Practices

- Read both sides carefully
- Test before committing
- Write clear commit messages
- Use git status frequently

### Git Workflow Insights

- Conflicts are normal
- Understand both changes before merging
- Document your resolutions

---

## Reflection

Merge conflicts aren’t scary—they’re Git asking for a decision. This challenge taught me that understanding both sides of a conflict is more important than rushing to resolve it. By carefully reviewing each change, testing after resolution, and documenting my steps, I gained confidence in handling even complex conflicts safely.

Practicing advanced Git commands like **rebase**, **cherry-pick**, **reset**, and **reflog** helped me understand different workflows and how to recover lost commits or integrate changes without errors. I now know the difference between merge and rebase, when to use each, and how to maintain a clean project history.

Overall, this experience reinforced the importance of patience, clarity, and testing when working with Git. I feel well-prepared to manage version control in real-world projects, collaborate effectively with teams, and confidently resolve conflicts when they arise.
