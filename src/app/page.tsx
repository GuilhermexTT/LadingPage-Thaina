import { client } from "../sanity/lib/client";
import { proceduresQuery, testimonialsQuery, siteConfigQuery, resultsQuery } from "../sanity/lib/queries";
import HomeContent from "../components/HomeContent";

export const revalidate = 0; // Disable static rendering caching for always up-to-date data

export default async function Home() {
  // Fetch CMS data on the server side (bypasses browser CORS origins limitations completely)
  const [cmsProcedures, cmsTestimonials, cmsResults, cmsConfig] = await Promise.all([
    client.fetch(proceduresQuery),
    client.fetch(testimonialsQuery),
    client.fetch(resultsQuery),
    client.fetch(siteConfigQuery)
  ]);

  return (
    <HomeContent
      initialProcedures={cmsProcedures}
      initialTestimonials={cmsTestimonials}
      initialResults={cmsResults}
      initialSiteConfig={cmsConfig}
    />
  );
}