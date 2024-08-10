import React from "react";
import { Link, useNavigate } from "react-router-dom";
import person from "../assets/person.png";
import blood from "../assets/icons/blood.png";
import weight from "../assets/icons/weight.png";
import height from "../assets/icons/height.png";
import locations from "../assets/icons/location.png";
import calender from "../assets/icons/calender.png";
import peopleicon from "../assets/icons/peopleicon.png";
import back from "../assets/icons/back.png";
import Sidebar from "@/components/Sidebar";
import UserCard from "@/components/UserCard";
import downgray from "../assets/icons/downgray.png";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import BackBtn from "@/components/BackBtn";

const data = [
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
];

const healthConditions = [
  {
    health: "Hipertensión / Presión Arterial Alta",
    date: "June 4, 2006",
    Medications: "June 4, 2006",
    treatedBy: "Dr. Who",
    note: true,
  },
  {
    health: "Diabetes mellitus tipo 1 (DM)",
    date: "June 4, 2006",
    Medications: "June 4, 2006",
    treatedBy: "Dr. Who",
    note: true,
  },
];
const medications = [
  {
    name: "Vitamin D 2000 mg",
    dosage: "2 Tablet - once daily, Before Meals",
    takenFor: "",
    from: "25/08/2021",
    till: null,
    prescribedBy: "Dr. Who",
  },
];
const vaccinations = [
  {
    name: "Pfizer",
    for: "Covid 19",
    doneOn: "25/05/2021",
    details: "Pfizer-BioNTech",
    notes: null, // This is a field where notes would go; in the image, it appears as an icon
  },
];
const familyMedicalHistory = [
  {
    familyMember: "Mother",
    knownHealthConditions: "Diabetes",
  },
];
const hospitalizations = [
  {
    reason:
      "Infección Respiratoria Baja Neumonía Bilateral Multifocal Por Sars Cov 2",
    when: "23/05/2021 - 29/05/2021",
    where: "Clínica San Javier",
    dischargeReport: "None",
  },
];
const socialHistory = [
  { label: "Occupation", value: "Engineer" },
  { label: "Education", value: "Msc 2008" },
  { label: "Birthplace", value: "Barquisimeto" },
  { label: "Marital Status", value: "Married" },
  { label: "Children", value: "2 daughters" },
  { label: "Religion", value: "Agnostic" },
  { label: "General Diet", value: "Vegan" },
  { label: "Sexual Orientation", value: "Heterosexual" },
  { label: "Smoking", value: "No" },
  { label: "Alcohol Consumption", value: "No" },
  { label: "Substance use", value: "None" },
  { label: "Exercise", value: "Running" },
  { label: "Stress Factor", value: "Relaxed" },
  { label: "Language spoken", value: "Spanish" },
];

