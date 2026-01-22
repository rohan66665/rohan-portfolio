function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div>
        <h3>RAG-based GenAI Chatbot</h3>
        <ul>
          <li>Built a Retrieval-Augmented Generation (RAG) system using LLMs.</li>
          <li>Implemented document ingestion, embeddings, and vector search.</li>
          <li>Deployed backend on AWS and frontend using modern frameworks.</li>
        </ul>
      </div>

      <div>
        <h3>Health Risk Prediction System</h3>
        <ul>
          <li>Developed ML model for health risk prediction.</li>
          <li>Performed data preprocessing, training, and evaluation in Python.</li>
          <li>Deployed using Streamlit for real-time predictions.</li>
        </ul>
      </div>

      <div>
        <h3>Full-Stack AI Applications</h3>
        <ul>
          <li>Built AI-powered apps using Django/FastAPI + React.</li>
          <li>Integrated APIs, handled CORS, auth, and deployments.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
