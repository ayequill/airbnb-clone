import Card from './Card'
import head from '../assets/img/photo-grid.png'

export function Hero () {
    return (
        <main>
            <section className='sec-1'>
                <img src={head} alt="photo grid" />
                <div className="herotext">
                <h3>Online Experience</h3>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </section>
            <Card />
        </main>
    )
}