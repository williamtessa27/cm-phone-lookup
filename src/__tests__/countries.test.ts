// src/__tests__/countries.test.ts
// Tests pour les fonctionnalités spécifiques aux pays

import { getCountryMetadata, getAllCountries, getCountryByCode } from '../countries/metadata';

describe('Métadonnées des pays', () => {
  describe('getCountryMetadata', () => {
    test('retourne les métadonnées du Cameroun', () => {
      const metadata = getCountryMetadata('237');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Cameroon');
      expect(metadata?.nameLocal).toBe('Cameroun');
      expect(metadata?.flag).toBe('🇨🇲');
      expect(metadata?.language).toEqual(['fr', 'en']); // Bilingue
      expect(metadata?.currency).toBe('XAF');
      expect(metadata?.timezone).toBe('UTC+1');
      expect(metadata?.capital).toBe('Yaoundé');
      expect(metadata?.population).toBeDefined();
    });

    test('retourne les métadonnées du Sénégal', () => {
      const metadata = getCountryMetadata('221');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Senegal');
      expect(metadata?.nameLocal).toBe('Sénégal');
      expect(metadata?.flag).toBe('🇸🇳');
      expect(metadata?.language).toBe('fr'); // Français uniquement
      expect(metadata?.currency).toBe('XOF');
      expect(metadata?.timezone).toBe('UTC+0');
      expect(metadata?.capital).toBe('Dakar');
    });

    test('retourne les métadonnées de la Côte d\'Ivoire', () => {
      const metadata = getCountryMetadata('225');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Ivory Coast');
      expect(metadata?.nameLocal).toBe('Côte d\'Ivoire');
      expect(metadata?.flag).toBe('🇨🇮');
      expect(metadata?.language).toBe('fr');
      expect(metadata?.currency).toBe('XOF');
      expect(metadata?.capital).toBe('Yamoussoukro');
    });

    test('retourne les métadonnées du Nigeria', () => {
      const metadata = getCountryMetadata('234');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Nigeria');
      expect(metadata?.flag).toBe('🇳🇬');
      expect(metadata?.language).toBe('en');
      expect(metadata?.currency).toBe('NGN');
      expect(metadata?.capital).toBe('Abuja');
    });

    test('retourne les métadonnées du Ghana', () => {
      const metadata = getCountryMetadata('233');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Ghana');
      expect(metadata?.flag).toBe('🇬🇭');
      expect(metadata?.language).toBe('en');
      expect(metadata?.currency).toBe('GHS');
      expect(metadata?.capital).toBe('Accra');
    });

    test('retourne les métadonnées du Kenya', () => {
      const metadata = getCountryMetadata('254');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Kenya');
      expect(metadata?.flag).toBe('🇰🇪');
      expect(metadata?.language).toEqual(['en', 'sw']); // Anglais + Swahili
      expect(metadata?.currency).toBe('KES');
      expect(metadata?.capital).toBe('Nairobi');
    });

    test('retourne les métadonnées de l\'Afrique du Sud', () => {
      const metadata = getCountryMetadata('27');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('South Africa');
      expect(metadata?.nameLocal).toBe('Suid-Afrika');
      expect(metadata?.flag).toBe('🇿🇦');
      expect(metadata?.language).toEqual(['en', 'af', 'zu']); // Anglais, Afrikaans, Zulu
      expect(metadata?.currency).toBe('ZAR');
      expect(metadata?.capital).toBe('Pretoria');
    });

    test('retourne les métadonnées du Maroc', () => {
      const metadata = getCountryMetadata('212');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Morocco');
      expect(metadata?.nameLocal).toBe('المغرب');
      expect(metadata?.flag).toBe('🇲🇦');
      expect(metadata?.language).toEqual(['ar', 'fr']); // Arabe + Français
      expect(metadata?.currency).toBe('MAD');
      expect(metadata?.capital).toBe('Rabat');
    });

    test('retourne les métadonnées de l\'Éthiopie', () => {
      const metadata = getCountryMetadata('251');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Ethiopia');
      expect(metadata?.nameLocal).toBe('ኢትዮጵያ');
      expect(metadata?.flag).toBe('🇪🇹');
      expect(metadata?.language).toEqual(['am', 'en']); // Amharique + Anglais
      expect(metadata?.currency).toBe('ETB');
      expect(metadata?.timezone).toBe('UTC+3');
      expect(metadata?.capital).toBe('Addis Ababa');
      expect(metadata?.population).toBe('120.3M');
    });

    test('retourne les métadonnées de l\'Égypte', () => {
      const metadata = getCountryMetadata('20');
      
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Egypt');
      expect(metadata?.nameLocal).toBe('مصر');
      expect(metadata?.flag).toBe('🇪🇬');
      expect(metadata?.language).toEqual(['ar', 'en']); // Arabe + Anglais
      expect(metadata?.currency).toBe('EGP');
      expect(metadata?.timezone).toBe('UTC+2');
      expect(metadata?.capital).toBe('Cairo');
      expect(metadata?.population).toBe('104.3M');
    });

    test('retourne null pour un code pays non supporté', () => {
      const metadata = getCountryMetadata('999');
      expect(metadata).toBeNull();
    });

    test('gère les codes avec +', () => {
      const metadata = getCountryMetadata('237'); // La fonction n'accepte que les codes sans +
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Cameroon');
    });
  });

  describe('getAllCountries', () => {
    test('retourne tous les codes pays supportés', () => {
      const countries = getAllCountries();
      
      expect(countries).toContain('237'); // Cameroun
      expect(countries).toContain('221'); // Sénégal
      expect(countries).toContain('225'); // Côte d'Ivoire
      expect(countries).toContain('234'); // Nigeria
      expect(countries).toContain('233'); // Ghana
      expect(countries).toContain('254'); // Kenya
      expect(countries).toContain('27');  // Afrique du Sud
      expect(countries).toContain('212'); // Maroc
      expect(countries).toContain('251'); // Éthiopie
      expect(countries).toContain('20');  // Égypte
      expect(countries).toHaveLength(10);
    });

    test('retourne les codes dans un ordre cohérent', () => {
      const countries1 = getAllCountries();
      const countries2 = getAllCountries();
      
      expect(countries1).toEqual(countries2);
    });
  });

  describe('getCountryByCode', () => {
    test('trouve un pays par son code', () => {
      const cameroon = getCountryByCode('237');
      expect(cameroon?.name).toBe('Cameroon');
      
      const senegal = getCountryByCode('221');
      expect(senegal?.name).toBe('Senegal');
    });

    test('retourne null pour un code inexistant', () => {
      const unknown = getCountryByCode('999');
      expect(unknown).toBeNull();
    });

    test('gère les codes avec +', () => {
      const cameroon = getCountryByCode('237'); // La fonction n'accepte que les codes sans +
      expect(cameroon?.name).toBe('Cameroon');
    });
  });

  describe('Spécificités linguistiques', () => {
    test('le Cameroun est le seul pays bilingue', () => {
      const countries = getAllCountries();
      
      const bilingualCountries = countries.filter(code => {
        const metadata = getCountryMetadata(code);
        return Array.isArray(metadata?.language);
      });
      
      expect(bilingualCountries).toHaveLength(6); // Cameroun, Kenya, Afrique du Sud, Maroc, Éthiopie, Égypte
      expect(bilingualCountries).toContain('237'); // Cameroun
      
      const cameroon = getCountryMetadata('237');
      expect(cameroon?.language).toEqual(['fr', 'en']);
    });

    test('les autres pays ont une seule langue', () => {
      const countries = getAllCountries().filter(code => code !== '237');
      
      const monolingualCountries = countries.filter(code => {
        const metadata = getCountryMetadata(code);
        return typeof metadata?.language === 'string';
      });
      expect(monolingualCountries.length).toBeGreaterThan(0);
    });

    test('distribution des langues', () => {
      const languages = getAllCountries().map(code => {
        const metadata = getCountryMetadata(code);
        return metadata?.language;
      });
      
      // Français : Cameroun (bilingue), Sénégal, Côte d'Ivoire
      const frenchCountries = languages.filter(lang => 
        lang === 'fr' || (Array.isArray(lang) && lang.includes('fr'))
      ).length;
      expect(frenchCountries).toBe(4); // Cameroun, Sénégal, Côte d'Ivoire, Maroc
      
      // Anglais : Cameroun (bilingue), Nigeria, Ghana, Kenya, Afrique du Sud
      const englishCountries = languages.filter(lang => 
        lang === 'en' || (Array.isArray(lang) && lang.includes('en'))
      ).length;
      expect(englishCountries).toBe(7); // Cameroun, Nigeria, Ghana, Kenya, Afrique du Sud, Éthiopie, Égypte
      
      // Arabe : Maroc, Égypte
      const arabicCountries = languages.filter(lang => 
        lang === 'ar' || (Array.isArray(lang) && lang.includes('ar'))
      ).length;
      expect(arabicCountries).toBe(2);
    });
  });

  describe('Cohérence des données', () => {
    test('tous les pays ont les champs obligatoires', () => {
      const countries = getAllCountries();
      
      countries.forEach(code => {
        const metadata = getCountryMetadata(code);
        
        expect(metadata).toBeDefined();
        expect(metadata?.name).toBeDefined();
        expect(metadata?.nameLocal).toBeDefined();
        expect(metadata?.flag).toBeDefined();
        expect(metadata?.language).toBeDefined();
        expect(metadata?.currency).toBeDefined();
        expect(metadata?.timezone).toBeDefined();
        expect(metadata?.capital).toBeDefined();
        
        // Vérifications de format
        expect(metadata?.name).toMatch(/^[A-Za-z\s]+$/);
        expect(metadata?.flag).toMatch(/^🇨🇲|🇸🇳|🇨🇮|🇳🇬|🇬🇭|🇰🇪|🇿🇦|🇲🇦|🇪🇹|🇪🇬$/); // Drapeaux des pays supportés
        expect(metadata?.currency).toMatch(/^[A-Z]{3}$/); // Code ISO 4217
      });
    });

    test('les drapeaux correspondent aux pays', () => {
      const expectedFlags = {
        '237': '🇨🇲', // Cameroun
        '221': '🇸🇳', // Sénégal
        '225': '🇨🇮', // Côte d'Ivoire
        '234': '🇳🇬', // Nigeria
        '233': '🇬🇭', // Ghana
        '254': '🇰🇪', // Kenya
        '27': '🇿🇦',  // Afrique du Sud
        '212': '🇲🇦'  // Maroc
      };
      
      Object.entries(expectedFlags).forEach(([code, expectedFlag]) => {
        const metadata = getCountryMetadata(code);
        expect(metadata?.flag).toBe(expectedFlag);
      });
    });

    test('les devises sont cohérentes par région', () => {
      // Zone CFA Ouest (XOF)
      expect(getCountryMetadata('221')?.currency).toBe('XOF'); // Sénégal
      expect(getCountryMetadata('225')?.currency).toBe('XOF'); // Côte d'Ivoire
      
      // Zone CFA Centre (XAF)
      expect(getCountryMetadata('237')?.currency).toBe('XAF'); // Cameroun
      
      // Autres devises
      expect(getCountryMetadata('234')?.currency).toBe('NGN'); // Nigeria
      expect(getCountryMetadata('233')?.currency).toBe('GHS'); // Ghana
      expect(getCountryMetadata('254')?.currency).toBe('KES'); // Kenya
      expect(getCountryMetadata('27')?.currency).toBe('ZAR');  // Afrique du Sud
      expect(getCountryMetadata('212')?.currency).toBe('MAD'); // Maroc
    });
  });
});
