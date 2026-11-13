/**
 * IBS - Innovative Business Solutions
 * Central Language Coverage Data
 * Note: Language combinations are illustrative examples; availability is confirmed per project requirements.
 */

export const HERO_LANGUAGE_PAIRS = [
  { source: 'Spanish', target: 'English', sourceNative: 'Español', targetNative: 'English', label: 'Professional Translation' },
  { source: 'Spanish', target: 'French', sourceNative: 'Español', targetNative: 'Français', label: 'Business & Marketing Translation' },
  { source: 'English', target: 'German', sourceNative: 'English', targetNative: 'Deutsch', label: 'Technical & Corporate Translation' },
  { source: 'French', target: 'Arabic', sourceNative: 'Français', targetNative: 'العربية', label: 'Multilingual Localization' },
  { source: 'Japanese', target: 'English', sourceNative: '日本語', targetNative: 'English', label: 'Technical & Manual Translation' },
  { source: 'Hindi', target: 'Spanish', sourceNative: 'हिन्दी', targetNative: 'Español', label: 'Cross-Border Communication' },
  { source: 'Telugu', target: 'English', sourceNative: 'తెలుగు', targetNative: 'English', label: 'Regional & Enterprise Support' },
  { source: 'Chinese', target: 'French', sourceNative: '中文', targetNative: 'Français', label: 'Trade & Commercial Translation' },
  { source: 'German', target: 'Italian', sourceNative: 'Deutsch', targetNative: 'Italiano', label: 'European Market Localization' },
  { source: 'Arabic', target: 'English', sourceNative: 'العربية', targetNative: 'English', label: 'Document & Legal Translation' }
];

export const GLOBAL_LANGUAGE_REGIONS = {
  European: [
    { name: 'English', native: 'English', region: 'European' },
    { name: 'Spanish', native: 'Español', region: 'European' },
    { name: 'French', native: 'Français', region: 'European' },
    { name: 'German', native: 'Deutsch', region: 'European' },
    { name: 'Italian', native: 'Italiano', region: 'European' },
    { name: 'Portuguese', native: 'Português', region: 'European' },
    { name: 'Dutch', native: 'Nederlands', region: 'European' },
    { name: 'Polish', native: 'Polski', region: 'European' },
    { name: 'Russian', native: 'Русский', region: 'European' }
  ],
  Asian: [
    { name: 'Chinese', native: '中文', region: 'Asian' },
    { name: 'Japanese', native: '日本語', region: 'Asian' },
    { name: 'Korean', native: '한국어', region: 'Asian' },
    { name: 'Hindi', native: 'हिन्दी', region: 'Asian' },
    { name: 'Bengali', native: 'বাংলা', region: 'Asian' },
    { name: 'Tamil', native: 'தமிழ்', region: 'Asian' },
    { name: 'Telugu', native: 'తెలుగు', region: 'Asian' },
    { name: 'Kannada', native: 'ಕನ್ನಡ', region: 'Asian' },
    { name: 'Malayalam', native: 'മലയാളം', region: 'Asian' },
    { name: 'Marathi', native: 'मराठी', region: 'Asian' }
  ],
  'Middle Eastern': [
    { name: 'Arabic', native: 'العربية', region: 'Middle Eastern' },
    { name: 'Hebrew', native: 'עברית', region: 'Middle Eastern' },
    { name: 'Persian', native: 'فارسی', region: 'Middle Eastern' },
    { name: 'Turkish', native: 'Türkçe', region: 'Middle Eastern' }
  ],
  African: [
    { name: 'Swahili', native: 'Kiswahili', region: 'African' },
    { name: 'Amharic', native: 'አማርኛ', region: 'African' },
    { name: 'Yoruba', native: 'Yorùbá', region: 'African' },
    { name: 'Hausa', native: 'Hausa', region: 'African' },
    { name: 'Zulu', native: 'isiZulu', region: 'African' }
  ]
};

export const ALL_LANGUAGE_NAMES = Object.values(GLOBAL_LANGUAGE_REGIONS)
  .flat()
  .map((lang) => lang.name);

export const ALL_SUPPORTED_LANGUAGES = GLOBAL_LANGUAGE_REGIONS;
