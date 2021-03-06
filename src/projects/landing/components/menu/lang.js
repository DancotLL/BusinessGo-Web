export const getLanguage = langCode =>
  ({
    es: {
      home: 'Inicio',
      pricing: 'Precios',
      clients: 'Clientes',
      images: 'Imágenes',
      blog: 'Blog'
    },
    en: {
      home: 'Home',
      pricing: 'Pricing',
      clients: 'Clients',
      images: 'Images',
      blog: 'Blog'
    }
  }[langCode]);
