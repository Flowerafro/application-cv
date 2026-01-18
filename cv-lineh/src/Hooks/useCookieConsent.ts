import { useState, useEffect } from 'react';

type ConsentStatus = 'granted' | 'denied' | null;

export const useCookieConsent = () => {
    const [consent, setConsent] = useState<ConsentStatus>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const storedConsent = localStorage.getItem('cookie-consent') as ConsentStatus;
        if (storedConsent) {
            setConsent(storedConsent);
        } else {
            // Small delay to prevent flashing on initial load
            const timer = setTimeout(() => setIsVisible(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookie-consent', 'granted');
        setConsent('granted');
        setIsVisible(false);
        // Initialize analytics or other scripts here if needed
    };

    const declineAll = () => {
        localStorage.setItem('cookie-consent', 'denied');
        setConsent('denied');
        setIsVisible(false);
        // Ensure scripts are disabled/removed if necessary
    };

    const resetConsent = () => {
        localStorage.removeItem('cookie-consent');
        setConsent(null);
        setIsVisible(true);
    };

    return {
        consent,
        isVisible,
        acceptAll,
        declineAll,
        resetConsent
    };
};
