import image from '../assets/img/cardimg.png'
export default function Card (){
    return(
        <section className='sec-2'>
            <div className="card">
                <div className='card-img'>
                <img src={image} alt="" />
                <div className='card-status'>
                    <p>SOLD OUT</p>
                </div>
                </div>
                <div className="card-details">
                    <p className='rating'><i class="bi bi-star-fill"></i> 5.0 <span>(6)⸰USA</span></p>
                    <p className='topic'>Life lessons with Katie Zaferes</p>
                    <p className='price'><strong>From $136</strong> / person</p>
                </div>
            </div>
        </section>
    )
}