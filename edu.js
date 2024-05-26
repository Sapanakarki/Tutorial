document.addEventListener("DOMContentLoaded", function() {
    const profile = {
        highSchool: {
            name: " Glorious High School",
            location: "Butwal, KalikaNagar",
            graduationYear: 2022,
            highlights: [
                "Graduated with Honors",
                "Member of the National Honor Society",
                "Captain of the Math Club"
            ]
        },
        currentProgram: {
            institution: "Pokhara University",
            location: "Bhalwari, Tilottama",
            program: "Bachelor in Computer Science",
            expectedGraduationYear: 2022,
            highlights: [
                "Dean's List for consecutive semesters",
                "Research Assistant in AI Lab",
                "President of the Coding Club"
            ]
        }
    };

    const profileContainer = document.getElementById('profile');

    const highSchoolSection = document.createElement('div');
    highSchoolSection.innerHTML = `
        <h2 class="section-title">High School Education</h2>
        <p><strong>School Name:</strong> ${profile.highSchool.name}</p>
        <p><strong>Location:</strong> ${profile.highSchool.location}</p>
        <p><strong>Graduation Year:</strong> ${profile.highSchool.graduationYear}</p>
        <p><strong>Highlights:</strong></p>
        <ul>${profile.highSchool.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
    `;

    const currentProgramSection = document.createElement('div');
    currentProgramSection.innerHTML = `
        <h2 class="section-title">Current Program</h2>
        <p><strong>Institution:</strong> ${profile.currentProgram.institution}</p>
        <p><strong>Location:</strong> ${profile.currentProgram.location}</p>
        <p><strong>Program:</strong> ${profile.currentProgram.program}</p>
        <p><strong>Expected Graduation Year:</strong> ${profile.currentProgram.expectedGraduationYear}</p>
        <p><strong>Highlights:</strong></p>
        <ul>${profile.currentProgram.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
    `;

    profileContainer.appendChild(highSchoolSection);
    profileContainer.appendChild(currentProgramSection);
});
