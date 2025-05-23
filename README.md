# Blink Tac Toe - React.js Game

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

