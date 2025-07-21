# 📘 GUIDE FOR GITHUB

Your all-in-one Git & GitHub guide for efficient project management, collaboration, and good practices 🚀

---

## 🧰 1. Download and Prepare the Project

### Option 1: Manual

1. Visit the repository on GitHub.
2. Click **Code** → **Download ZIP**.
3. Extract the ZIP in your preferred folder.

### Option 2: Git Bash

1. Open Git Bash in your working folder.
2. Clone the repository:

    git clone <HTTPS-URL-HERE>

Navigate into the project:

    cd <project-folder>

If you want to initialize Git:

⚙️ 2. Initial Git Configuration

Identity Setup

    git config --global user.name "Your Name"
    git config --global user.email "your@email.com"

Line Endings (OS-Specific)

Windows:

    git config --global core.autocrlf true

macOS/Linux:

    git config --global core.autocrlf input

📌 Pro Tip: Always Prune!

Avoid accumulating stale branches from remote:

    git config --global fetch.prune true

🔍 What it does: Ensures every time you run git fetch, Git automatically removes deleted remote branches locally.

To clean local configuration completely (⚠️ Careful!):

    rm .git/config

🌐 3. Connect to Remote Repository

Copy the HTTPS URL from GitHub.

Connect your local folder to GitHub:

    git remote add origin <HTTPS-URL-HERE>
    git remote -v

🌿 4. Working with Branches

4.1 🔄 View & Switch Branches

    git branch
    git checkout <branch-name>

☢️ If the branch doesn’t exist:

    git fetch origin <branch-name>

4.2 🌱 Create and Push a New Branch

    git checkout -b <new-branch>
    git push origin <new-branch>

4.3 🔀 Merge a Branch into main

First, switch to main:

    git checkout main

Merge:

    git merge origin/<your-branch>
    git push origin main

4.4 🧹 Delete a Remote Branch

    git push origin --delete <branch-name>

🔄 5. Keep Your Repo in Sync

👤 Solo Developer

    git pull origin main
    
If you see:

    fatal: refusing to merge unrelated histories

Fix it with:

    git pull origin main --allow-unrelated-histories

Then resolve conflicts and:

    git status

👥 Team Workflow

Stage changes:

    git add .

# Or add specific file:

    git add <file>

Commit:

    git commit -m "Descriptive message"

Push your branch:

    git push origin <your-branch>

Update your local main:

    git checkout main
    git fetch origin
    git merge origin/main

🔐 6. Optional: SSH Setup (on your own device)

Generate key:

    ssh-keygen -t ed25519 -C "your@email.com"

Start the SSH agent:

    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519

Copy your key:

    cat ~/.ssh/id_ed25519.pub

Go to GitHub → Settings → SSH and GPG keys → New SSH Key → Paste and Save.

Test:

    ssh -T git@github.com

🧹 7. Clean Up Git Branches Like a Pro

Step 1: Move to a Safe Branch

    git checkout main

Step 2: Delete a Local Branch

If merged:

    git branch -d branch-name

Force delete:

    git branch -D branch-name

Step 3: Prune Remote-Tracking References

Option 1:

    git fetch --prune

Option 2:

    git remote prune origin

🧼 8. Revert vs Reset

🔁 git reset

Rewrites history (use only locally).

Modes:

--soft: Keeps staged.

--mixed: Unstages.

--hard: ⚠️ Deletes all.

Examples:

    git reset --mixed HEAD~2
    git reset HEAD <file>
    git reset --hard HEAD~1

🔄 git revert

Adds a new commit that undoes the target.

Safe for public/shared branches.

    git revert <commit-hash>
    git revert --no-edit <commit-hash>

❗ 9. Common Errors

Error:

fatal: refusing to merge unrelated histories

Fix:

    git pull origin main --allow-unrelated-histories

Save and exit the editor (in Vim: i, write message, Esc, then :wq).

10 📂 How to List All Files and Folders in a Git Branch Without Checkout
Sometimes, you may want to explore the content of a Git branch without switching to it. You can use the following Git command to list all files (and implicitly folders) tracked in a specific branch:

🔧 Step-by-Step Guide

1. Open Git Bash (or your terminal of choice).

2. Navigate to your repository:

    cd path/to/your/repository

3. Run the following command to list all files in a specific branch:

    git ls-tree -r --name-only <branch-name>

🔍 Replace <branch-name> with the name of the branch you want to inspect.

    git ls-tree -r --name-only main

📊 11. GitHub Projects — Task Management

🚀 Step 1: Create a New Project

Go to your GitHub profile → Projects → New Project.

Choose Board, Table, or Roadmap.

📋 Step 2: Description & README
Click the Settings (⋯) icon.

Add a description and README.

✅ Step 3: Add Items
Paste issue/PR URL or create draft items.

🗂️ Step 4: Customize Fields
Add fields like Priority, Sprint, etc.

🔁 Step 5: Automate
Auto-move issues.

Auto-archive completed.

Add rules with filters.

📈 Step 6: Insights
Use charts and progress tracking.

🛠️ Step 7: Collaborate
Use mentions, assignments, and documentation.

🍕 11. GitHub Tokens — Secure Access for Private Repos
🔐 What are PATs?
Personal Access Tokens let you access private repositories.

🧾 Create a Token (Classic)
Go to GitHub → Profile → Settings → Developer Settings.

Choose Personal access tokens → Tokens (classic).

Click Generate new token.

Choose permissions, set expiration.

Click Generate.

⚠️ Copy it immediately! You won’t see it again.

🎯 Use Your Token

If cloning and you're not a collaborator:

    git clone <HTTPS-URL>

# Username: your GitHub username
# Password: paste your token

✅ Token Best Practices

Name: Include user or repo name.

Expiration: Always set it (avoid "no expiration").

Access: Limit to what’s necessary.

Delete once done.

🗑️ Delete a Token

Go to Settings → Developer Settings → Personal Access Tokens.

Click Delete next to the token.

🧠 Notes

Tokens ≠ collaborators.

They work like keys.

Use them for cloning, scripts, or GitHub Actions.

💎 GitHub Pro Tips & Best Practices

✅ Always pull before pushing (git pull origin main)

🧼 Clean your branches (fetch --prune)

🧪 Commit often with clear messages

🧾 Document in README and use issues

🏷️ Use tags/releases for milestones

🔐 Use SSH or PATs securely

💡 Automate with GitHub Actions or Project automation
