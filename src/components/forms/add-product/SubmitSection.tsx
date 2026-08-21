import SubmitButton from "@/components/button/SubmitButton";

type Props = {
  onSubmit: () => void;
};

export default function SubmitSection({ onSubmit }: Props) {
  return (
    <section>
      <SubmitButton onClick={onSubmit} />
    </section>
  );
}
