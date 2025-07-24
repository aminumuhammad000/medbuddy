import style from "./DoctorAvailability.module.css";
const DoctorAvailability = () => {
  const availableDays = [
    { day: "Sunday", available: false },
    { day: "Monday", available: true },
    { day: "Tuesday", available: false },
    { day: "Wednesday", available: true },
    { day: "Thursday", available: true },
    { day: "Friday", available: false },
    { day: "Saturday", available: true },
  ];

  return (
    <div className={style.DoctorAvailability}>
      <ul className={style.session} id="flexAlignCenter">
        <li>Session types:</li>
        <li>Video Call</li>
        <li>In-Person</li>
        <li>Phone Call</li>{" "}
      </ul>
      <table className={style.table}>
        <tr>
          <td id="text30" className={style.head}>
            Day
          </td>
          <td id="text30" className={style.head}>
            Status
          </td>
        </tr>
        <tbody>
          {availableDays.map(
            (item, index) =>
              item.available && (
                <tr key={index}>
                  <td id="text30">{item.day}</td>
                  <td id="text30" className={style.available}>
                    Available
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorAvailability;
