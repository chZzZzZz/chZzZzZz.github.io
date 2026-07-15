const games = [
  {
    number: "01",
    name: "Orbit Foundry",
    tag: "SPACE · AUTOMATION · 2026",
    description:
      "A quiet automation game about turning a lonely orbital platform into a humming factory among the stars.",
    image: "/games/orbit-foundry.gif",
    steam: "https://store.steampowered.com/",
    presskit: "https://impress.games/",
  },
  {
    number: "02",
    name: "Mosslight Mail",
    tag: "COZY · ADVENTURE · 2025",
    description:
      "Deliver tiny letters through a rainy forest, learn the lives of its curious residents, and find your way home before dawn.",
    image: "/games/mosslight-mail.gif",
    steam: "https://store.steampowered.com/",
    presskit: "https://impress.games/",
  },
  {
    number: "03",
    name: "Velvet Dungeon",
    tag: "ROGUELITE · DECKBUILDER · 2024",
    description:
      "A fast, strange deckbuilding roguelite where every spell changes the dungeon—and the dungeon remembers.",
    image: "/games/velvet-dungeon.gif",
    steam: "https://store.steampowered.com/",
    presskit: "https://impress.games/",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aster Vale, back to top">
          AV<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Games</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="intro" id="top" aria-labelledby="intro-title">
        <p className="eyebrow">INDEPENDENT GAME DEVELOPER</p>
        <h1 id="intro-title">
          Small worlds.
          <br />
          <span>Big feelings.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            I&apos;m Aster Vale, a solo game developer making compact, curious
            games about machines, magic, and finding your place.
          </p>
          <a className="text-link" href="#work">
            Explore my games <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="pixel-spark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 id="work-title">Games I&apos;ve made</h2>
        </div>

        <div className="game-list">
          {games.map((game) => (
            <article className="game" key={game.name}>
              <div className="game-copy">
                <div className="game-index">
                  <span>{game.number}</span>
                  <span>{game.tag}</span>
                </div>
                <h3>{game.name}</h3>
                <div className="game-actions" aria-label={`${game.name} links`}>
                  <a href={game.steam} target="_blank" rel="noreferrer">
                    View on Steam <ArrowIcon />
                  </a>
                  <a href={game.presskit} target="_blank" rel="noreferrer">
                    Game Presskit <ArrowIcon />
                  </a>
                </div>
                <p className="game-description">{game.description}</p>
              </div>
              <div className="game-media">
                <img
                  src={game.image}
                  alt={`Animated pixel-art scene from ${game.name}`}
                  width="960"
                  height="540"
                />
                <span className="media-corner media-corner-a" aria-hidden="true" />
                <span className="media-corner media-corner-b" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <p className="eyebrow">ABOUT ME</p>
        <div>
          <h2 id="about-title">Handmade games, one strange idea at a time.</h2>
          <p>
            I design, code, and animate games from a tiny studio. I care about
            tactile systems, expressive pixels, and experiences that respect
            your time.
          </p>
          <a className="email-link" href="mailto:hello@astervale.games">
            hello@astervale.games <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 ASTER VALE</p>
        <p>MADE WITH CARE &amp; TOO MUCH COFFEE</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
