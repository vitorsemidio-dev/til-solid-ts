import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedIn from './ShareButtonLinkedIn';
import ShareButtonPrint from './ShareButtonPrint';
import AbstractShareButton from './AbstractShareButton';

const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', 'http://www.youtube.com/rodrigobranas');
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', 'http://www.youtube.com/rodrigobranas');
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedIn('.btn-linkedin', 'http://www.youtube.com/rodrigobranas');
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint('.btn-print');
print.bind();