const allergies = [];
const surgeriesImplants = [];
function HealthProfile() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };
  return (
    <div className=" flex">
      <Sidebar />
      <div className="flex-1 mx-[32px] mt-[32px] ">
        <BackBtn />

        <div className="flex flex-1 bg-white rounded-[8px] p-[20px] shadow">
          <img
            src={person}
            alt=""
            className="w-[80px] h-[80px] rounded-[50%] border"
          />
          <div className="border mx-[24px]" />
          <div className="flex-1 ">
            <h1 className="text-[24px] text-darkblue font-[700] mb-[16px] ">
              {/* {user?.fullName} */}Jenny Wilson
            </h1>
            <div className=" flex-1 flex items-center justify-between flex-wrap gap-3 pr-[40px]">
              <UserCard
                title="Sex"
                data="Female"
                img={
                  <img
                    src={peopleicon}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Age"
                data="36"
                img={
                  <img
                    src={calender}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />

              <UserCard
                title="Blood type"
                data="O+"
                img={
                  <img
                    src={blood}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Height"
                data="165 cm"
                img={
                  <img
                    src={height}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Weight"
                data="60 kg"
                img={
                  <img
                    src={weight}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Location"
                data="Mexico"
                img={
                  <img
                    src={locations}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
            </div>
          </div>
        </div>
        {/* first row */}
        <div className="flex flex-col gap-[24px] py-[50px]">
          <p className="text-[#00263E] my-[24px] font-bold text-[24px]">
            Health trackers
          </p>
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">
              Health conditions
            </h1>
            <Table className=" shadow-3xl">
              <TableHeader className=" rounded-[8px] border-t border-[#eee]">
                <TableRow>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">
                      Health condition
                    </p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">Diagnosed in</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Medications</p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">Treated by</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Notes</p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {healthConditions?.map((data) => (
                  <TableRow className="" key={data?.health}>
                    <TableCell className="text-[#3E79F7]">
                      {data?.health}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.date}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.Medications}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.treatedBy}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.note}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* second row */}
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">
              Medications
            </h1>
            <Table className=" shadow-3xl">
              <TableHeader className=" rounded-[8px] border-t border-[#eee]">
                <TableRow>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Medication</p>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Dosage</p>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Taken for</p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">From - Till</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">
                        Prescribed by
                      </p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medications?.map((data) => (
                  <TableRow className="" key={data?.name}>
                    <TableCell className="text-[#3E79F7]">
                      {data?.name}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.dosage}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.takenFor}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.from}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.prescribedBy}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Third row */}
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">
              Health conditions
            </h1>
            <Table className=" shadow-3xl">
              <TableHeader className=" rounded-[8px] border-t border-[#eee]">
                <TableRow>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">
                      Health condition
                    </p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">Diagnosed in</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Medications</p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">Treated by</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Notes</p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vaccinations?.map((data) => (
                  <TableRow className="" key={data?.name}>
                    <TableCell className="text-[#3E79F7]">
                      {data?.name}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.for}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.doneOn}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.details}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* forth table */}
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">Allergies</h1>
            <Table className=" shadow-3xl">
              <TableHeader className=" rounded-[8px] border-t border-[#eee]">
                <TableRow>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Allergy</p>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Triggered By</p>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Medications</p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">Last Updated</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Reaction</p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">First noted</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Notes</p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allergies?.map((data) => (
                  <TableRow className="" key={data?.health}>
                    <TableCell className="text-[#3E79F7]">
                      {data?.health}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.date}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.Medications}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.treatedBy}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.note}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.note}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.note}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>
              <p className="text-[#3E79F7] text-center py-[12px]">
                This patient has no allergies added.
              </p>
            </div>
          </div>
          {/* fifth table */}
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">
              Family medical history
            </h1>
            <Table className=" shadow-3xl">
              <TableHeader className=" rounded-[8px] border-t border-[#eee]">
                <TableRow>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Family Member</p>
                  </TableHead>

                  <TableHead>
                    <p className="text-[#1A3353] font-medium">
                      Known Health Conditions
                    </p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {familyMedicalHistory?.map((data) => (
                  <TableRow className="" key={data?.familyMember}>
                    <TableCell className="text-[#3E79F7]">
                      {data?.familyMember}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.knownHealthConditions}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* sixth table */}
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">
              Hospitalizations
            </h1>
            <Table className=" shadow-3xl">
              <TableHeader className=" rounded-[8px] border-t border-[#eee]">
                <TableRow>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Reason</p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">When</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>

                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">Where</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">
                      Discharge Report
                    </p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hospitalizations?.map((data) => (
                  <TableRow className="" key={data?.health}>
                    <TableCell className="text-[#3E79F7] w-[25%]">
                      {data?.reason}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.when}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.where}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.dischargeReport}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* 7th table  */}
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">
              Surgeries / Implants
            </h1>
            <Table className=" shadow-3xl">
              <TableHeader className=" rounded-[8px] border-t border-[#eee]">
                <TableRow>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Surgery</p>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Implant</p>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">Done on</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>

                  <TableHead>
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">By</p>
                      <img
                        src={downgray}
                        alt=""
                        className="w-[10px] h-[5px] object-contain"
                      />
                    </div>
                  </TableHead>
                  <TableHead>
                    <p className="text-[#1A3353] font-medium">Notes</p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {surgeriesImplants?.map((data) => (
                  <TableRow className="" key={data?.health}>
                    <TableCell className="text-[#3E79F7] w-[25%]">
                      {data?.reason}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.when}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.where}
                    </TableCell>
                    <TableCell className="text-[#455560]">
                      {data?.dischargeReport}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>
              <p className="text-[#3E79F7] text-center py-[12px]">
                This patient has no surgeries or Implants added.
              </p>
            </div>
          </div>
          {/* 8 th table */}
          <div className="bg-white rounded-[8px]">
            <h1 className="text-darkblue font-semibold px-4 py-5">
              Social history
            </h1>
            <Table className="shadow-3xl border border-[#eee]">
              <TableBody>
                <TableRow>
                  <TableCell className="w-1/2 p-4 border-r border-[#eee]">
                    <div className="flex flex-col space-y-2 gap-[8px]">
                      {socialHistory
                        .slice(0, Math.ceil(socialHistory.length / 2))
                        .map((data, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-[3px]"
                          >
                            <span className="font-medium text-[#1A3353]">
                              {data.label}:
                            </span>
                            <span className="text-[#455560]">{data.value}</span>
                          </div>
                        ))}
                    </div>
                  </TableCell>
                  <TableCell className="w-1/2 p-4">
                    <div className="flex flex-col gap-[8px] space-y-2">
                      {socialHistory
                        .slice(Math.ceil(socialHistory.length / 2))
                        .map((data, index) => (
                          <div key={index} className="flex items-center ">
                            <span className="font-medium text-[#1A3353]">
                              {data.label}:
                            </span>
                            <span className="text-[#455560]">{data.value}</span>
                          </div>
                        ))}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthProfile;
