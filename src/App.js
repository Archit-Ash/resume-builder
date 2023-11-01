import "./App.css";
import PersonalInfo from "./form";

const generatePdf = (selfinfo) => {
  const doc = new jsPDF();
  doc.addFont("calibri");
  doc.setFont("calibri");

  var pageWidth =
    doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

  //biodata
  doc.setTextColor("#576C7A");
  doc.setFontSize(30);
  doc.textWithLink(selfinfo.selfName.toUpperCase(), pageWidth / 2, 15, {
    align: "center",
    url: selfinfo.profile,
  });
  doc.setDrawColor("#576C7A");
  doc.setLineWidth(0.1);
  doc.line(5, 17, pageWidth - 5, 17);
  doc.setLineWidth(0.5);
  doc.line(5, 18, pageWidth - 5, 18);
  doc.setTextColor("#000000");
  doc.setFontSize(10);
  doc.text(selfinfo.selfLocation, pageWidth / 2, 23, {
    align: "center",
  });
  doc.text(
    selfinfo.selfEmail + "   •   " + selfinfo.selfNumber,
    pageWidth / 2,
    28,
    {
      align: "center",
    }
  );
  doc.setTextColor("#576c7a");
  doc.setFontSize(15);
  doc.text("Education", 10, 38);
  doc.setLineDash([1, 1], 0);
  doc.line(10, 40, pageWidth - 10, 40);
  doc.setTextColor("#000000");
  doc.setFontSize(12);
  doc.setTextColor("#576c9f");
  doc.text("HIGHSCHOOL", 45, 47);
  doc.setTextColor("#000000");
  doc.text(
    selfinfo.school_name10 +
      " | " +
      selfinfo.percentage_10 +
      " | " +
      selfinfo.year_10,
    50,
    52
  );
  doc.setTextColor("#576c9f");
  doc.text("INTERMEDIATE", 45, 59);
  doc.setTextColor("#000000");
  doc.text(
    selfinfo.school_name12 +
      " | " +
      selfinfo.percentage_12 +
      " | " +
      selfinfo.year_12,
    50,
    64
  );
  doc.setTextColor("#576c9f");
  doc.text("GRADUATION", 45, 71);
  doc.setTextColor("#000000");
  doc.text(
    selfinfo.school_name12 +
      " | " +
      selfinfo.percentage_12 +
      " | " +
      selfinfo.year_12,
    50,
    76
  );
  doc.setFontSize(15);
  doc.setTextColor("#576c7a");
  doc.text("Projects", 10, 83);
  doc.setLineDash([1, 1], 0);
  doc.line(10, 85, pageWidth - 10, 85);
  doc.setTextColor("#000000");
  doc.setFontSize(12);
  doc.setTextColor("#576c9f");
  doc.textWithLink(selfinfo.projectName1, 45, 92, {
    url: selfinfo.projectLink1,
  });
  doc.setTextColor("#000000");
  doc.text(selfinfo.projectDetails1, 50, 97);
  doc.text(selfinfo.tools1, 50, 102);
  doc.setTextColor("#576c9f");
  doc.textWithLink(selfinfo.projectName2, 45, 110, {
    url: selfinfo.projectLink2,
  });
  doc.setTextColor("#000000");
  doc.text(selfinfo.projectDetails2, 50, 115);
  doc.text(selfinfo.tools2, 50, 120);
  doc.setTextColor("#576c9f");
  doc.textWithLink(selfinfo.projectName3, 45, 127, {
    url: selfinfo.projectLink3,
  });
  doc.setTextColor("#000000");
  doc.text(selfinfo.projectDetails3, 50, 132);
  doc.text(selfinfo.tools3, 50, 137);

  doc.setTextColor("#576c7a");
  doc.setFontSize(15);
  doc.text("Languages Known", 10, 144);
  doc.setLineDash([1, 1], 0);
  doc.line(10, 146, pageWidth - 10, 146);
  doc.setTextColor("#576c9f");
  doc.text(selfinfo.languages, 45, 153);

  doc.setTextColor("#576c7a");
  doc.setFontSize(15);
  doc.text("Technical Skills", 10, 164);
  doc.setLineDash([1, 1], 0);
  doc.line(10, 166, pageWidth - 10, 166);
  doc.setTextColor("#576c9f");
  doc.setFontSize(12);
  doc.text(selfinfo.technicalSkills, 45, 172);

  doc.setTextColor("#576c7a");
  doc.setFontSize(15);
  doc.text("Certificates", 10, 180);
  doc.setLineDash([1, 1], 0);
  doc.setFontSize(12);
  doc.line(10, 182, pageWidth - 10, 182);
  doc.setTextColor("#576c9f");
  doc.textWithLink(selfinfo.certification1, 45, 189, {
    url: selfinfo.certificate1,
  });
  doc.textWithLink(selfinfo.certification2, 45, 196, {
    url: selfinfo.certificate2,
  });

  doc.setTextColor("#576c7a");
  doc.setFontSize(15);
  doc.text("Profiles", 10, 202);
  doc.setLineDash([1, 1], 0);

  doc.line(10, 204, pageWidth - 10, 204);
  doc.setTextColor("#576c9f");
  doc.text("Linkedin", 45, 212);
  doc.text("Github", 45, 224);
  doc.setFontSize(12);
  doc.setTextColor("#000000");
  doc.textWithLink(selfinfo.linkedin, 50, 217, { url: selfinfo.linkedin });
  doc.textWithLink(selfinfo.github, 50, 229, { url: selfinfo.github });

  doc.setTextColor("#576c7a");
  doc.setFontSize(15);
  doc.text("Summary", 10, 237);
  doc.setLineDash([1, 1], 0);

  doc.line(10, 239, pageWidth - 10, 239);

  doc.setTextColor("#000000");
  doc.setFontSize(12);
  doc.text(selfinfo.activities, 45, 247, { maxWidth: 150 });

  doc.save("Resume.pdf");
};

function App() {
  const handleFormSubmit = (selfinfo) => {
    console.log("Form data received in App:", selfinfo);
  };
  return (
    <div>
      <h1>RESUME BUILDER</h1>

      <PersonalInfo
        onFormSubmit={(handleFormSubmit, generatePdf)}
      ></PersonalInfo>
    </div>
  );
}

export default App;
