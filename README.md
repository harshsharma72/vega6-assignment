# Image Search and Canvas Manipulation Project

This project is a **React-based web application** that allows users to **search for images using the Unsplash API**, customize selected images on a canvas with **text** and **shapes**, and download the edited images. Users can add **captions**, **shapes** (circles, rectangles, triangles, polygons), and make edits using an intuitive interface powered by **fabric.js**.

## Features

- 🔍 **Image Search and Display**

  - **Search Functionality**: Users can type a keyword in the search bar to fetch images from the Unsplash API.
  - **Image Display**: Up to 20 images are displayed in a **4x5 grid layout** for each search query.
  - **"Add Captions" Button**: Each image has an **"Add Captions" button** that redirects to an editing canvas for further customization.

- 🖌 **Canvas Editing and Customization**

  - **Image Display on Canvas**: Selected images are displayed on a canvas where users can make adjustments.
  - **Text Layers**: Users can **add, edit, and resize captions** directly on the canvas.
  - **Shapes and Layering**: Users can add various shapes (**circle, rectangle, triangle, polygon**) and layer them over the image. Shapes can be dragged, resized, and reordered to achieve the desired look.
  - **Element Manipulation**: All elements on the canvas can be **repositioned, resized, and edited** dynamically.

- 💾 **Download Functionality**

  - **Download Edited Image**: Once editing is complete, users can **download the modified image** with all applied captions and shapes in a single click.

- 🚨 **Error Handling and Validation**
  - **API Error Handling**: Displays error messages if image retrieval fails or if there is a connection issue.
  - **Input Validation**: Provides feedback for **empty search inputs** and any incorrect interactions on the canvas.

## Tech Stack

- **Frontend**: React with **Vite** for fast builds
- **State Management**: **Context API** for managing selected images and editor state
- **Canvas Manipulation**: **Fabric.js** for dynamic canvas interaction
- **API Integration**: **Unsplash API** for fetching free images
- **Styling**: **CSS Modules** for component-specific styling

## Setup Instructions

### Clone the Repository:

```bash
git clone "https://github.com/harshsharma72/vega6-assignment.git"
cd <project_directory>
npm i
npm run dev
```
