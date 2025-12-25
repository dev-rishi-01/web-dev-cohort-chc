
# 🚀 Welcome to Chai Cohort – Git Onboarding Guide

### Welcome to Chai Cohort!
If you're reading this, you've joined our team as an employee or intern. One of the most important tools you'll use here is Git. Git helps us track changes in our code, collaborate smoothly, and keep everything organized.

This blog-style guide will walk you through the basics of Git, our collaboration rules, and company standards. By the end, you'll feel confident working with the Chai Cohort Git repository.

<hr>


# 🌱 Understanding Git
#### Git is like a time machine for code. It lets us:
- Save snapshots of our work (commits).
- Go back to older versions if something breaks.
- Work together without overwriting each other's changes.
Our repository is names Chai Cohort. Think of its as the central library where all our code lives.

<hr>

# 🛠️ Basic Git Commands
### Here are the commands you'll use most often:


| Command | What it Does | Example |
| :--- | :--- | :--- |
| `git clone <repo-url>` | Copies the repository to your computer | `git clone https://github.com/chai-cohort/repo.git` |
| `git status` | Shows changes you’ve made | `git status` |
| `git add <file>` | Stages a file for commit | `git add index.html` |
| `git commit -m "message"` | Saves your changes with a message | `git commit -m "Added login page"` |
| `git pull` | Gets the latest code from the repository | `git pull origin main` |
| `git push` | Sends your changes to the repository | `git push origin main` |
| `git branch` | Lists branches | `git branch` |
| `git checkout -b <branch>` | Creates and switches to a new branch | `git checkout -b feature-login` |
| `git merge <branch>` | Combines changes from another branch | `git merge feature-login` |

👉 Screenshot Idea: Show your terminal after running` git status` and `git commit`.

# 🤝 Collaboration Guidelines

#### Working together in Git can get messy if we're not careful. Here are our rules:

- <strong> Always work on a branch </strong> - Never commit directly to main. Create a branch for your feature or bug fix.

- <strong>Pull before you push</strong> - Always run `git pull` before pushing your changes to avoid conflicts.

- <strong>Resolve conflicts responsibly</strong> - If Git shows a conflict, talk to your teammate before fixing it.

- <strong>Use Pull Requests (PRs)</strong> - When your branch is ready, open a PR on GitHub. Another team member must review it before merging.

#### 👉 Screenshot Idea: Show how to create a new branch and open a Pull Request on GitHub.

# 📝 Commit Rules

#### Commit messages are the story of our code. They must be clear and structured.

### Structure:
- <strong>Title line:</strong> Short summary (mac 50 characters)
- <strong>Description</strong>: Explain what and why, not how.

### Rules:
- Use the present tense: `"Add login page" not "Added login page"`.
- Be specific: `"Fix bug in payment API"`.
- Include ticket ID if resolving an issue. Example:

``` 
[Ticket-123] Add user authenication.
```
#### 👉 Screenshot Idea: Show a commit message in the terminal with a ticket ID.

# 🎫 Issue or Ticket Resolution

At Chai Cohort, every task or bug is tracked with a ticket ID.
When you commit code related to a ticket, always include the ticket ID in your commit message.

Example:
```
[Ticket-456] Fix navbar alignment issue
```

This help us trace which commit solved which problem.

#### 👉 Screenshot Idea: Show a GitHub issue and the related commit message.

# 📜 Company Rules -  Chai Cohort Git Standards

Here are our official Git usage policies.

- <strong>Branch Naming:</strong>
    - `feature/<name>` for new features
    - `bugfix/<name>` for bug fixes
    - `hotfix/<name>` for urgent fixes

- <strong>Commit Frequency:</strong>
    - Commit often, but only when the code works.
    - Don’t commit broken code.

- <strong>Pull Requests:</strong>

    - Every PR must be reviewed by at least one teammate.
    - No direct merges to `main` without approval.

- <strong>Traceability</strong>:
    - Always link commits to tickets.
    - Keep commit messages meaningful.

👉 Screenshot Idea: Show branch names in GitHub and a Pull Request with a reviewer.

# 🎉 Final Thoughts

Git may feel overwhelming at first, but once you get used to it, it becomes second nature. At Chai Cohort, following these rules ensures we work smoothly as a team, avoid conflicts, and keep our codebase healthy.

#### Remember:

- Use branches.
- Write clear commit messages.
- Always include ticket IDs.
- Collaborate through Pull Requests.

Welcome aboard, and happy coding with Chai Cohort! 🚀