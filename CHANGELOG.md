# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.12.0] - 2024-12-19

### ✨ Ajouté
- **3 nouveaux pays africains** supportés :
  - **🇦🇴 Angola (+244)** avec 3 opérateurs :
    - Unitel (préfixes 91, 92)
    - Movicel (préfixe 93)
    - Africell Angola (préfixes 94, 95)
  - **🇧🇫 Burkina Faso (+226)** avec 3 opérateurs :
    - Orange Burkina Faso (préfixes 70, 71, 72)
    - Moov Africa Burkina Faso (préfixes 74, 75)
    - Telecel Faso (préfixe 76)
  - **🇸🇸 Soudan du Sud (+211)** avec 2 opérateurs :
    - MTN South Sudan (préfixes 92, 95)
    - Zain South Sudan (préfixes 91, 97)

### 📊 Statistiques mises à jour
- **21 pays** africains supportés (était 18)
- **80+ opérateurs** supportés (était 75+)
- **8 nouveaux opérateurs** ajoutés

### 🔧 Améliorations
- Mise à jour de tous les fichiers de validation pour supporter les nouveaux codes pays
- Ajout des métadonnées complètes pour les nouveaux pays (capitale, population, devise, fuseau horaire)
- Mise à jour des statistiques globales dans `PhoneLookup.getStats()`
- Amélioration de la couverture de tests (250 tests passent)

### 📚 Documentation
- Mise à jour du README avec les nouveaux pays et opérateurs
- Ajout d'exemples pour les nouveaux pays dans `usage.js` et `usage.ts`
- Mise à jour des tableaux d'opérateurs dans la documentation
- Ajout des drapeaux 🇦🇴🇧🇫🇸🇸 dans tous les fichiers de documentation

### 🧪 Tests
- Ajout de tests complets pour les 3 nouveaux pays
- Tests de détection d'opérateur, validation, formatage et métadonnées
- Tests d'intégration avec l'API unifiée PhoneLookup
- Tous les tests passent (250/250) ✅

### 🚀 Compatibilité
- Compatibilité ascendante complète maintenue
- Aucun changement cassant (breaking change)
- Support TypeScript et JavaScript inchangé

---

## [1.11.0] - 2024-11-XX

### ✨ Ajouté
- Support de 7 nouveaux pays africains : RDC, Ouganda, Rwanda, Algérie, Mali, Soudan, Mozambique
- API unifiée avec `PhoneLookup.analyze()`
- Métadonnées enrichies des pays
- Validation avancée avec gestion d'erreurs détaillée

### 📊 Statistiques
- 18 pays africains supportés
- 75+ opérateurs supportés

---

## [1.10.0] et versions antérieures

Voir les releases GitHub pour l'historique complet des versions précédentes.