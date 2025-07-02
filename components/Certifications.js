import React from "react";
import Heading from "./Heading";
import CertificationCard from "@/utils/CertificationCard";
import certifications from "@/constants/certifications";

export default function Certifications() {
  return (
    <>
      <Heading title="Certifications" />
      <p className="text-2xl font-normal mb-4 text-center text-gray-400">Some of my certifications</p>
      <div className="mx-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert,index) => (
            <CertificationCard
              key={cert.id}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
              credentialId={cert.credentialId}
              imageUrl={cert.imageUrl}
              verifyUrl={cert.verifyUrl}
              description={cert.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}