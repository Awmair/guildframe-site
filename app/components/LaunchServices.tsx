import Link from "next/link";
import { serviceCards } from "../launch-services";

export function LaunchServices() {
  return <div className="gf-launch-service-grid">
    {serviceCards.map(service => <Link href={service.href} key={service.href} className="gf-launch-service-card" data-reveal>
      <span className="gf-service-number" aria-hidden="true">{service.number}</span>
      <div><span className="gf-eyebrow">{service.tag}</span><h3>{service.title}</h3></div>
      <p>{service.copy}</p>

    </Link>)}
  </div>;
}
