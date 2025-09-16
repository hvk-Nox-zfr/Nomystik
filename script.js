// script.js

const prefixes = [
  "El", "Ar", "Thal", "Mor", "Gal", "Fen", "Syl", "Dra", "Vor", "Zan", "Kael", "Luth",
  "Ser", "Val", "Tor", "Nym", "Ael", "Rav", "Xan", "Eri", "Mal", "Orin", "Shae", "Kyr",
  "Vex", "Tyr", "Zor", "Ari", "Gor", "Laz", "Myth", "Quen", "Ryn", "Sol", "Vul", "Yen",
  "Zeph", "Thar", "Ner", "Isil", "Bryn", "Cyn", "Jor", "Kel", "Lan", "Myr", "Nyx", "Oph",
  "Pyrr", "Rae", "Syr", "Tahl", "Ulth", "Vael", "Wyn", "Xyr", "Yll", "Zeth"
];

const suffixes = [
  "ion", "wyn", "dor", "mir", "thas", "riel", "gorn", "lith", "dras", "vorn", "dral", "zor",
  "thil", "rien", "vyr", "nox", "gash", "dros", "morn", "quar", "zeth", "rax", "lor", "fyr",
  "neth", "sor", "vash", "grel", "xil", "dren", "thal", "gorn", "vyn", "zhar", "kesh", "mire",
  "torn", "shar", "lorn", "vyrn", "dusk", "shade", "blight", "flame", "spire", "fang", "howl",
  "veil", "storm", "bane", "wrath", "echo", "shard", "gloom", "thorn", "ember", "glow", "whisper"
];

let historique = [];

function genererNom() {
  const base = document.getElementById("baseInput").value.trim();
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  let nom = base
    ? base.charAt(0).toUpperCase() + base.slice(1) + suffix
    : prefix + suffix;

  document.getElementById("resultat").textContent = nom;

  historique.unshift(nom);
  afficherHistorique();
}

function copierNom() {
  const nom = document.getElementById("resultat").textContent;
  if (nom && nom !== "Ton nom apparaîtra ici") {
    navigator.clipboard.writeText(nom)
      .catch(() => console.error("Erreur lors de la copie"));
  }
}

function afficherHistorique() {
  const ul = document.getElementById("historique");
  ul.innerHTML = "";

  historique.slice(0, 10).forEach(nom => {
    const li = document.createElement("li");
    li.textContent = nom;
    li.classList.add("copiable");

    li.addEventListener("click", () => {
      navigator.clipboard.writeText(nom)
        .then(() => {
          li.classList.add("copied");
          setTimeout(() => li.classList.remove("copied"), 1000);
        })
        .catch(() => console.error("Erreur lors de la copie"));
    });

    ul.appendChild(li);
  });
}
