import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFieldValid = (field: string): boolean => {
    switch (field) {
      case 'name':
        return formData.name.trim() !== '';
      case 'email':
        return validateEmail(formData.email);
      case 'subject':
        return formData.subject.trim() !== '';
      case 'message':
        return formData.message.trim() !== '';
      default:
        return false;
    }
  };

  const isFormValid = (): boolean => {
    return (
      formData.name.trim() !== '' &&
      validateEmail(formData.email) &&
      formData.subject.trim() !== '' &&
      formData.message.trim() !== ''
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      // Handle form submission
      const mailtoLink = `mailto:raphaelmatori@hotmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    }
  };

  const formValid = isFormValid();

  return (
    <main className="page__content">
      <section className="contact">
        <div className="contact__container">
          {/* Left Column - Contact Info */}
          <div className="contact__info">
            <span className="contact__label">{t('contact.getInTouch')}</span>
            <h1 className="contact__title">
              {t('contact.title')}
              <span className="contact__title-dot">.</span>
            </h1>
            <p className="contact__text">{t('contact.introText')}</p>

            <div className="contact__details">
              <div className="contact__item">
                <div className="contact__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="contact__item-content">
                  <span className="contact__item-label">{t('contact.emailLabel')}</span>
                  <a href="mailto:raphaelmatori@hotmail.com" className="contact__item-value">
                    raphaelmatori@hotmail.com
                  </a>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact__item-content">
                  <span className="contact__item-label">{t('contact.locationLabel')}</span>
                  <span className="contact__item-value">{t('contact.location')}</span>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <span className="contact__social-label">{t('contact.followMe')}</span>
              <div className="contact__social-links">
                <a href="https://github.com/raphaelmatori" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/raphaelmatori" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:raphaelmatori@hotmail.com" className="contact__social-link" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.namePlaceholder')}
                    className={`contact__input ${touched.name && !isFieldValid('name') ? 'contact__input--invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="contact__field">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.emailPlaceholder')}
                    className={`contact__input ${touched.email && !isFieldValid('email') ? 'contact__input--invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="contact__field">
                <input
                  type="text"
                  name="subject"
                  placeholder={t('contact.subjectPlaceholder')}
                  className={`contact__input ${touched.subject && !isFieldValid('subject') ? 'contact__input--invalid' : ''}`}
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="contact__field">
                <textarea
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  className={`contact__input contact__textarea ${touched.message && !isFieldValid('message') ? 'contact__input--invalid' : ''}`}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button
                type="submit"
                className={`contact__submit ${!formValid ? 'contact__submit--disabled' : ''}`}
                disabled={!formValid}
              >
                {t('contact.sendMessage')}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
