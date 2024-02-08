import Layout from "@/components/layouts/Layout";
import ListView from "@/components/lists/ListView";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import styles from "./Today.module.css";
import { tasks } from "../../components/demo-data/today";
import { useRouter } from "next/router";

export type Tasks = {
  id: number;
  title: string;
  project: string;
  due: Date;
  done: boolean;
};

export default function TodayPage() {
  const router = useRouter();
  return (
    <Layout
      title="Today's Tasks"
      addButton={{
        label: "New",
        onClick: () => router.push("/tasks/new"),
      }}
    >
      <ListView
        listItems={tasks.map(({ id, title, project, due, done }) => ({
          id: `${id}`,
          title,
          description: `${project}; Due: ${due.toLocaleDateString()}`,
          detailOnClick: () => router.push(`/tasks/${id}`),
          iconOnClick: () => alert(done ? "open again" : "is done now"),
          Icon: done ? (
            <IoCheckboxSharp className={styles.isDone} />
          ) : (
            <IoSquareOutline className={styles.isOpen} />
          ),
        }))}
      />
    </Layout>
  );
}