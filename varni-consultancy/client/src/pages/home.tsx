import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                  Unlock Insights, Drive Growth
                </h1>
                <p className="max-w-[600px] text-primary-foreground md:text-xl">
                  Varni Consultancy empowers organizations with data-driven
                  solutions and strategic advisory to navigate complex
                  challenges and achieve sustainable success.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/services"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Services
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <BarChart className="w-full aspect-[4/3]" />
              <PieChart className="w-full aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Press Releases
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Stay Informed with Varni Consultancy
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the latest news and updates from Varni Consultancy,
                showcasing our expertise and industry insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Varni Consultancy Expands into New Markets, Appoints Industry
                Veteran as Chief Strategy Officer
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Varni Consultancy, a leading global management consulting firm,
                today announced its expansion into new markets and the
                appointment of a seasoned industry veteran as its Chief Strategy
                Officer.
              </div>
              <div className="text-xs text-muted-foreground">June 15, 2023</div>
            </Link>
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Varni Consultancy Releases Groundbreaking Report on the Future
                of Sustainable Supply Chains
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Varni Consultancy, a leading global management consulting firm,
                today announced the release of its latest report, "Navigating
                the Future of Sustainable Supply Chains," providing
                industry-leading insights and strategic recommendations.
              </div>
              <div className="text-xs text-muted-foreground">May 25, 2023</div>
            </Link>
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Varni Consultancy Hosts Successful Global Leadership Summit,
                Showcasing Innovative Solutions
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Varni Consultancy, a leading global management consulting firm,
                today announced the successful conclusion of its annual Global
                Leadership Summit, which brought together industry leaders,
                policymakers, and subject matter experts.
              </div>
              <div className="text-xs text-muted-foreground">
                April 10, 2023
              </div>
            </Link>
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Varni Consultancy Recognized as a Top Consulting Firm in
                Industry Ranking
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Varni Consultancy, a leading global management consulting firm,
                today announced that it has been recognized as a top consulting
                firm in the prestigious industry ranking, solidifying its
                position as a trusted advisor to organizations worldwide.
              </div>
              <div className="text-xs text-muted-foreground">March 1, 2023</div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Recent Reports
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Varni Consultancy's Latest Insights
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the latest research, analysis, and thought leadership
                from Varni Consultancy, addressing the most pressing challenges
                facing organizations today.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                The Future of Work: Navigating the Evolving Landscape
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                This comprehensive report examines the transformative shifts in
                the workplace, offering strategic insights and practical
                recommendations to help organizations adapt and thrive in the
                new era of work.
              </div>
              <div className="text-xs text-muted-foreground">June 2023</div>
            </Link>
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Unlocking the Potential of Digital Transformation
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                This report provides a comprehensive roadmap for organizations
                to navigate the complexities of digital transformation,
                leveraging cutting-edge technologies and best practices to drive
                sustainable growth.
              </div>
              <div className="text-xs text-muted-foreground">May 2023</div>
            </Link>
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Sustainable Supply Chain Strategies for a Changing World
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                This report explores the evolving landscape of sustainable
                supply chains, providing actionable insights and best practices
                to help organizations build resilient, environmentally-conscious
                supply networks.
              </div>
              <div className="text-xs text-muted-foreground">April 2023</div>
            </Link>
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Navigating the Future of Customer Experience
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                This report examines the evolving landscape of customer
                experience, providing strategic insights and practical
                recommendations to help organizations deliver exceptional,
                personalized experiences that drive loyalty and growth.
              </div>
              <div className="text-xs text-muted-foreground">March 2023</div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Announcements
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Stay Updated with Varni Consultancy
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the latest news, events, and updates from Varni
                Consultancy, keeping you informed about our ongoing initiatives
                and developments.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Varni Consultancy Announces the Launch of its Sustainability
                Practice
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Varni Consultancy, a leading global management consulting firm,
                today announced the launch of its dedicated Sustainability
                Practice, empowering organizations to navigate the complex
                landscape of environmental, social, and governance (ESG)
                challenges.
              </div>
              <div className="text-xs text-muted-foreground">June 1, 2023</div>
            </Link>
            <Link
              to="/"
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Varni Consultancy Announces the Launch of its Sustainability
                Practice
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Varni Consultancy, a leading global management consulting firm,
                today announced the launch of its dedicated Sustainability
                Practice, empowering organizations to navigate the complex
                landscape of environmental, social, and governance (ESG)
                challenges.
              </div>
              <div className="text-xs text-muted-foreground">June 1, 2023</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PieChart(props: any) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}