"use client";

import React from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/modal";
import { useLanguage } from "@/components/LanguageProvider";

const OfficesModal = dynamic(() => import("@/components/offices-modal"), { ssr: false });
const BookingForm = dynamic(() => import("@/components/booking-form"), { ssr: false });
const QuoteForm = dynamic(() => import("@/components/quote-form"), { ssr: false });

export interface ContactModalsProps {
  officesOpen: boolean;
  onOfficesClose: () => void;
  bookingOpen: boolean;
  onBookingClose: () => void;
  quoteOpen: boolean;
  onQuoteClose: () => void;
}

const modalTitles = {
  en: {
    booking: "Schedule a Consultation",
    quote: "Request a Detailed Quote",
  },
  ne: {
    booking: "परामर्श तालिका बनाउनुहोस्",
    quote: "विस्तृत उद्धरण अनुरोध गर्नुहोस्",
  }
};

export default function ContactModals({
  officesOpen,
  onOfficesClose,
  bookingOpen,
  onBookingClose,
  quoteOpen,
  onQuoteClose,
}: ContactModalsProps) {
  const { language } = useLanguage();
  const titles = modalTitles[(language ?? "en") as "en" | "ne"];

  return (
    <>
      <OfficesModal isOpen={officesOpen} onClose={onOfficesClose} />
      
      <Modal 
        isOpen={bookingOpen} 
        onClose={onBookingClose} 
        title={titles.booking}
      >
        <BookingForm />
      </Modal>

      <Modal 
        isOpen={quoteOpen} 
        onClose={onQuoteClose} 
        title={titles.quote}
      >
        <QuoteForm />
      </Modal>
    </>
  );
}
