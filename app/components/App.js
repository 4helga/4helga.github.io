import React from 'react'
import PurchaseButton from './PurchaseButton'
import ProductPage from './ProductPage'

// <PurchaseButton 
// 					ticketsLeft={this.state.ticketsLeft}
// 					ticketsTotal={this.state.ticketsTotal}
// />

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			ticketsLeft: 10,
			ticketsTotal: 100,
			isDataReady: false,
			backgroundPic: 'url',
			showModal: false
		}
	}

	handleClick = () => {
		this.setState({
			isDataReady: true
		})
	}

	render () {
	  if (!this.state.isDataReady) {
	  	return (
	  		<div onClick={this.handleClick}>
	  			<p>loading</p>
	  		</div>
	  	)
	  }

		return (
			<div>
				<ProductPage 
					ticketsLeft={this.state.ticketsLeft}
					ticketsTotal={this.state.ticketsTotal}
					howManyFucksToGive={'zero'}
				/>
			</div>
		)
	}
} 

export default App

