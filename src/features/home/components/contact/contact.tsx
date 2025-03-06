import ContactForm from "./contact-form";

import TitleSection from "@/components/common/title-section/title-section";

const Contact = () => {
  return (
    <section id="contact" className="space-y-8 py-8">
      <TitleSection
        title="Contact Me"
        description="Have any project ideas? Feel free to reach out for collaborations, inquiries, or just to say hi! 👋"
      />

      <ContactForm />
    </section>
  );
};

export default Contact;
