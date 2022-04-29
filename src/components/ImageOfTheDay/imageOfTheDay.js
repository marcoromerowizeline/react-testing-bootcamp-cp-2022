export const ImageOfTheDay = ({ imageOfTheDay }) => {
  return (
    <>
      {!imageOfTheDay ?
        <div>There's no image of that day, yet...</div>
        :
        <div className="flex">
          <div className="image-container">
            <h3>{imageOfTheDay.title}</h3>
            <p>{imageOfTheDay.date}</p>
            <img src={imageOfTheDay.url} alt={imageOfTheDay.title} /></div>
          <div className="description-container">{imageOfTheDay.explanation}</div>
        </div>
      }
    </>
  );
}
