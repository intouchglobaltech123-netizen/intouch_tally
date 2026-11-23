export const SITE = {
  name: 'Intouch',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.intouchglobaltech.com',
  title: 'TallyPrime Accounting Software | Demo & Enquiry | Intouch',
  description:
    'Explore TallyPrime accounting software with Intouch. Discover accounting, GST, invoicing, inventory and financial reporting features. Request a demo or pricing information.',
  email: 'info@intouchglobaltech.com',
  phone: '+91 99423 54602',
  phoneHref: '+919942354602',
};

/** Indian mobile number: optional +91 / 0 prefix, 10 digits starting 6–9. */
export const isIndianMobile = (v: string) =>
  /^(?:\+?91|0)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ''));

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export const ENQUIRY_TYPES = [
  'Product Demo',
  'Pricing Enquiry',
  'Livekeeping (mobile & web access)',
  'General Product Question',
] as const;
