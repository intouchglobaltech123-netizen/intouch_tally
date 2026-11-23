import ProductTabs from '../ProductTabs';

export default function Features() {
  return (
    <>
<section className="sec alt" id="features">
 <div className="wrap">
  <div className="sh center">
   <p className="eyebrow rv">Product tour</p>
   <h2 className="h2 rv d1">See what smarter business management looks like.</h2>
   <p className="lead rv d2">Explore how TallyPrime helps you stay on top of your numbers, transactions and daily operations.</p>
  </div>
  <ProductTabs />
<p className="note center" style={{ marginTop: 28 }}>Illustrative previews with sample data.</p>
 </div>
</section>
    </>
  );
}
