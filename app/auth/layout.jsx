import AuthHeader from "@/components/Header/AuthHeader";

function layout({ children }) {
  return (
    <section>
      <div className="shadow-md">
        <AuthHeader />
      </div>

      {children}
    </section>
  );
}

export default layout;
