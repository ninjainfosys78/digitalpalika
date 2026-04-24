import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, MapPin, Phone } from "lucide-react";

const OFFICES = [
  {
    city: "Kathmandu",
    address: "Baneshwor-10, Kathmandu, Nepal",
    phone: "+977-9851343348",
    email: "info@ninjainfosys.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.894372957591!2d85.33446411506161!3d27.697415982796245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xe4f75727b14d87f7!2sBaneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1682260000000!5m2!1sen!2snp"
  },
  {
    city: "Global Outreach",
    address: "Remote / Digital Hub",
    phone: "+977-9858042433",
    email: "outreach@ninjainfosys.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.18237072248!2d-0.24168147!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2snp!4v1682260000000!5m2!1sen!2snp"
  }
];

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0d0d0d] pt-32 pb-24 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-5xl font-heading font-bold text-white mb-4">Our Locations</h1>
            <p className="text-xl text-white/50 max-w-2xl">
              Strategically positioned to deliver critical infrastructure solutions across complex environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {OFFICES.map((office, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group hover:border-[#c0152a]/50 transition-all duration-300">
                <div className="h-64 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-heading font-bold text-white mb-6 underline decoration-[#c0152a] decoration-4 underline-offset-8">
                    {office.city}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 text-white/70">
                      <MapPin size={20} className="text-[#c0152a] mt-1 shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-start gap-4 text-white/70">
                      <Phone size={20} className="text-[#c0152a] mt-1 shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-start gap-4 text-white/70">
                      <Mail size={20} className="text-[#c0152a] mt-1 shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
