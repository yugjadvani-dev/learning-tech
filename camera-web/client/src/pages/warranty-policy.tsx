export function Warrantypolicy() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Warranty Policy</h1>
          <p className="text-lg mb-8">
            At our camera store, we stand behind the quality of our products and want to ensure our customers have a
            worry-free experience. That's why we offer comprehensive warranty coverage to protect your investment.
          </p>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Standard Warranty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Coverage</h3>
                <p>
                  Our standard warranty covers any manufacturer defects in materials or workmanship for a period of 1
                  year from the date of purchase.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Exclusions</h3>
                <p>
                  The standard warranty does not cover damage caused by misuse, neglect, accidents, or normal wear and
                  tear. It also does not cover any accessories or batteries.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Extended Warranty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Coverage</h3>
                <p>
                  For an additional fee, you can purchase an extended warranty that covers your camera for up to 3 years
                  from the date of purchase.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Exclusions</h3>
                <p>
                  The extended warranty does not cover damage caused by intentional misuse, natural disasters, or
                  unauthorized modifications to the camera.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Accidental Damage Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Coverage</h3>
                <p>
                  Our accidental damage coverage plan protects your camera against unexpected drops, spills, and other
                  accidents for up to 2 years.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Exclusions</h3>
                <p>
                  The accidental damage coverage does not apply to damage caused by negligence, theft, or intentional
                  acts. It also does not cover any accessories or lenses.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I file a warranty claim?</h3>
                <p>
                  To file a warranty claim, please contact our customer support team with your proof of purchase and a
                  description of the issue. We'll guide you through the process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What if my camera is out of warranty?</h3>
                <p>
                  If your camera is out of warranty, we may still be able to assist you with repairs for a fee. Please
                  contact our customer support team for more information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I transfer the warranty to a new owner?</h3>
                <p>No, the warranty is non-transferable and only applies to the original purchaser.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How long does the repair process take?</h3>
                <p>
                  The repair process typically takes 2-4 weeks, depending on the nature of the issue and the
                  availability of parts.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
