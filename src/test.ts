// src/test.ts
import {
  detectOperator,
  isValidNumber,
  getPhoneInfo,
  formatPhoneNumber,
  getOperatorPrefixes,
  getSupportedOperators,
  isPrefixForOperator,
} from './index';

console.log('🇨🇲 Tests de la librairie CM Phone Lookup\n');

// Tests de détection d'opérateurs
console.log("📱 Tests de détection d'opérateurs:");
console.log('MTN:', detectOperator('+237650123456')); // MTN
console.log('MTN:', detectOperator('237680123456')); // MTN
console.log('ORANGE:', detectOperator('+237655123456')); // ORANGE
console.log('ORANGE:', detectOperator('237690123456')); // ORANGE
console.log('CAMTEL:', detectOperator('+23722212345')); // CAMTEL
console.log('CAMTEL:', detectOperator('23724212345')); // CAMTEL
console.log('NEXTTEL:', detectOperator('+23766123456')); // NEXTTEL
console.log('Unknown:', detectOperator('+237999999999')); // Unknown

// Tests de validation
console.log('\n✅ Tests de validation:');
console.log('Numéro valide MTN:', isValidNumber('+237650123456')); // true
console.log('Numéro valide ORANGE:', isValidNumber('237655123456')); // true
console.log('Numéro valide CAMTEL:', isValidNumber('+23722212345')); // true
console.log('Numéro invalide (trop court):', isValidNumber('12345')); // false
console.log(
  'Numéro invalide (mauvais format):',
  isValidNumber('+237123456789')
); // false

// Tests d'information complète
console.log("\n📊 Tests d'information complète:");
console.log(
  'Info MTN:',
  JSON.stringify(getPhoneInfo('+237650123456'), null, 2)
);
console.log(
  'Info ORANGE:',
  JSON.stringify(getPhoneInfo('+237655123456'), null, 2)
);
console.log(
  'Info CAMTEL:',
  JSON.stringify(getPhoneInfo('+23722212345'), null, 2)
);

// Tests de formatage
console.log('\n🎨 Tests de formatage:');
console.log('Formaté MTN:', formatPhoneNumber('+237650123456'));
console.log('Formaté ORANGE:', formatPhoneNumber('237655123456'));
console.log('Formaté CAMTEL:', formatPhoneNumber('+23722212345'));

// Tests des nouvelles fonctionnalités
console.log('\n🔍 Tests des nouvelles fonctionnalités:');
console.log('Préfixes MTN:', getOperatorPrefixes('MTN'));
console.log('Préfixes ORANGE:', getOperatorPrefixes('ORANGE'));
console.log('Opérateurs supportés:', getSupportedOperators());
console.log('650 est-il MTN?', isPrefixForOperator('650', 'MTN')); // true
console.log('655 est-il ORANGE?', isPrefixForOperator('655', 'ORANGE')); // true
console.log('650 est-il ORANGE?', isPrefixForOperator('650', 'ORANGE')); // false

// Tests de cas limites
console.log('\n⚠️ Tests de cas limites:');
console.log('Numéro vide:', detectOperator('')); // Unknown
console.log('Numéro avec espaces:', detectOperator(' +237 650 123 456 ')); // MTN
console.log(
  'Numéro avec caractères spéciaux:',
  detectOperator('+237-650-123-456')
); // MTN

console.log('\n🎉 Tous les tests sont terminés !');
