// examples/usage.ts
// Exemple d'utilisation de la librairie CM Phone Lookup V1.5.0 avec TypeScript

import {
  detectOperator,
  isValidNumber,
  getPhoneInfo,
  formatPhoneNumber,
  getOperatorPrefixes,
  getSupportedOperators,
  isPrefixForOperator,
  // 🆕 NOUVELLES FONCTIONNALITÉS V1.5.0
  PhoneLookup,
  getCountryMetadata,
  getAllCountries,
  validatePhoneNumber,
  type Operator,
  type PhoneInfo,
  type EnhancedPhoneInfo,
  type CountryMetadata,
  type PhoneLookupOptions,
  type ValidationError,
} from '../src/index';

console.log("🇨🇲🇸🇳🇨🇮🇳🇬🇬🇭 Exemples d'utilisation TypeScript de CM Phone Lookup V1.5.0\n");

// 🆕 NOUVEAU : Exemple 1: API Unifiée avec PhoneLookup.analyze()
console.log("🎯 Exemple 1: API Unifiée avec PhoneLookup.analyze()");
try {
  const result: EnhancedPhoneInfo = PhoneLookup.analyze('+233241234567');
  console.log(`✅ Analyse Ghana réussie:`);
  console.log(`   📞 Numéro: ${result.phone}`);
  console.log(`   🏳️ Pays: ${result.country?.flag} ${result.country?.name} (${result.country?.nameLocal})`);
  console.log(`   📱 Opérateur: ${result.operator}`);
  console.log(`   ✅ Valide: ${result.isValid}`);
  console.log(`   🎨 Formaté: ${result.formattedNumber}`);
  console.log(`   🌍 Langue: ${result.country?.language}`);
  console.log(`   💰 Devise: ${result.country?.currency}`);
  console.log(`   🕐 Fuseau: ${result.country?.timezone}`);
  console.log(`   🏛️ Capitale: ${result.country?.capital}`);
  console.log(`   👥 Population: ${result.country?.population}\n`);
} catch (error) {
  console.log('❌ Erreur lors de l\'analyse:', error);
}

// 🆕 NOUVEAU : Exemple 2: Méthodes Chainées (Fluent API)
console.log("🔗 Exemple 2: Méthodes Chainées (Fluent API)");
try {
  const phoneLookup: PhoneLookup = new PhoneLookup('+237650123456');
  const result: EnhancedPhoneInfo = phoneLookup
    .validate()
    .format()
    .getInfo();
  
  console.log('✅ Méthodes chainées réussies:');
  console.log(`   📞 Numéro: ${result.phone}`);
  console.log(`   🏳️ Pays: ${result.country?.flag} ${result.country?.name}`);
  console.log(`   📱 Opérateur: ${result.operator}\n`);
} catch (error) {
  console.log('❌ Erreur avec les méthodes chainées:', error);
}

// 🆕 NOUVEAU : Exemple 3: Configuration Flexible avec Types
console.log("⚙️ Exemple 3: Configuration Flexible avec Types");
try {
  const options: PhoneLookupOptions = {
    strictMode: true,
    autoFormat: false,
    language: 'en',
    includeMetadata: true,
    throwOnError: false
  };
  
  const strictLookup: PhoneLookup = new PhoneLookup('+233241234567', options);
  const result: EnhancedPhoneInfo = strictLookup.analyze();
  
  console.log('✅ Configuration flexible réussie:');
  console.log(`   📞 Numéro: ${result.phone}`);
  console.log(`   🎨 Auto-format: ${result.formattedNumber !== result.phone ? 'Activé' : 'Désactivé'}\n`);
} catch (error) {
  console.log('❌ Erreur avec la configuration:', error);
}

// 🆕 NOUVEAU : Exemple 4: Validation Avancée avec Types
console.log("🔍 Exemple 4: Validation Avancée avec Types");
try {
  const validation = validatePhoneNumber('123');
  console.log('✅ Validation avec erreurs:');
  console.log(`   📊 Valide: ${validation.isValid}`);
  console.log(`   ❌ Erreurs: ${validation.errors.length}`);
  
  validation.errors.forEach((error: ValidationError, index: number) => {
    console.log(`   ${index + 1}. ${error.code}: ${error.message}`);
    if (error.suggestion) {
      console.log(`      💡 Suggestion: ${error.suggestion}`);
    }
  });
  console.log();
} catch (error) {
  console.log('❌ Erreur lors de la validation:', error);
}

