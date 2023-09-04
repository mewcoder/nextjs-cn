const dayjs = require("dayjs");
import { useConfig } from "nextra-theme-docs";
import Image from "./components/image";
import { Callout } from "nextra/components";

// 翻译进度 /文档总数
const percentage = Math.round((6 / 272) * 100);

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    fill="none"
    viewBox="0 0 394 80"
  >
    <path
      fill="currentColor"
      d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
    />
    <path
      fill="currentColor"
      d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
    />
  </svg>
);

function OriginLink() {
  const { frontMatter } = useConfig();

  return (
    <>
      {frontMatter.offical && (
        <a
          href={frontMatter.offical}
          target="_blank"
          className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50 cursor-pointer"
        >
          原文地址 →
        </a>
      )}
      {frontMatter.origin && (
        <a
          href={frontMatter.origin}
          target="_blank"
          className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50 cursor-pointer"
        >
          翻译版本 →
        </a>
      )}
    </>
  );
}

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // eslint-disable-next-line
  logo,
  project: {
    link: "https://github.com/mewcoder/nextjs-cn",
  },
  docsRepositoryBase: "https://github.com/mewcoder/nextjs-cn/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: `%s | Next.js 中文文档`,
    };
  },
  footer: {
    text: (
      <div>
        <p>
          本站与 Vercel /{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            style={{ margin: "0 4px" }}
          >
            nextjs.org
          </a>
          无关，文档翻译自
          <a
            href="https://github.com/vercel/next.js/tree/canary/docs/"
            target="_blank"
            style={{ margin: "0 4px" }}
          >
            官方开源文档
          </a>
          ，仅供学习交流。
        </p>
        Next.js 中文文档
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0"
          target="_blank"
          style={{ margin: "0 4px" }}
        >
          CC BY-NC 4.0
        </a>
        <a href="https://github.com/mewcoder" target="_blank">
          © mewcoder
        </a>
      </div>
    ),
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    title: "本页目录",
    backToTop: true,
    extraContent: OriginLink,
  },
  search: {
    placeholder: "搜索",
  },
  editLink: {
    text: "编辑本页 →",
  },
  feedback: {
    content: "问题反馈 →",
  },
  gitTimestamp: (props) => (
    <span>
      {`最后更新于 ` + dayjs(props.timestamp).format("YYYY/MM/DD HH:mm:ss")}
    </span>
  ),
  themeSwitch: {
    useOptions() {
      return {
        light: "亮色",
        dark: "暗黑",
        system: "跟随系统",
      };
    },
  },
  components: {
    Image,
    Callout,
  },
};
