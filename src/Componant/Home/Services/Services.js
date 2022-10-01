import React from 'react';
import SchoolPsycologist from "../../Images/SchoolPsycologist.png";
import ClinicalPsycologist from "../../Images/ClinicalPsycologist.png";
import HelthPsycologist from "../../Images/helthPsycologist.png";
import PsycologistIcon from "../../Images/PsycologistSvgIcon.png";
import HumanPsycologist from "../../Images/humanPsycologist.png";
import PsycologistHome from "../../Images/PsycologistHome.png";
import PsycologistBed from "../../Images/PsycologistBed.png";
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: SchoolPsycologist
        },
        {
            _id: 2,
            name: "Teeth Whitening",
            description: "",
            img: HumanPsycologist
        },

        {
            _id: 3,
            name: "Cavity Filling",
            description: "",
            img: ClinicalPsycologist
        },
        {
            _id: 4,
            name: "Cavity Filling",
            description: "",
            img: PsycologistIcon
        },
        {
            _id: 5,
            name: "Teeth Whitening",
            description: "",
            img: HelthPsycologist
        },
        {
            _id: 6,
            name: "Teeth Whitening",
            description: "",
            img: PsycologistBed
        },
    ]
    return (
        <div className='mb-10'>
            <div className='mt-5 text-center text-3xl font-bold'>
                <h1>Our Services</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-middle justify-items-center gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
            <hr />
        </div>
    );
};

export default Services;