import ReviewCard from "./ReviewCard";
import Button from "../NavButton/Button";

export default function ReviewSection() {
  return (
    <section className="bg-warning mb-1">
      <div className="container bg-black">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col text-center text-white">
            <h3>Review Section</h3>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              aspernatur autem consequuntur debitis dolorum eaque enim est
              explicabo fugit hic impedit ipsam iusto, laudantium magnam maxime
              molestiae natus nihil nisi nostrum officia perspiciatis porro
              quaerat quas quibusdam quidem quod reiciendis repellat repellendus
              rerum.
            </p>
            <Button>Start Building Your PC Now!</Button>
          </div>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}