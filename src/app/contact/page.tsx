import type { Metadata } from "next";

import { ContactLinks } from "@/components/ContactLinks";
import { PageContainer } from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact and professional links for Nijat Taghizade.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <ContactLinks />
    </PageContainer>
  );
}
