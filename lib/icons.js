import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faGithub,
  faDiscord,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faCircle,
  faList,
  faUsers,
  faFlag,
  faEye,
  faPen,
  faBug,
  faCookie,
  faHandHolding,
  faHandshake,
  faPowerOff,
  faEnvelope,
  faSignInAlt,
  faSignOutAlt,
  faInfoCircle,
  faLanguage,
  faSearch,
  faCalendarDay,
  faGlobeEurope,
  faHome,
  faCaretDown as faSolidCaretDown,
  faCaretUp as faSolidCaretUp,
  faGavel,
  faBook,
  faChartBar,
  faWindowClose,
  faTimes,
  faUserCircle,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent Font Awesome from adding its CSS since we did it manually above:
config.autoAddCss = false;

// Import @fortawesome/free-brands-svg-icons
library.add(faTwitter, faGithub, faDiscord, faSpotify, faGoogle, faFacebook);

// Import @fortawesome/free-solid-svg-icons
library.add(
  faGlobe,
  faCircle,
  faUsers,
  faFlag,
  faEye,
  faPen,
  faList,
  faBug,
  faCookie,
  faHandHolding,
  faHandshake,
  faUserCircle,
  faUserCog,
  faPowerOff,
  faEnvelope,
  faLanguage,
  faSignInAlt,
  faSignOutAlt,
  faInfoCircle,
  faWindowClose,
  faTimes,
  faSearch,
  faCalendarDay,
  faGlobeEurope,
  faHome,
  faSolidCaretDown,
  faSolidCaretUp,
  faChartBar,
  faGavel,
  faBook
);

// Import @fortawesome/free-regular-svg-icons
library.add(faClock);