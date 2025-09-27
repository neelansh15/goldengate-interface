import React, { useEffect, useRef, memo } from "react";

function TickerTape() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            },
            {
              "proName": "BINANCE:BTCUSDT",
              "title": "Bitcoin"
            },
            {
              "proName": "BINANCE:SOLUSDT",
              "title": "Solana"
            },
            {
              "proName": "BINANCE:BNBUSD",
              "title": "Binance"
            },
            {
              "proName": "KRAKEN:PYUSDUSD",
              "title": "PayPal USD"
            },
            {
              "proName": "BINANCE:POLUSDT",
              "title": "Polygon"
            }
          ],
          "colorTheme": "dark",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "displayMode": "adaptive"
        }`;
    container.current?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Ticker tape</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div> */}
    </div>
  );
}

export default memo(TickerTape);
