function generateShortUrl(length = 6) {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let shortUrl = '';
      for (let i = 0; i < length; i++) {
        shortUrl += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return shortUrl;
    }
    
    module.exports = generateShortUrl;
    