export default function PriceCards() {
  return (
    <>
      <div id="price-cards__container">
        <div id="price-cards__wrapper">
          <section className="price-cards">
            <div className="price-cards__header">
              {/* <h1 className="price-cards__title">
                Simple, transparent pricing
              </h1> */}
              <h5 className="price-cards__description">
                No contracts. No suprise fees.
              </h5>
            </div>

            <div className="price-cards__grid">
              <div className="price-card">
                <div className="card__title-wrapper">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="40"
                      height="40"
                      rx="20"
                      stroke="#1769FF"
                      stroke-width="2"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="22"
                      height="22"
                      rx="11"
                      stroke="#EA4C89"
                      stroke-width="2"
                    />
                  </svg>

                  <h3 className="card__title">Basic</h3>
                </div>
                <h5 className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </h5>
                <div className="card__pricesbox">
                  <h2 className="pricesbox__prices">
                    25 €/mtl.
                    <span className="pricesbox__period">/ month</span>
                  </h2>
                </div>
                <ul className="card-list">
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    2 links
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Own analytics platform
                  </li>
                  <li className="card-list__item card-list__item-disabled">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1.41422L16.5858 0L9 7.58607L1.41422 0L0 1.41422L7.58578 9L0 16.5858L1.41422 18L9 10.4142L16.5858 18L18 16.5858L10.4142 9L18 1.41422Z"
                        fill="#B1B8C9"
                      />
                    </svg>
                    Chat support
                  </li>
                  <li className="card-list__item card-list__item-disabled">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1.41422L16.5858 0L9 7.58607L1.41422 0L0 1.41422L7.58578 9L0 16.5858L1.41422 18L9 10.4142L16.5858 18L18 16.5858L10.4142 9L18 1.41422Z"
                        fill="#B1B8C9"
                      />
                    </svg>
                    Chat support
                  </li>
                  <li className="card-list__item card-list__item-disabled">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1.41422L16.5858 0L9 7.58607L1.41422 0L0 1.41422L7.58578 9L0 16.5858L1.41422 18L9 10.4142L16.5858 18L18 16.5858L10.4142 9L18 1.41422Z"
                        fill="#B1B8C9"
                      />
                    </svg>
                    Mobile application
                  </li>
                  <li className="card-list__item card-list__item-disabled">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1.41422L16.5858 0L9 7.58607L1.41422 0L0 1.41422L7.58578 9L0 16.5858L1.41422 18L9 10.4142L16.5858 18L18 16.5858L10.4142 9L18 1.41422Z"
                        fill="#B1B8C9"
                      />
                    </svg>
                    Unlimited users
                  </li>
                </ul>
                <button className="btn--secondary">Jetzt bestellen</button>
              </div>

              <div className="price-card">
                <div className="card__title-wrapper">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="40"
                      height="40"
                      rx="3"
                      stroke="#1769FF"
                      stroke-width="2"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="22"
                      height="22"
                      rx="3"
                      stroke="#EA4C89"
                      stroke-width="2"
                    />
                  </svg>
                  <h3 className="card__title">Plus</h3>
                  <div className="card__label">Best Value</div>
                </div>
                <h5 className="card__description">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </h5>
                <div className="card__pricesbox">
                  <h2 className="pricesbox__prices">
                    50 €/mtl.
                    <span className="pricesbox__period">/ month</span>
                  </h2>
                </div>
                <ul className="card-list">
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    2 links
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Own analytics platform
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Chat support
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Chat support
                  </li>
                  <li className="card-list__item card-list__item-disabled">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1.41422L16.5858 0L9 7.58607L1.41422 0L0 1.41422L7.58578 9L0 16.5858L1.41422 18L9 10.4142L16.5858 18L18 16.5858L10.4142 9L18 1.41422Z"
                        fill="#B1B8C9"
                      />
                    </svg>
                    Mobile application
                  </li>
                  <li className="card-list__item card-list__item-disabled">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 1.41422L16.5858 0L9 7.58607L1.41422 0L0 1.41422L7.58578 9L0 16.5858L1.41422 18L9 10.4142L16.5858 18L18 16.5858L10.4142 9L18 1.41422Z"
                        fill="#B1B8C9"
                      />
                    </svg>
                    Unlimited users
                  </li>
                </ul>
                <button className="btn--primary">Jetzt bestellen</button>
              </div>

              <div className="price-card enterprise_plan">
                <div className="card__title-wrapper">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.81347 11.0773L21 1.1547L38.1865 11.0773V30.9226L21 40.8453L3.81347 30.9226V11.0773Z"
                      stroke="white"
                      stroke-width="2"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="8"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>

                  <h3 className="card__title">Premium</h3>
                </div>
                <h5 className="card__description">
                  Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                </h5>
                <div className="card__pricesbox">
                  <h2 className="pricesbox__prices">80 €/mtl.</h2>
                </div>
                <ul className="card-list">
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    2 links
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Own analytics platform
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Chat support
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Mobile application
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Unlimited users
                  </li>
                  <li className="card-list__item card-list__item-active">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5516 0.134203L5.71681 10.969L1.44841 6.70058L0 8.14899L5.71681 13.8658L18 1.58261L16.5516 0.134203Z"
                        fill="#EA455F"
                      />
                    </svg>
                    Customize Panel
                  </li>
                </ul>
                <button className="btn--secondary">Jetzt bestellen</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
