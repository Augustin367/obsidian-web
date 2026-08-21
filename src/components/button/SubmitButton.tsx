import { Button } from "../ui/button";

type Props = {
  onClick: () => void;
  pending?: boolean;
};

export default function SubmitButton({ onClick, pending }: Props) {
  return (
    <Button
      type="submit"
      disabled={pending}
      onClick={onClick}
      size={"lg"}
      className="w-full cursor-pointer hover:bg-black/90"
    >
      {pending ? "Salvando..." : "Salvar"}
    </Button>
  );
}
