// src/utils/analytics.js

/**
 * Sends a custom event to Google Analytics
 * @param {string} eventName - The name of the event
 * @param {Object} eventParams - Additional parameters for the event
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

/**
 * Tracks a page view in Google Analytics
 * @param {string} url - The URL to track
 * @param {string} title - The page title
 */
export function trackPageView(url, title) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
}

/**
 * Tracks a user interaction with a specific element
 * @param {string} category - The category of the interaction (e.g., 'Navigation', 'Button', 'Link')
 * @param {string} action - The action taken (e.g., 'Click', 'Submit', 'Download')
 * @param {string} label - A label for the interaction (optional)
 * @param {number} value - A numerical value associated with the interaction (optional)
 */
export function trackInteraction(category, action, label = null, value = null) {
  const eventParams = {
    event_category: category,
    event_label: label,
  };

  if (value !== null) {
    eventParams.value = value;
  }

  trackEvent(action, eventParams);
}
