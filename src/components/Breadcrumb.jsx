"use client";
import { CaretRight, House } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Breadcrumb({ pages }) {
  return (
    <nav
      className="hidden lg:block sticky py-1.5 z-20 border-b top-16 bg-gray-50"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="flex items-center max-w-6xl px-4 mx-auto space-x-2 2xl:max-w-7xl"
      >
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <House className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <CaretRight
                className="flex-shrink-0 w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
              <Link
                href={page.href}
                className={`ml-2 text-sm ${
                  page.current
                    ? "cursor-not-allowed"
                    : "hover:text-brand-lightblue"
                }`}
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
