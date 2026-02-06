// this code was designed to create "Copy" button for code blocks, currently not in usage
// to use this code, paste the respective css code in extra.css and add the following 2 lines to mkdocs.yml:
//extra_javascript:
//  - assets/tw-copy.js

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tw-codeblock--with-copy").forEach((block) => {
    const btn = block.querySelector(".tw-copy");
    const code = block.querySelector("pre > code");
    if (!btn || !code) return;

    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        btn.classList.add("is-copied");
        setTimeout(() => btn.classList.remove("is-copied"), 1200);
      } catch (e) {
        // ignore
      }
    });
  });
});