// 🆕 NOUVEAU : Exemple 5: Métadonnées des Pays avec Types
console.log("🌍 Exemple 5: Métadonnées des Pays avec Types");
try {
  const countries: string[] = getAllCountries();
  
  console.log('✅ Métadonnées des pays:');
  countries.forEach((code: string) => {
    const metadata: CountryMetadata | null = getCountryMetadata(code);
    if (metadata) {
      console.log(`   ${metadata.flag} ${metadata.name} (${metadata.nameLocal}):`);
      console.log(`      📍 Capitale: ${metadata.capital}`);
      console.log(`      👥 Population: ${metadata.population}`);
      console.log(`      💰 Devise: ${metadata.currency}`);
      console.log(`      🕐 Fuseau: ${metadata.timezone}`);
      console.log(`      🗣️ Langue: ${metadata.language === 'fr' ? 'Français' : 'Anglais'}`);
    }
  });
  console.log();
} catch (error) {
  console.log('❌ Erreur avec les métadonnées:', error);
}

// 🆕 NOUVEAU : Exemple 6: Statistiques Globales avec Types
console.log("📊 Exemple 6: Statistiques Globales avec Types");
try {
  const stats = PhoneLookup.getStats();
  console.log('✅ Statistiques globales:');
  console.log(`   🌍 Total pays: ${stats.totalCountries}`);
  console.log(`   📱 Total opérateurs: ${stats.totalOperators}`);
  console.log('   📋 Détail par pays:');
  
  stats.countries.forEach((country) => {
    console.log(`      ${country.flag} ${country.name}: ${country.operators} opérateurs`);
  });
  console.log();
} catch (error) {
  console.log('❌ Erreur avec les statistiques:', error);
}

// 🆕 NOUVEAU : Exemple 7: Gestion d'Erreurs avec Types
console.log("⚠️ Exemple 7: Gestion d'Erreurs avec Types");
try {
  const errorLookup: PhoneLookup = new PhoneLookup('123', { throwOnError: true });
  errorLookup.validate(); // Ceci devrait lancer une erreur
  console.log('❌ Erreur: Aucune exception levée pour un numéro invalide');
} catch (error) {
  if (error instanceof Error) {
    console.log('✅ Gestion d\'erreur réussie:');
    console.log(`   🚨 Type: ${error.name}`);
    console.log(`   📝 Message: ${error.message}`);
    console.log(`   🔢 Code: ${(error as any).code}`);
  }
}
console.log();

// 🆕 NOUVEAU : Exemple 8: Méthodes Statiques avec Types
console.log("🔧 Exemple 8: Méthodes Statiques avec Types");
try {
  console.log('✅ Méthodes statiques:');
  console.log(`   📱 Opérateur: ${PhoneLookup.getOperator('+233241234567')}`);
  console.log(`   ✅ Validation: ${PhoneLookup.validate('+233241234567')}`);
  console.log(`   🎨 Formatage: ${PhoneLookup.format('+233241234567')}`);
  console.log();
} catch (error) {
  console.log('❌ Erreur avec les méthodes statiques:', error);
}

// Exemple 9: Détection d'opérateur avec typage (API classique)
console.log("📱 Exemple 9: Détection d'opérateur avec typage (API classique)");
const phone1: string = '+237650123456';
const operator1: Operator = detectOperator(phone1);
console.log(`Le numéro ${phone1} appartient à l'opérateur: ${operator1}\n`);

// Exemple 10: Validation de numéro (API classique)
console.log('✅ Exemple 10: Validation de numéro (API classique)');
const phone2: string = '237655123456';
const isValid2: boolean = isValidNumber(phone2);
console.log(`Le numéro ${phone2} est ${isValid2 ? 'valide' : 'invalide'}\n`);

// Exemple 11: Information complète avec interface PhoneInfo (API classique)
console.log('📊 Exemple 11: Information complète avec interface PhoneInfo (API classique)');
const phone3: string = '+23722212345';
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

// Exemple 12: Formatage de numéro (API classique)
console.log('🎨 Exemple 12: Formatage de numéro (API classique)');
const phone4: string = '237680123456';
const formatted4: string = formatPhoneNumber(phone4);
console.log(`Numéro original: ${phone4}`);
console.log(`Numéro formaté: ${formatted4}\n`);

// Exemple 13: Obtenir les préfixes d'un opérateur
console.log("🔍 Exemple 13: Préfixes d'opérateur");
const mtnPrefixes: string[] = getOperatorPrefixes('CAMEROON_MTN');
console.log(`Préfixes CAMEROON_MTN: ${mtnPrefixes.join(', ')}\n`);

