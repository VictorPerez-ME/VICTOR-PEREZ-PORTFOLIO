# Editing Your Portfolio — Plain-English Guide

This is your personal cheat-sheet for editing your site. You don't need to know how to code — you're just swapping words and images.

---

## A. See your changes live as you type

1. Open **VS Code** (it's in your Applications).
2. **File → Open Folder** → choose the `portfolio` folder on your Desktop.
3. In the file list on the left, click **`index.html`**.
4. Bottom-right of the window, click the **"Go Live"** button.
5. Your browser opens the site. **Every time you save (Cmd+S), the browser auto-refreshes** so you see the change instantly.

> "Go Live" is only a local preview on your computer. It does NOT change the public website. To update the public site, see section D.

---

## B. Where everything lives

All your text and images are in **`index.html`**. To find something fast, press **Cmd+F** and type a word you want to change (e.g. "Mechanical Engineer"), then edit the text between the `>` and `<` symbols.

| What you want to change | Search for (Cmd+F) |
|---|---|
| Your title under your name | `Mechanical Engineer` |
| Your bio paragraphs | `I'm a Mechanical Engineering graduate` |
| Email / phone | `victorperezvp371` / `760` |
| A project's pop-up text | the project's title, e.g. `Vertical Axis Wind Turbine` |
| Skill bars & percentages | `My skills` |
| Education entries | `University of California` |

**Rule of thumb:** only change the words *between* the tags. Don't delete the `<...>` symbols themselves.

Example — to change your title, find this line and edit only the bold part:
`<p class="title">`**`Mechanical Engineer`**`</p>`

---

## C. Swapping a project image

1. Put your new image in the `assets/images/` folder.
2. Name it simply, e.g. `proj-rfid.jpg` (no spaces).
3. In `index.html`, find that project and change the image filename. For example:
   `<img src="./assets/images/`**`project-1.jpg`**`" ...>`
   becomes
   `<img src="./assets/images/`**`proj-rfid.jpg`**`" ...>`

Projects still using placeholder images (swap these when you have photos):
- **RFID Mouse Training System** → currently `project-1.jpg`
- **2-DOF PID Control System** → currently `project-5.png`
- **PMMA Tensile Testing** → currently `project-6.png`

---

## D. Publishing changes to the live website

After editing and saving, your changes are only on your computer. To push them live:

1. Open **GitHub Desktop**.
2. You'll see your changed files listed on the left.
3. In the bottom-left box, type a short summary (e.g. `updated bio`).
4. Click **Commit to main**.
5. Click **Push origin** at the top.
6. Wait ~1 minute, then refresh your live site:
   **https://victorperez-me.github.io/VICTOR-PEREZ-PORTFOLIO/**

That's the whole loop: **edit → save → commit → push → wait a minute.**

---

## E. If something breaks

- Undo your last change with **Cmd+Z** in VS Code.
- If a tab stops switching or the layout looks wrong, you probably deleted a `<` or `>` by accident. Cmd+Z until it looks right.
- You can always ask Claude Code to fix it.
