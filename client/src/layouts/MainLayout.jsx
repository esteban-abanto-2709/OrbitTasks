import Footer from '../components/Footer.jsx';

function MainLayout({ children }) {

    return (
        <div className="main-layout">
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;