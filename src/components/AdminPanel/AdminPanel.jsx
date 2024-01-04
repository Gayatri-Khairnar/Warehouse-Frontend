import { AdminNavbar } from "./AdminNavbar";
import { Users } from "./Users";
import { Warehouses } from "./Warehouses";

export function AdminPanel() {
    return(
        <>
            <AdminNavbar></AdminNavbar>
            <Users/>
            <Warehouses/>
        </>
    );
}