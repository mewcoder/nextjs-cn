export default function Custom404() {
  function handleCick() {
    const path = typeof window !== "undefined" ? window.location.pathname : "docs";
    window.open(`https://nextjs.org/${path}`);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        页面不存在! 请前往
        <span className="underline mx-1 cursor-pointer" onClick={handleCick}>
          next.org
        </span>
        查看
      </div>
    </div>
  );
}
