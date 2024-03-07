import headerImg from '/quiz-logo.png';
export default function Header() {
  return (
    <header>
      <img src={headerImg} />
      <h1>React Quiz</h1>
    </header>
  );
}
