import js from '@eslint/js'; import tseslint from 'typescript-eslint';
export default tseslint.config({ignores:['dist','.astro','**/*.astro']}, js.configs.recommended, ...tseslint.configs.recommended, {languageOptions:{globals:{document:'readonly',location:'readonly',URLSearchParams:'readonly'}}});
