import React, { useState, useRef, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import styles from './index.module.scss';
import {
  topTabs,
  guideTabs,
  specColumns,
  specRows,
  faqItems,
  VOICE_AI_LANDING_URL,
  FAQ_URL,
  GITHUB_URL,
} from './productData';
import {
  BoxIcon,
  HelpCircleIcon,
  MicIcon,
  MicArrayIcon,
  SparklesIcon,
  GithubIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from './icons';

// ===================== Icon Maps =====================
const topTabIconMap: Record<string, React.FC<{ className?: string }>> = {
  box: BoxIcon,
  help: HelpCircleIcon,
};

const guideIconMap: Record<string, React.FC<{ className?: string }>> = {
  mic2: MicIcon,
  mic4: MicArrayIcon,
  sparkles: SparklesIcon,
};

// ===================== i18n (inlined equivalent of ./i18n — identity) =====================
function createReSpeakerTranslator(_currentLocale: string, _pathname: string) {
  return (text: string): string => text;
}

function localizeReSpeakerHref(href: string, _locale: string, _pathname: string): string {
  return href;
}

function useReSpeakerTranslator() {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  return createReSpeakerTranslator(i18n.currentLocale, pathname);
}

function useReSpeakerHrefLocalizer() {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  return (href: string) => localizeReSpeakerHref(href, i18n.currentLocale, pathname);
}

// ===================== Scroll Reveal =====================
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add(styles.reveal);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.revealVisible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ===================== 0. HERO (title + Products/FAQ tabs) =====================
function HeroSection({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (id: string) => void;
}) {
  const t = useReSpeakerTranslator();
  const localizeHref = useReSpeakerHrefLocalizer();

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            {t('Start Your Voice AI Journey with')}{' '}
            <span className={styles.accent}>reSpeaker</span>
          </h1>
          <p className={styles.heroSubtitle}>{t('Open Source Voice Front-End Platform')}</p>
          <p className={styles.heroDesc}>
            {t(
              'Modular microphone arrays, professional audio algorithms and open-source software — plug-and-play voice solutions for smart home, conferencing, robotics and beyond.'
            )}
          </p>
        </div>

        {/* Top-Level Tabs: Products / FAQ */}
        <div className={styles.categoryTabs}>
          {topTabs.map((tab) => {
            const IconComp = topTabIconMap[tab.icon] || BoxIcon;
            const isExternalFaq = tab.id === 'faq' && Boolean(FAQ_URL);
            if (isExternalFaq) {
              return (
                <a
                  key={tab.id}
                  href={localizeHref(FAQ_URL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.categoryTab}
                >
                  <IconComp />
                  <span>{t(tab.title)}</span>
                </a>
              );
            }
            return (
              <button
                key={tab.id}
                className={`${styles.categoryTab} ${
                  activeTab === tab.id ? styles.categoryTabActive : ''
                }`}
                onClick={() => onTabChange(tab.id)}
              >
                <IconComp />
                <span>{t(tab.title)}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===================== 1. WHAT IS RESPEAKER =====================
function WhatIsSection() {
  const t = useReSpeakerTranslator();
  const localizeHref = useReSpeakerHrefLocalizer();
  const ref = useScrollReveal();

  return (
    <section className={styles.sectionDark} ref={ref}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleWhite}>
            {t('What is')} <span className={styles.accent}>reSpeaker</span>?
          </h2>
          <p className={styles.introDesc}>
            {t(
              'reSpeaker is a professional voice-front-end platform built on audio processors including XMOS and Nordic. It offers a wide range of hardware options such as linear or circular 2-4 microphone arrays and wearable-ready designs. Combining modular hardware, advanced audio algorithms (beamforming, AEC, AGC, noise reduction) and open-source software resources, it delivers plug-and-play audio solutions for makers, developers and enterprises. Accelerates commercial deployment of far-field voice-interaction products for smart home, conferencing, industrial control, robotics and more.'
            )}
          </p>
          {/* TODO: VOICE_AI_LANDING_URL 为空时按钮暂指向 GitHub；上线后自动使用正式链接 */}
          <a
            href={localizeHref(VOICE_AI_LANDING_URL || GITHUB_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.exploreBtn}
          >
            {t('Explore More')}
            <ArrowRightIcon />
          </a>
        </div>

        {/* Family Photo */}
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_flex/family.jpg"
          alt={t('reSpeaker Product Family')}
          className={styles.familyImage}
          loading="lazy"
        />
      </div>
    </section>
  );
}

// ===================== 2. SPECIFICATION TABLE =====================
function SpecTableSection() {
  const t = useReSpeakerTranslator();
  const localizeHref = useReSpeakerHrefLocalizer();
  const ref = useScrollReveal();

  return (
    <section className={styles.sectionDarker} ref={ref}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleWhite}>
            {t('reSpeaker')} <span className={styles.accent}>{t('Specification Comparison')}</span>
          </h2>
          <p className={styles.sectionDescDim}>
            {t('Compare microphone arrays, audio processors, algorithms and interfaces across the reSpeaker family')}
          </p>
        </div>

        {/* Horizontally scrollable spec table */}
        <div className={styles.specTableWrap}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                <th>{t('Product')}</th>
                {specColumns.map((col) => (
                  <th key={col}>{t(col)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specRows.map((row) => (
                <tr key={row.name}>
                  <td>
                    {row.href ? (
                      <a
                        href={localizeHref(row.href)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.specProductLink}
                      >
                        {t(row.name)}
                      </a>
                    ) : (
                      t(row.name)
                    )}
                  </td>
                  {row.cells.map((cell, idx) => (
                    <td key={specColumns[idx]}>{t(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ===================== 3. GUIDE INDEX (Tab Switcher) =====================
function GuideSection() {
  const t = useReSpeakerTranslator();
  const localizeHref = useReSpeakerHrefLocalizer();
  const [activeTab, setActiveTab] = useState(guideTabs[0].id);
  const ref = useScrollReveal();
  const activeTabData = guideTabs.find((tab) => tab.id === activeTab);

  return (
    <section className={styles.sectionDark} ref={ref}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleWhite}>
            {t('Comprehensive Guide for')} <span className={styles.accent}>reSpeaker</span>{' '}
            {t('Usage')}
          </h2>
          <p className={styles.sectionDescDim}>
            {t(
              'Explore resources ranging from unboxing and beginner-friendly getting-started tutorials, to SDK configuration and firmware tuning. Learn to fully integrate reSpeaker into your custom systems and services. Access our open-source ecosystem for fast prototyping, mass deployment and commercial-ready voice-AI projects.'
            )}
          </p>
        </div>

        {/* Guide Tabs: 2-Mic / 4-Mic / Other */}
        <div className={styles.categoryTabs}>
          {guideTabs.map((tab) => {
            const IconComp = guideIconMap[tab.icon] || MicIcon;
            return (
              <button
                key={tab.id}
                className={`${styles.categoryTab} ${
                  activeTab === tab.id ? styles.categoryTabActive : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComp />
                <span>{t(tab.title)}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className={styles.productGrid}>
          {activeTabData?.items.map((item) => (
            <a
              key={item.name}
              href={localizeHref(item.href)}
              className={styles.productCard}
            >
              <div className={styles.productImageWrap}>
                <img
                  src={item.image}
                  alt={t(item.name)}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{t(item.name)}</h3>
                <span className={styles.gettingStartedBtn}>
                  {t('Start Here')}
                  <ArrowRightIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== 4. GITHUB =====================
function GithubSection() {
  const t = useReSpeakerTranslator();
  const ref = useScrollReveal();

  return (
    <section className={styles.sectionLight} ref={ref}>
      <div className={styles.sectionInner}>
        <div className={styles.githubBox}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <GithubIcon className={styles.btnIcon} /> {t('View on Github')}
            </h2>
            <p className={styles.sectionDescDim}>
              {t(
                'Head over to our GitHub repository to access the complete set of reSpeaker resources. You will find the latest firmware releases, open-source software libraries and extensive technical documentation for your secondary development. Build and customize your voice-AI projects with ease.'
              )}
            </p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
          >
            {t('Go to Github')}
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// ===================== 5. FAQ (draft placeholder) =====================
function FaqSection() {
  const t = useReSpeakerTranslator();
  const ref = useScrollReveal();

  return (
    <section className={styles.sectionDark} ref={ref}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleWhite}>
            <span className={styles.accent}>reSpeaker</span> {t('FAQ')}
          </h2>
          <p className={styles.sectionDescDim}>
            {t('Frequently asked questions about the reSpeaker family')}
          </p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <div key={item.question} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                {t(item.question)}
                {item.draft && <span className={styles.faqDraftBadge}>{t('draft')}</span>}
              </h3>
              <p className={styles.faqAnswer}>{t(item.answer)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== 6. FOOTER =====================
function FooterSection() {
  const t = useReSpeakerTranslator();
  const localizeHref = useReSpeakerHrefLocalizer();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerRow}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <img
              src="https://files.seeedstudio.com/wiki/wiki_platform/SeeedStudio.png"
              alt="Seeed Studio"
              className={styles.footerLogo}
            />
            <p>
              {t(
                'Seeed Studio empowers innovators with open-source hardware and AI-powered edge computing solutions. reSpeaker is built for developers, by developers.'
              )}
            </p>
          </div>

          {/* Links */}
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>{t('Product')}</h4>
              <a
                href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('reSpeaker Flex')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
              <a
                href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('reSpeaker XVF3800')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
              <a
                href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-Full-Kit-of-2-Mic-Array-pre-soldered-XIAO-ESP32S3-Mono-Enclosed-Speaker-and-Enclosure.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('reSpeaker Lite')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
              <a
                href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('reSpeaker Clip')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
            </div>
            <div className={styles.footerCol}>
              <h4>{t('Resources')}</h4>
              <a href={localizeHref('https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/')}>
                {t('XVF3800 Introduction')}
              </a>
              <a href={localizeHref('https://wiki.seeedstudio.com/respeaker_flex_introduction/')}>
                {t('Flex Introduction')}
              </a>
              <a href={localizeHref('https://wiki.seeedstudio.com/reSpeaker_usb_v3/')}>
                {t('reSpeaker Lite Guide')}
              </a>
              <a href={localizeHref('https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/')}>
                {t('2-Mics Pi HAT Guide')}
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                {t('GitHub Repo')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
            </div>
            <div className={styles.footerCol}>
              <h4>{t('Community')}</h4>
              <a href="https://discord.gg/sensecraft" target="_blank" rel="noopener noreferrer">
                Discord <ExternalLinkIcon className={styles.btnIcon} />
              </a>
              <a href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer">
                {t('Forum')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} Seeed Studio. {t('All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===================== MAIN PAGE =====================
export default function ReSpeakerLandingPage(): React.ReactElement {
  const [topTab, setTopTab] = useState('products');

  return (
    <div className={styles.respeakerPage}>
      <HeroSection activeTab={topTab} onTabChange={setTopTab} />
      {topTab === 'products' ? (
        <>
          <WhatIsSection />
          <SpecTableSection />
          <GuideSection />
          <GithubSection />
        </>
      ) : (
        <FaqSection />
      )}
      <FooterSection />
    </div>
  );
}
