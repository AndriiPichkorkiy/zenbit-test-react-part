import FeedBackForm from "../../components/FeedBackForm/FeedBackForm";
import FeedbackPageStyled from "../../components/FeedbackPageStyled";
import Footer from "../../components/Footer/Footer";

const FeedbackPage = () => {
    return (
        <>
            <FeedbackPageStyled>
                <FeedBackForm />
            </FeedbackPageStyled>
            <Footer />
        </>
    );
}

export default FeedbackPage;