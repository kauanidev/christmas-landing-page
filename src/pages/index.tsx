import { Accessories } from "@/components/accessories";
import { Donation } from "@/components/donation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-40">
      <Head>
        <title>Feliz Natal</title>
      </Head>
      
      <Hero />
      <Accessories />
      <Donation />
      <Footer />
    </main>
  )
}
