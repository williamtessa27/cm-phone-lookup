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

console.log("🇨🇲🇸🇳🇨🇮🇳🇬🇬🇭 Exemples d'utilisation de CM Phone Lookup (Multi-pays)\n");

// Exemple 1: Détection d'opérateur multi-pays
console.log("📱 Exemple 1: Détection d'opérateur multi-pays");
const phone1 = "+237650123456";
const operator1 = detectOperator(phone1);
console.log(`Le numéro ${phone1} appartient à l'opérateur: ${operator1}`);

const phone1SN = "+221771234567";
const operator1SN = detectOperator(phone1SN);
console.log(`Le numéro ${phone1SN} appartient à l'opérateur: ${operator1SN}`);

const phone1CI = "+22501234567";
const operator1CI = detectOperator(phone1CI);
console.log(`Le numéro ${phone1CI} appartient à l'opérateur: ${operator1CI}`);

const phone1NG = "+2340803123456";
const operator1NG = detectOperator(phone1NG);
console.log(`Le numéro ${phone1NG} appartient à l'opérateur: ${operator1NG}`);

const phone1GH = "+233241234567";
const operator1GH = detectOperator(phone1GH);
console.log(`Le numéro ${phone1GH} appartient à l'opérateur: ${operator1GH}\n`);

// Exemple 2: Validation de numéro multi-pays
console.log("✅ Exemple 2: Validation de numéro multi-pays");
const phone2 = "237655123456";
const isValid2 = isValidNumber(phone2);
console.log(`Le numéro ${phone2} est ${isValid2 ? 'valide' : 'invalide'}`);

const phone2SN = "221771234567";
const isValid2SN = isValidNumber(phone2SN);
console.log(`Le numéro ${phone2SN} est ${isValid2SN ? 'valide' : 'invalide'}`);

const phone2CI = "22501234567";
const isValid2CI = isValidNumber(phone2CI);
console.log(`Le numéro ${phone2CI} est ${isValid2CI ? 'valide' : 'invalide'}`);

const phone2NG = "2340803123456";
const isValid2NG = isValidNumber(phone2NG);
console.log(`Le numéro ${phone2NG} est ${isValid2NG ? 'valide' : 'invalide'}`);

const phone2GH = "233241234567";
const isValid2GH = isValidNumber(phone2GH);
console.log(`Le numéro ${phone2GH} est ${isValid2GH ? 'valide' : 'invalide'}\n`);

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
const mtnPrefixes = getOperatorPrefixes('CAMEROON_MTN');
console.log(`Préfixes CAMEROON_MTN: ${mtnPrefixes.join(', ')}\n`);

// Exemple 6: Vérifier si un préfixe appartient à un opérateur
console.log("🔍 Exemple 6: Vérification de préfixe");
const prefix = "650";
const isMtn = isPrefixForOperator(prefix, 'CAMEROON_MTN');
console.log(`Le préfixe ${prefix} ${isMtn ? 'appartient' : "n'appartient pas"} à CAMEROON_MTN\n`);

// Exemple 7: Liste des opérateurs supportés
console.log("📋 Exemple 7: Opérateurs supportés");
const operators = getSupportedOperators();
console.log(`Opérateurs supportés: ${operators.join(', ')}\n`);

// Exemple 8: Traitement en lot multi-pays
console.log("🔄 Exemple 8: Traitement en lot multi-pays");
const phoneNumbers = [
  "+237650123456",  // CAMEROON_MTN
  "237655123456",   // CAMEROON_ORANGE
  "+23722212345",   // CAMEROON_CAMTEL
  "23766123456",    // CAMEROON_NEXTTEL
  "+221771234567",  // SENEGAL_ORANGE
  "221751234567",   // SENEGAL_EXPRESSO
  "+22501234567",   // IVORY_COAST_ORANGE
  "22527212345",    // IVORY_COAST_TELECOM
  "+2340803123456", // NIGERIA_MTN
  "2340802123456",  // NIGERIA_AIRTEL
  "+233241234567",  // GHANA_MTN
  "233201234567"    // GHANA_VODAFONE
];

console.log("Analyse de plusieurs numéros:");
phoneNumbers.forEach(phone => {
  const info = getPhoneInfo(phone);
  console.log(`${phone} → ${info.operator} (${info.isValid ? 'Valide' : 'Invalide'})`);
});

console.log("\n🎉 Tous les exemples sont terminés !");
