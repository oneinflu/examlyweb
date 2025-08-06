import Link from "next/link";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">Exam Prep Not Found</h2>
        <p className="mt-4 text-muted-foreground">
          Sorry, we couldnt find the exam preparation course youre looking for.
        </p>
        <div className="mt-8">
          <Link 
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Return Home
          </Link>
        </div>
      </div>
      <FooterSection />
    </>
  );
}