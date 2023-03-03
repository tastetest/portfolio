import react from 'react';
// import './assets/Main.css';
import { Input, Space } from 'antd';

const SearchComponent = () => {
	// do some string comparison to match routes
	const { Search } = Input;
	return (

		<Search
			placeholder="input search text"
			allowClear
			enterButton="Search"
			size="large"
		/>
	)
}
export default SearchComponent;
