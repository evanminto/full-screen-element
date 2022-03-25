/**
 * @returns {Promise<void>}
 */
export default function exitFullscreen() {
  if ('exitFullscreen' in document) {
    return document.exitFullscreen();
  } else if ('webkitExitFullscreen' in document) {
    return document.webkitExitFullscreen();
  }
}
