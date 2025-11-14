'use client';

import { useEffect, useRef } from "react";

type TimelineEntry = {
  title: string;
  company: string;
  timeframe: string;
  description: string;
  stack: string[];
  impact: string;
};

const timelineEntries: TimelineEntry[] = [
  {
    title: "Frontend Developer",
    company: "NovaPath Analytics",
    timeframe: "2023 — Present",
    description:
      "Lead UI engineer on a customer segmentation dashboard leveraging React Server Components and graph visualizations.",
    stack: ["React 19", "Next.js", "Tailwind", "Cypress"],
    impact:
      "Improved retention insights velocity by 38% with real-time cohort drilldowns and report automation.",
  },
  {
    title: "UI Engineer",
    company: "Lumi Health",
    timeframe: "2022 — 2023",
    description:
      "Shipped Angular-based clinician portal, driven by design tokens and reusable diagnosis workflows.",
    stack: ["Angular 17", "RxJS", "NgRx", "Storybook"],
    impact:
      "Cut onboarding defects by 52% through live form validation, role-based dashboards, and audit-ready exports.",
  },
  {
    title: "Associate Frontend Developer",
    company: "Brightline Studio",
    timeframe: "2021 — 2022",
    description:
      "Built component library powering 12 client microsites with consistent UX and rapid iteration.",
    stack: ["React", "Angular", "Sass", "Jest"],
    impact:
      "Reduced feature delivery time from 3 weeks to 9 days by unifying shared patterns and accessibility reviews.",
  },
];

declare global {
  interface Window {
    angular: any;
    __averyAngularBootstrapped?: boolean;
  }
}

export default function AngularExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const intervalId = window.setInterval(() => {
      const angular = window.angular;
      const container = containerRef.current;

      if (!angular || !container || window.__averyAngularBootstrapped) {
        if (window.__averyAngularBootstrapped) {
          window.clearInterval(intervalId);
        }
        return;
      }

      let module: any;

      try {
        module = angular.module("experienceApp");
      } catch (error) {
        module = angular.module("experienceApp", []);
      }

      module.controller("TimelineController", [
        "$scope",
        function ($scope: any) {
          $scope.timeline = timelineEntries;
          $scope.focusIndex = 0;

          $scope.setFocus = (index: number) => {
            $scope.focusIndex = index;
          };

          $scope.isFocused = (index: number) => $scope.focusIndex === index;
        },
      ]);

      angular.bootstrap(container, ["experienceApp"]);
      container.classList.add("glass-panel");
      window.__averyAngularBootstrapped = true;
      window.clearInterval(intervalId);
    }, 60);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="mt-16 lg:mt-20">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Angular Interactive
          </p>
          <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
            Timeline crafted with Angular
          </h2>
        </div>
        <p className="max-w-lg text-sm text-slate-400 lg:text-right">
          Built as an AngularJS micro-widget and mounted inside this React
          application to highlight framework fluency and micro-frontend
          integration.
        </p>
      </header>
      <div
        ref={containerRef}
        className="mt-8 rounded-3xl border border-slate-700/40 bg-slate-900/40 p-6 lg:p-10"
      >
        <div
          data-ng-controller="TimelineController"
          className="flex flex-col gap-8 lg:flex-row"
        >
          <aside className="flex-1 space-y-3">
            <button
              type="button"
              className="w-full rounded-2xl border border-slate-700/50 bg-slate-900/70 px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              data-ng-repeat="entry in timeline track by $index"
              data-ng-class="{'border-sky-400/80 bg-sky-950/60': isFocused($index)}"
              data-ng-click="setFocus($index)"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
                <span data-ng-bind="entry.company"></span>
                <span data-ng-bind="entry.timeframe"></span>
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-100">
                <span data-ng-bind="entry.title"></span>
              </div>
            </button>
          </aside>
          <article className="flex-1 rounded-2xl border border-slate-700/40 bg-slate-950/40 p-6">
            <div data-ng-repeat="entry in timeline track by $index" data-ng-show="isFocused($index)">
              <h3 className="text-2xl font-semibold text-slate-50">
                <span data-ng-bind="entry.title"></span>
              </h3>
              <p className="mt-1 text-sm uppercase tracking-[0.28em] text-slate-400">
                <span data-ng-bind="entry.company"></span>
                <span className="px-2">&middot;</span>
                <span data-ng-bind="entry.timeframe"></span>
              </p>
              <p
                className="mt-4 text-base leading-relaxed text-slate-300"
                data-ng-bind="entry.description"
              ></p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Core Stack
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                <li
                  className="rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200"
                  data-ng-repeat="tech in entry.stack track by tech"
                >
                  <span data-ng-bind="tech"></span>
                </li>
              </ul>
              <div className="mt-6 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6 text-sm leading-relaxed text-slate-100">
                <span className="font-semibold text-sky-300">Impact · </span>
                <span data-ng-bind="entry.impact"></span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
