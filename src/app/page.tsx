import Image from 'next/image';
import Button from '../components/Layout/BtnComponent';
import IntroSection from '../components/Sections/IntroSection';
import ProductSection from '../components/Sections/ProductSection';
import PriceSection from '../components/Sections/PriceSection';
import ContactSection from '../components/Sections/ContactSection';

export default function Home() {
  return (
    <>
      <IntroSection />
      <ProductSection />
      <PriceSection />
      <ContactSection />

      {/* <Button variant="primary" size="large" type="submit">
        Button Primary
      </Button>

      <Button variant="secondary" size="large" type="submit">
        Button Secondary
      </Button>

      <Button variant="warning" size="small" type="submit">
        Button Warning
      </Button>

      <Button variant="success" size="small" type="submit">
        Button Success
      </Button> */}
    </>
  );
}
