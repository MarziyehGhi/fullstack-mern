export default function SignIn() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <form>
        <input placeholder="email" type="text" />
        <input placeholder="password" type="text" />
      </form>
    </main>
  );
}
