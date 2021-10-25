
export function autoCompleteFunc(term) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(autocompleteStaticData);
    }, 2000);
  });
  return fetch(AutoComplete(term)).then((response) => response.json());
}






<div className="home">
<div className="input-div">
  <input
    value={autocompleteTerm}
    onChange={(event) => setAutocompleteTerm(event.target.value)}
    placeholder="Find city"
    className="cities-input"
  ></input>
  <button className="toggle" onClick={() => setToggle(!toggle)}>
    Search
  </button>
</div>
{autocompleteResults == undefined ? (
  <h1>loading...</h1>
) : (
  toggle &&
  autocompleteResults.map((i) => {
    return (
      <option
        // onClick={() => setAutocompleteTerm(i.LocalizedName)}
        // onClick={() => setCityKey(i.Key)}
        onClick={(name, key) => func1(i.LocalizedName, i.Key)}
        style={{ cursor: "pointer" }}
      >
        {i.LocalizedName}
      </option>
    );
  })
)}
</div>




