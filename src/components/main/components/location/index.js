import React, { Component, Fragment } from 'react';

class ChooseLocation extends Component {
	state = {
		formattedLocation: [],
		open: false
	}

	debounce = (callback, wait) => {
	  let timeout = null
	  return (...args) => {
	    const next = () => callback(...args)
	    clearTimeout(timeout)
	    timeout = setTimeout(next, wait)
	  }
	}

	checkApi = this.debounce((value) => {
		fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&q=${value}&language=uk-UA`)
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
				this.setState({
					formattedLocation: formattedRes
				})
			});
	}, 300, true)

	handleUserInput = (e) => {
		const userInput = e.target.value;
    this.setState({
      userInput
    })

    if (userInput.length > 3 ) {
    	this.checkApi(userInput);
    }
  }

  handleUserClick = (key, localizedName) => {
  	this.props.weatherByCityKey(key, localizedName);

  	const prevState = this.state.open;

  	this.setState({
      userInput: localizedName,
      open: prevState ? false : true
    })
  }

  handleUserInputClick = () => {
  	const prevState = this.state.open;

  	this.setState({
  		open: prevState ? false : true
  	})
  }

	render() {

    return (
			<Fragment>
				<div className='findlocation' role='search'>
					<input type="text" onChange={this.handleUserInput} onClick={this.handleUserInputClick} value={this.state.userInput} placeholder='шукати' autoFocus={true} />

					<div className={`chooselocation ${this.state.open ? '' : 'close'}`}>
						{this.state.formattedLocation.map(
							(obj) => (
								<p key={obj.Key} onClick={this.handleUserClick.bind(this, obj.Key, obj.LocalizedName)}>{obj.LocalizedName}, {obj.Country}</p>
							)
						)}
					</div>
				</div>
			</Fragment>
		);
  }
}

export default ChooseLocation;