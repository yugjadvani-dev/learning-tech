export function Hardware() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12 px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Introducing the FitTrack Pro
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience the ultimate in fitness tracking with the FitTrack
                Pro. Packed with advanced sensors and a sleek, durable design,
                this device is your perfect companion for an active lifestyle.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Powerful Sensors</h3>
                <p className="text-muted-foreground">
                  Featuring a heart rate monitor, accelerometer, and gyroscope,
                  the FitTrack Pro provides comprehensive fitness tracking.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Long-Lasting Battery</h3>
                <p className="text-muted-foreground">
                  With up to 7 days of battery life, the FitTrack Pro keeps you
                  connected and motivated throughout your active days.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Water Resistant</h3>
                <p className="text-muted-foreground">
                  Rated for water resistance up to 50 meters, the FitTrack Pro
                  is ready to accompany you on your aquatic adventures.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/gym-7.jpg"
              alt="FitTrack Pro"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Dive into the details of the FitTrack Pro's impressive hardware
              capabilities.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Processor</h3>
              <p className="text-muted-foreground">
                Dual-core ARM Cortex-M4 processor, 120 MHz
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Memory</h3>
              <p className="text-muted-foreground">
                512 KB RAM, 4 MB flash storage
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Sensors</h3>
              <p className="text-muted-foreground">
                Heart rate monitor, accelerometer, gyroscope, ambient light
                sensor
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Display</h3>
              <p className="text-muted-foreground">
                1.3-inch OLED display, 240 x 240 resolution
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Connectivity</h3>
              <p className="text-muted-foreground">
                Bluetooth 5.0, Wi-Fi 802.11 b/g/n
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Battery</h3>
              <p className="text-muted-foreground">
                280 mAh, up to 7 days of battery life
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Water Resistance</h3>
              <p className="text-muted-foreground">
                Water resistant up to 50 meters
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}