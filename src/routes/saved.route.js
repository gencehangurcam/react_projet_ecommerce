import PageTemplate from "../templates/page/page.template";
import ProductSlider from '../components/product-slider/product-slider';

const SavedRoute = () => {
    return <>
        <PageTemplate
            pageTitle={"Saved Items"}
            pageContent={<>
                <ProductSlider data={[]} />
            </>}
        ></PageTemplate>
    </>
}

export default SavedRoute;