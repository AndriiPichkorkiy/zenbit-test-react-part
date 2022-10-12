import FeedbackPage from "./page/FormPage/FeedbackPage";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

function App() {
  return (
    <>
      <FeedbackPage />
      <NotificationContainer />
      </>
  );
}

export default App;
