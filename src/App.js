import React, { useState } from "react";

const fetchOnigiriSale = (
  url = "https://asia-northeast1-onigiri-project-d4cc4.cloudfunctions.net/api"
) =>
  fetch(url, {
    mode: "cors"
  });

function App() {
  const [saleList, setSaleList] = useState([]);
  const onigiriSaleList = saleList.map(sale => {
    const { pageTitle, company, url } = sale;

    return (
      <div keys={company}>
        <span>会社名 : {company}</span>
        <div>
          <b>{pageTitle}</b>
        </div>
        <a target="_blank" href={url}>
          {url}
        </a>
      </div>
    );
  });
  return (
    <div>
      <span>おにぎりボタン</span>
      <button
        onClick={async () => {
          try {
            const response = await fetchOnigiriSale();
            const onigirsale = await response.json();
            setSaleList(onigirsale.isArray || onigirsale);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        🍙
      </button>
      <button onClick={() => setSaleList([])}>🔥</button>
      <div>{onigiriSaleList}</div>
    </div>
  );
}

export default App;
