//Next imports
import { useRouter } from 'next/router';

import EnHomePage from '@/pages/en/enHomePage';
import EsHomePage from '@/pages/es/esHomePage';

export default function HomePage() {

  const router = useRouter();
  const { locale } = router;

  return (
    <>
      {locale === 'en' && <EnHomePage />}
      {locale === 'es' && <EsHomePage />}
    </>
  )
}
