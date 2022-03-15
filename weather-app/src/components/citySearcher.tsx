import React from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside'

const CitySearcher: React.FC = () => {
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  const ref = useOnclickOutside(() => {
    clearSuggestions()
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ( { description }: { description: string} ) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log("📍 Coordinates: ", { lat, lng });
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    };

  const renderSuggestions = () =>
    data.map(suggestion => (
      <li
        key={suggestion.place_id}
        onClick={handleSelect(suggestion)}
      >yeah</li>
    ))

  return (
    <div ref={ref}>
      <input value={value} onChange={handleInput} />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  )
}

export default CitySearcher;