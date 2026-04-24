"use client";

import React from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/modal";

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

export default function ContactModals({
  officesOpen,
  onOfficesClose,
  bookingOpen,
  onBookingClose,
  quoteOpen,
  onQuoteClose,
}: ContactModalsProps) {
  return (
    <>
      <OfficesModal isOpen={officesOpen} onClose={onOfficesClose} />
      
      <Modal 
        isOpen={bookingOpen} 
        onClose={onBookingClose} 
        title="Schedule a Consultation"
      >
        <BookingForm />
      </Modal>

      <Modal 
        isOpen={quoteOpen} 
        onClose={onQuoteClose} 
        title="Request a Detailed Quote"
      >
        <QuoteForm />
      </Modal>
    </>
  );
}
