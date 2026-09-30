import type { Technology } from './technologies';
export function TechLogo({ technology }: { technology: Technology }) {
  return (
    <article className="tech-card" data-category={technology.category}>
      <div className="tech-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d={technology.icon.path} />
        </svg>
      </div>
      <div className="tech-card-copy">
        <span>{technology.category}</span>
        <h3>{technology.name}</h3>
        <p>{technology.statement}</p>
      </div>
      <span className="tech-corner" aria-hidden="true">
        ↗
      </span>
    </article>
  );
}
