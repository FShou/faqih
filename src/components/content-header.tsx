interface ContentHeaderProps {
  slug: string
}


export default function ContentHeader({slug}:ContentHeaderProps) {
  return (
    <div>
      <h1>THis is Content Header for {slug}</h1>
    </div>
  );
}
