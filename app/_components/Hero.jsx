import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="lg:grid lg:h-screen lg:place-content-center bg-slate-50">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Understand user flow and
              <strong className="text-primary"> increase </strong>
              conversions
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
