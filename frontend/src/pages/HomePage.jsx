import TasksList from "../components/TasksList";

const HomePage = ({ setForm, setIsId, isId }) => {
  //console.log(isId);

  return (
    <main>
      <section>
        <TasksList setIsId={setIsId} setForm={setForm} />
      </section>
    </main>
  );
};

export default HomePage;
