import PriceCards from '../PriceCards/PriceCards';

export default function PriceSection() {
  return (
    <>
      <div className="container" id="price-section__container">
        <div className="wrapper" id="price-section__wrapper">
          <h1>Transparente Preise</h1>
          <PriceCards />
        </div>
      </div>
    </>
  );
}
