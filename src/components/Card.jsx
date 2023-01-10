

export default function Card (props){
    console.log(props.country)
    
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.country === 'Online'){
        badgeText = 'ONLINE'
    }else badgeText = props.country
    return(
            <div className="card">
                <div className='card-img'>
                <img src={props.img} alt="" />
                 <div className='card-status'>
                    <p>{badgeText}</p>
                </div>
                </div>
                <div className="card-details">
                    <p className='rating'><i class="bi bi-star-fill"></i> {props.rating} <span>({props.reviewCount})⸰{props.country}</span></p>
                    <p className='title'>{props.title}</p>
                    <p className='price'><strong>From ${props.price}</strong> / person</p>
                </div>
            </div>
    )
}