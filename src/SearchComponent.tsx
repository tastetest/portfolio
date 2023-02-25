import react from 'react';
// import './assets/Main.css';
import { Input, Space } from 'antd';

const {Search} = Input;

const SearchComponent = () => {
	// do some string comparison to match routes
	return (
		<Search placeholder='Search something, like "cd about" ' />	)
}

export default SearchComponent;
