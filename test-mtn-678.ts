// test-mtn-678.ts
// Test de correction du préfixe MTN 678

import { detectOperator, isValidNumber, getPhoneInfo, formatPhoneNumber } from './src/index';

console.log('🧪 TEST DE CORRECTION MTN PRÉFIXE 678\n');

// Test du numéro problématique
const testNumber = '+237678517686';
console.log(`📱 Numéro testé : ${testNumber}`);

// Test de détection d'opérateur
const operator = detectOperator(testNumber);
console.log(`🏢 Opérateur détecté : ${operator}`);

// Test de validation
const isValid = isValidNumber(testNumber);
console.log(`✅ Valide : ${isValid ? 'Oui' : 'Non'}`);

// Test d'informations complètes
const phoneInfo = getPhoneInfo(testNumber);
console.log(`📋 Informations complètes :`, phoneInfo);

// Test de formatage
const formatted = formatPhoneNumber(testNumber);
console.log(`🎨 Formaté : ${formatted}`);

console.log('\n🎯 RÉSULTAT ATTENDU :');
console.log('Opérateur : CAMEROON_MTN (au lieu de Unknown)');
console.log('Valide : Oui');
console.log('Formaté : +237 678 517 686');

console.log('\n✨ Test terminé !');
