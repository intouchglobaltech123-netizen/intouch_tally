import FaqAccordion from '../FaqAccordion';

export default function Faqs() {
  return (
    <>
<section className="sec" id="faqs">
 <div className="wrap faq-g">
  <div><p className="eyebrow rv">FAQs</p><h2 className="h2 rv d1">Everything you want to know.</h2><p className="lead rv d2">Can't find what you're looking for? <a href="#contact" className="link">Contact Intouch</a>.</p></div>
  <FaqAccordion />
 </div>
</section>
    </>
  );
}
