"use client"


 
import { addPostUser } from "@/lib/action";
import styles from "./userPostForm.module.css";
import { useFormState } from "react-dom";

const UserPostForm = ({userId}) => {

  const [state, formAction] = useFormState(addPostUser, undefined);

  
  return (
    <form action={formAction} className={styles.container}>
      <h1 className={styles.h1}>Create a new post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={5} />
      <button>Create Post</button>
      {state?.error}
    </form>
  );
};

export default UserPostForm;