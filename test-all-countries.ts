// test-all-countries.ts
// Test complet de tous les pays et opérateurs après corrections

import { detectOperator, isValidNumber, getPhoneInfo, formatPhoneNumber, getSupportedOperators } from './src/index';

console.log('🌍 TEST COMPLET DE TOUS LES PAYS ET OPÉRATEURS\n');

// Test des numéros représentatifs de chaque pays
const testNumbers = [
  // Cameroun - MTN (série 67)
  { number: '+237678517686', expected: 'CAMEROON_MTN', country: '🇨🇲 Cameroun' },
  // Cameroun - Orange
  { number: '+237655123456', expected: 'CAMEROON_ORANGE', country: '🇨🇲 Cameroun' },
  // Cameroun - Camtel Blue
  { number: '+237620105050', expected: 'CAMEROON_CAMTEL', country: '🇨🇲 Cameroun' },
  
  // Sénégal - Orange
  { number: '+221771234567', expected: 'SENEGAL_ORANGE', country: '🇸🇳 Sénégal' },
  // Sénégal - Tigo
  { number: '+221761234567', expected: 'SENEGAL_TIGO', country: '🇸🇳 Sénégal' },
  // Sénégal - Sirius
  { number: '+221754123456', expected: 'SENEGAL_SIRIUS', country: '🇸🇳 Sénégal' },
  
  // Côte d'Ivoire - Orange
  { number: '+225071234567', expected: 'IVORY_COAST_ORANGE', country: '🇨🇮 Côte d\'Ivoire' },
  // Côte d'Ivoire - MTN
  { number: '+225051234567', expected: 'IVORY_COAST_MTN', country: '🇨🇮 Côte d\'Ivoire' },
  
  // Nigeria - MTN
  { number: '+2348031234567', expected: 'NIGERIA_MTN', country: '🇳🇬 Nigeria' },
  // Nigeria - Airtel
  { number: '+2348021234567', expected: 'NIGERIA_AIRTEL', country: '🇳🇬 Nigeria' },
  // Nigeria - Smile
  { number: '+2347021234567', expected: 'NIGERIA_SMILE', country: '🇳🇬 Nigeria' },
  
  // Ghana - MTN
  { number: '+233241234567', expected: 'GHANA_MTN', country: '🇬🇭 Ghana' },
  // Ghana - Vodafone
  { number: '+233201234567', expected: 'GHANA_VODAFONE', country: '🇬🇭 Ghana' },
  // Ghana - Glo
  { number: '+233231234567', expected: 'GHANA_GLO', country: '🇬🇭 Ghana' }
];

console.log('📊 STATISTIQUES GLOBALES');
console.log(`Total des opérateurs supportés : ${getSupportedOperators().length}`);
console.log('');

// Test de chaque numéro
let successCount = 0;
let totalTests = testNumbers.length;

for (const test of testNumbers) {
  console.log(`🧪 Test : ${test.country} - ${test.number}`);
  
  try {
    const operator = detectOperator(test.number);
    const isValid = isValidNumber(test.number);
    const formatted = formatPhoneNumber(test.number);
    
    const isSuccess = operator === test.expected;
    if (isSuccess) successCount++;
    
    console.log(`  🏢 Opérateur : ${operator} ${isSuccess ? '✅' : '❌'}`);
    console.log(`  ✅ Valide : ${isValid ? 'Oui' : 'Non'}`);
    console.log(`  🎨 Formaté : ${formatted}`);
    console.log(`  🎯 Attendu : ${test.expected}`);
    console.log('');
    
  } catch (error) {
    console.log(`  ❌ Erreur : ${error}`);
    console.log('');
  }
}

// Résumé des tests
console.log('📈 RÉSUMÉ DES TESTS');
console.log(`Tests réussis : ${successCount}/${totalTests}`);
console.log(`Taux de succès : ${((successCount / totalTests) * 100).toFixed(1)}%`);

if (successCount === totalTests) {
  console.log('🎉 Tous les tests sont réussis ! La librairie fonctionne parfaitement.');
} else {
  console.log('⚠️  Certains tests ont échoué. Vérifiez les corrections.');
}

console.log('\n✨ Test complet terminé !');
