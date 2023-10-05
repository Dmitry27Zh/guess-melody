type MistakesProps = {
  count: number;
}

function Mistakes({ count }: MistakesProps): JSX.Element {
  const mistakes = Array.from({ length: count }, () => '');

  return (
    <div className="game__mistakes">
      {mistakes.map((mistake, index) => {
        const key = `mistake-${index}`;

        return <div className="wrong" key={key}>Mistake</div>;
      })}
    </div>
  );
}

export default Mistakes;
