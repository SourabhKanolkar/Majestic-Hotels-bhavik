import React from "react";

export default function TermsofService() {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#e5e5e5",
        minHeight: "100vh",
      }}
    >
      {" "}
      <div className="container py-5">
        {" "}
        {/* Title */}{" "}
        <div className="text-center mb-5">
          {" "}
          <h1 style={{ color: "#d4af37", fontWeight: "700" }}>
            Terms of Service
          </h1>{" "}
          <p className="text-secondary">
            {" "}
            Effective Date: 1st April 2018 <br /> Last Updated: 1st January,
            2026{" "}
          </p>{" "}
        </div>{" "}
        {/* Intro */}{" "}
        <section className="mb-5">
          {" "}
          <p>
            {" "}
            Welcome to{" "}
            <span style={{ color: "#d4af37", fontWeight: "600" }}>
              Majestic Group
            </span>
            .{" "}
          </p>{" "}
          <p>
            {" "}
            By accessing or using our platform (via website, app, or otherwise),
            listing a service, or interacting with our offline services, you
            agree to be bound by these Terms of Service.{" "}
          </p>{" "}
          <p>
            {" "}
            These Terms govern your use of all services offered through Majestic
            Group, including bookings, memberships, barter transactions, and
            vendor participation.{" "}
          </p>{" "}
        </section>{" "}
        {/* Eligibility */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>Eligibility & User Roles</h4>{" "}
          <ul className="mt-3">
            {" "}
            <li>
              You must be at least <b>18 years old</b> to register or transact
              on Majestic.
            </li>{" "}
            <li>Users include:</li>{" "}
          </ul>{" "}
          <ul>
            {" "}
            <li>
              <b>Consumers:</b> Retail customers purchasing services.
            </li>{" "}
            <li>
              <b>Vendors:</b> Businesses or individuals listing or bartering
              their services.
            </li>{" "}
            <li>
              <b>Clubs / Agents:</b> Third-party organizations facilitating
              access.
            </li>{" "}
          </ul>{" "}
          <p>
            {" "}
            Minors may access services only under supervision and in compliance
            with applicable laws.{" "}
          </p>{" "}
        </section>{" "}
        {/* Platform Usage */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>Platform Usage</h4>{" "}
          <p>
            {" "}
            Majestic offers a <b>Central Reservation System (CRS)</b> for
            booking services including:{" "}
          </p>{" "}
          <ul>
            {" "}
            <li>Hotels</li> <li>Air Tickets</li>{" "}
            <li>Fitness & Wellness Services (Gyms / Clubs)</li>{" "}
            <li>B2B Business Services</li>{" "}
          </ul>{" "}
          <p>Users may either:</p>{" "}
          <ul>
            {" "}
            <li>Purchase services individually.</li>{" "}
            <li>Access them via Majestic bundled entitlements.</li>{" "}
          </ul>{" "}
          <p>Vendors may:</p>{" "}
          <ul>
            {" "}
            <li>List or sell inventory directly.</li>{" "}
            <li>Barter inventory in exchange for Majestic credits.</li>{" "}
          </ul>{" "}
        </section>{" "}
        {/* Passes */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>Passes & Entitlements</h4>{" "}
          <ul>
            {" "}
            <li>
              Purchased services by consumers are{" "}
              <b>non-cancellable and non-refundable</b>.
            </li>{" "}
            <li>
              {" "}
              These are pre-curated bundles where the value derives from
              multi-use benefits and curated offerings.{" "}
            </li>{" "}
            <li>
              {" "}
              If a service included permits cancellation or refund (as defined
              by the vendor), the consumer may avail such benefits subject to
              vendor policy.{" "}
            </li>{" "}
          </ul>{" "}
        </section>{" "}
        {/* Booking */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>
            Booking, Cancellation & Refunds
          </h4>{" "}
          <ul>
            {" "}
            <li>
              {" "}
              Booking terms including cancellation and refund windows are
              defined by the individual vendor.{" "}
            </li>{" "}
            <li>
              {" "}
              If not stated otherwise, bookings are considered{" "}
              <b> non-cancellable and non-refundable</b>.{" "}
            </li>{" "}
          </ul>{" "}
        </section>{" "}
        {/* Vendor Terms */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>
            Vendor & Club Membership Terms
          </h4>{" "}
          <ul>
            {" "}
            <li>
              Vendors must accurately list services and honour confirmed
              bookings.
            </li>{" "}
            <li>
              {" "}
              Majestic reserves the right to remove vendors for fraudulent
              listings or non-compliance.{" "}
            </li>{" "}
            <li>
              {" "}
              Club memberships sold through third-party clubs follow the club’s
              own policies.{" "}
            </li>{" "}
            <li>
              {" "}
              If payment is collected by Majestic but invoiced by the Club, the
              Club is solely responsible for dispute resolution.{" "}
            </li>{" "}
          </ul>{" "}
        </section>{" "}
        {/* User Conduct */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>
            User Conduct & Prohibited Use
          </h4>{" "}
          <ul>
            {" "}
            <li>Misrepresent identity or entitlement.</li>{" "}
            <li>Commit fraud or misuse Majestic services.</li>{" "}
            <li>Disrupt Majestic systems or infrastructure.</li>{" "}
            <li>Reuse or redistribute content without authorization.</li>{" "}
          </ul>{" "}
        </section>{" "}
        {/* Disputes */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>Dispute Resolution</h4>{" "}
          <p>Majestic will act as final arbitrator for disputes involving:</p>{" "}
          <ul>
            {" "}
            <li>Booking discrepancies</li> <li>Refund issues</li>{" "}
            <li>Vendor misbehaviour</li>{" "}
          </ul>{" "}
          <p>Majestic’s decision shall be final and binding.</p>{" "}
        </section>{" "}
        {/* Liability */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>Limitation of Liability</h4>{" "}
          <p>
            Majestic is an intermediary and not the direct service provider.
          </p>{" "}
          <ul>
            {" "}
            <li>Service quality delivered by vendors.</li>{" "}
            <li>Vendor cancellations or failures.</li>{" "}
            <li>Club membership terms from third-party clubs.</li>{" "}
            <li>
              Force majeure events (pandemics, disasters, political unrest).
            </li>{" "}
          </ul>{" "}
        </section>{" "}
        {/* Updates */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>
            Modifications & Policy Updates
          </h4>{" "}
          <p>
            {" "}
            Majestic may revise these Terms at any time. Users will be notified
            via email or platform notifications. Continued use after updates
            constitutes acceptance.{" "}
          </p>{" "}
        </section>{" "}
        {/* Contact */}{" "}
        <section className="mb-5">
          {" "}
          <h4 style={{ color: "#d4af37" }}>Contact Information</h4>{" "}
          <p>
            {" "}
            For support, questions, or concerns regarding these Terms please
            contact us at:{" "}
          </p>{" "}
          <p style={{ color: "#d4af37" }}> support@majesticgroup.com </p>{" "}
        </section>{" "}
      </div>{" "}
    </div>
  );
}
