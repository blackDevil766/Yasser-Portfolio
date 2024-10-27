import React from "react";
import NavBar from "../../../navBar/Nav";
import Footer from "../../10Footer/Footer";

function SecProject() {
    return (
        <div className="firstProject-contianer">
            <NavBar />
            <div className="projects-container">
                <video loading="lazy" className="vid" autoPlay muted loop controls >
                    <source autoPlay type="video/mp4" src="\img\GamesShortVideos\RevengesShortVideo.mp4" />
                </video>

                <div className="project-details">
                    <h1 className="project-details-header">revenge</h1>
                    <p>
                        is a game demo designed to showcase my skills as a game programmer. The player awakens in a broken elevator deep underground, with no clear escape route. As they explore, they find two weapons: a pistol for close encounters and a unique rock-thrower, capable of grabbing and launching rocks at enemies.

                        The real challenge begins when the player enters a mysterious room and faces a strange monster with dynamic combat abilities. The monster can dash at the player or hurl rocks from a distance, requiring quick reflexes and strategic use of cover. When the monster's health drops to half, the battle evolves—he flies into the air, attacking with three rocks at a time, telegraphing his moves by making the rocks vibrate on the ground. As the player dodges, they must anticipate the attacks and return fire.

                        In the final phase, with his health at a quarter, the monster forms a fiery shield, blocking all damage. To defeat him, the player must use explosives hidden in the room. By attaching explosives to rocks, and launching them with the rock thrower, the player can break the shield and land the finishing blow.

                        Once the monster is defeated, the player reaches a working elevator, and the demo concludes.
                    </p>
                </div>
                <div className="achivement-container">
                    <div className="achivement-details">
                        <img loading="lazy" src="\img\yasser-portfolio-images\Revenge-Screenshots\rev1.png" alt="" />
                        <p>
                            Designed and implemented the weapon mechanics, including shooting and grappling.
                            Grappling weapon: Can grap rocks, charge, and throw them
                        </p>
                    </div>
                </div>


                <div className="achivement-container">
                    <div className="achivement-details">
                        <div className="para-project-container">

                            <h2 className="achivement-header">
                                Developing the boss AI behavior: The boss has three distinct stages:
                            </h2>

                            <p> <b style={{ color: "#fff" }}> Ground Stage: </b> In this phase, the boss can dash toward the player and perform melee attacks. Additionally, he has a long-range attack where he hurls rocks at the player.</p>
                        </div>
                        <img loading="lazy" src="\img\yasser-portfolio-images\Revenge-Screenshots\rev3.png" alt="" />
                    </div>
                </div>

                <div className="achivement-container">
                    <div className="achivement-details">
                        <img loading="lazy" src="\img\yasser-portfolio-images\Revenge-Screenshots\rev5.png" alt="" />
                        <p>
                        <b style={{ color: "#fff" }}>Floating Stage:</b> While floating, the boss has two variations of rock throws. He can either pick up nearby rocks and throw them, or he can telekinetically lift rocks from the ground.
                            The player can anticipate this second attack because the rocks will vibrate on the ground before being launched.
                        </p>
                    </div>
                </div>


                <div className="achivement-container">
                    <div className="achivement-details">
                        <div className="para-project-container">

                            <p>
                                <b style={{ color: "#fff" }}> Shield Stage: </b> The boss generates a protective fire shield around himself, which can only be broken by heavy damage.
                                To overcome this,  <b style={{ color: "#fff" }} > the player must stick explosives to a rock and throw it at the boss to shatter the shield. </b>
                            </p>
                        </div>
                        <img loading="lazy" src="\img\yasser-portfolio-images\Revenge-Screenshots\rev7.png" alt="" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SecProject;