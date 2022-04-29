import { useState } from "react";
import { getImage } from "../../services/apodService";

export const DateForm = ({ setImageOfTheDay, setErrorMessage }) => {
  const todayDate = new Date().toISOString().slice(0, 10) // today's date
  // TO DO: get the right today's date for mx
  const [date, setDate] = useState(todayDate);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');

    try {
      const { data: fetchedImage } = await getImage(date);
      setImageOfTheDay(fetchedImage);
    } catch (error) {
      const serverErrorMsg = error.response.data.msg || error.response.data.error.message || `Error on submit section: ${error.message}`;
      setErrorMessage(serverErrorMsg);
      setImageOfTheDay(null);
      // console.log(`Error on submit section: ${error.message}`)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="image-date-input"
          type="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <button type="submit">Show</button>
      </form>
    </>
  );
}