import react from 'react';
// import './assets/Main.css';
import { Input, Space } from 'antd';

const SearchComponent = () => {
	// do some string comparison to match routes
	const { Search } = Input;
	return (

		<Search
			placeholder="type something like 'cd about'..."
			style={{ width: '50%' }}
			size="large"
		/>
	)
}
export default SearchComponent;
