import { useAlertContext } from "../contexts/alertContext";

export default function Alert() {
  const { alertData } = useAlertContext();
  const { type, message } = alertData;

  if (!message) return null;

  return (
    <div className="alert-container">
      <div className={`alert ${type || error}`}>{message}</div>
    </div>
  );
}
