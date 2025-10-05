# Mini E-Learning Platform

This is a simple prototype of a mini e-learning platform built with HTML, CSS, and JavaScript. It demonstrates the core functionality of listing courses, viewing course details with lessons, tracking progress, and marking courses as completed in a visually clean and user-friendly interface.

## Features

- Home page with a list of courses showing title, description, and progress percentage
- Course detail page displaying lesson titles and a progress bar
- Button to mark a course as completed, which disables after clicking
- Simple visual design with hover effects on buttons and course cards
- Progress is tracked only during the browser session (no persistent storage)

## File Structure

- `index.html` — Main HTML file including page structure and references to CSS and JavaScript
- `styles.css` — CSS styles for layout, colors, and hover effects
- `script.js` — JavaScript code handling data display, user interaction, and progress tracking

## How to Use

1. Clone or download the project folder.
2. Open `index.html` in any modern web browser.
3. Browse available courses on the home page.
4. Click on a course card to view its lessons and progress.
5. Use the "Mark Course as Completed" button on the detail page to update progress.
6. Click "Back to Courses" to return to the course list.

## Limitations & Notes

- Course data is hardcoded in the JavaScript file.
- Progress and course completion status are stored temporarily in memory and reset when the page reloads.
- This is a frontend-only prototype without backend or database integration.
- Designed to be simple and easily extensible for further development.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## License

This project is provided as-is for educational and prototyping purposes.

---

Feel free to customize and expand this platform to include persistent storage, user authentication, or real course content to build a full-fledged e-learning application.
