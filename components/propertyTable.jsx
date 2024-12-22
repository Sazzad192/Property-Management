export default function PropertyTable({ filteredProperties }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse rounded-md border border-gray-300">
        <thead>
          <tr className="bg-gray-200 hidden md:table-row">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Bed || Bath</th>
            <th className="border border-gray-300 px-4 py-2">Condition</th>
          </tr>
        </thead>
        <tbody>
          {filteredProperties.map((property, index) => {
            return [
              // Standard Row for Medium and Larger Screens
              <tr key={`table-row-${index}`} className="hidden md:table-row">
                <td className="border border-gray-300 px-4 py-2">
                  {property.name}
                </td>
                <td className="text-center capitalize border border-gray-300 px-4 py-2">
                  {property.property_type}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center">
                    <p
                      className={`${
                        property.status === "available"
                          ? "bg-primary-200 text-primary-500"
                          : "bg-yellow-100 text-yellow-700"
                      } w-fit px-2 py-1 rounded-md capitalize`}
                    >
                      {property.status || "N/A"}
                    </p>
                  </div>
                </td>

                <td className="text-center border border-gray-300 px-4 py-2">
                  {property.location}
                </td>
                <td className="text-center border border-gray-300 px-4 py-2">
                  {property.bedroom} || {property.bathroom}
                </td>
                <td className="text-center border border-gray-300 px-4 py-2">
                  {property.property_condition}
                </td>
              </tr>,

              // Card View for Small to Medium Screens
              <tr key={`card-row-${index}`} className="md:hidden">
                <td colSpan={6} className="p-4">
                  <div className="border border-gray-300 rounded-lg p-4 space-y-2">
                    <p>
                      <strong>Name:</strong> {property.name}
                    </p>
                    <p>
                      <strong>Type:</strong> {property.property_type}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`${
                          property.status === "available"
                            ? "bg-primary-200 text-primary-500"
                            : "bg-yellow-100 text-yellow-700"
                        } px-2 rounded-md capitalize`}
                      >
                        {property.status || "N/A"}
                      </span>
                    </p>
                    <p>
                      <strong>Location:</strong> {property.location}
                    </p>
                    <p>
                      <strong>Bed || Bath:</strong> {property.bedroom} ||{" "}
                      {property.bathroom}
                    </p>
                    <p>
                      <strong>Condition:</strong> {property.property_condition}
                    </p>
                  </div>
                </td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}
