import BannerBlack from "../../components/banner-black/banner-black";
import Footer from "../../components/footer/footer"; 
import Navigation from "../../components/navigation/navigation";

const PageTemplate = ({
    pageTitle,
    pageContent
}) => {
    return <div>
        <div className='page'>
            <Navigation/>
            <BannerBlack title={pageTitle} />
            <div className='page-content'>{
                typeof pageContent === 'function' ? 
                    pageContent()
                : pageContent
            }</div>
            <Footer />
        </div> 
    </div>
}

export default PageTemplate;