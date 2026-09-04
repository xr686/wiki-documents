// ===================== Pending URLs =====================

// TODO: Voice AI landing page URL — 本周上线后补充（Explore More 按钮目标）
export const VOICE_AI_LANDING_URL = '';

// FAQ 落地页链接（2026-09-03 主人提供）
export const FAQ_URL = 'https://wiki.seeedstudio.com/respeaker_faq/';

export const GITHUB_URL = 'https://github.com/respeaker';

// ===================== Interfaces =====================

export interface TopTab {
  id: string;
  title: string;
  icon: string;
}

export interface GuideItem {
  name: string;
  image: string;
  href: string;
}

export interface GuideTab {
  id: string;
  title: string;
  icon: string;
  items: GuideItem[];
}

export interface SpecRow {
  name: string;
  href?: string;
  /** cells 顺序与 specColumns 一致；无 href 的产品渲染为纯文本 */
  cells: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  draft?: boolean;
}

// ===================== Top-Level Tabs (Section 0) =====================

export const topTabs: TopTab[] = [
  { id: 'products', title: 'Products', icon: 'box' },
  { id: 'faq', title: 'FAQ', icon: 'help' },
];

// ===================== Specification Table (Section 2) =====================
// 数据来源：主人提供的权威规格表 spec-sheet.md（飞书表格「AI Sensing - reSpeaker
// Specification」E920sH84jhO4RdtGwqacTVUanOg 导出，2026-09-03）。
// 行 = 产品（7 个），列 = 属性（17 项）；Warranty 全产品均为 1 year，已省略。
// 空值沿用原表 '/' 记法；多值单元格沿用原表 ' / ' 分隔。
// 产品名链接来自 requirements.md §2；XVF3000 与 D1 不设跳转链接（渲染为纯文本）。

export const specColumns: string[] = [
  'SKU',
  'Reference Price',
  'Mic Array Type',
  'Mic Spacing',
  'No. of Mics',
  'Chip',
  'Pickup Distance',
  'Voice Capture',
  'AI Algorithms',
  'Speaker',
  'Connectivity',
  'Screen',
  'LED',
  'Battery Life',
  'Compatibility',
  'Applications',
  'Operating Temperature',
];

