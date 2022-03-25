/**
 * @param {HTMLElement} el
 * @returns {Promise<void>}
 */
export default async function requestFullscreen(el) {
  if ('requestFullscreen' in el) {
    return el.requestFullscreen({ navigationUI: 'hide' });
  } else if ('webkitRequestFullscreen' in el) {
    return el.webkitRequestFullscreen({ navigationUI: 'hide' });
  }
}
