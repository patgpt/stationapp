import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

const DUMMY_TEST = [
  {
    id: 1,
    host: "test",
    topic: "test",
    when: "2021-10-10",
    link: "https://www.twitter.com", // link to the show
  },
  {
    id: 2,
    host: "test2",
    topic: "test2",
    when: "2021-12-10",
    link: "https://www.twitter.com", // link to the show
  },
];

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hello Fixxer
          <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Upcoming Spaces
        </h2>
        <div className="grid gap-6 max-w-[700px]">
          {DUMMY_TEST.map((show) => (
            <div
              key={show.id}
              className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-400 to-pink-400"
            >
              <h2 className="text-xl font-semibold text-white">Host: {show.host}</h2>
              <p className="text-white">Topic: {show.topic}</p>
              <p className="text-white">When: {show.when}</p>
              {show.link && (
                <a
                  href={show.link}
                  className="text-white underline hover:text-opacity-80 transition-colors"
                >
                  Join the Show
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
