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
    <div className="w-full h-screen relative bg-[url('/images/main-bg.png')] bg-cover bg-center bg-no-repeat flex justify-center overflow-y-auto">
      <Navbar />
      <div className="w-[80%] h-full pt-[150px]">{children}</div>
    </div>
  );
}
