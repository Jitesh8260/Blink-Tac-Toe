# Blink Tac Toe - React.js Game
## 🚀 Anything You’d Improve With More Time

Due to ongoing **end semester exams**, I couldn't dedicate enough time to polishing the UI to the level I usually maintain in my other web projects.  
If I had more time, I would’ve focused more on:
- A **modern, clean and animated UI** (like my other websites)
- Better **transitions**, **micro-interactions**, and **responsive layout**
- Adding **emojis flying in**, **fading out**, or subtle **hover effects**
- Music : Different music for selection and placing emoji, winning etc
  
Since the core functionality is complete and game logic works well (including the vanishing emoji feature), I prioritized building a **functioning and fun prototype first**.
## Overview
Blink Tac Toe is a fun, two-player Tic Tac Toe variant built with React.js, featuring emojis instead of Xs and Os, and a unique "vanishing emoji" rule. Players choose emoji categories and compete by placing emojis on a 3x3 grid, with only 3 emojis allowed on the board per player at a time. When placing the 4th emoji, the oldest one vanishes.

## Tech Stack
- React.js (with functional components and hooks)
- CSS (Tailwind CSS for styling)
- JavaScript (ES6+)

## Emoji Categories
- Animals: 🐶 🐱 🐵 🐰
- Food: 🍕 🍟 🍔 🍩
- Sports: ⚽️ 🏀 🏈 🎾

Players select their emoji category before starting the game.

## Vanishing Feature Implementation
- Each player can have at most 3 emojis on the board at any time.
- When a player places a 4th emoji, the oldest emoji of that player is removed automatically using FIFO logic.
- The new emoji cannot be placed on the cell where the oldest emoji was located.
- This keeps the game dynamic and prevents board from filling up completely.

## How to Play
1. Select emoji categories for both players.
2. Players alternate turns placing randomly assigned emojis from their category.
3. Try to align 3 emojis in a row, column, or diagonal to win.
4. Emojis vanish as per the vanishing rule to keep the game moving.
5. The game ends when a player wins. No draws possible.

## Features to Improve / Add with More Time
- Animations for emoji placement and vanishing.
- Highlighting winning line.
- Score tracker for multiple rounds.
- Sound effects and visual feedback.
- Responsive design improvements.
- Additional emoji categories and customization.

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/jitesh8260/blink-tac-toe.git
   ```
2. Navigate into the project directory:
   ```bash
   cd blink-tac-toe
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser at `http://localhost:3000` to play the game.

---

**Created by:** Jitesh Bhakat
**Contact:** https://www.linkedin.com/in/jiteshbhakat  
**Date:** May 2025

---

Feel free to explore, play, and contribute!
