// examples/usage.js
// Exemple d'utilisation de la librairie CM Phone Lookup V1.5.0

const { 
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
  validatePhoneNumber
} = require('../dist/index.js');

console.log("🇨🇲🇸🇳🇨🇮🇳🇬🇬🇭 Exemples d'utilisation de CM Phone Lookup V1.5.0 (Multi-pays)\n");

// 🆕 NOUVEAU : Exemple 1: API Unifiée avec PhoneLookup.analyze()
console.log("🎯 Exemple 1: API Unifiée avec PhoneLookup.analyze()");
try {
  const result = PhoneLookup.analyze('+233241234567');
  console.log(`✅ Analyse Ghana réussie:`);
  console.log(`   📞 Numéro: ${result.phone}`);
  console.log(`   🏳️ Pays: ${result.country?.flag} ${result.country?.name} (${result.country?.nameLocal})`);
  console.log(`   📱 Opérateur: ${result.operator}`);
  console.log(`   ✅ Valide: ${result.isValid}`);
  console.log(`   🎨 Formaté: ${result.formattedNumber}`);
  console.log(`   🌍 Langue: ${Array.isArray(result.country?.language) ? result.country?.language.join(' + ') : result.country?.language}`);
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
  const phoneLookup = new PhoneLookup('+237650123456')
    .validate()
    .format()
    .getInfo();
  
  console.log('✅ Méthodes chainées réussies:');
  console.log(`   📞 Numéro: ${phoneLookup.phone}`);
  console.log(`   🏳️ Pays: ${phoneLookup.country?.flag} ${phoneLookup.country?.name}`);
  console.log(`   📱 Opérateur: ${phoneLookup.operator}\n`);
} catch (error) {
  console.log('❌ Erreur avec les méthodes chainées:', error);
}

// 🆕 NOUVEAU : Exemple 3: Configuration Flexible
console.log("⚙️ Exemple 3: Configuration Flexible");
try {
  const strictLookup = new PhoneLookup('+233241234567', {
    strictMode: true,
    autoFormat: false,
    language: 'en',
    includeMetadata: true,
    throwOnError: false
  });
  
  const result = strictLookup.analyze();
  console.log('✅ Configuration flexible réussie:');
  console.log(`   📞 Numéro: ${result.phone}`);
  console.log(`   🎨 Auto-format: ${result.formattedNumber !== result.phone ? 'Activé' : 'Désactivé'}\n`);
} catch (error) {
  console.log('❌ Erreur avec la configuration:', error);
}

// 🆕 NOUVEAU : Exemple 4: Validation Avancée avec Messages d'Erreur
console.log("🔍 Exemple 4: Validation Avancée avec Messages d'Erreur");
try {
  const validation = validatePhoneNumber('123');
  console.log('✅ Validation avec erreurs:');
  console.log(`   📊 Valide: ${validation.isValid}`);
  console.log(`   ❌ Erreurs: ${validation.errors.length}`);
  
  validation.errors.forEach((error, index) => {
    console.log(`   ${index + 1}. ${error.code}: ${error.message}`);
    if (error.suggestion) {
      console.log(`      💡 Suggestion: ${error.suggestion}`);
    }
  });
  console.log();
} catch (error) {
  console.log('❌ Erreur lors de la validation:', error);
}

// 🆕 NOUVEAU : Exemple 5: Métadonnées des Pays
console.log("🌍 Exemple 5: Métadonnées des Pays");
try {
  const countries = getAllCountries();
  
  console.log('✅ Métadonnées des pays:');
  countries.forEach(code => {
    const metadata = getCountryMetadata(code);
    if (metadata) {
      console.log(`   ${metadata.flag} ${metadata.name} (${metadata.nameLocal}):`);
      console.log(`      📍 Capitale: ${metadata.capital}`);
      console.log(`      👥 Population: ${metadata.population}`);
      console.log(`      💰 Devise: ${metadata.currency}`);
      console.log(`      🕐 Fuseau: ${metadata.timezone}`);
      console.log(`      🗣️ Langue: ${Array.isArray(metadata.language) ? metadata.language.join(' + ') : metadata.language === 'fr' ? 'Français' : 'Anglais'}`);
    }
  });
  console.log();
} catch (error) {
  console.log('❌ Erreur avec les métadonnées:', error);
}

