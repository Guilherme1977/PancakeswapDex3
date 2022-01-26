import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function OurPartner() {

  const partners = [
    { src: "/images/partnerslogos/coinmarketcap.png", title: "coin market cap", url: "https://coinmarketcap.com/currencies/intergalactic-cockroach/" },
    { src: "/images/partnerslogos/coingecko.png", title: "coin gecko", url: "https://www.coingecko.com/en/coins/intergalactic-cockroach" },
    { src: "/images/partnerslogos/dextools.png", title: "dex tools", url: "https://www.dextools.io/app/bsc/pair-explorer/0x4c8bf76ab3bb40b91b4a3fbe1c0cab070903d0a3" },
    { src: "/images/partnerslogos/PanckeSwap.png", title: "Pancke Swap", url: "https://pancakeswap.finance/swap?outputCurrency=0x8d672014fb107cb409dccd9042dda3b97313f4c3" },
    { src: "/images/partnerslogos/coinmarketcap.png", title: "coin market cap", url: "https://coinmarketcap.com/currencies/intergalactic-cockroach/" },
    { src: "/images/partnerslogos/nomics.png", title: "nomics", url: "https://nomics.com/assets/icc2-intergalactic-cockroach" },
    { src: "/images/partnerslogos/coihunt.png", title: "coihunt", url: "https://coinhunt.cc/coin/1818279544" },
    { src: "/images/partnerslogos/coinscope.png", title: "coinscope", url: "https://www.coinscope.co/coin/icc?" },
    { src: "/images/partnerslogos/coinmarketcap.png", title: "coin market cap", url: "https://coinmarketcap.com/currencies/intergalactic-cockroach/" },
    { src: "/images/partnerslogos/Coinhunters.png", title: "Coinhunters", url: "https://coinhunters.cc/tokens/IntergalacticCockroach" },
    { src: "/images/partnerslogos/coinmooner.png", title: "coinmooner", url: "https://coinmooner.com/coin/9681%F0%9F%9A%80" },
    { src: "/images/partnerslogos/coinsniper.png", title: "coinsniper", url: "https://coinsniper.net/coin/20540" },
    { src: "/images/partnerslogos/coinmarketcap.png", title: "coin market cap", url: "https://coinmarketcap.com/currencies/intergalactic-cockroach/" },
    { src: "/images/partnerslogos/coinvote.png", title: "coinvote", url: "https://coinvote.cc/coin/Intergalactic-Cockroach" },
    { src: "/images/partnerslogos/Gemfinder.png", title: "Gemfinder", url: "https://gemfinder.cc/gem/6297" },
    { src: "/images/partnerslogos/poocoin.png", title: "poocoin", url: "https://poocoin.app/tokens/0x8d672014fb107cb409dccd9042dda3b97313f4c3" },
    { src: "/images/partnerslogos/Watcher.Guru.png", title: "Watcher.Guru", url: "https://watcher.guru/coin/intergalactic-cockroach" },
    { src: "/images/partnerslogos/coindiscovery.png", title: "coin discovery", url: "https://coindiscovery.app/coin/intergalactic-cockroach" },
    // { src: "/images/partnerslogos/cntoken.io.png", title: "cntoken.io", url: "https://cntoken.io/coin/17013" },
    // { src: "/images/partnerslogos/cointoplist.png", title: "coin top list", url: "https://cointoplist.net/coin/intergalactic-cockroach" }
  ]

  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType }
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <button type='button' onClick={() => onClick()} />;
  // };

  return (
    <div style={{marginTop: "30px"}}>
      <div className="text-center">
        <h1 className="title text-uppercase">
          Our <span>Partners</span>
        </h1>
      </div>
      <Carousel
        // arrows={false}
        // renderButtonGroupOutside={true}
        // customRightArrow={<CustomRightArrow onClick />}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {partners.map((each, index) => (
          <a  href={each.url} target="_blank" rel="noreferrer" key={`partners${each}`}>
            <img src={each.src} alt={each.title} style={{height: "50px"}} />
          </a>
        ))}
      </Carousel>
    </div>
  );
}