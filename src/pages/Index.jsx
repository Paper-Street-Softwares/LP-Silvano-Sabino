import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import Maps from "../components/sections/Maps";
import TeamCards from "../components/sections/TeamCards";
import BlogPosts from "../components/sections/BlogPosts";
import CtaSecondary from "../components/sections/CtaSecondary";

export default function Index() {
  // Altere esta constante para: 'default', 'light' ou 'dark'
  const colorMode = "default";

  return (
    <>
      <Navbar colorMode={colorMode} />

      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />
      <Features
        colorMode={colorMode}
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      <About modal={true} showGallery={false} colorMode={colorMode} />
      <AboutInstagram colorMode={colorMode} socialPrint={true} />
      <CtaSecondary />
      <Steps colorMode={colorMode} />
      {/* <BlogPosts /> */}
      <Faq colorMode={colorMode} />
      {/* <Maps colorMode={colorMode} /> */}
      <FooterSocial
        colorMode={colorMode}
        addresSecundario={false}
        phoneTerciario={false}
        expedientesecond={false}
        addres={false}
        obs={false}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