// 🆕 NOUVEAU : Exemple 6: Statistiques Globales
console.log("📊 Exemple 6: Statistiques Globales");
try {
  const stats = PhoneLookup.getStats();
  console.log('✅ Statistiques globales:');
  console.log(`   🌍 Total pays: ${stats.totalCountries}`);
  console.log(`   📱 Total opérateurs: ${stats.totalOperators}`);
  console.log('   📋 Détail par pays:');
  
  stats.countries.forEach(country => {
    console.log(`      ${country.flag} ${country.name}: ${country.operators} opérateurs`);
  });
  console.log();
} catch (error) {
  console.log('❌ Erreur avec les statistiques:', error);
}

// 🆕 NOUVEAU : Exemple 7: Gestion d'Erreurs avec throwOnError
console.log("⚠️ Exemple 7: Gestion d'Erreurs avec throwOnError");
try {
  const errorLookup = new PhoneLookup('123', { throwOnError: true });
  errorLookup.validate(); // Ceci devrait lancer une erreur
  console.log('❌ Erreur: Aucune exception levée pour un numéro invalide');
} catch (error) {
  if (error instanceof Error) {
    console.log('✅ Gestion d\'erreur réussie:');
    console.log(`   🚨 Type: ${error.name}`);
    console.log(`   📝 Message: ${error.message}`);
    console.log(`   🔢 Code: ${error.code}`);
  }
}
console.log();

// 🆕 NOUVEAU : Exemple 8: Méthodes Statiques
console.log("🔧 Exemple 8: Méthodes Statiques");
try {
  console.log('✅ Méthodes statiques:');
  console.log(`   📱 Opérateur: ${PhoneLookup.getOperator('+233241234567')}`);
  console.log(`   ✅ Validation: ${PhoneLookup.validate('+233241234567')}`);
  console.log(`   🎨 Formatage: ${PhoneLookup.format('+233241234567')}`);
  console.log();
} catch (error) {
  console.log('❌ Erreur avec les méthodes statiques:', error);
}

// Exemple 9: Détection d'opérateur multi-pays (API classique)
console.log("📱 Exemple 9: Détection d'opérateur multi-pays (API classique)");
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

// Exemple 10: Validation de numéro multi-pays (API classique)
console.log("✅ Exemple 10: Validation de numéro multi-pays (API classique)");
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

// Exemple 11: Information complète (API classique)
console.log("📊 Exemple 11: Information complète (API classique)");
const phone3 = "+23722212345";
const info3 = getPhoneInfo(phone3);
console.log(`Informations sur ${phone3}:`);
console.log(JSON.stringify(info3, null, 2));
console.log();

// Exemple 12: Formatage de numéro (API classique)
console.log("🎨 Exemple 12: Formatage de numéro (API classique)");
const phone4 = "237680123456";
const formatted4 = formatPhoneNumber(phone4);
console.log(`Numéro original: ${phone4}`);
console.log(`Numéro formaté: ${formatted4}\n`);

// Exemple 13: Obtenir les préfixes d'un opérateur
console.log("🔍 Exemple 13: Préfixes d'opérateur");
const mtnPrefixes = getOperatorPrefixes('CAMEROON_MTN');
console.log(`Préfixes CAMEROON_MTN: ${mtnPrefixes.join(', ')}\n`);

// Exemple 14: Vérifier si un préfixe appartient à un opérateur
console.log("🔍 Exemple 14: Vérification de préfixe");
const prefix = "650";
const isMtn = isPrefixForOperator(prefix, 'CAMEROON_MTN');
console.log(`Le préfixe ${prefix} ${isMtn ? 'appartient' : "n'appartient pas"} à CAMEROON_MTN\n`);

// Exemple 15: Liste des opérateurs supportés
console.log("📋 Exemple 15: Opérateurs supportés");
const operators = getSupportedOperators();
console.log(`Opérateurs supportés: ${operators.join(', ')}\n`);

// Exemple 16: Traitement en lot multi-pays
console.log("🔄 Exemple 16: Traitement en lot multi-pays");
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

console.log("\n🎉 Tous les exemples V1.5.0 sont terminés !");
console.log("🚀 Votre librairie est maintenant beaucoup plus professionnelle et facile à utiliser !");
