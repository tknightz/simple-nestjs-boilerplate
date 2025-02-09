import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  tseslint.configs.recommended,
  prettier,
  eslintPluginPrettierRecommended,
);
