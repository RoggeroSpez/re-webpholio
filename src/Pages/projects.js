import React from "react";
import './card.css';
const Projects = () => {
    return(
        <div>
            <h3>Projects</h3>
        <div className="projectCard">
            <ul>
                <li>
                    <div class="card" id="mg">
                        <img src="https://scitechdaily.com/images/Brain-Signals-Activity-Technology-Concept.jpg" class="card-img-top" alt="Memory Game"/>
                        <div class="card-body"> <h4 class="card-title">MemoryGame</h4>
                        <p class="card-text">A simple Memory game. Match the colors.</p>
                        <a href="https://roggerospez.github.io/MemoryGame/" class="btn">Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card" id="cf">
                        <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/connect-4-board-games-2M094K2-600.jpg" class="card-img-top" alt="ConnectFour"/>
                        <div class="card-body"> <h4 class="card-title">ConnectFour</h4>
                        <p class="card-text">Type your color and let the games begin. 2player game.</p>
                        <a href="https://roggerospez.github.io/ConnectFour/" class="btn">Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card" id="jg">
                        <img src="https://img.freepik.com/free-vector/colourful-clown-cartoon-character_1308-96000.jpg?size=626&ext=jpg" class="card-img-top" alt="Joke Generator"/>
                        <div class="card-body"> <h4 class="card-title">Joke Generator</h4>
                        <p class="card-text">Random Joke Generator</p>
                        <a href="https://roggerospez.github.io/Jokes/" class="btn">Jokes</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card" id="Cal">
                        <img src="https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/e726abd62a7d08749d3a882889cdc78d.png" class="card-img-top" alt="Calculator"/>
                        <div class="card-body"> <h4 class="card-title">Calculator</h4>
                        <p class="card-text">Neon Colored Calculator</p>
                        <a href="https://roggerospez.github.io/Calculator/" class="btn">Calculator</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card" id="GoT">
                        <img src="https://freepngimg.com/thumb/tv_shows/30914-1-game-of-thrones-transparent.png" class="card-img-top" alt="GameOfThronesWiki"/>
                        <div class="card-body"> <h4 class="card-title">GameOfThronesWiki</h4>
                        <p class="card-text">A hand made Game of Thrones Wiki</p>
                        <a href="https://roggerospez.github.io/GameOfThronesWiki/" class="btn">GoTWiki</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card" id="">
                        <img src="" class="card-img-top" alt=""/>
                        <div class="card-body"> <h4 class="card-title">MemeGenerator</h4>
                        <p class="card-text">A meme generator.</p>
                        <a href="https://roggerospez.github.io/MemeGenerator" class="btn">MemeGenerator</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Projects;