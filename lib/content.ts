// Site content. Edit copy here; components read from this file.

export type FeatureTab = {
  id: string;
  label: string;
  heading: string;
  body: string;
  points: string[];
  /** Static, trusted illustrative markup for the Tally-style preview screen (sample data). */
  screenHtml: string;
};

export const FEATURE_TABS: FeatureTab[] = [
  {
    "id": "accounting",
    "label": "Accounting",
    "heading": "Every Transaction. Beautifully Organised.",
    "body": "Record transactions, manage ledgers and keep your books organised with a structured accounting workflow.",
    "points": [
      "Vouchers for sales, purchases, receipts and payments",
      "Ledger-wise view of balances",
      "Day Book for daily review"
    ],
    "screenHtml": "<div class=\"tw\"><div class=\"tw-top\"><span class=\"tw-dots\"><i></i><i></i><i></i></span><span class=\"tw-menu\"><span><u>K</u>: Company</span><span><u>Y</u>: Data</span><span><u>Z</u>: Exchange</span><span class=\"tw-goto\"><u>G</u>: Go To</span><span><u>O</u>: Import</span><span><u>E</u>: Export</span><span><u>M</u>: Share</span><span><u>P</u>: Print</span></span><span class=\"tw-tag\">Illustrative</span></div><div class=\"tw-title\"><span>Ledger Vouchers</span><span class=\"tw-co\">Sharma Enterprises</span><span class=\"tw-x\">×</span></div><div class=\"tw-main\"><div class=\"tw-body\"><div class=\"tw-sub\"><span>Sharma Enterprises</span><span>Ledger: Sharma Traders · 1-Nov-26 to 21-Nov-26</span></div><table class=\"trp\"><thead><tr><th>Date</th><th>Particulars</th><th>Vch Type</th><th class=n>Debit</th><th class=n>Credit</th></tr></thead><tbody><tr><td>1-Nov-26</td><td>Opening Balance</td><td></td><td class=n>12,500.00</td><td class=n></td></tr><tr class=hl><td>5-Nov-26</td><td>Sales A/c</td><td>Sales</td><td class=n>18,400.00</td><td class=n></td></tr><tr><td>9-Nov-26</td><td>HDFC Bank</td><td>Receipt</td><td class=n></td><td class=n>12,000.00</td></tr><tr><td>14-Nov-26</td><td>Sales A/c</td><td>Sales</td><td class=n>7,250.00</td><td class=n></td></tr></tbody><tfoot><tr><td></td><td>Closing Balance</td><td></td><td class=n>26,150.00</td><td class=n></td></tr></tfoot></table></div><div class=\"tw-keys\"><span><b>F2</b>: Period</span><span><b>F3</b>: Company</span><span class=\"on\"><b>F4</b>: Ledger</span><span><b>F5</b>: Monthly</span><span><b>F8</b>: Valuation</span><span><b>F12</b>: Configure</span></div></div></div>"
  },
  {
    "id": "gst",
    "label": "GST & Taxation",
    "heading": "GST Management, Made Simpler.",
    "body": "Organise GST-related transactions, review tax information and prepare for compliance workflows.",
    "points": [
      "GST details captured on transactions",
      "Tax breakdown by component",
      "Summaries to review before filing"
    ],
    "screenHtml": "<div class=\"tw\"><div class=\"tw-top\"><span class=\"tw-dots\"><i></i><i></i><i></i></span><span class=\"tw-menu\"><span><u>K</u>: Company</span><span><u>Y</u>: Data</span><span><u>Z</u>: Exchange</span><span class=\"tw-goto\"><u>G</u>: Go To</span><span><u>O</u>: Import</span><span><u>E</u>: Export</span><span><u>M</u>: Share</span><span><u>P</u>: Print</span></span><span class=\"tw-tag\">Illustrative</span></div><div class=\"tw-title\"><span>GST Summary</span><span class=\"tw-co\">Sharma Enterprises</span><span class=\"tw-x\">×</span></div><div class=\"tw-main\"><div class=\"tw-body\"><div class=\"tw-sub\"><span>Sharma Enterprises</span><span>GST Summary · Nov-26</span></div><table class=\"trp\"><thead><tr><th>Particulars</th><th class=n>Taxable Value</th><th class=n>IGST</th><th class=n>CGST</th><th class=n>SGST</th></tr></thead><tbody><tr class=hl><td>Outward Supplies</td><td class=n>3,84,000.00</td><td class=n>11,650.00</td><td class=n>17,280.00</td><td class=n>17,280.00</td></tr><tr><td>Inward Supplies</td><td class=n>2,10,500.00</td><td class=n>4,120.00</td><td class=n>9,470.00</td><td class=n>9,470.00</td></tr><tr><td>Input Tax Credit</td><td class=n></td><td class=n>4,120.00</td><td class=n>9,470.00</td><td class=n>9,470.00</td></tr></tbody><tfoot><tr><td>Net Tax Liability</td><td class=n></td><td class=n>7,530.00</td><td class=n>7,810.00</td><td class=n>7,810.00</td></tr></tfoot></table></div><div class=\"tw-keys\"><span><b>F2</b>: Period</span><span><b>F3</b>: Company</span><span><b>F4</b>: GSTIN</span><span class=\"on\"><b>F5</b>: Returns</span><span><b>F8</b>: Rates</span><span><b>F12</b>: Configure</span></div></div></div>"
  },
  {
    "id": "inventory",
    "label": "Inventory",
    "heading": "Know Your Stock. Stay in Control.",
    "body": "Track stock movements, monitor inventory information and keep your business operations organised.",
    "points": [
      "Stock items with quantities and values",
      "Inward and outward movements",
      "Summary of closing stock"
    ],
    "screenHtml": "<div class=\"tw\"><div class=\"tw-top\"><span class=\"tw-dots\"><i></i><i></i><i></i></span><span class=\"tw-menu\"><span><u>K</u>: Company</span><span><u>Y</u>: Data</span><span><u>Z</u>: Exchange</span><span class=\"tw-goto\"><u>G</u>: Go To</span><span><u>O</u>: Import</span><span><u>E</u>: Export</span><span><u>M</u>: Share</span><span><u>P</u>: Print</span></span><span class=\"tw-tag\">Illustrative</span></div><div class=\"tw-title\"><span>Stock Summary</span><span class=\"tw-co\">Sharma Enterprises</span><span class=\"tw-x\">×</span></div><div class=\"tw-main\"><div class=\"tw-body\"><div class=\"tw-sub\"><span>Sharma Enterprises</span><span>Stock Summary · as at 21-Nov-26</span></div><table class=\"trp\"><thead><tr><th>Particulars</th><th class=n>Quantity</th><th class=n>Rate</th><th class=n>Value</th></tr></thead><tbody><tr class=hl><td>Steel Rods 12mm</td><td class=n>212 nos</td><td class=n>390.00</td><td class=n>82,680.00</td></tr><tr><td>Fasteners M8</td><td class=n>1,480 nos</td><td class=n>6.50</td><td class=n>9,620.00</td></tr><tr><td>Paint 20L</td><td class=n>46 tins</td><td class=n>2,450.00</td><td class=n>1,12,700.00</td></tr><tr><td>Cement 50kg</td><td class=n>88 bags</td><td class=n>410.00</td><td class=n>36,080.00</td></tr></tbody><tfoot><tr><td>Grand Total</td><td class=n></td><td class=n></td><td class=n>2,41,080.00</td></tr></tfoot></table></div><div class=\"tw-keys\"><span><b>F2</b>: Date</span><span><b>F3</b>: Company</span><span><b>F4</b>: Stock Group</span><span class=\"on\"><b>F5</b>: Item-wise</span><span><b>F8</b>: Valuation</span><span><b>F12</b>: Configure</span></div></div></div>"
  },
  {
    "id": "invoicing",
    "label": "Invoicing",
    "heading": "Professional Invoicing. Less Effort.",
    "body": "Create invoices and maintain a clearer record of your business transactions.",
    "points": [
      "Itemised invoices with tax details",
      "Linked to party ledgers",
      "Consistent transaction records"
    ],
    "screenHtml": "<div class=\"tw\"><div class=\"tw-top\"><span class=\"tw-dots\"><i></i><i></i><i></i></span><span class=\"tw-menu\"><span><u>K</u>: Company</span><span><u>Y</u>: Data</span><span><u>Z</u>: Exchange</span><span class=\"tw-goto\"><u>G</u>: Go To</span><span><u>O</u>: Import</span><span><u>E</u>: Export</span><span><u>M</u>: Share</span><span><u>P</u>: Print</span></span><span class=\"tw-tag\">Illustrative</span></div><div class=\"tw-title\"><span>Accounting Voucher Creation</span><span class=\"tw-co\">Sharma Enterprises</span><span class=\"tw-x\">×</span></div><div class=\"tw-main\"><div class=\"tw-body\"><div class=\"vch\"><div class=\"vch-h\"><span class=\"vch-t\">Sales</span><span>No. <b>1042</b></span><span class=\"vch-d\">21-Nov-26<small>Saturday</small></span></div><div class=\"vch-p\"><span>Party A/c name</span><b>: Sharma Traders</b></div><div class=\"vch-p\"><span>Current balance</span><b>: 26,150.00 Dr</b></div></div><table class=\"trp\"><thead><tr><th>Name of Item</th><th class=n>Quantity</th><th class=n>Rate</th><th class=n>Amount</th></tr></thead><tbody><tr class=hl><td>Steel Rods 12mm</td><td class=n>40 nos</td><td class=n>390.00</td><td class=n>15,600.00</td></tr><tr><td>Output CGST @ 9%</td><td class=n></td><td class=n></td><td class=n>1,400.00</td></tr><tr><td>Output SGST @ 9%</td><td class=n></td><td class=n></td><td class=n>1,400.00</td></tr></tbody><tfoot><tr><td></td><td class=n>40 nos</td><td class=n></td><td class=n>18,400.00</td></tr></tfoot></table><div class=\"vch-n\"><span>Narration:</span> Invoice shared with party</div></div><div class=\"tw-keys\"><span><b>F2</b>: Date</span><span><b>F3</b>: Company</span><span><b>F4</b>: Contra</span><span><b>F5</b>: Payment</span><span><b>F6</b>: Receipt</span><span><b>F7</b>: Journal</span><span class=\"on\"><b>F8</b>: Sales</span><span><b>F9</b>: Purchase</span></div></div></div>"
  },
  {
    "id": "reports",
    "label": "Financial Reports",
    "heading": "Turn Business Data into Better Decisions.",
    "body": "Access meaningful financial information to understand business performance.",
    "points": [
      "Profit & Loss statement",
      "Balance Sheet",
      "Drill into the figures behind a total"
    ],
    "screenHtml": "<div class=\"tw\"><div class=\"tw-top\"><span class=\"tw-dots\"><i></i><i></i><i></i></span><span class=\"tw-menu\"><span><u>K</u>: Company</span><span><u>Y</u>: Data</span><span><u>Z</u>: Exchange</span><span class=\"tw-goto\"><u>G</u>: Go To</span><span><u>O</u>: Import</span><span><u>E</u>: Export</span><span><u>M</u>: Share</span><span><u>P</u>: Print</span></span><span class=\"tw-tag\">Illustrative</span></div><div class=\"tw-title\"><span>Balance Sheet</span><span class=\"tw-co\">Sharma Enterprises</span><span class=\"tw-x\">×</span></div><div class=\"tw-main\"><div class=\"tw-body\"><div class=\"tw-sub\"><span>Sharma Enterprises</span><span>Balance Sheet · as at 21-Nov-26</span></div><div class=\"bs\"><table class=\"trp\"><thead><tr><th>Liabilities</th><th class=n>as at 21-Nov-26</th></tr></thead><tbody><tr><td>Capital Account</td><td class=n>8,40,000.00</td></tr><tr><td>Loans (Liability)</td><td class=n>1,20,000.00</td></tr><tr><td>Current Liabilities</td><td class=n>96,500.00</td></tr><tr class=hl><td>Profit &amp; Loss A/c</td><td class=n>93,300.00</td></tr></tbody><tfoot><tr><td>Total</td><td class=n>11,49,800.00</td></tr></tfoot></table><table class=\"trp\"><thead><tr><th>Assets</th><th class=n>as at 21-Nov-26</th></tr></thead><tbody><tr><td>Fixed Assets</td><td class=n>4,20,000.00</td></tr><tr><td>Current Assets</td><td class=n>6,36,500.00</td></tr><tr><td>Closing Stock</td><td class=n>93,300.00</td></tr><tr><td></td><td class=n></td></tr></tbody><tfoot><tr><td>Total</td><td class=n>11,49,800.00</td></tr></tfoot></table></div></div><div class=\"tw-keys\"><span><b>F2</b>: Period</span><span><b>F3</b>: Company</span><span class=\"on\"><b>F5</b>: Ratios</span><span><b>F8</b>: Valuation</span><span><b>F12</b>: Configure</span></div></div></div>"
  }
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    "q": "What is TallyPrime?",
    "a": "TallyPrime is business management software developed by Tally Solutions. It's used for accounting, inventory, GST-related records, invoicing and financial reports, all in one application."
  },
  {
    "q": "What types of businesses can use TallyPrime?",
    "a": "It's commonly used by small and medium businesses — including retailers, traders, distributors, manufacturers and service businesses — as well as accountants who manage books for clients. A demo is the easiest way to check the fit for your business."
  },
  {
    "q": "Can TallyPrime help with GST-related accounting?",
    "a": "Yes. TallyPrime lets you record GST details on transactions and review GST reports and summaries. Your exact filing process depends on your business, so it's worth discussing your requirements with your accountant and with us during a demo."
  },
  {
    "q": "Does TallyPrime include inventory management?",
    "a": "Yes. You can maintain stock items, record inward and outward movements and view stock summaries and related reports."
  },
  {
    "q": "Can I create invoices using TallyPrime?",
    "a": "Yes. You can create sales invoices with item and tax details, and they become part of your accounting records."
  },
  {
    "q": "What kinds of financial reports are available?",
    "a": "Standard reports include the Balance Sheet, Profit & Loss account, Day Book, ledger reports, stock summaries and GST reports, among others. We can show the ones most relevant to you in a demo."
  },
  {
    "q": "How do I choose the right TallyPrime licence?",
    "a": "It mainly depends on how many people need to use the software and how you work. Share your business size and number of users with us and Intouch will walk you through the available options."
  },
  {
    "q": "What is Livekeeping?",
    "a": "Livekeeping is a companion app that connects to TallyPrime (and Tally.ERP 9) through a small Data Connector on your computer. It lets you view your books, reports and outstanding balances on mobile or web, and — depending on your plan — create vouchers, GST invoices, e-Invoices and e-Way Bills on the go."
  },
  {
    "q": "Does Livekeeping replace TallyPrime?",
    "a": "No. Livekeeping works alongside your Tally company. Your accounting data stays in Tally; Livekeeping syncs it so you can access it remotely."
  },
  {
    "q": "How can I request a demonstration or pricing?",
    "a": "Click any “Book a Demo” or “Request Pricing” button and fill in the short form. The Intouch team will contact you."
  },
  {
    "q": "How do I contact Intouch?",
    "a": "Email info@intouchglobaltech.com or call +91 99423 54602. You can also use the enquiry form on this page."
  }
];
