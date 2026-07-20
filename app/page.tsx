const games = [
  {
    number: "01",
    name: "IncreTop",
    tag: "INCREMENTAL · CASUAL · COMING SOON",
    description:
      "An incremental game about whipping spinning tops. Earn money, upgrade your gear, learn new skills, and find a way out of a world filled with nothing but tops.",
    image: "/games/incretop.jpg",
    steam: "https://store.steampowered.com/app/4710920/",
  },
  {
    number: "02",
    name: "Beat Shapes",
    tag: "BULLET HEAVEN · INCREMENTAL · 2026",
    description:
      "A compact incremental bullet-heaven shooter. Defeat geometric enemies, collect notes, unlock new bullets, upgrade instruments, and build toward tougher bosses.",
    image: "/games/beat-shapes.jpg",
    steam: "https://store.steampowered.com/app/4015080/Beat_Shapes/",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Inspiration Beggar, back to top"
        >
          IB<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Games</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="intro" id="top" aria-labelledby="intro-title">
        <p className="eyebrow">INDEPENDENT GAME DEVELOPER</p>
        <h1 id="intro-title">
          Systems that grow.
          <br />
          <span>Games that click.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            I&apos;m Inspiration Beggar, an independent developer making compact
            incremental games built around satisfying interactions, expressive
            systems, and surprising upgrades.
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
          <p className="eyebrow">RELEASED &amp; UPCOMING</p>
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
                </div>
                <p className="game-description">{game.description}</p>
              </div>
              <div className="game-media">
                <img
                  src={game.image}
                  alt={`Gameplay screenshot from ${game.name}`}
                  width="1920"
                  height="1080"
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
          <h2 id="about-title">Small ideas, deep upgrade paths.</h2>
          <p>
            I design and build games as Inspiration Beggar, focusing on clear
            mechanics that unfold into layered progression. Beat Shapes is
            available now, and IncreTop is currently in development.
          </p>
          <a
            className="email-link"
            href="https://store.steampowered.com/curator/45203431"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Steam <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 INSPIRATION BEGGAR</p>
        <p>INDEPENDENT GAMES, MADE WITH CARE</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
