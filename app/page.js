"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import DashboardCard from "@/components/cards/DashboardCard";
import { FaKey, FaWallet } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { propertyType, rentalStatus } from "@/const";
import SelectField from "@/components/forms/SelectField";
import { useRouter } from "next/navigation";
import PropertyTable from "@/components/propertyTable";
import EmptyState from "@/components/EmptyState";

export default function Home() {
  const route = useRouter();
  const [properties, setProperties] = useState([]);
  const [params, setParams] = useState({
    type: "",
    status: "",
  });
  const [cardsValue, setCardsValue] = useState({
    checkIn: 0,
    checkOut: 0,
  });

  const dashboardCards = [
    {
      name: "Check'ins",
      count: cardsValue.checkIn,
      icon: (
        <FaKey className="w-5 h-5 text-primary-500 dark:text-primary-400" />
      ),
    },
    {
      name: "Check'outs",
      count: cardsValue.checkOut,
      icon: (
        <FaBagShopping className="w-5 h-5 text-primary-500 dark:text-primary-400" />
      ),
    },
    {
      name: "Earnings",
      count: "$4.923",
      icon: (
        <FaWallet className="w-5 h-5 text-primary-500 dark:text-primary-400" />
      ),
    },
    {
      name: "Reviews",
      count: "4.5",
      icon: (
        <BsBuildingsFill className="w-5 h-5 text-primary-500 dark:text-primary-400" />
      ),
    },
  ];

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    setProperties(savedData);
  }, []);

  // Filter properties based on selected filters
  const filteredProperties = properties.filter((property) => {
    const matchesType = !params.type || property.property_type === params.type;
    const matchesStatus = !params.status || property.status === params.status;
    return matchesType && matchesStatus;
  });

  // Checkin and checkout depands on available and rented
  useEffect(() => {
    const checkInProperty = properties.filter(
      (item) => item.status === "available"
    );
    const checkOutProperty = properties.filter(
      (item) => item.status === "rented"
    );
    setCardsValue(() => ({
      checkIn: checkInProperty.length,
      checkOut: checkOutProperty.length,
    }));
  }, [properties]);

  return (
    <div className="space-y-8 pt-8">
      <section className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-4 md:gap-0">
        {/* Profile Info */}
        <div className="flex gap-5 items-center">
          <Image
            src="/images/profilePic.JPG"
            alt="User profile"
            width={100}
            height={100}
            priority={true}
            className="object-cover w-8 md:w-16 h-8 md:h-16 rounded-full"
          />
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Welcome!</h1>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Here's an overview of your properties
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 items-center">
          <Button variant="rounded">Analytics</Button>
          <Button
            onClick={() => route.push("/create-property")}
            className="rounded-full px-7"
          >
            + Add Properties
          </Button>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section
        aria-labelledby="dashboard-cards"
        className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12"
      >
        <h2 id="dashboard-cards" className="sr-only">
          Dashboard Cards
        </h2>
        {dashboardCards.map((item) => (
          <DashboardCard
            key={item.name}
            name={item.name}
            icon={item.icon}
            count={item.count}
          />
        ))}
      </section>

      {/* All Properties Section */}
      <section aria-labelledby="all-properties" className="space-y-4">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-4">
          <h2 id="all-properties" className="text-2xl font-semibold">
            All Properties
          </h2>
          {/* Uncomment and implement filters when ready */}
          <div className="flex gap-4 items-center">
            <SelectField
              label="Property Type"
              value={params.type}
              labelClassName="font-bold text-grey-700"
              options={propertyType}
              onChange={(e) => {
                e.preventDefault();
                setParams((prevParams) => ({
                  ...prevParams,
                  type: e.target.value,
                }));
              }}
            />

            <SelectField
              label="Status"
              value={params.status}
              labelClassName="font-bold text-grey-700"
              options={rentalStatus}
              onChange={(e) => {
                e.preventDefault();
                setParams((prevParams) => ({
                  ...prevParams,
                  status: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div>
          {filteredProperties.length > 0 ? (
            <PropertyTable filteredProperties={filteredProperties} />
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </div>
  );
}
