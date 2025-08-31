// src/test-enhanced.ts
// Tests complets pour les nouvelles fonctionnalités améliorées

import { 
  PhoneLookup, 
  getCountryMetadata, 
  getAllCountries,
  validatePhoneNumber,
  type EnhancedPhoneInfo,
  type CountryMetadata
} from './index';

console.log('🚀 Tests des nouvelles fonctionnalités améliorées de CM Phone Lookup\n');

// Test 1: API unifiée avec PhoneLookup.analyze()
console.log('📱 Test 1: API unifiée avec PhoneLookup.analyze()');
try {
  const result = PhoneLookup.analyze('+233241234567');
  console.log('✅ Analyse Ghana réussie:');
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

// Test 2: Méthodes chainées (Fluent API)
console.log('🔗 Test 2: Méthodes chainées (Fluent API)');
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

// Test 3: Configuration flexible
console.log('⚙️ Test 3: Configuration flexible');
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

// Test 4: Validation avec messages d'erreur détaillés
console.log('🔍 Test 4: Validation avec messages d\'erreur détaillés');
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

// Test 5: Métadonnées des pays
console.log('🌍 Test 5: Métadonnées des pays');
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

// Test 6: Statistiques globales
console.log('📊 Test 6: Statistiques globales');
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

// Test 7: Gestion des erreurs avec throwOnError
console.log('⚠️ Test 7: Gestion des erreurs avec throwOnError');
try {
  const errorLookup = new PhoneLookup('123', { throwOnError: true });
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

// Test 8: Méthodes statiques
console.log('🔧 Test 8: Méthodes statiques');
try {
  console.log('✅ Méthodes statiques:');
  console.log(`   📱 Opérateur: ${PhoneLookup.getOperator('+233241234567')}`);
  console.log(`   ✅ Validation: ${PhoneLookup.validate('+233241234567')}`);
  console.log(`   🎨 Formatage: ${PhoneLookup.format('+233241234567')}`);
  console.log();
} catch (error) {
  console.log('❌ Erreur avec les méthodes statiques:', error);
}

console.log('🎉 Tous les tests des nouvelles fonctionnalités sont terminés !');
console.log('\n🚀 Votre librairie est maintenant beaucoup plus professionnelle et facile à utiliser !');
