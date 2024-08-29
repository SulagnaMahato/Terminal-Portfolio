#!/usr/bin/env node
const term = require("terminal-kit").terminal;
const ASCII_LOGO = `
  /$$$$$$  /$$$$$$$$ /$$   /$$  /$$$$$$  /$$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$      
 /$$__  $$| $$_____/| $$$ | $$ /$$__  $$| $$__  $$ /$$__  $$|__  $$__/|_  $$_/      
| $$  \__/| $$      | $$$$| $$| $$  \ $$| $$  \ $$| $$  \ $$   | $$     | $$        
|  $$$$$$ | $$$$$   | $$ $$ $$| $$$$$$$$| $$$$$$$/| $$$$$$$$   | $$     | $$        
 \____  $$| $$__/   | $$  $$$$| $$__  $$| $$____/ | $$__  $$   | $$     | $$        
 /$$  \ $$| $$      | $$\  $$$| $$  | $$| $$      | $$  | $$   | $$     | $$        
|  $$$$$$/| $$$$$$$$| $$ \  $$| $$  | $$| $$      | $$  | $$   | $$    /$$$$$$      
 \______/ |________/|__/  \__/|__/  |__/|__/      |__/  |__/   |__/   |______/      
                                                                                    
ss`;

function about() {
  term.bold.cyan("Hello World welcome tsso my portfolio 👨‍💻\n\n\n");
  term.bold("😺 Name: ").brightMagenta("Senapati\n");
  term
    .bold("❓ About: ")
    .cyan("Just a beginner developer, Interested in building new things\n");
   term.bold('🌐 Website: ').yellow('https://senapatiarpan.tech/\n');
  term.bold("🐙 GitHub: ").blue("https://github.com/Senapati5\n");
  term
    .bold("🐥 Instagram: ")
    .brightCyan("https://www.instagram.com/senapati_arpan/\n");
  term.bold("📧 Email: ").brightRed("student.senapatiarpan@gmail.com\n");
}

function skills() {
  term
    .bold("✒️ Languages: ")
    .red.bold("☕ JAVA ")
    .cyan.bold("👾 Python")
    .yellow.bold("🟨 JavaScript ")
    .brightBlue.bold("🟦 CSS ")
    .red.bold("🟧 HTML\n");
  term
    .bold("🛠️ Tools & Frameworks: ")
    .brightBlue.bold("🌐 VS Code ")
    .brightRed.bold("🐙 Git & GitHub ")
    .brightMagenta.bold("👾 Bootstraps ")
    .yellow.bold("🤖 Android Studio");
}

console.log(ASCII_LOGO);
about();
skills();
