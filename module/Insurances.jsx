import React from "react";
import { motion } from "framer-motion";

const insurances = [
  { name: "Acko Health Insurance", logo: "/images/hospital-img/acko.png" },
  { name: "Aditya Birla Health Insurance", logo: "/images/hospital-img/aditya-birla.png" },
  { name: "Bajaj Allianz", logo: "/images/hospital-img/bajaj-allianz.png" },
  { name: "Bharti AXA Health Insurance", logo: "/images/hospital-img/bharti-axa.png" },
  { name: "Cholamandalam MS Health Insurance", logo: "/images/hospital-img/cholamandalam.png" },
  { name: "Digit Health Insurance", logo: "/images/hospital-img/digit.png" },
  { name: "Edelweiss Health Insurance", logo: "/images/hospital-img/edelweiss.png" },
  { name: "Future Generali Health Insurance", logo: "/images/hospital-img/future-generali.png" },
  { name: "HDFC Ergo", logo: "/images/hospital-img/hdfc-ergo.png" },
  { name: "ICICI Lombard", logo: "/images/hospital-img/icici-lombard.png" },
  { name: "IFFCO Tokio Health Insurance", logo: "/images/hospital-img/iffco-tokio.png" },
  { name: "Kotak Health Insurance", logo: "/images/hospital-img/kotak.png" },
  { name: "Liberty Health Insurance", logo: "/images/hospital-img/liberty.png" },
  { name: "Manipal Cigna Health Insurance", logo: "/images/hospital-img/manipal-cigna.png" },
  { name: "Max Bupa Health Insurance", logo: "/images/hospital-img/max-bupa.png" },
  { name: "National Insurance", logo: "/images/hospital-img/national.png" },
  { name: "New India Assurance", logo: "/images/hospital-img/new-india.png" },
  { name: "Navi General", logo: "/images/hospital-img/navi.png" },
  { name: "Oriental Insurance", logo: "/images/hospital-img/oriental.png" },
  { name: "Raheja QBE", logo: "/images/hospital-img/raheja-qbe.png" },
  { name: "Reliance General Insurance", logo: "/images/hospital-img/reliance.png" },
  { name: "Royal Sundaram General Insurance", logo: "/images/hospital-img/royal-sundaram.png" },
  { name: "SBI Health Insurance", logo: "/images/hospital-img/sbi.png" },
  { name: "Shriram General Insurance", logo: "/images/hospital-img/shriram.png" },
  { name: "Star Health Insurance", logo: "/images/hospital-img/star.png" },
  { name: "TATA AIG Health Insurance", logo: "/images/hospital-img/tata-aig.png" },
  { name: "United India Insurance", logo: "/images/hospital-img/united-india.png" },
  { name: "Universal Sompo", logo: "/images/hospital-img/universal-sompo.png" }
];

const Insurances = () => {
return (
  <div>

    <div className="text-center mb-10">

      <span className="inline-block bg-[#0F766E]/10 text-[#0F766E] px-4 py-2 rounded-lg text-sm font-medium">
        Cashless Treatment Available
      </span>

      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Supported Insurance Providers
      </h2>

      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        We work with leading insurance companies to
        provide seamless cashless treatment and claim
        assistance for patients.
      </p>

    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

      {insurances.map((insurance, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
            border
            border-gray-200
            rounded-lg
            p-5
            shadow-sm
            hover:shadow-lg
            transition-all
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          <img
            src={insurance.logo}
            alt={insurance.name}
            className="
              w-16
              h-16
              object-contain
              mb-4
            "
          />

          <p className="
            text-sm
            font-medium
            text-gray-700
            leading-5
          ">
            {insurance.name}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
);
};

export default Insurances;
