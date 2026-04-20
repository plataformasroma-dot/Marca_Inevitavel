const normalizeBasePath = (basePath = '/') => {
  const trimmedBasePath = basePath.trim();

  if (!trimmedBasePath || trimmedBasePath === '/') {
    return '/';
  }

  return `/${trimmedBasePath.replace(/^\/+|\/+$/g, '')}/`;
};

export const withBasePath = (basePath = '/', assetPath = '') => {
  const normalizedAssetPath = assetPath.replace(/^\/+/, '');
  const normalizedBasePath = normalizeBasePath(basePath);

  if (normalizedBasePath === '/') {
    return `/${normalizedAssetPath}`;
  }

  return `${normalizedBasePath}${normalizedAssetPath}`;
};

export const pageAssets = {
  hero: 'assets/marca-inevitavel-hero.webp',
  portrait: 'assets/bio_yas.webp',
  fontEditorialRegular: 'fonts/PPEDITORIALOLD-REGULAR.ttf',
  fontEditorialItalic: 'fonts/PPEDITORIALOLD-ITALIC.ttf',
  fontAileronBold: 'fonts/Aileron-Bold.ttf'
};
