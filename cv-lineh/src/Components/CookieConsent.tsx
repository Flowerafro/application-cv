import { useCookieConsent } from '../Hooks/useCookieConsent';
import '../Styles/cookie.css';

export default function CookieConsent() {
    const { isVisible, acceptAll, declineAll } = useCookieConsent();

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-banner" role="region" aria-label="Cookie Consent">
            <div className="cookie-content">
                <div className="cookie-info">
                    <h3 className="cookie-title">We value your privacy</h3>
                    <p className="cookie-text">
                        We use cookies to improve your experience and analyze site traffic.
                        By clicking "Accept All", you consent to our use of cookies.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button
                        className="cookie-btn cookie-btn-primary"
                        onClick={acceptAll}
                        aria-label="Accept all cookies"
                    >
                        Accept All
                    </button>
                    <button
                        className="cookie-btn cookie-btn-secondary"
                        onClick={declineAll}
                        aria-label="Decline non-essential cookies"
                    >
                        Necessary Only
                    </button>
                </div>
            </div>
        </div>
    );
}
