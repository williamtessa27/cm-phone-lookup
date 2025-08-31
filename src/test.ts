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
console.log('CAMEROON_MTN:', detectOperator('+237650123456')); // CAMEROON_MTN
console.log('CAMEROON_MTN:', detectOperator('237680123456')); // CAMEROON_MTN
console.log('CAMEROON_ORANGE:', detectOperator('+237655123456')); // CAMEROON_ORANGE
console.log('CAMEROON_ORANGE:', detectOperator('237690123456')); // CAMEROON_ORANGE
console.log('CAMEROON_CAMTEL:', detectOperator('+23722212345')); // CAMEROON_CAMTEL
console.log('CAMEROON_CAMTEL:', detectOperator('23724212345')); // CAMEROON_CAMTEL
console.log('CAMEROON_NEXTTEL:', detectOperator('+23766123456')); // CAMEROON_NEXTTEL
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

console.log('\n🇸🇳 Tests Sénégal:');
console.log('SENEGAL_ORANGE:', detectOperator('+221771234567'));
console.log('SENEGAL_TIGO:', detectOperator('+221761234567'));
console.log('SENEGAL_EXPRESSO:', detectOperator('+221751234567'));
console.log('Formaté Sénégal:', formatPhoneNumber('+221771234567'));
console.log('Sénégal valide:', isValidNumber('+221771234567'));

console.log('\n🇨🇮 Tests Côte d\'Ivoire:');
console.log('IVORY_COAST_ORANGE:', detectOperator('+22501234567'));
console.log('IVORY_COAST_MTN:', detectOperator('+22505123456'));
console.log('IVORY_COAST_MOOV:', detectOperator('+22506123456'));
console.log('IVORY_COAST_TELECOM:', detectOperator('+22527212345'));
console.log('Formaté Côte d\'Ivoire:', formatPhoneNumber('+22501234567'));
console.log('Côte d\'Ivoire valide:', isValidNumber('+22501234567'));
console.log('Côte d\'Ivoire valide (8 chiffres):', isValidNumber('+2250123456'));

console.log('\n🇳🇬 Tests Nigeria:');
console.log('NIGERIA_MTN:', detectOperator('+2340803123456'));
console.log('NIGERIA_AIRTEL:', detectOperator('+2340802123456'));
console.log('NIGERIA_GLO:', detectOperator('+2340805123456'));
console.log('NIGERIA_9MOBILE:', detectOperator('+2340809123456'));
console.log('Formaté Nigeria:', formatPhoneNumber('+2340803123456'));
console.log('Nigeria valide:', isValidNumber('+2340803123456'));
console.log('Nigeria valide (10 chiffres):', isValidNumber('+2340803123456'));

console.log('\n🇬🇭 Tests Ghana:');
console.log('GHANA_MTN:', detectOperator('+233241234567'));
console.log('GHANA_VODAFONE:', detectOperator('+233201234567'));
console.log('GHANA_AIRTELTIGO:', detectOperator('+233261234567'));
console.log('Formaté Ghana:', formatPhoneNumber('+233241234567'));
console.log('Ghana valide:', isValidNumber('+233241234567'));
console.log('Ghana valide (9 chiffres):', isValidNumber('+233241234567'));

// Tests des nouvelles fonctionnalités
console.log('\n🔍 Tests des nouvelles fonctionnalités:');
console.log('Préfixes CAMEROON_MTN:', getOperatorPrefixes('CAMEROON_MTN'));
console.log('Préfixes CAMEROON_ORANGE:', getOperatorPrefixes('CAMEROON_ORANGE'));
console.log('Opérateurs supportés:', getSupportedOperators());
console.log('650 est-il CAMEROON_MTN?', isPrefixForOperator('650', 'CAMEROON_MTN')); // true
console.log('655 est-il CAMEROON_ORANGE?', isPrefixForOperator('655', 'CAMEROON_ORANGE')); // true
console.log('650 est-il CAMEROON_ORANGE?', isPrefixForOperator('650', 'CAMEROON_ORANGE')); // false

// Tests de cas limites
console.log('\n⚠️ Tests de cas limites:');
console.log('Numéro vide:', detectOperator('')); // Unknown
console.log('Numéro avec espaces:', detectOperator(' +237 650 123 456 ')); // MTN
console.log(
  'Numéro avec caractères spéciaux:',
  detectOperator('+237-650-123-456')
); // MTN

console.log('\n🎉 Tous les tests sont terminés !');
