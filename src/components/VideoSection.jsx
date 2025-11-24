


function VideoSection() {
  return (
    <section  className="video">
      <h1 className="videotitle">Ficou com vontade? Dá uma olhada nesse vídeo: </h1>
      <div className="div_video">
        <div className="div_iframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lj9n24x5z9I?si=Wch7LLWb1RflqCEd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
