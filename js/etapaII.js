{
  jobs: [...document.querySelectorAll(".job-search-result")].map(
    ({ children }) => ({
      title: children[0].querySelector("h3").innerText,
      location: children[0].querySelector("p").innerText,
      url: children[1].querySelector("a").href,
    })
  );
}
