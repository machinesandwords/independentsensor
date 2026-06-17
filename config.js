/**
 * config.js — Site identity and accent color configuration
 * independentsensor.com
 *
 * accent:     #0A7E6A  (teal)
 * accentDim:  #087558  (~15% darker)
 * accentPale: #e6f4f1  (very light tint, used for callout backgrounds)
 */

window.SITE_CONFIG = {
  name:      "The Independent Sensor",
  nameHtml:  "The Independent <span>Sensor</span>",
  domain:    "independentsensor.com",
  tagline:   "Industrial software intelligence for OT architects",
  accent:    "#0A7E6A",
  accentDim: "#087558",
  accentPale:"#e6f4f1"
};

(function() {
  var r = document.documentElement;
  r.style.setProperty('--accent',      window.SITE_CONFIG.accent);
  r.style.setProperty('--accent-dim',  window.SITE_CONFIG.accentDim);
  r.style.setProperty('--accent-pale', window.SITE_CONFIG.accentPale);
})();