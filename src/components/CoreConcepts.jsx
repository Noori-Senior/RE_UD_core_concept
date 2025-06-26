import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts" className="container my-5">
      <h2 className="text-center mb-4">Core Concepts</h2>
      <div className="row">
        {CORE_CONCEPTS.map((conceptItem) => (
          <div className="col-md-6 mb-4" key={conceptItem.title}>
            <CoreConcept {...conceptItem} />
          </div>
        ))}
      </div>
    </section>
  );
}
