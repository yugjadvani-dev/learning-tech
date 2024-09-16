import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <MountainIcon className="h-6 w-6" />
            <span>Varni Consultancy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="hover:underline">
              About
            </Link>
            <Link to="/" className="hover:underline">
              Services
            </Link>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6">
              National Statistical Commission
            </h2>
            <p className="text-muted-foreground mb-8">
              Varni Consultancy has been actively involved with the National
              Statistical Commission, contributing to its efforts in improving
              the quality and reliability of statistical data in the country.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Key Contributions
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Providing expert advice on statistical methodologies</li>
                  <li>
                    Participating in the development of national statistical
                    frameworks
                  </li>
                  <li>Conducting training programs for statistical officers</li>
                  <li>
                    Assisting in the implementation of data quality assurance
                    measures
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Ongoing Initiatives
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Modernizing data collection and processing systems</li>
                  <li>
                    Enhancing the accessibility and transparency of statistical
                    data
                  </li>
                  <li>
                    Collaborating with international organizations on
                    statistical capacity building
                  </li>
                  <li>
                    Promoting the use of data-driven decision making in
                    policymaking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6">Events</h2>
            <p className="text-muted-foreground mb-8">
              Varni Consultancy actively organizes and participates in various
              events to share knowledge, foster collaboration, and stay at the
              forefront of the industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Organized Events</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Annual Statistical Symposium</li>
                  <li>Data Analytics Workshop Series</li>
                  <li>Roundtable on Emerging Statistical Trends</li>
                  <li>Webinar on Statistical Capacity Building</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Attended Events</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>International Statistical Institute Conference</li>
                  <li>United Nations World Data Forum</li>
                  <li>National Statistical Commission Annual Meeting</li>
                  <li>OECD Global Forum on Statistics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6">
              Major Initiatives/Achievements
            </h2>
            <p className="text-muted-foreground mb-8">
              Varni Consultancy has undertaken several major initiatives and
              achieved notable milestones in the field of statistics and data
              analysis.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-2 font-semibold">Initiative</th>
                    <th className="px-4 py-2 font-semibold">Description</th>
                    <th className="px-4 py-2 font-semibold">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">
                      Development of National Statistical Framework
                    </td>
                    <td className="px-4 py-2">
                      Collaborated with the government to develop a
                      comprehensive national statistical framework, improving
                      data collection and analysis processes.
                    </td>
                    <td className="px-4 py-2">2020</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">
                      Implementation of Data Quality Assurance Program
                    </td>
                    <td className="px-4 py-2">
                      Designed and implemented a robust data quality assurance
                      program, ensuring the reliability and accuracy of
                      statistical data.
                    </td>
                    <td className="px-4 py-2">2018</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">
                      Capacity Building for Statistical Officers
                    </td>
                    <td className="px-4 py-2">
                      Conducted extensive training programs to enhance the
                      skills and knowledge of statistical officers across the
                      country.
                    </td>
                    <td className="px-4 py-2">2019</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">
                      Modernization of Data Collection Systems
                    </td>
                    <td className="px-4 py-2">
                      Implemented cutting-edge data collection technologies and
                      methodologies to improve the efficiency and timeliness of
                      statistical data.
                    </td>
                    <td className="px-4 py-2">2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6">
              Conference of Central and State Statistical Organizations (COCSSO)
            </h2>
            <p className="text-muted-foreground mb-8">
              Varni Consultancy has been an active participant in the COCSSO,
              contributing to the discussions and initiatives aimed at improving
              the coordination and collaboration between central and state
              statistical organizations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Key Contributions
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    Providing technical expertise on statistical methodologies
                  </li>
                  <li>
                    Facilitating the exchange of best practices among states
                  </li>
                  <li>
                    Advocating for the harmonization of statistical standards
                  </li>
                  <li>
                    Assisting in the development of joint data collection
                    initiatives
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Ongoing Initiatives
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    Enhancing the integration of state-level data with national
                    databases
                  </li>
                  <li>
                    Promoting the use of technology for efficient data
                    management
                  </li>
                  <li>
                    Collaborating on the development of statistical capacity
                    building programs
                  </li>
                  <li>
                    Advocating for the increased use of data-driven decision
                    making in policymaking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6">
              Summary of Monthly Activities
            </h2>
            <p className="text-muted-foreground mb-8">
              Varni Consultancy maintains a comprehensive record of its monthly
              activities, highlighting the key initiatives, events, and
              achievements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-2 font-semibold">Month</th>
                    <th className="px-4 py-2 font-semibold">Key Activities</th>
                    <th className="px-4 py-2 font-semibold">Achievements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">January</td>
                    <td className="px-4 py-2">
                      - Conducted training program for state-level statistical
                      officers
                      <br />- Participated in the COCSSO annual meeting
                    </td>
                    <td className="px-4 py-2">
                      - Received positive feedback on the training program
                      <br />- Contributed to the development of joint data
                      collection initiatives
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">February</td>
                    <td className="px-4 py-2">
                      - Organized a webinar on data visualization best practices
                      <br />- Attended the International Statistical Institute
                      Conference
                    </td>
                    <td className="px-4 py-2">
                      - Webinar received high attendance and positive reviews
                      <br />- Established new collaborations with international
                      organizations
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">March</td>
                    <td className="px-4 py-2">
                      - Conducted a workshop on statistical modeling techniques
                      <br />- Participated in the National Statistical
                      Commission meeting
                    </td>
                    <td className="px-4 py-2">
                      - Workshop was well-received by participants
                      <br />- Contributed to the development of national
                      statistical frameworks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6">
              Allocation of Business Rules
            </h2>
            <p className="text-muted-foreground mb-8">
              Varni Consultancy operates under a well-defined set of business
              rules and policies to ensure the highest standards of
              professionalism and ethical conduct.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Rules</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Strict adherence to professional ethics and integrity</li>
                  <li>Commitment to data privacy and confidentiality</li>
                  <li>Transparent and accountable decision-making processes</li>
                  <li>
                    Continuous investment in employee training and development
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Policies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Equal opportunity and non-discrimination</li>
                  <li>Sustainable and environmentally-conscious practices</li>
                  <li>Collaborative and client-centric approach</li>
                  <li>
                    Commitment to social responsibility and community engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">
            &copy; 2024 Varni Consultancy. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Privacy
            </Link>
            <Link to="/" className="hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
