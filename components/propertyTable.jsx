export default function PropertyTable({ filteredProperties }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse rounded-md border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 hidden md:table-row">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">
              Name
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">
              Type
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">
              Status
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">
              Location
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">
              Bed || Bath
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">
              Condition
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProperties.map((property, index) => {
            return [
              // Standard Row for Medium and Larger Screens
              <tr
                key={`table-row-${index}`}
                className="hidden md:table-row bg-white dark:bg-gray-800"
              >
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                  {property.name}
                </td>
                <td className="text-center capitalize border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                  {property.property_type}
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  <div className="flex justify-center items-center">
                    <p
                      className={`${
                        property.status === "available"
                          ? "bg-primary-200 text-primary-500 dark:bg-primary-100 dark:text-primary-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
                      } w-fit px-2 py-1 rounded-md capitalize`}
                    >
                      {property.status || "N/A"}
                    </p>
                  </div>
                </td>
                <td className="text-center border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                  {property.location}
                </td>
                <td className="text-center border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                  {property.bedroom} || {property.bathroom}
                </td>
                <td className="text-center border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                  {property.property_condition}
                </td>
              </tr>,

              // Card View for Small to Medium Screens
              <tr key={`card-row-${index}`} className="md:hidden">
                <td colSpan={6} className="p-4">
                  <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 space-y-2 bg-white dark:bg-gray-800">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Name:</strong> {property.name}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Type:</strong> {property.property_type}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`${
                          property.status === "available"
                            ? "bg-primary-200 text-primary-500 dark:bg-primary-100 dark:text-primary-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
                        } px-2 rounded-md capitalize`}
                      >
                        {property.status || "N/A"}
                      </span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Location:</strong> {property.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Bed || Bath:</strong> {property.bedroom} ||{" "}
                      {property.bathroom}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
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
