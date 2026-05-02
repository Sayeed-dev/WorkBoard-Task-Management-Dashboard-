# WorkBoard - Task Management Dashboard

A modern drag-and-drop task management application to organize your work across three stages: ToDo, In Progress, and Done.

## 🎯 Overview

WorkBoard helps you manage tasks efficiently with a visual Kanban-style board. Drag tasks between columns, add new tasks, delete completed ones, and track progress with real-time counters. All data persists using browser localStorage.

## ✨ Key Features

### 📋 **Three-Stage Task Board**
- **ToDo** - Tasks to be started
- **In Progress** - Currently working tasks
- **Done** - Completed tasks

### 🎯 **Drag & Drop Functionality**
- Drag tasks between columns seamlessly
- Visual feedback with hover effects (scale + red dotted border)
- Smooth animations during drag operations

### ➕ **Add New Tasks**
- Modal popup for new task creation
- Input fields for title and description
- Tasks automatically added to ToDo column

### 🗑️ **Delete Tasks**
- Remove individual tasks with trash button
- Counters update automatically

### 📊 **Real-time Counters**
- Live task count for each column
- Updates dynamically as tasks move between stages

### 💾 **Data Persistence**
- All tasks saved to localStorage
- Data persists across browser sessions
- Automatic restoration on page reload

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or dependencies required

### Installation

```bash
# Clone the repository
git clone https://github.com/Sayeed-dev/WorkBoard-Task-Management-Dashboard-.git

# Open in browser
# Simply open index.html or use a local server:
python -m http.server 8000
# Visit: http://localhost:8000
```

## 📁 Project Structure

```
WorkBoard-Task-Management-Dashboard/
├── index.html              # Main HTML structure
├── src/
│   ├── app.js             # Core logic and functionality
│   ├── input.css          # Tailwind configuration
│   └── output.css         # Compiled Tailwind CSS
└── README.md              # This file
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic structure
- **JavaScript (Vanilla)** - Core logic and interactivity
- **Tailwind CSS v4** - Utility-first styling
- **Font Awesome** - Icons
- **Google Fonts** - Typography

### Storage
- **localStorage API** - Data persistence

## 🧠 Core Logic Implementations

### 1. **Drag & Drop System**
```javascript
dragDropEvent(container) {
  - dragenter: Adds hover styling (scale + red border)
  - dragleave: Removes hover when leaving container
  - dragover: Prevents default to allow drop
  - drop: Appends dragged element to target container
}
```
**How it works**: Global `draggedElement` variable tracks which task is being dragged. When dropped, it's moved to the new container.

### 2. **Counter Logic**
```javascript
counter() {
  - Scans all containers for task count
  - Updates UI with current numbers
  - Saves task data to localStorage
}
```
**Key feature**: Runs after every action (add, delete, move) to keep counts accurate.

### 3. **Data Persistence**
```javascript
localStorage system:
  - Save: counter() converts tasks to JSON
  - Load: On page load, retrieves and rebuilds DOM
  - Restore: Tasks reappear with all functionality intact
```
**Data structure**:
```javascript
{
  "todo": [{ title: "...", description: "..." }],
  "progress": [...],
  "done": [...]
}
```

### 4. **Add Task Modal**
```javascript
- Modal toggle on button click
- Submit captures title & description
- Creates new task element
- Adds to ToDo container
- Clears form and hides modal
- Updates counter
```

### 5. **Delete Functionality**
```javascript
- Click trash icon removes task
- Removes from DOM
- Triggers counter() for update
- localStorage automatically synced
```

## 📊 Data Flow

```
User Action
    ↓
JavaScript Handler
    ↓
DOM Update + counter()
    ↓
localStorage.setItem()
    ↓
Page Reload: localStorage.getItem() → Rebuild UI
```

## 🎨 Design System

### Color Palette
- **Background**: Light Blue (`bg-blue-50`)
- **Containers**: Dark Gray (`bg-gray-900`)
- **Primary**: Blue (`text-blue-800`, `bg-blue-300`)
- **Text**: Light Blue (`text-blue-50`)
- **Delete**: Red (`text-red-500`)
- **Hover Effect**: Red dotted border with 1.03 scale

### Typography
- **Font**: Google Sans
- **Header**: Extrabold, 2xl
- **Counter**: Semibold, medium size
- **Task Title**: Bold, xl
- **Task Description**: Light, medium

## 📱 Responsive Design

- **Full height board** - 100vh layout
- **Flexible columns** - Equal width distribution
- **Mobile adaptable** - Can be enhanced for tablet/mobile
- **Gap spacing** - 8 units between columns

## 🎯 User Workflows

### Adding a Task
1. Click "Add New Task" button
2. Enter task title and description
3. Click "Add Task"
4. Task appears in ToDo column
5. Modal closes and form resets

### Moving a Task Between Stages
1. Click and drag any task card
2. Hover effect appears (red border + scale)
3. Drop into target column (ToDo, In Progress, Done)
4. Task moves and counter updates
5. Changes automatically saved

### Deleting a Task
1. Click trash icon on any task
2. Task immediately removed
3. Counter decrements
4. Change persists on reload

### Tracking Progress
1. Watch counters update in real-time
2. See task distribution across columns
3. Track completed vs pending work

## 🚀 Build & Deployment

### Development
```bash
python -m http.server 8000
```

### Deployment
Upload to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

**No build process required!**

## 🐛 Known Limitations

- localStorage has ~5-10MB limit per domain
- No user authentication
- No task priority or due dates
- Mobile UI could be optimized
- No undo functionality

## 📈 Future Enhancements

- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] Color-coded categories
- [ ] Search and filter
- [ ] Task notes and attachments
- [ ] Undo/Redo functionality
- [ ] Mobile responsive improvements
- [ ] Dark mode toggle
- [ ] Multiple board support
- [ ] Keyboard shortcuts

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sayeed-dev**
- GitHub: [@Sayeed-dev](https://github.com/Sayeed-dev)
- Project: [WorkBoard](https://github.com/Sayeed-dev/WorkBoard-Task-Management-Dashboard-)

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a Pull Request

## 📞 Support

For support or suggestions:
- Open an issue on GitHub
- Contact the author

---

## 🌟 Quick Tips

- **Drag Hint**: The red dotted border shows where your task will land
- **Data Safety**: Reload the page - your tasks are still there!
- **Task Organization**: Move tasks to Done to track completed work
- **Persistent Progress**: All changes auto-save to localStorage

---

**Built with ❤️ by Sayeed-dev | Organize. Track. Complete. 🚀**
