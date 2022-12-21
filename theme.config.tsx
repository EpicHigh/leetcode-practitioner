import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeetCode Practitioner" />
        <meta
          property="og:url"
          content={`https://leetcode-practitioner.vercel.app${asPath}`}
        />
        <meta name="keywords" content={frontMatter.keywords || ""} />
      </>
    );
  },
  logo: <span>LeetCode Practitioner</span>,
  project: {
    link: "https://github.com/EpicHigh/leetcode-practitioner",
  },
  docsRepositoryBase: "https://github.com/EpicHigh/leetcode-practitioner",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} © Thank you for visiting our JavaScript
        LeetCode practices documentation website.
        <br />
        I hope that you have found this resource helpful in improving your
        coding skills and preparing for technical interviews.
        <br />
        Made with ❤️ by{" "}
        <Link
          className="footer-link"
          href="https://linkedin.com/in/prasit-tongpradit"
          target="_blank"
          rel="noreferrer noopener"
        >
          Prasit Tongpradit
        </Link>{" "}
        and I would like to thank{" "}
        <Link
          className="footer-link"
          href="https://www.youtube.com/@NeetCode"
          target="_blank"
          rel="noreferrer noopener"
        >
          NeetCode
        </Link>{" "}
        for their video resources. Keep practicing and happy coding!
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – LeetCode Practitioner",
    };
  },
};

export default config;
