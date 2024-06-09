import './Intro.css';
import Button from '../NavButton/Button';

export default function IntroSection() {
  return (
    <section className="intro mb-3">
      <div className="container col-sm-6">
        <h1 className="text-center text-white mb-4 p-2">
          Pick Parts needed - Build Your Own PC - Compare - Analyse - Share
        </h1>
        <div className="text-center ">
          <Button/>
        </div>
      </div>
    </section>
  );
}