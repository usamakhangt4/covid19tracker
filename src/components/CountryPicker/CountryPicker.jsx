import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

export default function CountryPicker({ handleCountryChange }) {
                 const [fetchedCountries, setFetchedCountries] = useState([]);

                 useEffect(() => {
                   const fetchApi = async () => {
                     setFetchedCountries(await fetchCountries());
                   };

                   fetchApi();
                 }, [setFetchedCountries]);
                 // console.log(fetchedCountries);
                 return (
                   <FormControl className={styles.container}>
                     <NativeSelect
                       defaultValue=""
                       onChange={(e) => handleCountryChange(e.target.value)}
                     >
                       <option value="">Global</option>
                       {fetchedCountries.map((country, i) => (
                         <option key={i} value={country}>
                           {country}
                         </option>
                       ))}
                     </NativeSelect>
                   </FormControl>
                 );
               }
