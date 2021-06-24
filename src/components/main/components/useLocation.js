import { useState} from 'react';
import { APIKEY } from '../types';

const useLocation = (
    weatherByCityKey
) => {
    const [state, setState] = useState({
        userInput: '',
		formattedLocation: [],
		open: false
    });

    const {
        userInput,
        formattedLocation,
        open
    } = state;

    const debounce = (callback, wait) => {
        let timeout = null
        return (...args) => {
          const next = () => callback(...args)
          clearTimeout(timeout)
          timeout = setTimeout(next, wait)
        }
    }

    const checkApi = debounce((value) => {
		fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${value}&language=uk-UA`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				const formattedRes = res.map(
					(obj) => ({
                        Key: obj.Key,
                        LocalizedName: obj.LocalizedName,
                        Country: obj.Country.LocalizedName
					})
				);
				setState((state) => ({
                    ...state,
					formattedLocation: formattedRes
				}))
			});
	}, 300, true)

    const handleUserInput = (e) => {
		const userInput = e.target.value;
        setState( (state) => ({
            ...state,
            userInput
        }))

        if (userInput.length > 3 ) {
            checkApi(userInput);
        }
    }

  const handleUserClick = (key, localizedName) => () => {
  	weatherByCityKey(key, localizedName);

    console.log(key);

    setState( (state) => ({
        ...state,
  		open: !state.open
  	}))
  }

  const handleUserInputClick = () => {

  	setState( (state) => ({
        ...state,
  		open: state.open ? false : true
  	}))
  }

  return {
    handleUserInput,
    handleUserClick,
    handleUserInputClick,
    userInput,
    open,
    formattedLocation
  }


}

export default useLocation;