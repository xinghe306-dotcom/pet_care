"use client";
import { useBooking } from "./BookingProvider";

export default function BookButton({
  children,
  className = "button",
  service,
  ...props
}) {
  const { openBooking } = useBooking();
  return (
    <button
      className={className}
      onClick={() => openBooking(service)}
      {...props}
    >
      {children}
    </button>
  );
}
