import TopBar from "./TopBar";
import ContentRoWTop from "./ContentRowTop";
import Footer from "./Footer";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRoWTop />
                <Footer />
            </div>
        </div>
    )
}

export default ContentWrapper