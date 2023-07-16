import Image from 'next/image';
import Button from '@/components/Buttons/BtnComponent';

export default function Home() {
  return (
    <>
      <h1>Next.js 13 - Boilerplate</h1>

      <Button variant="primary" size="large" type="submit">
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
      </Button>
    </>
  );
}
