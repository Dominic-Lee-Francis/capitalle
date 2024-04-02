const [country, setCountry] = useState(null);
useEffect(() => {
  const getCountry = async () => {
    fetch("http://localhost:8080/capital", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((resObject) => {
        setCountry(resObject);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getCountry();
}, []); // Add an empty dependency array to run the effect only once
console.log(country);
