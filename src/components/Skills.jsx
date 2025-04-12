import React from "react";

const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 75 },
    { name: "PHP", percent: 80 },
    { name: "WordPress/CMS", percent: 90 },
    { name: "Photoshop", percent: 55 },
    { name: "ReactJS", percent: 20 },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-white py-10">
        <div className="container mx-auto px-4">
            <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-800 mb-2">Skills</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-700 max-w-xl mx-auto">
            A lo largo de mi formación y experiencia, he desarrollado habilidades en diseño, desarrollo web y gestión de contenido. Estas tecnologías forman parte de mi stack actual y reflejan mi compromiso con la mejora continua.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
                <div key={index}>
                <div className="flex justify-between mb-1">
                    <span className="text-md font-medium text-gray-800">{skill.name}</span>
                    <span className="text-md font-medium text-blue-700">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                    <div
                    className="bg-indigo-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percent}%` }}
                    ></div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Skills;
