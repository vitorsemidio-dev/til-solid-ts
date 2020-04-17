import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  clazz: string;
  url: string;

  constructor(clazz: string, url: string) {
    this.url = url;
    this.clazz = clazz;
    this.eventHandler = new EventHandler();
  }

  abstract createLink(): string;

  bind() {
    const link = this.createLink();

    this.eventHandler.addEventListenerToClass(this.clazz, 'click', () => window.open(link));
  }
}