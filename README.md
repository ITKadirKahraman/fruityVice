# 🍎 Fruitvice API

Eine kleine Webanwendung, die Daten von der öffentlichen **Fruitvice API** abruft und verschiedene Früchte mit ihren Nährwerten übersichtlich darstellt.

---

## 🚀 Features

- Abruf von Fruchtdaten über eine REST-API
- Dynamisches Rendering der Daten mit JavaScript
- Anzeige von Fruchtinformationen und Nährwerten
- Asynchrone Datenverarbeitung mit `fetch()`
- Dynamische Erstellung von HTML-Elementen
- Einfache und übersichtliche Benutzeroberfläche

---

## 🛠️ Verwendete Technologien

### 🚀 Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)

### 🌐 API

- Fruitvice API

---

## 📂 Projektstruktur

```bash
📁 Fruitvice-API
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┣ 📄 script.js
 ┣ 📄 templates.js
 ┗ 📁 assets
     ┗ 📁 icons
```

---

## ⚙️ Funktionsweise

### Initialisierung

Beim Laden der Seite wird zunächst der Header gerendert und anschließend die API aufgerufen.

```javascript
function init() {
    renderHeader();
    fetchDataJson();
}
```

---

### API-Aufruf

Die Fruchtdaten werden über die Fruitvice API geladen.

```javascript
async function fetchDataJson() {
    let response = await fetch(
        "https://www.fruityvice.com/api/fruit/all"
    );

    fruits = await response.json();
    renderFruits();
}
```

---

### Dynamisches Rendering

Alle geladenen Früchte werden automatisch als Karten dargestellt.

```javascript
function renderFruits() {
    let content = document.getElementById("fruitCards");

    for (let index = 0; index < fruits.length; index++) {
        content.innerHTML += getFruits(fruits[index]);
    }
}
```

---

## 📚 Verwendete Konzepte

### Asynchrones JavaScript

- async / await
- Fetch API
- JSON-Verarbeitung

### DOM-Manipulation

- Dynamisches Rendering
- Arbeiten mit `innerHTML`
- Dynamische Template-Erstellung

### REST-API

- GET Requests
- Verarbeitung externer Datenquellen

---

## 🎯 Lernziele dieses Projekts

Mit diesem Projekt wurden folgende Themen vertieft:

- Arbeiten mit APIs
- Fetch API
- Async / Await
- JSON-Daten verarbeiten
- Dynamisches Rendering
- Schleifen
- Funktionen
- DOM-Manipulation
- Template-Strukturen

---

## 🌱 Mögliche Erweiterungen

- Suchfunktion
- Filter nach Fruchtfamilien
- Sortierung nach Kalorien
- Detailansicht einzelner Früchte
- Responsive Card-Layout
- Favoriten-System mit localStorage

---

## 👨‍💻 Autor

**Kadir Kahraman**

Bachelor of Science Wirtschaftsinformatik  
Leidenschaftlicher Entwickler mit Fokus auf kontinuierliches Lernen und praktische Projektentwicklung.

---

## 📖 API Quelle

https://www.fruityvice.com
