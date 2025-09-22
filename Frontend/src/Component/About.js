import './About.css';

const About = () => {
  return (
    <div className="container mt-1">
  <h1 className="text-center mb-4">About iNotebook</h1>
  
  <div className="accordion" id="aboutAccordion">

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
          Write and Organize Notes Effortlessly
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#aboutAccordion">
        <div className="accordion-body">
          iNotebook allows users to create notes quickly and organize them efficiently. Whether it's a personal diary entry, a study note, or a work-related idea, everything is stored in one secure place. Users can add titles, descriptions, and tags to keep their notes structured and easy to find.
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Read Your Notes Anytime, Anywhere
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#aboutAccordion">
        <div className="accordion-body">
          All your notes are stored in the cloud, allowing you to access them from any device. Whether you're on a computer, tablet, or smartphone, iNotebook ensures your notes are always available and synchronized across all devices.
        </div>
      </div>
    </div>

  
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Update and Edit Notes with Ease
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#aboutAccordion">
        <div className="accordion-body">
          iNotebook provides an intuitive interface to edit or update your existing notes. Made a mistake? Need to add new information? You can quickly modify your notes without losing any previous data, ensuring your information is always accurate and up-to-date.
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Secure and Private
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#aboutAccordion">
        <div className="accordion-body">
          Your privacy is our priority. iNotebook uses secure authentication so that only you can access your notes. All notes are stored safely in the cloud, giving you peace of mind that your personal information is protected.
        </div>
      </div>
    </div>

   
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Search and Organize Efficiently
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#aboutAccordion">
        <div className="accordion-body">
          Find your notes instantly with the built-in search and filter features. Users can sort notes by title, date, or tag, making it simple to locate any note in seconds—even if you have hundreds of entries.
        </div>
      </div>
    </div>

    
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSix">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          User-Friendly Interface
        </button>
      </h2>
      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#aboutAccordion">
        <div className="accordion-body">
          iNotebook is designed with simplicity in mind. The clean and intuitive layout makes note-taking enjoyable and hassle-free, ensuring a seamless experience whether you are a student, professional, or casual user.
        </div>
      </div>
    </div>

  </div>
</div>

  );
};

export default About;

