
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Link } from "react-router-dom"


export function Cameradetails() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/10.jpeg"
                  alt="Camera Image"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] sm:h-[500px]"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Camera Image"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] sm:h-[500px]"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Camera Image"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] sm:h-[500px]"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="grid gap-6">
          <div>
            <h1 className="text-2xl font-bold">Canon EOS R6 Mirrorless Camera</h1>
            <p className="text-muted-foreground">Canon</p>
          </div>
          <div className="prose max-w-none">
            <p>
              The Canon EOS R6 is a powerful and versatile mirrorless camera that delivers exceptional image quality and
              performance. With a 20MP full-frame CMOS sensor, DIGIC X image processor, and advanced autofocus system,
              this camera is perfect for a wide range of photography needs.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">$2,499.99</div>
            <Button size="lg">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Specification</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Sensor Size</TableCell>
              <TableCell>Full-frame (36 x 24 mm)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Resolution</TableCell>
              <TableCell>20.1 megapixels</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lens Mount</TableCell>
              <TableCell>Canon RF</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ISO Range</TableCell>
              <TableCell>100-102,400 (expandable to 50-204,800)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Autofocus</TableCell>
              <TableCell>Dual Pixel CMOS AF II</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Video Recording</TableCell>
              <TableCell>4K 60p, Full HD 120p</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-muted rounded-lg overflow-hidden">
            <Link to="#" className="block" >
              <img
                src="/11.jpeg"
                alt="Related Product"
                width={400}
                height={300}
                className="object-cover w-full h-[200px]"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Sony Alpha a7 III</h3>
                <p className="text-muted-foreground">$1,999.99</p>
              </div>
            </Link>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <Link to="#" className="block" >
              <img
                src="/12.jpeg"
                alt="Related Product"
                width={400}
                height={300}
                className="object-cover w-full h-[200px]"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Nikon D850</h3>
                <p className="text-muted-foreground">$2,799.99</p>
              </div>
            </Link>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <Link to="#" className="block" >
              <img
                src="/13.jpeg"
                alt="Related Product"
                width={400}
                height={300}
                className="object-cover w-full h-[200px]"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Fujifilm X-T4</h3>
                <p className="text-muted-foreground">$1,699.99</p>
              </div>
            </Link>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <Link to="#" className="block" >
              <img
                src="/14.jpeg"
                alt="Related Product"
                width={400}
                height={300}
                className="object-cover w-full h-[200px]"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Olympus OM-D E-M1 Mark III</h3>
                <p className="text-muted-foreground">$1,799.99</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
