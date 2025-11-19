import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container relative">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1 text-sm">
          <span className="hidden sm:inline">Now available</span>
          <span className="inline sm:hidden">shadcn CLI 3.0 available</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1] text-balance">
          <span className="text-red-500">V</span>
          <span className="text-yellow-400">K</span>
          <span className="text-blue-500">U </span>
          ClickSolve
          <br />
          Smart solutions for students
        </h1>
        <p className="max-w-[750px] text-center text-base text-muted-foreground sm:text-lg md:text-xl text-balance">
          A set of beautifully designed components that you can customize,
          extend, and build on. Start here then make it your own. Open Source.
          Open Code.
        </p>
        <div className="flex w-full flex-col items-center justify-center space-y-2 py-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:pb-10">
          <Button size="lg" className="cursor-pointer w-full sm:w-auto ">
            <Link href="/auth/login">Get Started</Link>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md"
          >
            View Documents
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
