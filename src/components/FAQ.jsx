import { useState } from "react";
import { FAQS } from "../data/eventData.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="block" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow iris"><span className="dot" />FAQ</span>
          <h2 className="h2" id="faq-title">Questions, <span className="gold">answered</span></h2>
          <p className="lead">Still stuck? Your group volunteer is your fastest help line.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              /* Note: no `reveal` class here on purpose — question buttons must
                 always be visible and clickable, never stuck at opacity 0. */
              <div className={`faq-item${open ? " open" : ""}`} key={f.q}>
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIndex(i)}
                  >
                    <span>{f.q}</span>
                    <span className="plus" aria-hidden="true">+</span>
                  </button>
                </h3>
                <div
                  className="faq-a"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  aria-hidden={!open}
                >
                  <div className="faq-a-inner"><p>{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
