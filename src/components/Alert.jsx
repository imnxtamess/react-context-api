import AlertContext from "../contexts/alertContext";
import { useContext } from "react";
export default function Alert() {
  const { type, message } = useContext(AlertContext);

  if (!message) return null;

  return (
    <div className="alert-container">
      <div className={`alert ${type || error}`}>{message}</div>
    </div>
  );
}
