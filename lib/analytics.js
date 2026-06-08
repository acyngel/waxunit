/**
 * Inject Vercel Web Analytics into the application.
 * This function should be called in web applications that use this library.
 * It is optional and only relevant when this library is used in a web context.
 *
 * Note: This is an async function because @vercel/analytics is an ES module.
 * Use with await or .then() in your application.
 *
 * @example
 * const { injectAnalytics } = require('@waxio/waxunit');
 * await injectAnalytics();
 *
 * @api public
 */
async function injectAnalytics() {
  try {
    const { inject } = await import('@vercel/analytics');
    inject();
  } catch (error) {
    // Gracefully handle if analytics isn't available or fails to load
    console.warn('Vercel Analytics could not be loaded:', error.message);
  }
}

module.exports = {
  injectAnalytics,
};