export const specRows: SpecRow[] = [
  {
    name: 'reSpeaker Clip',
    href: 'https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html',
    cells: [
      '100020126',
      '$75.9',
      '/',
      '/',
      '2 PDM MEMS Microphones',
      'nRF5340 + nRF7002',
      'Up to 3m (conversation situation)',
      '360°',
      'Noise Suppression',
      '/',
      'Connecting to mobile APP (WiFi 6, Bluetooth 2.4G)',
      '1 (0.5" OLED)',
      '/',
      'Endurance Mode(NS Off): up to 18h / Enhanced Mode(NS On): up to 14h',
      'Android, iOS',
      'Voice AI Agent, Meeting Transcription, Smart Retail(Sales performance analysis), Conversation Logging, Voice Memos, Interview Recording, Field Notes, Personal AI Assistant Input',
      '0-50°',
    ],
  },
  {
    name: 'reSpeaker Flex',
    href: 'https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html',
    cells: [
      'Circular: 100005504 / Linear: 100099135 / Circular with XIAO ESP32S3: 100070894 / Linear with XIAO ESP32S3: 100026178',
      '$49.9-$54.9',
      'Circular / Linear',
      'Circular: 44mm / Linear: 33mm',
      '4 PDM MEMS Microphones',
      'XMOS XVF3800',
      'Up to 5m',
      'Circular: 360° / Linear: 180°',
      'AEC, Noise Suppression, VNR, AGC, DoA, De-Reverberation, Multi-beamforming',
      '10w',
      'USB, I2S',
      '/',
      '1 Power LED (green, solid on)',
      '/',
      'XIAO ESP32S3, Raspberry Pi, Jetson, PC, any platform supports I2S and USB Audio',
      'Robotics Integration, Digital Signage, Educational Terminal, Embedded Application',
      '0-65°',
    ],
  },
  {
    name: 'reSpeaker XVF3800',
    href: 'https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html',
    cells: [
      'bare board: 101991441 / with XIAO ESP32S3: 114993700 / with Case: 114993701 / with XIAO ESP32S3 (Case Version): 114993702',
      '$54.9-$64.9',
      'Circular',
      '66mm',
      '4 PDM MEMS Microphones',
      'XMOS XVF3800',
      'Up to 5m',
      '360°',
      'AEC, Noise Suppression, VNR, AGC, DoA, De-Reverberation, Multi-beamforming',
      '5w',
      'USB, I2S',
      '/',
      '12 Programmable RGB LED',
      '/',
      'XIAO ESP32S3, Raspberry Pi, Jetson, PC, any platform supports I2S and USB Audio',
      'Smart Home Voice Control, Robotics Integration, Physical AI Voice Agent, Smart Voice Assistants, Smart Conference',
      '0-65°',
    ],
  },
  {
    name: 'reSpeaker XVF3000 (Discontinued)',
    // 需求文档：XVF3000 不设跳转链接，渲染为纯文本（与 D1 一致）
    cells: [
      'bare board: 107990053 / with Case: 107990193',
      '$64-$69',
      'Circular',
      '44mm',
      '4 PDM MEMS Microphones',
      'XMOS XVF3000',
      'Up to 5m',
      '360°',
      'AEC, Noise Suppression, VNR, AGC, DoA, Beamforming',
      '5w',
      'USB',
      '/',
      '12 Programmable RGB LED',
      '/',
      'Raspberry Pi, Jetson, PC, any platform supports USB Audio',
      'Smart Home Voice Control, Robotics Integration, Physical AI Voice Agent, Smart Voice Assistants, Smart Conference',
      '/',
    ],
  },
  {
    name: 'reSpeaker Lite',
    href: 'https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-Full-Kit-of-2-Mic-Array-pre-soldered-XIAO-ESP32S3-Mono-Enclosed-Speaker-and-Enclosure.html',
    cells: [
      'bare board: 107990273 / with XIAO ESP32S3: 110061601',
      '$24.9-$29.9',
      'Linear',
      '70mm',
      '2 PDM MEMS Microphones',
      'XMOS XU316',
      'Up to 3m',
      '180°',
      'IC, EC, AEC, Noise Suppression, VNR, AGC, VAD',
      '5w',
      'USB, I2S',
      '/',
      '1 Programmable RGB LED',
      '/',
      'Raspberry Pi, Jetson, PC, any platform supports I2S and USB Audio',
      'Wireless Voice Assistants, Home Assistant Integration, DIY projects, Prototyping, Education',
      '/',
    ],
  },
  {
    name: 'reSpeaker Pi HAT',
    href: 'https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html',
    cells: [
      '107100001',
      '$12.9',
      'Linear',
      '/',
      '2 Analog Microphones',
      'TLV320AIC3104 Audio Codec',
      'Up to 3m',
      '/',
      'VAD, DoA',
      '/',
      'I2S',
      '/',
      '3 Programmable RGB LEDs',
      '/',
      'Raspberry Pi 5, Raspberry Pi Zero, Raspberry Pi 1B+/2B/3B/3B+/4B',
      'Raspberry Pi Compatible',
      '/',
    ],
  },
  {
    name: 'Sound Event Detection Module D1',
    // 收尾指令：D1 不设跳转链接（requirements.md §2 原有商品页链接，如需恢复直接补 href 即可）
    cells: [
      '100049596',
      '$12.9',
      '/',
      '/',
      '1 PDM MEMS Microphone',
      'XMOS XU316',
      '/',
      '/',
      '5 Detection Sound Event Type: Glass Break, Snore, Gunshot, T3(Fire)/T4(CO) Alarm, Baby Cry',
      '/',
      'UART',
      '/',
      '/',
      '/',
      'XIAO ESP32 versions, standalone UART/USB interfaces',
      'Smart Home Security, Home Assistant Integration, Public Security, Health Management, Voice IoT - email services, notifications push',
      '/',
    ],
  },
];

// ===================== Guide Tabs (Section 3) =====================

