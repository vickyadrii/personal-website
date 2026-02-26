import SocialMedia from "@/components/common/social-media/social-media";

const HeroSection = () => {
  return (
    <section className="space-y-4 md:pb-32 md:pt-60 pb-14">
      <h2 className="md:text-[32px] text-2xl text-primary-blue-500 font-caveat font-light">Hi, I&apos;m Vicky!</h2>
      <h1 className="gradient-text md:text-5xl text-3xl md:h-14 inline-block font-bold">Software Engineer</h1>

      <p className="text-primary-dark-500 md:text-base text-sm md:leading-8 leading-6">
        A fullstack developer heavy on the JavaScript environment, building web and mobile apps <br /> with React, Vue,
        Next.js, and Nest.js. Recently, I&apos;ve been having fun building with AWS.
      </p>
      <SocialMedia />
    </section>
  );
};

export default HeroSection;
