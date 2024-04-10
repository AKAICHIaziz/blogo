"use client"

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <form action={formAction} className={styles.container}>
            <h1>Add New User</h1>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="text" name="img" placeholder="img" />
            <button>Add</button>
            <select name="isAdmin" >
                <option value="false">IsAdmin?</option>
                <option value="false">User</option>
                <option value="true">Admin</option>
            </select>
            {state?.error}
        </form>
    );
};

export default AdminUserForm;