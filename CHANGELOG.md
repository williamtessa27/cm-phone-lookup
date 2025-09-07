# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Unreleased]

### ✨ Ajouté
- **Support Mali** 🇲🇱 : Orange Mali, Moov Africa Mali, Telecel Mali (nouveau pays)
- **Validation Mali** : Support du format national 8 chiffres (+223 XX XX XX XX)
- **Métadonnées Mali** : Informations complètes (Bamako, XOF, UTC+0, français)
- **Support Soudan** 🇸🇩 : Zain Sudan, MTN Sudan, Sudani (nouveau pays)
- **Validation Soudan** : Support du format national 9 chiffres (+249 XX XXX XXX)
- **Métadonnées Soudan** : Informations complètes (Khartoum, SDG, UTC+2, arabe/anglais)
- **Support Mozambique** 🇲🇿 : Vodacom Mozambique, Movitel, Tmcel (nouveau pays)
- **Validation Mozambique** : Support du format national 9 chiffres (+258 XX XXX XXX)
- **Métadonnées Mozambique** : Informations complètes (Maputo, MZN, UTC+2, portugais)
- **Support 18 pays africains** : Couverture étendue avec Mali, Soudan et Mozambique
- **Tests complets** : 36 nouveaux tests pour valider tous les nouveaux opérateurs
- **Support RDC** 🇨🇩 : Vodacom DRC, Orange DRC, Airtel DRC, Africell DRC (préfixes mis à jour)
- **Validation RDC** : Support du format national 9 chiffres (+243 XX XXX XXXX)
- **Métadonnées RDC** : Informations complètes (Kinshasa, CDF, UTC+1, français)
- **Support Ouganda** 🇺🇬 : Airtel Uganda, MTN Uganda, Lycamobile (préfixes mis à jour)
- **Validation Ouganda** : Support du format national 9 chiffres (+256 XXX XXX XXX)
- **Métadonnées Ouganda** : Informations complètes (Kampala, UGX, UTC+3, anglais/swahili)
- **Support Rwanda** 🇷🇼 : MTN Rwanda, Airtel Rwanda (nouveau pays)
- **Validation Rwanda** : Support du format national 9 chiffres (+250 XXX XXX XXX)
- **Métadonnées Rwanda** : Informations complètes (Kigali, RWF, UTC+2, kinyarwanda/anglais/français)
- **Support Algérie** 🇩🇿 : Mobilis, Djezzy, Ooredoo
- **Validation Algérie** : Support du format national 9 chiffres (+213 XXX XXX XXX)
- **Métadonnées Algérie** : Informations complètes (Algiers, DZD, UTC+1, arabe/français)
- **Support Tanzanie** 🇹🇿 : Halotel (Viettel), Tigo Tanzania, Smile Tanzania, Airtel Tanzania, TTCL, Vodacom Tanzania, Zantel
- **Validation tanzanienne** : Support du format national 9 chiffres (+255 XXX XXX XXX)
- **Métadonnées tanzaniennes** : Informations complètes (Dodoma, TZS, UTC+3, langues swahili/anglais)
- **Tests complets** : Couverture de test étendue pour tous les 7 opérateurs tanzaniens
- **Support Égypte** 🇪🇬 : Vodafone Egypt, Etisalat/e& Egypt, Orange Egypt, WE (Telecom Egypt MVNO)
- **Validation égyptienne** : Support du format national 10 chiffres (+20 XX XXXX XXXX)
- **Métadonnées égyptiennes** : Informations complètes (Cairo, EGP, UTC+2, langues arabe/anglais)
- **Tests complets** : Couverture de test étendue pour tous les opérateurs égyptiens
- **Support Éthiopie** 🇪🇹 : Ethio Telecom (opérateur d'État historique) et Safaricom Ethiopia (nouvel entrant 2021-2022)
- **Validation éthiopienne** : Support du format national 9 chiffres (+251 XX XXX XXXX)
- **Métadonnées éthiopiennes** : Informations complètes (Addis Ababa, ETB, UTC+3, langues amharique/anglais)
- **Tests complets** : Couverture de test étendue pour tous les opérateurs éthiopiens
- **Support Kenya** 🇰🇪 : Safaricom, Airtel, Telkom, Faiba, Equitel avec validation et formatage
- **Support Afrique du Sud** 🇿🇦 : Vodacom, MTN, Cell C, Telkom, Virgin Mobile avec validation et formatage  
- **Support Maroc** 🇲🇦 : Maroc Telecom, Orange Maroc, Inwi avec validation et formatage
- **Nouveaux opérateurs** : 21+ nouveaux opérateurs ajoutés pour l'Afrique de l'Est, du Sud et du Nord
- **Couverture continentale étendue** : La librairie couvre maintenant 14 pays africains majeurs
- **Préfixes officiels** : Intégration des préfixes les plus récents (Kenya 011x, Afrique du Sud 06xx, Éthiopie 07x, Égypte 1x)

### 🔧 Corrigé
- **Correction majeure des préfixes d'opérateurs** pour tous les pays africains supportés
- **Cameroun** : Ajout des séries 67 (670-679), 68 (680-689), 620-621 (Blue), 66 (660-669)
- **Sénégal** : Ajout de Hayo (72), Sirius (754-756), Origines (757)
- **Côte d'Ivoire** : Mise à jour selon le plan 10 chiffres 2021 (07, 05, 01, 27, 25, 21)
- **Nigeria** : Ajout de tous les opérateurs historiques et préfixes spéciaux (07025, 07026, etc.)
- **Ghana** : Ajout des nouveaux codes MTN 2021 (0256, 0257, 0597-9), Glo (023), Expresso (028)

### ✨ Ajouté
- **Nouveaux opérateurs** : 15+ nouveaux opérateurs ajoutés
- **Préfixes étendus** : 100+ nouveaux préfixes couvrant tous les standards officiels
- **Conformité ITU** : Mise à jour selon les standards internationaux 2014-2021
- **Support historique** : Inclusion des opérateurs historiques et MVNO

## [1.5.0] - 2024-12-19

### ✨ Ajouté
- **Bilinguisme officiel du Cameroun** 🇨🇲 : Support des langues français + anglais avec `language: ['fr', 'en']`
- **API unifiée** : Nouvelle classe `PhoneLookup` avec méthode `analyze()` complète
- **API fluide** : Chaînage de méthodes pour une expérience développeur améliorée
- **Gestion d'erreurs avancée** : Codes d'erreur spécifiques avec suggestions de correction
- **Métadonnées enrichies** : Informations détaillées sur les pays (population, capitale, devise, etc.)
- **Configuration flexible** : Options personnalisables pour la validation et le formatage
- **Méthodes statiques** : Fonctions utilitaires globales (`getStats()`, `getAllCountries()`, etc.)
- **Validation robuste** : Détection automatique du pays et validation contextuelle

### 🔧 Corrigé
- **Types TypeScript** : Amélioration de la compatibilité des types et interfaces
- **Gestion des erreurs** : Messages d'erreur plus clairs et informatifs
- **Documentation** : Mise à jour complète avec exemples et cas d'usage

### 📚 Documentation
- **README complet** : Guide d'utilisation détaillé avec exemples
- **CHANGELOG** : Historique complet des modifications
- **Exemples TypeScript/JavaScript** : Cas d'usage pratiques
- **Guide d'API** : Référence complète des méthodes et options

## [1.4.0] - 2024-12-18

### ✨ Ajouté
- **Support Ghana** 🇬🇭 : MTN, Vodafone, AirtelTigo avec validation et formatage
- **Architecture modulaire** : Réorganisation en dossiers pays/opérateurs/utils
- **Tests complets** : Couverture de test pour tous les pays supportés
- **Documentation mise à jour** : README et exemples pour le Ghana

### 🔧 Corrigé
- **Structure du projet** : Organisation plus maintenable et extensible
- **Types TypeScript** : Amélioration de la cohérence des types
- **Validation** : Correction des règles de validation pour tous les pays

## [1.3.0] - 2024-12-17

### ✨ Ajouté
- **Support Nigeria** 🇳🇬 : MTN, Airtel, Glo, 9mobile avec validation et formatage
- **Tests Nigeria** : Validation complète des préfixes et numéros nigérians
- **Documentation Nigeria** : Exemples et cas d'usage spécifiques

### 🔧 Corrigé
- **Validation Nigeria** : Règles de formatage et validation mises à jour
- **Types** : Ajout des types spécifiques au Nigeria

## [1.2.0] - 2024-12-16

### ✨ Ajouté
- **Support Côte d'Ivoire** 🇨🇮 : Orange, MTN, Moov avec validation et formatage
- **Tests Côte d'Ivoire** : Validation complète des préfixes et numéros ivoiriens
- **Documentation Côte d'Ivoire** : Exemples et cas d'usage spécifiques

### 🔧 Corrigé
- **Validation Côte d'Ivoire** : Règles de formatage et validation mises à jour
- **Types** : Ajout des types spécifiques à la Côte d'Ivoire

## [1.1.0] - 2024-12-15

### ✨ Ajouté
- **Support Sénégal** 🇸🇳 : Orange, Tigo, Expresso avec validation et formatage
- **Tests Sénégal** : Validation complète des préfixes et numéros sénégalais
- **Documentation Sénégal** : Exemples et cas d'usage spécifiques

### 🔧 Corrigé
- **Validation Sénégal** : Règles de formatage et validation mises à jour
- **Types** : Ajout des types spécifiques au Sénégal

## [1.0.0] - 2024-12-14

### ✨ Ajouté
- **Support Cameroun** 🇨🇲 : MTN, Orange, Camtel, Nexttel avec validation et formatage
- **API de base** : `detectOperator`, `isValidNumber`, `getPhoneInfo`, `formatPhoneNumber`
- **Validation** : Règles de validation spécifiques au Cameroun
- **Formatage** : Formatage automatique des numéros de téléphone
- **Tests** : Suite de tests complète pour la validation
- **Documentation** : README et exemples d'utilisation
- **TypeScript** : Support complet des types et interfaces
- **CI/CD** : Pipeline GitHub Actions avec tests et validation
- **Licence** : Licence MIT pour utilisation libre
- **Contributing** : Guide de contribution et code de conduite
