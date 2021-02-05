console.table(
    [...document.querySelectorAll(".job-search-result")].map(({ children }) => ({
      Job_Title: children[0].querySelector("h3").innerText,
      Location: children[0].querySelector("p").innerText,
      Job_Url: children[1].querySelector("a").href,
    }))
  );
