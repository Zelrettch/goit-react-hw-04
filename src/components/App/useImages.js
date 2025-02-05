import { useEffect, useState } from "react";
import getPage from "../../js/unsplash-api";
import toast from "react-hot-toast";

function scrollDown() {
  window.scrollTo({
    top: document.documentElement.clientHeight / 2 + window.scrollY,
    left: 0,
    behavior: "smooth",
  });
}

export default function useImages() {
  const [config, setConfig] = useState({
    query: "",
    page: 1,
    maxPages: 1,
  });
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("loaded");

  async function addPage(query, page = 1, items = []) {
    setItems([...items]);
    try {
      setStatus("loading");
      const data = await getPage(page, query);
      data.results.length == 0 && toast.error("Nothing found");

      setItems((i) => [...i, ...data.results]);
      setConfig({
        query,
        page,
        maxPages: data.total_pages,
      });
      setStatus("loaded");
    } catch (e) {
      setStatus("error");
      setError(e.message);
    }
  }

  useEffect(() => scrollDown, [items]);

  const hasNext = config.page < config.maxPages;

  function loadNewQuery(query) {
    addPage(query);
  }
  function loadPage() {
    if (hasNext) {
      addPage(config.query, config.page + 1, items);
    }
  }

  return [items, error, status, hasNext, loadNewQuery, loadPage];
}
