import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioItem({ item }) {
  return (
    <div className="portfolio-item">
      <div className="card h-100 border-0 shadow-sm overflow-hidden hover-effect">
        <div className="portfolio-image-container" style={{ height: '200px', overflow: 'hidden' }}>
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={200}
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="card-body">
          <h3 className="h4">{item.title}</h3>
          <p className="text-muted mb-2"><strong>{item.role}</strong> | {item.period}</p>
          <ul className="mb-3">
            {item.achievements.slice(0, 2).map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          <div className="portfolio-links">
        <a href={item.links.portfolio} target="_blank">View Portfolio</a>
        {item.links.liveDemo && (
          <a href={item.links.liveDemo} target="_blank">Live Demo</a>
        )}
      </div>
        </div>
      </div>
    </div>
  );
}