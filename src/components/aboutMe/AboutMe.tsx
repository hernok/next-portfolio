import React from "react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div>
      <h3 className=" text-gray-800 text-2xl py-1 lg:text-3xl dark:text-gray-50">
        Om meg
      </h3>
      <p className="text-gray-800 text-sm py-2 md:text-xl dark:text-gray-200">
        Med erfaring i React, Next.js, og en nyoppdaget lidenskap for Tailwind,
        er jeg klar for å ta fatt på de reelle utfordringene som
        utviklerverdenen byr på. Jeg støtte på utfordringer med JavaScript i
        starten av utdannelsen, men fikk god forståelse for det etter hvert. Jeg
        har også erfaring med SQLite3 samt Node.js, CMS og nettstedsdeployment,
        demonstrert ved prosjektet{" "}
        <Link
          className="text-purple-600 hover:text-purple-900 underline cursor-pointer dark:text-teal-400 dark:hover:text-purple-500"
          href="https://www.sagafarmann.com/"
        >
          SagaFarmann.com
        </Link>
        .
      </p>
      <p className="text-gray-800 text-sm  py-2 md:text-xl dark:text-gray-200">
        Jeg er på utkikk etter en rolle som frontend- eller webutvikler, og et
        godt arbeidsmiljø hvor samarbeid og kunnskapsdeling står i fokus. Jeg
        ser frem til muligheten til å bidra med mine tekniske ferdigheter og til
        å vokse som utvikler i et team som verdsetter kontinuerlig læring.
      </p>
    </div>
  );
};

export default AboutMe;
