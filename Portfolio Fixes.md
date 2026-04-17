# Portfolio Fixes & Improvements (Single File Guide)

## Overview

This file contains all fixes and improvements required for the online portfolio of **Muhamed Ehab (Graphic Designer)**.

---

## 1. Fix Navbar Links (Work, About, Contact)

### Problem

Navbar links are not working.

### Fix

Make sure each section has an `id` and the navbar links match them.

```html
<!-- Navbar -->
<nav>
  <a href="#work">Work</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>

<!-- Sections -->
<section id="work"></section>
<section id="about"></section>
<section id="contact"></section>
```

### Smooth Scrolling (Optional)

```css
html {
  scroll-behavior: smooth;
}
```

---

## 2. Fix Profile Image (Remove Frame + Resize)

### Problem

* Image has unwanted frame/border
* Size is too small

### Fix

```html
<div class="profile">
  <img src="profile.jpg" class="profile-img" />
  <h1>Muhamed Ehab</h1>
</div>
```

```css
.profile {
  display: flex;
  align-items: center;
  gap: 15px;
}

.profile-img {
  border: none;
  outline: none;
  box-shadow: none;
  width: 180px; /* adjust if needed */
  height: auto;
  border-radius: 50%; /* optional */
}
```

---

## 3. Remove Cursor Animation

### Problem

Custom cursor animation is distracting.

### Fix

Delete or comment out any related code.

#### Remove from CSS

```css
.cursor {
  /* DELETE THIS */
}
```

#### Remove from JS

```js
// DELETE cursor animation scripts
document.addEventListener("mousemove", function() {
  // remove this logic
});
```

---

## 4. Work Showcase Slider (Auto Sliding Gallery)

### Goal

Display work images under **"15 Happy Clients"** as an automatic slider.

---

## Step 1: Create Storage Folder

Project structure:

```
project/
│── index.html
│── style.css
│── script.js
│── storage/
│     ├── work1.jpg
│     ├── work2.jpg
│     ├── work3.jpg
```

---

## Step 2: HTML

```html
<section id="work">
  <h2>15 Happy Clients</h2>

  <div class="slider">
    <div class="slides">
      <img src="storage/work1.jpg" />
      <img src="storage/work2.jpg" />
      <img src="storage/work3.jpg" />
    </div>
  </div>
</section>
```

---

## Step 3: CSS

```css
.slider {
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
}

.slides {
  display: flex;
  width: 300%;
  animation: slide 12s infinite;
}

.slides img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  flex-shrink: 0;
}
```

---

## Step 4: Animation

```css
@keyframes slide {
  0%   { transform: translateX(0); }
  30%  { transform: translateX(0); }

  33%  { transform: translateX(-100%); }
  63%  { transform: translateX(-100%); }

  66%  { transform: translateX(-200%); }
  96%  { transform: translateX(-200%); }

  100% { transform: translateX(0); }
}
```

---

## Optional Improvements

### Pause on Hover

```css
.slider:hover .slides {
  animation-play-state: paused;
}
```

---

## Final Result ✅

After applying all fixes:

* Navbar works correctly
* Profile image looks clean and properly sized
* Cursor animation removed
* Work section displays a smooth auto-sliding gallery
* Portfolio looks more professional and modern

---

## Notes

* Keep images optimized for faster loading
* Maintain consistent spacing across sections
* Use high-quality work images for better impression
