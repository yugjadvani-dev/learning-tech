
import { Checkbox } from "@/components/ui/checkbox"

export function TermsOfCondition() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Terms & Conditions</h1>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">User Responsibilities and Website Use Policies</h2>
        <p className="mb-4">
          By accessing and using this website, you agree to comply with the following terms and conditions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Use the website only for lawful purposes and in a manner that does not infringe on the rights of others.
          </li>
          <li>Refrain from engaging in any activities that may disrupt or interfere with the website's operations.</li>
          <li>Do not attempt to gain unauthorized access to any part of the website or its systems.</li>
          <li>Respect the intellectual property rights of the website and its content creators.</li>
          <li>Provide accurate and truthful information when creating an account or making a booking.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Movie Booking and Payment Policies</h2>
        <p className="mb-4">
          The following policies apply to all movie bookings and payments made through this website:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bookings are subject to availability and may be subject to additional fees or surcharges.</li>
          <li>Payment must be made in full at the time of booking to secure your reservation.</li>
          <li>Accepted payment methods include credit/debit cards, digital wallets, and bank transfers.</li>
          <li>All transactions are processed securely and in accordance with industry standards.</li>
          <li>The website reserves the right to cancel or modify bookings in the event of unforeseen circumstances.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Refund and Cancellation Policies</h2>
        <p className="mb-4">The following policies apply to refunds and cancellations of movie bookings:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cancellations made at least 24 hours prior to the scheduled showtime are eligible for a full refund.</li>
          <li>Cancellations made within 24 hours of the scheduled showtime may be subject to a cancellation fee.</li>
          <li>No refunds will be issued for no-shows or late arrivals.</li>
          <li>Refunds will be processed back to the original payment method used for the booking.</li>
          <li>The website reserves the right to modify or update the refund and cancellation policies at any time.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Intellectual Property Rights</h2>
        <p className="mb-4">
          This website and its content, including but not limited to text, graphics, images, logos, and software, are
          the property of the website owner and are protected by applicable intellectual property laws. You may not
          reproduce, modify, distribute, or create derivative works from any part of the website without the express
          written permission of the website owner.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Governing Laws and Dispute Resolution</h2>
        <p className="mb-4">
          These terms and conditions, as well as any disputes arising from the use of this website, shall be governed by
          the laws of the jurisdiction in which the website is operated. Any unresolved disputes shall be settled
          through binding arbitration in accordance with the rules of the applicable arbitration organization.
        </p>
      </section>
      <div className="flex items-center mb-4">
        <Checkbox id="accept-terms" />
        <label htmlFor="accept-terms" className="ml-2 text-base font-medium">
          I have read and agree to the Terms & Conditions
        </label>
      </div>
    </div>
  )
}