import PageTemplate from "../templates/page/page.template";
import Map from "../components/customMap/customMap"

const Content = () => {
    return (
        <Map width="100%" height="600px"/>
    );
}

const ContactRoute = () => {
    return (<>
        <PageTemplate
            pageTitle={"Contact"}
            pageContent={Content()}
        ></PageTemplate>
    </>)
}

export default ContactRoute;