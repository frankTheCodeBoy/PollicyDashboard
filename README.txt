## 🗺️ PollicyDashboard — Interactive Visualization Platform

[![Django](https://img.shields.io/badge/Django-4.x-green?logo=django)](https://www.djangoproject.com/)  
[![HTML5](https://img.shields.io/badge/HTML5-40%25-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)  
[![JavaScript](https://img.shields.io/badge/JavaScript-39%25-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A Django-powered dashboard for interactive geospatial and network visualizations. Inspired by the Oxford Internet Institute’s InteractiveVis project, this platform supports modular data ingestion, multilingual support, and offline-ready visualizations.

---

### 🧩 Features

- 🌍 Interactive visualizations using HTML5, CSS3, SVG  
- 🧠 Modular Django apps: `pollicy_app`, `admin_app`, `django_pollicy`  
- 🗂️ Static and media file support  
- 🌐 Multilingual interface via `locale/sw/LC_MESSAGES`  
- ⚙️ Custom data ingestion via `machine_script.py`  
- 🧱 Web-ready configuration files (`web.config`, `.htaccess_example`)

---

### 📁 Project Structure

```plaintext
PollicyDashboard/
├── admin_app/
├── django_pollicy/
├── pollicy_app/
├── locale/sw/LC_MESSAGES/
├── media/documents/
├── static/
├── templates/
├── machine_script.py
├── manage.py
├── requirements.txt
├── README.txt
├── web.config
├── htaccess_example
└── .gitignore
```

---

### 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/frankTheCodeBoy/PollicyDashboard.git
   cd PollicyDashboard
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv env
   source env/bin/activate
   pip install -r requirements.txt
   ```

3. Run migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

> ⚠️ Note: Due to JavaScript security, visualizations must be run on a webserver (local or hosted). They may not render correctly if opened directly in a browser.

---

### 🎯 Purpose

This project was built to:
- Explore interactive data visualization using native web technologies  
- Integrate Django with multilingual and modular architecture  
- Support offline-ready visualizations for ebooks and embedded platforms  
- Extend the InteractiveVis framework with custom ingestion and deployment logic

---

### 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

