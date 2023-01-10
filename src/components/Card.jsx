export default function Card(props) {
  console.log(props);

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else badgeText = props.location;
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.coverImg} alt="" />
        <div className="card-status">
          <p>{badgeText}</p>
        </div>
      </div>
      <div className="card-details">
        <p className="rating">
          <i class="bi bi-star-fill"></i> {props.stats.rating}{" "}
          <span>
            ({props.stats.reviewCount})⸰{props.location}
          </span>
        </p>
        <p className="title">{props.title}</p>
        <p className="price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
