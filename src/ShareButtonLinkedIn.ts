import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {

  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  createLink(): string {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}