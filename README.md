# Lazy Loading Component Demo 🚦

Diese Angular 19 Demo zeigt, wie man **Lazy Loading** mit dem Angular Router umsetzt, 
um Komponenten nur dann zu laden, wenn sie benötigt werden. 
In dieser Demo werden zwei Komponenten per Router-Wechsel lazy geladen.

## 🛠️ Verwendete Technologien

- Angular 19
- Angular Router (für Lazy Loading)
- Angular Material (für UI-Komponenten)

## ⚙️ Funktionsweise

1. **Lazy Loading der Komponenten:** Komponenten werden erst geladen, wenn der Benutzer über den Router auf die entsprechende Route zugreift.
2. **Router-Konfiguration:** Die Routen sind so konfiguriert, dass die Komponenten beim Navigieren in den jeweiligen Bereich lazy geladen werden.
3. **Verwendung von Angular Material:** Einige UI-Komponenten von Angular Material werden verwendet, um das Benutzererlebnis zu verbessern.

## 🚀 Lokales Setup

```
git clone https://github.com/ronnymundt/lazy-loading-component-demo.git
cd lazy-loading-component-demo
npm install
ng serve
```

## 📸 Screenshot

![Screenshot](/src/assets/screenshot.png)
