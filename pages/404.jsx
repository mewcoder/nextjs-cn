export default function Custom404() {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div class="h-screen flex flex-col items-center justify-center">
      <div>
        页面不存在! 请前往
        <a href={`https://nextjs.org/${path}`} className="underline mx-1">
          next.org
        </a>
        查看
      </div>
    </div>
  );
}
