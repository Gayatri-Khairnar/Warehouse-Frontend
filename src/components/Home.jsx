import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';
import { Body } from './Body';
import { MyCarousel } from './MyCarousel';
import Registration from './Registration';
import WarehousePage from './WarehousePage';
export function Home() {
    return(
        <>
            <MyCarousel></MyCarousel>
            <Body></Body>
        </>
    );
}