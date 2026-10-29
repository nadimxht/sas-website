import BookingStore from "@/app/components/BookingStore";
import CurtainReveal from "@/app/components/CurtainReveal";

export default function ReservePage() {
  return (
    <main>
      <CurtainReveal>
        <div className="pt-20"> {/* Add padding for the nav bar */}
          <BookingStore />
        </div>
      </CurtainReveal>
    </main>
  );
}