export const guideTabs: GuideTab[] = [
  {
    id: 'two-mic',
    title: '2-Mic Array',
    icon: 'mic2',
    items: [
      {
        name: 'reSpeaker Lite',
        image: 'https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png',
        href: 'https://wiki.seeedstudio.com/reSpeaker_usb_v3/',
      },
      {
        name: 'reSpeaker Pi HAT',
        image: 'https://files.seeedstudio.com/products/107100001/01.png',
        href: 'https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/',
      },
    ],
  },
  {
    id: 'four-mic',
    title: '4-Mic Array',
    icon: 'mic4',
    items: [
      {
        name: 'reSpeaker XVF3800',
        image: 'https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg',
        href: 'https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/',
      },
      {
        name: 'reSpeaker Flex',
        image:
          'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100070894-respeaker-flex-xvf3800-circular-4-with-xiao-esp32s3_1_.jpg',
        href: 'https://wiki.seeedstudio.com/respeaker_flex_introduction/',
      },
      {
        // 需求文档：XVF3000 不设跳转链接；产品图由主人 2026-09-03 提供。href 暂为 '#'，后续补链接时直接替换即可。
        name: 'reSpeaker XVF3000 (Discontinued)',
        image:
          'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/2/02_7.png',
        href: '#',
      },
    ],
  },
  {
    id: 'other',
    title: 'Other Voice AI Products',
    icon: 'sparkles',
    items: [
      {
        name: 'reSpeaker Clip',
        image:
          'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/0/2026.7.1.100020126.jpg',
        href: 'https://wiki.seeedstudio.com/respeaker_clip/',
      },
      {
        name: 'Sound Event Detection Module',
        image:
          'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-sound-event-dectection-module_1.jpg',
        href: 'https://wiki.seeedstudio.com/sound_event_detection_module/',
      },
    ],
  },
];

// ===================== FAQ (Section 5, draft) =====================
// 需求文档未提供 FAQ 内容，以下为基于 respeaker-research.md 拟稿（draft），上线前需审核。

export const faqItems: FaqItem[] = [
  {
    question: 'What is reSpeaker?',
    answer:
      'reSpeaker is an open-source modular voice interface platform from Seeed Studio. It combines microphone arrays with professional audio processors (XMOS and Nordic based) and rich connectivity, letting makers, developers and enterprises add far-field voice recognition and interaction to their products.',
    draft: true,
  },
  {
    question: 'How far can reSpeaker pick up my voice?',
    answer:
      'reSpeaker products support far-field voice pickup. Entry-level 2-mic models such as reSpeaker Lite work reliably up to about 3 m, while the flagship 4-mic reSpeaker XVF3800 reaches up to 5 m with 360° coverage — even in noisy environments thanks to AEC, noise suppression and beamforming.',
    draft: true,
  },
  {
    question: 'Which platforms and devices are compatible?',
    answer:
      'reSpeaker works with Raspberry Pi, XIAO ESP32S3, Arduino, PCs over USB UAC, and Linux systems. Models like reSpeaker Flex and XVF3800 also expose I2S mode for deeper integration into custom hardware.',
    draft: true,
  },
  {
    question: 'What audio algorithms are supported?',
    answer:
      'Depending on the model, reSpeaker includes AEC (echo cancellation), noise suppression, VAD (voice activity detection), DOA (direction of arrival), beamforming, AGC and de-reverberation — all running on the onboard audio processor.',
    draft: true,
  },
  {
    question: 'Can reSpeaker work with voice assistants like Alexa or Home Assistant?',
    answer:
      'Yes. The wiki provides integration tutorials for Alexa, Google Assistant, Home Assistant (via ESPHome with XIAO ESP32S3), xiaozhi and more, so you can connect reSpeaker to the assistant ecosystem of your choice.',
    draft: true,
  },
  {
    question: 'What is the difference between reSpeaker XVF3800 and XVF3000?',
    answer:
      'Both are plug-and-play 4-mic USB arrays. The XVF3800 is the current flagship: 5 m 360° pickup, 60dB AGC, USB/I2S dual-mode firmware, USB-C and 12 RGB LEDs. The XVF3000 is the previous-generation finished product (USB UAC 1.0) — still a solid, ready-to-use option.',
    draft: true,
  },
];
