export default function History({ history, setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {history?.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

//Har valgt å ikke importere denne til App.jsx da dette var noe vi gjorde i forelesning og egentlig ikke relevant for oppgaven. LocaleStorage skal fremdeles være på plass, men vises ikke fysisk på siden.
