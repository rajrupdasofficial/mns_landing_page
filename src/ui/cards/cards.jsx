import "../../../public/assets/css/cards.css";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="featurecards">
        <h6 className="cardtext">Easy Use</h6>
        <p className="callp">
          Using this application is very simple for all people at any ages.
        </p>
      </div>
      <div className="featurecards">
        <h6 className="cardtext">24/7 Support</h6>
        <p className="callp">
          Access to support services on all days of the week at all hours.
        </p>
      </div>
      <div className="featurecards">
        <h6 className="cardtext">Quick Access</h6>
        <p className="callp">
          Quick access to the doctors and medical services you want.
        </p>
      </div>
    </div>
  );
};

export default Cards;
