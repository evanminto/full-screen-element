export default class FullScreenToggleEvent extends Event {
  static eventName = 'full-screen-toggle';

  constructor() {
    super(FullScreenToggleEvent.eventName, {
      bubbles: true,
    });
  }
}
