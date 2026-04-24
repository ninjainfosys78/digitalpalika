import { useState, useCallback } from "react";

export function useContactModals() {
  const [officesOpen, setOfficesOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openOffices = useCallback(() => setOfficesOpen(true), []);
  const closeOffices = useCallback(() => setOfficesOpen(false), []);
  
  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);
  
  const openQuote = useCallback(() => setQuoteOpen(true), []);
  const closeQuote = useCallback(() => setQuoteOpen(false), []);

  return {
    officesOpen,
    bookingOpen,
    quoteOpen,
    openOffices,
    closeOffices,
    openBooking,
    closeBooking,
    openQuote,
    closeQuote,
  };
}
