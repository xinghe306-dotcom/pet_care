"use client";

import { createContext, useContext, useState } from "react";
import BookingDialog from "./BookingDialog";
import PrivacyDialog from "./PrivacyDialog";

const BookingContext = createContext(null);

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [currentPet, setCurrentPet] = useState("dog");
  const [request, setRequest] = useState(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const openBooking = (service = "基础洗护") =>
    setRequest({ petType: currentPet, service });

  return (
    <BookingContext.Provider
      value={{
        currentPet,
        setCurrentPet,
        openBooking,
        openPrivacy: () => setPrivacyOpen(true),
      }}
    >
      {children}
      <BookingDialog request={request} onClose={() => setRequest(null)} />
      <PrivacyDialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </BookingContext.Provider>
  );
}
