
import "./Home.css"
import Footer from './Footer'
import { Link, useNavigate } from "react-router-dom"


export function Home() {

    const navigate = useNavigate()

    return (
        <>
            <div className="bg-wall">
                <img style={{ cursor: "pointer", }} onClick={() => navigate(`/productListing`)} src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/48ed05ca-ace8-4375-8805-8910a287cc92/jordan.png" target="_self" alt="shoes" />
                <p style={{ color: "rgb(17, 17, 17)" }}>‘Full Moon’</p>
                <h1 style={{ color: "rgb(17, 17, 17)" }}>ZION 2</h1>
                <p style={{ color: "rgb(17, 17, 17)", fontSize: "400", fontFamily: "NeueHaasGroteskText W02,Helvetica,Arial,sans-serif" }}>Zion loves the city of New Orleans. After all, it’s where he got his start—
                    <br />
                    and where he continues to shine. Celebrate his journey with this edition of
                    <br />
                    the Zion 2, inspired by the moon’s biggest and brightest phase.
                </p>
                <div style={{ margin: "24px" }}>
                    <Link id="btn-Shop" to="/ProductListing">Shop</Link>
                </div>
            </div>
            <section>

                <div id="product-div">
                    <h2 id="text-color">IN THE SPOTLIGHT</h2>
                    <div className="flex-container">
                        <div className="item">
                            <img style={{ cursor: "pointer", }} onClick={() => navigate(`/productListing`)} src="https://i.pinimg.com/originals/30/33/32/30333250ca9f00256da3b520a188dc60.jpg" alt="shoes" />
                            <h1>Air Jordan Low SE</h1>
                            <h3>KID'S SHOES</h3>
                        </div>
                        <div className="item">
                            <img style={{ cursor: "pointer" }} onClick={() => navigate(`/productListing`)} src="https://sneekerss.de/wp-content/uploads/2020/08/IMG_7835.jpeg" alt="shoes" />
                            <h1>Air Jordan Low SE</h1>
                            <h3>MEN'S SHOES</h3>
                        </div>
                        <div className="item">
                            <img style={{ cursor: "pointer" }} onClick={() => navigate(`/productListing`)} src="https://hypebeast.com/image/2020/03/jord-rect-1.jpg" alt="shoes" />
                            <h1>Air Jordan Low SE</h1>
                            <h3>Women's Shoes</h3>

                        </div>
                    </div>
                </div>
                <Footer />

            </section>
        </>
    )
}