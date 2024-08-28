#!/usr/bin/env node
const term = require("terminal-kit").terminal;
const ASCII_LOGO = `
██████╗ ██╗████████╗ ██████╗██╗  ██╗    ██╗    ██╗████████╗███████╗    ███╗   ███╗███████╗
██╔══██╗██║╚══██╔══╝██╔════╝██║  ██║    ██║    ██║╚══██╔══╝██╔════╝    ████╗ ████║██╔════╝
██████╔╝██║   ██║   ██║     ███████║    ██║    ██║   ██║   ███████╗    ██╔████╔██║█████╗  
██╔══██╗██║   ██║   ██║     ██╔══██║    ╚═╝    ██║   ██║   ╚════██║    ██║╚██╔╝██║██╔══╝  
██████╔╝██║   ██║   ╚██████╗██║  ██║    ██╗    ██║   ██║   ███████║    ██║ ╚═╝ ██║███████╗
╚═════╝ ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝    ╚═╝    ╚═╝   ╚═╝   ╚══════╝    ╚═╝     ╚═╝╚══════╝
                                                                                          
⠀⠀`;

function about() {
  term.bold.cyan("Hello World welcome to my portfolio 👨‍💻\n\n\n");
  term.bold("😺 Name: ").brightMagenta("Sulagna\n");
  term
    .bold("❓ About: ")
    .cyan("Just a beginner developer, Interested in building new things\n");
  // term.bold('🌐 Website: ').yellow('https://sanjoypaul.vercel.app/\n');
  term.bold("🐙 GitHub: ").blue("https://github.com/SulagnaMahato\n");
  term
    .bold("🐥 Instagram: ")
    .brightCyan("https://www.instagram.com/dej4vues2103/\n");
  term.bold("📧 Email: ").brightRed("sulagnamahato21@gmail.com\n");
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
