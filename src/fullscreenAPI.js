import requestFullscreen from './requestFullscreen';
import exitFullscreen from './exitFullscreen';

export default {
  get enabled() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled;
  },

  /**
   * @returns {Element}
   */
  get element() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  },

  requestFullscreen,
  exitFullscreen,
};