// Exemple 14: Vérifier si un préfixe appartient à un opérateur
console.log('🔍 Exemple 14: Vérification de préfixe');
const prefix: string = '650';
const isMtn: boolean = isPrefixForOperator(prefix, 'CAMEROON_MTN');
console.log(
  `Le préfixe ${prefix} ${isMtn ? 'appartient' : "n'appartient pas"} à CAMEROON_MTN\n`
);

// Exemple 15: Liste des opérateurs supportés
console.log('📋 Exemple 15: Opérateurs supportés');
const operators: Operator[] = getSupportedOperators();
console.log(`Opérateurs supportés: ${operators.join(', ')}\n`);

// Exemple 16: Traitement en lot avec typage strict (API classique)
console.log('🔄 Exemple 16: Traitement en lot avec typage strict (API classique)');
const phoneNumbers: string[] = [
  '+237650123456', // CAMEROON_MTN
  '237655123456', // CAMEROON_ORANGE
  '+23722212345', // CAMEROON_CAMTEL
  '23766123456', // CAMEROON_NEXTTEL
  '+221771234567', // SENEGAL_ORANGE
  '221751234567', // SENEGAL_EXPRESSO
  '+22501234567', // IVORY_COAST_ORANGE
  '22527212345', // IVORY_COAST_TELECOM
  '+2340803123456', // NIGERIA_MTN
  '2340802123456', // NIGERIA_AIRTEL
  '+233241234567', // GHANA_MTN
  '233201234567'  // GHANA_VODAFONE
];

console.log('Analyse de plusieurs numéros:');
phoneNumbers.forEach((phone: string) => {
  const info: PhoneInfo = getPhoneInfo(phone);
  console.log(
    `${phone} → ${info.operator} (${info.isValid ? 'Valide' : 'Invalide'})`
  );
});

// Exemple 17: Utilisation avancée avec types étendus
console.log('\n🔬 Exemple 17: Utilisation avancée avec types étendus');
const operatorTypes: Record<Operator, string> = {
  // Cameroun
  CAMEROON_MTN: 'Mobile',
  CAMEROON_ORANGE: 'Mobile',
  CAMEROON_CAMTEL: 'Mixte',
  CAMEROON_NEXTTEL: 'Mobile',

  // Sénégal
  SENEGAL_ORANGE: 'Mobile',
  SENEGAL_TIGO: 'Mobile',
  SENEGAL_EXPRESSO: 'Mobile',

  // Côte d'Ivoire
  IVORY_COAST_ORANGE: 'Mobile',
  IVORY_COAST_MTN: 'Mobile',
  IVORY_COAST_MOOV: 'Mobile',
  IVORY_COAST_TELECOM: 'Mixte',

  // Nigeria
  NIGERIA_MTN: 'Mobile',
  NIGERIA_AIRTEL: 'Mobile',
  NIGERIA_GLO: 'Mobile',
  NIGERIA_9MOBILE: 'Mobile',

  // Ghana
  GHANA_MTN: 'Mobile',
  GHANA_VODAFONE: 'Mobile',
  GHANA_AIRTELTIGO: 'Mobile',

  // Inconnu
  Unknown: 'Inconnu',
};

operators.forEach((operator: Operator) => {
  const type: string = operatorTypes[operator];
  const prefixCount: number = getOperatorPrefixes(operator).length;
  console.log(`${operator}: ${type} (${prefixCount} préfixes)`);
});

// 🆕 NOUVEAU : Exemple 18: Comparaison API Classique vs Nouvelle API
console.log('\n🆚 Exemple 18: Comparaison API Classique vs Nouvelle API');
const testPhone: string = '+233241234567';

console.log('📱 API Classique:');
const classicResult: PhoneInfo = getPhoneInfo(testPhone);
console.log(`   Opérateur: ${classicResult.operator}`);
console.log(`   Valide: ${classicResult.isValid}`);

console.log('\n🎯 Nouvelle API:');
const newResult: EnhancedPhoneInfo = PhoneLookup.analyze(testPhone);
console.log(`   Opérateur: ${newResult.operator}`);
console.log(`   Valide: ${newResult.isValid}`);
console.log(`   Pays: ${newResult.country?.flag} ${newResult.country?.name}`);
console.log(`   Capitale: ${newResult.country?.capital}`);

console.log('\n🎉 Tous les exemples TypeScript V1.5.0 sont terminés !');
console.log('🚀 Votre librairie est maintenant beaucoup plus professionnelle et facile à utiliser !');
console.log('💡 Les nouvelles fonctionnalités offrent une expérience de développement moderne et intuitive !');
