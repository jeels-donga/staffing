import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './PageLayout';
import Home from '../Layout/Home/Home';
import Services from '../Layout/Services/Services';
import RecruitmentService from '../Layout/Recruitment/RecruitmentService';
import ProjectManagementService from '../Layout/ProjectManagement/ProjectManagementService';
import SoftwareService from '../Layout/Software/SoftwareService';
import Industries from '../Layout/Industries/Industries';
import AutomotiveSpecialization from '../Layout/AutomotiveSpecialization/AutomotiveSpecialization';
import AerospaceSpecialization from '../Layout/AerospaceSpecialization/AerospaceSpecialization';
import SemiconductorSpecialization from '../Layout/SemiconductorSpecialization/SemiconductorSpecialization';
import ITITESSpecialization from '../Layout/ITITESSpecialization/ITITESSpecialization';
import BankingSpecialization from '../Layout/BankingSpecialization/BankingSpecialization';
import FinanceSpecialization from '../Layout/FinanceSpecialization/FinanceSpecialization';
import InsuranceSpecialization from '../Layout/InsuranceSpecialization/InsuranceSpecialization';
import SalesTeamSpecialization from '../Layout/SalesTeamSpecialization/SalesTeamSpecialization';
import Jobs from '../Layout/Jobs/Jobs';
import AboutUs from '../Layout/AboutUs/AboutUs';
import Team from '../Layout/Team/Team';
import Blogs from '../Layout/Blogs/Blogs';
import Faq from '../Layout/Faq/Faq';
import LifeAtCrystal from '../Layout/LifeAtCrystal/LifeAtCrystal';
import ContactUs from '../Layout/ContactUs/ContactUs';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="service" element={<Services />} />
                <Route path="service/recruitment-service" element={<RecruitmentService />} />
                <Route path="service/project-management-service" element={<ProjectManagementService />} />
                <Route path="service/software-service" element={<SoftwareService />} />
                <Route path="industries" element={<Industries />} />
                <Route path="industries/automotive-specialization" element={<AutomotiveSpecialization />} />
                <Route path="industries/aerospace-specialization" element={<AerospaceSpecialization />} />
                <Route path="industries/semiconductor-specialization" element={<SemiconductorSpecialization />} />
                <Route path="industries/it-ites-specialization" element={<ITITESSpecialization />} />
                <Route path="industries/banking-specialization" element={<BankingSpecialization />} />
                <Route path="industries/finance-specialization" element={<FinanceSpecialization />} />
                <Route path="industries/insurance-specialization" element={<InsuranceSpecialization />} />
                <Route path="industries/sales-team-specialization" element={<SalesTeamSpecialization />} />
                <Route path="job" element={<Jobs />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="about-us/team" element={<Team />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/faq" element={<Faq />} />
                <Route path="life-at-crystal" element={<LifeAtCrystal />} />
            </Route>
        </Routes>
    );
};

export default Routers;