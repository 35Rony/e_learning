// Static course data without storage
const courses = [
  {
    id: "c1",
    title: "JavaScript Basics",
    description: "Learn fundamentals of JavaScript programming language.",
    lessons: [
      "Introduction to JavaScript",
      "Variables and Data Types",
      "Functions and Scope",
      "DOM Manipulation",
      "Events Handling"
    ]
  },
  {
    id: "c2",
    title: "HTML & CSS Essentials",
    description: "Master the structure and style of web pages using HTML and CSS.",
    lessons: [
      "HTML Basic Tags",
      "CSS Selectors and Properties",
      "Box Model and Layout",
      "Flexbox and Grid Basics",
      "Responsive Design"
    ]
  },
  {
    id: "c3",
    title: "Web Development Workflow",
    description: "Introduction to tools and processes for modern web development.",
    lessons: [
      "Version Control with Git",
      "Using NPM and Package Managers",
      "Build Tools and Task Runners",
      "Debugging and Testing",
      "Deployment Strategies"
    ]
  }
];

// Track progress only during session (no persistent storage)
let courseProgress = {};

// Get progress percent (for prototype, set 100% when viewing detail)
function getProgressPercent(courseId) {
  if (courseProgress[courseId]?.completedCourse) return 100;
  return 0;
}

// Render course list on the home page
function renderCourseList() {
  const container = document.getElementById("courses-container");
  container.innerHTML = "";
  courses.forEach(course => {
    const progressPercent = getProgressPercent(course.id);
    const card = document.createElement("div");
    card.className = "course-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p><strong>Progress: </strong>${progressPercent}%</p>
    `;
    card.addEventListener("click", () => openCourseDetail(course.id));
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCourseDetail(course.id);
      }
    });
    container.appendChild(card);
  });
}

// Show course detail view
function openCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  // Mark as started but not completed
  if (!courseProgress[courseId]) {
    courseProgress[courseId] = { completedCourse: false };
  }

  document.getElementById("course-title").textContent = course.title;

  const lessonList = document.getElementById("lesson-list");
  lessonList.innerHTML = "";
  course.lessons.forEach(lesson => {
    const li = document.createElement("li");
    li.textContent = lesson;
    lessonList.appendChild(li);
  });

  updateProgressBar(courseId);

  const btnComplete = document.getElementById("btn-complete-course");
  if (courseProgress[courseId]?.completedCourse) {
    btnComplete.textContent = "Course Completed";
    btnComplete.disabled = true;
  } else {
    btnComplete.textContent = "Mark Course as Completed";
    btnComplete.disabled = false;
  }

  btnComplete.dataset.courseId = courseId;

  document.getElementById("home-view").style.display = "none";
  document.getElementById("course-detail-view").style.display = "block";
}

// Update progress bar width
function updateProgressBar(courseId) {
  const progressBar = document.getElementById("progress-bar");
  const percent = getProgressPercent(courseId);
  progressBar.style.width = percent + "%";
}

// Mark course as completed handler
function completeCourse(event) {
  const btn = event.target;
  const courseId = btn.dataset.courseId;
  if (!courseId) return;

  courseProgress[courseId].completedCourse = true;

  btn.textContent = "Course Completed";
  btn.disabled = true;

  updateProgressBar(courseId);
}

// Back button handler to show home page again
function backToHome() {
  document.getElementById("course-detail-view").style.display = "none";
  document.getElementById("home-view").style.display = "block";
}

// Initial setup
function init() {
  renderCourseList();
  document.getElementById("btn-complete-course").addEventListener("click", completeCourse);
  document.getElementById("btn-back").addEventListener("click", backToHome);
}

window.onload = init;
