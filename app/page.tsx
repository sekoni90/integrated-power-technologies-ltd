import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
