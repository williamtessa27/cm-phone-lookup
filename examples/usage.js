// examples/usage.js
// Exemple d'utilisation de la librairie CM Phone Lookup

const { 
  detectOperator, 
  isValidNumber, 
  getPhoneInfo, 
  formatPhoneNumber,
  getOperatorPrefixes,
  getSupportedOperators,
  isPrefixForOperator
} = require('../dist/index.js');

console.log("🇨🇲 Exemples d'utilisation de CM Phone Lookup\n");

// Exemple 1: Détection d'opérateur
console.log("📱 Exemple 1: Détection d'opérateur");
const phone1 = "+237650123456";
const operator1 = detectOperator(phone1);
console.log(`Le numéro ${phone1} appartient à l'opérateur: ${operator1}\n`);

// Exemple 2: Validation de numéro
console.log("✅ Exemple 2: Validation de numéro");
const phone2 = "237655123456";
const isValid2 = isValidNumber(phone2);
console.log(`Le numéro ${phone2} est ${isValid2 ? 'valide' : 'invalide'}\n`);

// Exemple 3: Information complète
console.log("📊 Exemple 3: Information complète");
const phone3 = "+23722212345";
const info3 = getPhoneInfo(phone3);
console.log(`Informations sur ${phone3}:`);
console.log(JSON.stringify(info3, null, 2));
console.log();

// Exemple 4: Formatage de numéro
console.log("🎨 Exemple 4: Formatage de numéro");
const phone4 = "237680123456";
const formatted4 = formatPhoneNumber(phone4);
console.log(`Numéro original: ${phone4}`);
console.log(`Numéro formaté: ${formatted4}\n`);

// Exemple 5: Obtenir les préfixes d'un opérateur
console.log("🔍 Exemple 5: Préfixes d'opérateur");
const mtnPrefixes = getOperatorPrefixes('MTN');
console.log(`Préfixes MTN: ${mtnPrefixes.join(', ')}\n`);

// Exemple 6: Vérifier si un préfixe appartient à un opérateur
console.log("🔍 Exemple 6: Vérification de préfixe");
const prefix = "650";
const isMtn = isPrefixForOperator(prefix, 'MTN');
console.log(`Le préfixe ${prefix} ${isMtn ? 'appartient' : "n'appartient pas"} à MTN\n`);

// Exemple 7: Liste des opérateurs supportés
console.log("📋 Exemple 7: Opérateurs supportés");
const operators = getSupportedOperators();
console.log(`Opérateurs supportés: ${operators.join(', ')}\n`);

// Exemple 8: Traitement en lot
console.log("🔄 Exemple 8: Traitement en lot");
const phoneNumbers = [
  "+237650123456",
  "237655123456", 
  "+23722212345",
  "23766123456"
];

console.log("Analyse de plusieurs numéros:");
phoneNumbers.forEach(phone => {
  const info = getPhoneInfo(phone);
  console.log(`${phone} → ${info.operator} (${info.isValid ? 'Valide' : 'Invalide'})`);
});

console.log("\n🎉 Tous les exemples sont terminés !");
