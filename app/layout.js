import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Bootstrap from '../libs/Bootstrap';
import FooterSection from '../components/FooterSection';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        {/* <Navbar /> */}
        <main className="flex-grow-1">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}