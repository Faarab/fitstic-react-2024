export default function TodoListItem(props: {
  readonly item: string;
  readonly onDelete: (index: number) => void;
  readonly index: number
}) {
  const { item, onDelete, index } = props;

  return (
    <>
      <div key={index}>
        <button onClick={() => onDelete(index)}>X</button>
          {item}   
      </div>
    </>
  );
}
