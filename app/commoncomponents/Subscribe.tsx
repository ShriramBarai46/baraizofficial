import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Subscribe() {
  return (
    <section className="p-10 bg-accent text-white text-center">
      <h2 className="text-3xl font-bold">Subscribe for Offers</h2>
      <p className="text-lg mt-2">Get the latest deals and updates</p>
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <Input className="w-full md:w-1/3 p-3 text-black rounded-lg" placeholder="Enter your email" />
        <Button className="bg-primary px-6 py-3 rounded-lg text-white">Subscribe</Button>
      </div>
    </section>
  );
}