import Link from 'next/link';
import EnquiryForm from '../EnquiryForm';

export default function DemoBooking() {
  return (
    <>
<section className="sec" id="demo">
 <div className="wrap demo-g">
  <div>
   <p className="eyebrow rv">Book a demo</p>
   <h2 className="h2 rv d1">Let's talk about your business.</h2>
   <p className="lead rv d2">Share a few details and the Intouch team can get in touch about TallyPrime.</p>
   <div className="contact-mini rv d3" id="contact">
    <a href="mailto:info@intouchglobaltech.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>info@intouchglobaltech.com</a>
    <a href="tel:+919942354602"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" /></svg>+91 99423 54602</a>
   </div>
  </div>
  <EnquiryForm id="demoForm" className="formcard rv d1">
   <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
   <div className="row2">
    <div className="f"><label htmlFor="dName">Full Name</label><input id="dName" name="name" autoComplete="name" required /><span className="em" aria-live="polite"></span></div>
    <div className="f"><label htmlFor="dBiz">Business Name</label><input id="dBiz" name="business" autoComplete="organization" required /><span className="em" aria-live="polite"></span></div>
   </div>
   <div className="row2">
    <div className="f"><label htmlFor="dPhone">Phone Number</label><input id="dPhone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" required data-phone /><span className="em" aria-live="polite"></span></div>
    <div className="f"><label htmlFor="dEmail">Email Address</label><input id="dEmail" name="email" type="email" autoComplete="email" required /><span className="em" aria-live="polite"></span></div>
   </div>
   <div className="row2">
    <div className="f"><label htmlFor="dType">Business Type <em>(optional)</em></label><select id="dType" name="businessType"><option value="">Select</option><option>Small business</option><option>Retail &amp; trading</option><option>Manufacturing</option><option>Accounting / finance practice</option><option>Other</option></select></div>
    <div className="f"><label htmlFor="dUsers">Number of Users <em>(optional)</em></label><select id="dUsers" name="users"><option value="">Select</option><option>1</option><option>2–5</option><option>6–10</option><option>More than 10</option></select></div>
   </div>
   <div className="f"><label htmlFor="dEnq">Enquiry Type</label><select id="dEnq" name="enquiryType" required><option value="">Select an option</option><option>Product Demo</option><option>Pricing Enquiry</option><option>Livekeeping (mobile &amp; web access)</option><option>General Product Question</option></select><span className="em" aria-live="polite"></span></div>
   <div className="f"><label htmlFor="dMsg">Message <em>(optional)</em></label><textarea id="dMsg" name="message" maxLength={1500}></textarea></div>
   <label className="chk"><input type="checkbox" name="consent" required /><span>I agree to be contacted by Intouch about my enquiry and accept the <Link href="/privacy" className="link">Privacy Policy</Link>.</span></label>
   <span className="em" data-consent-err></span>
   <div className="status" role="status"></div>
   <button className="btn btn-p btn-block" type="submit"><span className="spin"></span>Book My Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
  </EnquiryForm>
 </div>
</section>
    </>
  );
}
