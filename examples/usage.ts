// examples/usage.ts
// Exemple d'utilisation de la librairie CM Phone Lookup avec TypeScript

import { 
  detectOperator, 
  isValidNumber, 
  getPhoneInfo, 
  formatPhoneNumber,
  getOperatorPrefixes,
  getSupportedOperators,
  isPrefixForOperator,
  type Operator,
  type PhoneInfo
} from '../src/index';

console.log("🇨🇲 Exemples d'utilisation TypeScript de CM Phone Lookup\n");

// Exemple 1: Détection d'opérateur avec typage
console.log("📱 Exemple 1: Détection d'opérateur avec typage");
const phone1: string = "+237650123456";
const operator1: Operator = detectOperator(phone1);
console.log(`Le numéro ${phone1} appartient à l'opérateur: ${operator1}\n`);

// Exemple 2: Validation de numéro
console.log("✅ Exemple 2: Validation de numéro");
const phone2: string = "237655123456";
const isValid2: boolean = isValidNumber(phone2);
console.log(`Le numéro ${phone2} est ${isValid2 ? 'valide' : 'invalide'}\n`);

// Exemple 3: Information complète avec interface PhoneInfo
console.log("📊 Exemple 3: Information complète avec interface PhoneInfo");
const phone3: string = "+23722212345";
const info3: PhoneInfo = getPhoneInfo(phone3);
console.log(`Informations sur ${phone3}:`);
console.log(`- Opérateur: ${info3.operator}`);
console.log(`- Valide: ${info3.isValid}`);
console.log(`- Code pays: ${info3.countryCode}`);
console.log(`- Numéro local: ${info3.localNumber}`);
console.log(`- Formaté: ${info3.formattedNumber}`);
console.log(`- Mobile: ${info3.isMobile}`);
console.log(`- Fixe: ${info3.isFixed}`);
console.log(`- Longueur: ${info3.length}\n`);

// Exemple 4: Formatage de numéro
console.log("🎨 Exemple 4: Formatage de numéro");
const phone4: string = "237680123456";
const formatted4: string = formatPhoneNumber(phone4);
console.log(`Numéro original: ${phone4}`);
console.log(`Numéro formaté: ${formatted4}\n`);

// Exemple 5: Obtenir les préfixes d'un opérateur
console.log("🔍 Exemple 5: Préfixes d'opérateur");
const mtnPrefixes: string[] = getOperatorPrefixes('CAMEROON_MTN');
console.log(`Préfixes CAMEROON_MTN: ${mtnPrefixes.join(', ')}\n`);

// Exemple 6: Vérifier si un préfixe appartient à un opérateur
console.log("🔍 Exemple 6: Vérification de préfixe");
const prefix: string = "650";
const isMtn: boolean = isPrefixForOperator(prefix, 'CAMEROON_MTN');
console.log(`Le préfixe ${prefix} ${isMtn ? 'appartient' : "n'appartient pas"} à CAMEROON_MTN\n`);

// Exemple 7: Liste des opérateurs supportés
console.log("📋 Exemple 7: Opérateurs supportés");
const operators: Operator[] = getSupportedOperators();
console.log(`Opérateurs supportés: ${operators.join(', ')}\n`);

// Exemple 8: Traitement en lot avec typage strict
console.log("🔄 Exemple 8: Traitement en lot avec typage strict");
const phoneNumbers: string[] = [
  "+237650123456",  // CAMEROON_MTN
  "237655123456",   // CAMEROON_ORANGE
  "+23722212345",   // CAMEROON_CAMTEL
  "23766123456"     // CAMEROON_NEXTTEL
];

console.log("Analyse de plusieurs numéros:");
phoneNumbers.forEach((phone: string) => {
  const info: PhoneInfo = getPhoneInfo(phone);
  console.log(`${phone} → ${info.operator} (${info.isValid ? 'Valide' : 'Invalide'})`);
});

// Exemple 9: Utilisation avancée avec types
console.log("\n🔬 Exemple 9: Utilisation avancée avec types");
const operatorTypes: Record<Operator, string> = {
  CAMEROON_MTN: "Mobile",
  CAMEROON_ORANGE: "Mobile", 
  CAMEROON_CAMTEL: "Mixte",
  CAMEROON_NEXTTEL: "Mobile",
  SENEGAL_ORANGE: "Mobile",
  SENEGAL_TIGO: "Mobile",
  SENEGAL_EXPRESSO: "Mobile",
  IVORY_COAST_ORANGE: "Mobile",
  IVORY_COAST_MTN: "Mobile",
  IVORY_COAST_MOOV: "Mobile",
  IVORY_COAST_TELECOM: "Mixte",
  Unknown: "Inconnu"
};

operators.forEach((operator: Operator) => {
  const type: string = operatorTypes[operator];
  const prefixCount: number = getOperatorPrefixes(operator).length;
  console.log(`${operator}: ${type} (${prefixCount} préfixes)`);
});

console.log("\n🎉 Tous les exemples TypeScript sont terminés !");
