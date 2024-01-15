import Navbar from "@/app/components/Navbar";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/");
  // }
  return (
    <div className="w-full h-screen relative bg-[url('/images/main-bg.png')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      {children}
    </div>
  );
}
