import React from "react";
import "./page.css";


export default function PatientStoriesPageIndividual() {
    return (
        <div className="patient-story-container">
            <div className="patient-story-header">
                <h1>বোটক্স ট্রিটমেন্টের মাধ্যমে রোগীর সুস্থতা</h1>
            </div>
            <div className="patient-story-content">
                <img
                    src="https://www.evercarebd.com/sites/default/files/styles/patient_story/public/2023-08/Dr.%20Shamsul%20Alam%20Chy%20%281%29.jpg"
                    alt="Patient Story"
                    className="patient-story-image"
                />
                <div className="patient-story-text">
                    <p>
                        চট্টগ্রাম এভারকেয়ার হাসপাতালের নিউরোলজি বিভাগের সিনিয়র কনসালট্যান্ট ডা. শামসুল আলম চৌধুরী একজন রোগীর বোটক্স ট্রিটমেন্টের মাধ্যমে সুস্থতার গল্প শেয়ার করেছেন।
                    </p>
                    <p>
                        রোগীর মুখের বাঁ পাশে পেশীর অস্বাভাবিক টান এবং ব্যথা ছিল। বিভিন্ন চিকিৎসা নেওয়ার পরও উপশম হয়নি। অবশেষে বোটক্স ট্রিটমেন্টের মাধ্যমে রোগী সুস্থ হয়ে স্বাভাবিক জীবনে ফিরে যান।
                    </p>
                    <p>
                        এভারকেয়ার হাসপাতাল চট্টগ্রামে আধুনিক চিকিৎসা ও অভিজ্ঞ চিকিৎসকদের মাধ্যমে রোগীরা পাচ্ছেন উন্নত সেবা।
                    </p>
                </div>
            </div>
        </div>
    );
}