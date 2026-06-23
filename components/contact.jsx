




"use client";

import { useState } from "react";

import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function ContactUsPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    treatment: "",
    consultationType: "",
    supportNeeded: [],
    phone: "",
    city: "",
  });

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    if (type === "checkbox") {

      setFormData((prev) => ({
        ...prev,

        supportNeeded: checked
          ? [...prev.supportNeeded, value]
          : prev.supportNeeded.filter(
              (c) => c !== value
            ),
      }));

    } else {

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert(
      "Consultation request submitted successfully"
    );
  };

  return (
    <main className="bg-[#f7fbfa] text-gray-800">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7] py-24 lg:py-32">

  {/* Background Blur Effects */}

  <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F766E]/10 rounded-full blur-3xl" />

  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#14b8a6]/10 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}

      <div>

        <span className="
          inline-flex
          items-center
          bg-[#0F766E]/10
          text-[#0F766E]
          px-4
          py-2
          rounded-lg
          text-sm
          font-semibold
        ">
          CONTACT JEEVO HEALTH
        </span>

        <h1 className="
          mt-6
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          text-gray-900
        ">
          Get Expert Guidance
          <br />

          <span className="text-[#0F766E]">
            For Your Treatment Journey
          </span>
        </h1>

        <p className="
          mt-6
          text-lg
          text-gray-600
          max-w-xl
          leading-relaxed
        ">
          Connect with experienced specialists,
          trusted hospitals, and dedicated care
          managers for stress-free healthcare support.
        </p>

        {/* CTA */}

        <div className="flex flex-wrap gap-4 mt-8">

          <button className="
            bg-[#0F766E]
            hover:bg-[#0b5f58]
            text-white
            px-8
            py-4
            rounded-lg
            font-semibold
            transition
          ">
            Book Consultation
          </button>

          <button className="
            border
            border-[#0F766E]
            text-[#0F766E]
            px-8
            py-4
            rounded-lg
            font-semibold
            hover:bg-[#0F766E]
            hover:text-white
            transition
          ">
            Call Now
          </button>

        </div>

      </div>

      {/* RIGHT STATS CARD */}

      <div>

        <div className="
          bg-white
          border
          border-gray-200
          rounded-lg
          shadow-sm
          p-8
        ">

          <h3 className="
            text-2xl
            font-bold
            text-gray-900
            mb-8
          ">
            Why Patients Choose Jeevo Health
          </h3>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h4 className="text-4xl font-bold text-[#0F766E]">
                1000+
              </h4>
              <p className="text-gray-500 mt-2">
                Patients Assisted
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold text-[#0F766E]">
                50+
              </h4>
              <p className="text-gray-500 mt-2">
                Specialists
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold text-[#0F766E]">
                25+
              </h4>
              <p className="text-gray-500 mt-2">
                Hospitals
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold text-[#0F766E]">
                24x7
              </h4>
              <p className="text-gray-500 mt-2">
                Patient Support
              </p>
            </div>

          </div>

          <div className="
            mt-8
            pt-6
            border-t
            border-gray-200
          ">

            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-600">
                Free Consultation Support
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-600">
                Insurance Assistance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-600">
                Dedicated Care Managers
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= CONTENT ================= */}

      <section
        className="
        max-w-7xl mx-auto
        px-6 py-24
        grid lg:grid-cols-2
        gap-16
      "
      >

        {/* LEFT CARD */}

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-[0_15px_50px_rgba(0,0,0,0.05)]
          p-8
          space-y-8
          border border-gray-100
        "
        >

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div
              className="
              w-14 h-14
              rounded-2xl
              bg-[#0F766E]/10
              flex items-center justify-center
            "
            >
              <ShieldCheck
                className="text-[#0F766E]"
                size={28}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Jeevo Health
              </h2>

              <p className="text-gray-500 text-sm">
                Trusted Surgical Care
              </p>
            </div>
          </div>

          {/* CONTACT DETAILS */}

          <div className="space-y-5">

            <div className="flex items-start gap-4">

              <div
                className="
                w-12 h-12
                rounded-xl
                bg-[#0F766E]/10
                flex items-center justify-center
              "
              >
                <Phone
                  className="text-[#0F766E]"
                  size={22}
                />
              </div>

              <div>
                <p className="font-semibold text-[#0F172A]">
                  Call Us
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  +91 8182837993
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">

              <div
                className="
                w-12 h-12
                rounded-xl
                bg-[#0F766E]/10
                flex items-center justify-center
              "
              >
                <Mail
                  className="text-[#0F766E]"
                  size={22}
                />
              </div>

              <div>
                <p className="font-semibold text-[#0F172A]">
                  Email Support
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  support@jeevohealth.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">

              <div
                className="
                w-12 h-12
                rounded-xl
                bg-[#0F766E]/10
                flex items-center justify-center
              "
              >
                <MapPin
                  className="text-[#0F766E]"
                  size={22}
                />
              </div>

              <div>
                <p className="font-semibold text-[#0F172A]">
                  Location
                </p>

                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Delhi NCR, India
                </p>
              </div>
            </div>
          </div>

          {/* MINI MAP */}

          <div className="rounded-2xl overflow-hidden border border-gray-200">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923035354!2d77.06889990960757!3d28.52728034367427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5c9d5b0b9%3A0x4c842f59b4f4d4aa!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT FORM */}

        <form
          onSubmit={handleSubmit}
          className="
          bg-white
          rounded-[32px]
          shadow-[0_15px_50px_rgba(0,0,0,0.05)]
          p-8
          space-y-6
          border border-gray-100
        "
        >

          {/* TITLE */}
          <div>

            <span
              className="
              inline-block
              bg-[#0F766E]/10
              text-[#0F766E]
              px-4 py-2
              rounded-full
              text-sm font-semibold
            "
            >
              FREE CONSULTATION
            </span>

            <h2
              className="
              text-3xl font-bold
              text-[#0F172A]
              mt-4
            "
            >
              Book Your Consultation
            </h2>

            <p className="text-gray-500 mt-2">
              Our healthcare experts will connect with you shortly.
            </p>
          </div>

          {/* INPUTS */}

          <div className="grid md:grid-cols-2 gap-4">

            <input
              name="name"
              placeholder="Full Name"
              className="
              border border-gray-200
              rounded-2xl
              px-5 py-4
              outline-none
              focus:border-[#0F766E]
            "
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="
              border border-gray-200
              rounded-2xl
              px-5 py-4
              outline-none
              focus:border-[#0F766E]
            "
              onChange={handleChange}
              required
            />
          </div>

          {/* SELECTS */}

          <div className="grid md:grid-cols-2 gap-4">

            <select
              name="treatment"
              className="
              border border-gray-200
              rounded-2xl
              px-5 py-4
              outline-none
              focus:border-[#0F766E]
            "
              onChange={handleChange}
            >
              <option value="">
                Select Treatment
              </option>

              <option>
                LASIK Eye Surgery
              </option>

              <option>
                Kidney Stone Treatment
              </option>

              <option>
                Bariatric Surgery
              </option>

              <option>
                Orthopedic Care
              </option>
            </select>

            <select
              name="consultationType"
              className="
              border border-gray-200
              rounded-2xl
              px-5 py-4
              outline-none
              focus:border-[#0F766E]
            "
              onChange={handleChange}
            >
              <option value="">
                Consultation Type
              </option>

              <option>
                Online Consultation
              </option>

              <option>
                Hospital Visit
              </option>
            </select>
          </div>

          {/* CHECKBOXES */}

          <div>

            <p className="font-medium mb-3 text-[#0F172A]">
              Support Required
            </p>

            <div className="grid md:grid-cols-2 gap-3 text-sm">

              {[
                "Doctor Consultation",
                "Insurance Support",
                "EMI Assistance",
                "Hospital Coordination",
              ].map((item) => (

                <label
                  key={item}
                  className="
                  flex items-center gap-3
                  border border-gray-200
                  rounded-xl
                  px-4 py-3
                  cursor-pointer
                  hover:border-[#0F766E]
                  transition
                "
                >

                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleChange}
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* PHONE + CITY */}

          <div className="grid md:grid-cols-2 gap-4">

            <input
              name="phone"
              placeholder="Phone Number"
              className="
              border border-gray-200
              rounded-2xl
              px-5 py-4
              outline-none
              focus:border-[#0F766E]
            "
              onChange={handleChange}
            />

            <input
              name="city"
              placeholder="City"
              className="
              border border-gray-200
              rounded-2xl
              px-5 py-4
              outline-none
              focus:border-[#0F766E]
            "
              onChange={handleChange}
            />
          </div>

          {/* NOTE */}

          <p className="text-xs text-gray-500 leading-relaxed">
            By submitting this form, you agree to
            receive consultation and healthcare support
            communication from Jeevo Health.
          </p>

          {/* BUTTON */}

          <button
            type="submit"
            className="
            w-full
            bg-gradient-to-r
            from-[#0F766E]
            to-[#14b8a6]
            text-white
            py-4
            rounded-2xl
            font-semibold
            shadow-lg
            hover:brightness-110
            transition
          "
          >
            Get Free Consultation
          </button>
        </form>
      </section>

      {/* ================= FULL MAP ================= */}

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div
            className="
            h-[450px]
            rounded-[32px]
            overflow-hidden
            shadow-[0_15px_50px_rgba(0,0,0,0.06)]
            border border-gray-200
          "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923035354!2d77.06889990960757!3d28.52728034367427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5c9d5b0b9%3A0x4c842f59b4f4d4aa!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}