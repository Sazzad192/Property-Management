export default function DashboardCard({ name, icon, count }) {
  return (
    <div className="border border-stone-200 shadow-sm rounded-lg p-3 space-y-2 md:space-y-4">
      <div className="flex justify-between items-center">
        <p>{name}</p>
        {icon}
      </div>
      <p className="text-lg lg:text-xl font-semibold">{count}</p>
    </div>
  );
}
