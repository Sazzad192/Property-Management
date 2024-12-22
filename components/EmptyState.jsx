import Image from "next/image";

export default function EmptyState() {
  return (
    <section className="flex justify-center items-center">
      <Image
        src="/images/emptyState.jpg"
        alt="empty State"
        width={400}
        height={200}
        priority
      />
    </section>
  );
}
