import Hero from "./Hero";
import ProductSection from "./ProductSection";
import Universe from "./Universe";

const products = [
  {
    image: "/images/kite.png",
    title: "Kite",
    description:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, elegant UI, and more. Experience seamless investing across desktop, Android, and iOS.",
    reverse: false,
    showButtons: true,
  },
  {
    image: "/images/console.png",
    title: "Console",
    description:
      "The central dashboard for your Zerodha account. Track investments, analyze trades, monitor portfolio performance, and generate tax reports.",
    reverse: true,
    showButtons: false,
  },
  {
    image: "/images/coin.png",
    title: "Coin",
    description:
      "Invest in direct mutual funds without commission. Build long-term wealth using one of India's most trusted investment platforms.",
    reverse: false,
    showButtons: true,
  },
  {
    image: "/images/kiteconnect.png",
    title: "Kite Connect API",
    description:
      "Powerful APIs for developers, startups, and fintech companies to build investment products and trading platforms.",
    reverse: true,
    showButtons: false,
  },
  {
    image: "/images/varsity.png",
    title: "Varsity Mobile",
    description:
      "An easy-to-understand learning platform that teaches stock markets through bite-sized lessons and beautiful illustrations.",
    reverse: false,
    showButtons: true,
  },
];

function ProductPage() {
  return (
    <>
      <Hero />

      {products.map((product) => (
        <ProductSection
          key={product.title}
          image={product.image}
          title={product.title}
          description={product.description}
          reverse={product.reverse}
          showButtons={product.showButtons}
        />
      ))}

      <div className="container text-center py-5">
        <p className="fs-5 text-muted">
          Want to know more about our technology stack?
        </p>

        <a
          href="https://zerodha.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="section-link"
        >
          Visit Zerodha.tech
          <i className="fa-solid fa-arrow-right-long ms-2"></i>
        </a>
      </div>

      <Universe />
    </>
  );
}

export default ProductPage;