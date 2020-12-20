import "./SpaceClose.css"
import vklIMG from "../../img/social/vk.png"
import faceIMG from "../../img/social/face.png"
import twitIMG from "../../img/social/twit.png"
import youtubeIMG from "../../img/social/youtube.png"
import twitchIMG from "../../img/social/twitch.png"



export default function SpaceClose() {


    return (
        <div className="SpaceClose">
            <div className="container">

                <div className="SpaceClose_txt">
                    <p className="SpaceClose_p1">Мы делаем космос ближе</p>
                    <p className="SpaceClose_p2">RUS TEC реализирует частную программу по <br/>
                        глобальному исследованию и освоению<br/>
                        космического пространства Star Citizen.
                    </p>
                    <p className="SpaceClose_p3">Связь с нами:
                        <div className="img_contact">

                            <a href="https://discord.gg/G6pzpbB">
                                <img className="SpaceClose_p3_img"
                                     src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" alt=""/>
                            </a>

                            <a href="https://vk.com/rus_tec">
                                <img className={vklIMG}
                                     src="https://cdn.worldvectorlogo.com/logos/vk-1.svg" alt=""/>
                            </a>

                            <a href="https://twitter.com/RUSTEC_SC">
                                <img className={twitIMG}
                                     src="https://louisville.edu/philosophy/images/icons-for-footer/twittericon2.png/image"
                                     alt=""/>
                            </a>

                            <a href="https://www.facebook.com/rustecsc">
                                <img className={faceIMG}
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/768px-Facebook_icon.svg.png"
                                     alt=""/>
                            </a>

                            <a href="https://www.youtube.com/channel/UC1jgoZKLzw2KIkstSpg4gJw">
                                <img className=""
                                     src={youtubeIMG} alt=""/>
                            </a>

                            <a href="https://www.twitch.tv/rustec_sc">
                                <img className=""
                                     src={twitchIMG}
                                     alt=""/>
                            </a>


                        </div>
                    </p>
                </div>


            </div>

        </div>
    )
}