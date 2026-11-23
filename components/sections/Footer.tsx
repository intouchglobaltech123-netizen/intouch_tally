import Link from 'next/link';

export default function Footer() {
  return (
    <>
<footer id="footer">
 <div className="wrap">
  <div className="ft">
   <div><a href="#top" className="logo logo-chip">{/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/logo.png" alt="Intouch Globaltech" width="152" height="44" /></a><p className="ftag">Smarter Accounting. Stronger Business.</p><p>Explore TallyPrime with Intouch and discover a simpler way to manage your business finances.</p></div>
   <div><h4>Product</h4><ul><li><a href="#product">Overview</a></li><li><a href="#features">Features</a></li><li><a href="#how">How It Works</a></li><li><a href="#why">Why TallyPrime</a></li><li><a href="#mobile">Livekeeping</a></li><li><a href="#faqs">FAQs</a></li></ul></div>
   <div><h4>Get Started</h4><ul><li><a href="#demo" data-demo>Book a Demo</a></li><li><a href="#pricing">Request Pricing</a></li><li><a href="#contact">Contact Intouch</a></li></ul></div>
   <div><h4>Contact</h4><ul><li><a href="mailto:info@intouchglobaltech.com">info@intouchglobaltech.com</a></li><li><a href="tel:+919942354602">+91 99423 54602</a></li></ul></div>
  </div>
  <div className="fb"><span>© {new Date().getFullYear()} Intouch. All rights reserved.</span><span><Link href="/privacy">Privacy Policy</Link> &nbsp;·&nbsp; <Link href="/terms">Terms &amp; Conditions</Link></span></div>
  <p className="tm">TallyPrime and Tally are trademarks of Tally Solutions Pvt. Ltd. Livekeeping is a trademark of its respective owner. Intouch is an independent business and does not own or develop TallyPrime or Livekeeping. Product interface visuals on this site are illustrative mockups with sample data and are not actual product screenshots.</p>
 </div>
</footer>

<div className="mcta" id="mcta"><button className="btn btn-p btn-block" data-demo>Book a Demo</button></div>
    </>
  );
}
