import React, { useEffect, useState } from "react";
import { categorys, projects } from "../components/Data";
import Aos from "aos";
import Modal from "../components/Modal";

const Projects = () => {
  const [showModal, setShowModal] = useState({ show: false, data: [] });
  const [value, setValue] = useState({
    id: 1,
    category: "ALL",
  });

  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  });

  const handleModal = (id) => {
    const projectItem = projects.filter((item) => item.id === id);
    setShowModal({ show: !showModal.show, data: projectItem });
  };

  return (
    <div className="wrapper-project">
      <section className="projects" id="projects">
        <h1 className="title" data-aos="flip-right">
          PROJECTS <div className="underline"></div>
        </h1>
        <div
          style={{
            fontSize: ".8rem",
            textAlign: "center",
          }}
        >
          <i>Few projects before the start of my professional carrier.</i>
        </div>

        <main className="projects_main">
          <ul className="tabs">
            {categorys.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    className={`${
                      value.id === item.id ? "button-live button" : "button"
                    }`}
                    onClick={() =>
                      setValue({
                        id: item.id,
                        category: item.category,
                      })
                    }
                  >
                    {item.category}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="projects_list">
            {projects.map((item) => {
              if (
                value.category === "ALL"
                  ? value.category === "ALL"
                  : value.category === item.category
              ) {
                return (
                  <div key={item.id} className="projects_list--item">
                    <div className="overlay">
                      <div className="overlay_text">
                        <h1 className="name">{item.name}</h1>
                        <p className="technologies">{item.technologies}</p>
                      </div>
                      <button
                        className="button"
                        onClick={() => handleModal(item.id)}
                      >
                        Learn More
                      </button>
                    </div>
                    <img src={item.image} alt={item.name} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </main>
        {showModal.show && (
          <Modal
            data={showModal.data}
            modalState={showModal}
            setModalState={setShowModal}
          />
        )}
      </section>
    </div>
  );
};

export default Projects;
