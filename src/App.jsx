import NavBar from "./Components/GeneralBlock/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PatientTable from "./Components/Patient/PatientTable";
import DoctorDetails from "./Components/Doctor/DoctorDetails";
import DetailsTable from "./Components/Doctor/DoctorCard";
import WritePrescription from "./Components/Patient/WritePrescription";

import AddDoctor from "./Components/Doctor/AddDoctor";
import Login from "./Components/GeneralBlock/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormUpdate from "./Components/Doctor/FormUpdate";
import PatientAdd from "./Components/Patient/AddPatient";


import Nurse from "./Components/Nurse/NurseCard";
import NurseUpdate from "./Components/Nurse/NurseUpdate";
import NurseDetails from "./Components/Nurse/NurseDetails";
import NurseCreate from "./Components/Nurse/AddNurse";
import ExcuseAbsence from "./Components/Patient/ExcuseAbsence";
import WriteVitalSigns from "./Components/Patient/WriteVitalSigns";
import GetPrescription from "./Components/Patient/Prescription";
import HistoryVitalSigns from "./Components/Patient/vitalSignsHistory";
import Home from "./Components/GeneralBlock/Home";
import WriteDiagnose from "./Components/Patient/WriteDiagnose";
import GetDiagnose from "./Components/Patient/GetDiagnose";
import EditDiagnose from "./Components/Patient/EditDiagnose";
import Drugs from "./Components/GeneralBlock/Drug";
import OrderDrug from "./Components/GeneralBlock/OrderDrug";
import Msg from "./Components/GeneralBlock/ToastMsg";
import ReceiverDrug from "./Components/GeneralBlock/DrugsReceiver";
// Management-Pages
import AddManagement from "./Components/Management/AddManagement";
import ManagementCard from "./Components/Management/ManagementCard";
import ManagementDetails from "./Components/Management/ManagementDetails";
import ManagementUpdate from "./Components/Management/ManagementUpdate";
// Pharmacist-pages
import AddPharmacist from "./Components/Pharmacist/AddPharmacist";
import PharmacistCard from "./Components/Pharmacist/PharmacistCard";
import PharmacistDetails from "./Components/Pharmacist/PharmacistDetails";
import PharmacistUpdate from "./Components/Pharmacist/PharmacistUpdate";



const diagnosisData = {
  patientId: "12345",
  symptoms: "Fever, cough, and fatigue",
  diagnosisText: "Acute Viral Infection",
  notes: "Recommended rest and hydration. Follow up in one week.",
};
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Msg message="success msg" type="warning" />
      <Routes>
        <Route path="/Drugs" element={<Drugs />} />
        <Route path="/ReceiverDrug" element={<ReceiverDrug />} />
        <Route path="/order-drugs" element={<OrderDrug />} />

        <Route path="/" element={<Home />} />
        <Route path="/write-diagnose" element={<WriteDiagnose />} />
        <Route
          path="/get-diagnose"
          element={<GetDiagnose diagnosis={diagnosisData} />}
        />
        <Route
          path="/edit-diagnosis"
          element={<EditDiagnose initialDiagnosis={diagnosisData} />}
        />
        {/* management routes */}
        <Route path="/add-staff" element={<AddManagement/>}/>
        <Route path="/staff-details" element={<ManagementDetails/>}/>
        <Route path="/staff-update" element={<ManagementUpdate/>}/>
        <Route path="/staff-card" element={<ManagementCard/>}/>
        {/* Pharmacist routes */}
        <Route path="add-pharmacist" element={<AddPharmacist/>}/>
        <Route path="Pharmacist-details" element={<PharmacistDetails/>}/>
        <Route path="/Pharmacist-update" element={<PharmacistUpdate/>}/>
        <Route path="/Pharmacist-card" element={<PharmacistCard/>}/>



        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<DetailsTable />} />
        <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        <Route path="/doctor-update/:id" element={<FormUpdate />} />
        <Route path="/patients" element={<PatientTable />} />
        <Route path="/write-prescription" element={<WritePrescription />} />
        <Route path="/create-doctor" element={<AddDoctor />} />
        <Route path="/create-patient" element={<PatientAdd />} />

        <Route path="/nurses" element={<Nurse />} />
        <Route path="/nurse-details" element={<NurseDetails />} />
        <Route path="/nurse-update" element={<NurseUpdate />} />
        <Route path="/create-nurse" element={<NurseCreate />} />

<Route path="/issue-ExcuseAbsence" element={<ExcuseAbsence/>}/>
        <Route path="/Write-VitalSigns" element={<WriteVitalSigns />} />
        <Route path="/get-prescription" element={<GetPrescription />} />
        <Route path="/get-VitalSigns" element={<HistoryVitalSigns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
