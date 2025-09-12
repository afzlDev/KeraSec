import React from "react"
import './aboutus.css'
import Afzal from '../../../public/mineImg.png'
import Afreed from '../../../public/afreed.jpg'
import Image from "next/image"

export default function AboutUs() {
    return (
        <div className="a_root">

            <div className="a_cardsWrapper">
                <div className="a_card">
                    <Image src={Afzal} alt="Afzal's image" fill className="a_img" />
                    <div className="a_overlay">
                        <div className="a_cardtitle">Afzal</div>
                        <div className="a_carddesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>

                <div className="a_card">
                    <Image src={Afreed} alt="Afreed's image" fill className="a_img" />
                    <div className="a_overlay">
                        <div className="a_cardtitle">Afreed</div>
                        <div className="a_carddesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
